from rich import print
from amazoncaptcha import AmazonCaptcha
from fake_useragent import UserAgent
from selectolax.parser import HTMLParser
from httpx import Response
import httpx
import csv
import io


HEADERS = {"User-Agent": UserAgent().random}
CLIENT = httpx.Client()


def get(
    url: str, params: dict | None = None, headers: dict | None = HEADERS
) -> Response:
    response = CLIENT.get(
        url=url, params=params, headers=headers, follow_redirects=True
    )
    print(response.status_code)
    print(dict(response.cookies))

    return response


def captcha():
    html = get("https://amazon.com/errors/validateCaptcha").text
    form = HTMLParser(html).css_first("form")

    captcha_inputs = form.css("input[type='hidden']")
    captcha_image = form.css_first("img").attrs["src"]

    captcha_inputs = {
        captcha_input.attrs["name"]: captcha_input.attrs["value"]
        for captcha_input in captcha_inputs
    }

    response_image = get(url=captcha_image).content

    captcha_solution = AmazonCaptcha(io.BytesIO(response_image)).solve()
    captcha_inputs["field-keywords"] = captcha_solution

    response = get(f"https://amazon.com/errors/validateCaptcha", params=captcha_inputs)

    return response


def scrape(html: str) -> dict:
    parser = HTMLParser(html)

    try:
        title = parser.css_first("#productTitle").text().strip()
    except:
        title = None
    try:
        price = parser.css_first("span.a-price span.a-offscreen").text().strip()
    except:
        price = None
    try:
        image_url = parser.css_first("#landingImage").attrs["src"]
    except:
        image_url = None

    return {"title": title, "price": price, "image_url": image_url}


def scrape_search(html: str) -> list:
    parser = HTMLParser(html)

    products = parser.css("div[data-asin]")

    products_data = []

    for product in products:
        asin = product.attrs["data-asin"]

        if not asin:
            continue

        title = product.css_first("h2").text().strip()

        try:
            price = product.css_first(".a-offscreen").text().strip()
        except:
            price = None

        image_url = product.css_first("img").attrs["src"].split(".")
        image_url[-2] = "_AC_UY218_QL70_"
        image_url = ".".join(image_url)

        products_data.append(
            {"asin": asin, "title": title, "price": price, "image_url": image_url}
        )

    return products_data


def data_to_csv(field_names: list, products: list) -> str:
    csv_file = io.StringIO(newline="")
    writer = csv.DictWriter(csv_file, fieldnames=field_names)
    writer.writeheader()
    writer.writerows(products)

    return csv_file.getvalue()


if __name__ == "__main__":
    captcha()
    results = scrape_search(get("https://www.amazon.com/s", {"k": "led+tv"}).text)

    csv_file = io.StringIO(newline="")
    field_names = ["asin", "title", "price", "image_url"]
    writer = csv.DictWriter(csv_file, fieldnames=field_names)
    writer.writeheader()
    writer.writerows(results)

    print(csv_file.getvalue())
