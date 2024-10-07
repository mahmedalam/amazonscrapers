from time import time
from fastapi import FastAPI
from api.scraper import captcha, data_to_csv, get, scrape_search


### Create FastAPI instance with custom docs and openapi url
app = FastAPI(docs_url="/api/py/docs", openapi_url="/api/py/openapi.json")


@app.get("/api/py/")
def index():
    return {"message": "Hello from FastAPI"}


@app.get("/api/py/search")
def search(k: str):
    captcha_time_start = time()
    captcha_response = captcha()
    captcha_time_end = time()

    if captcha_response.status_code == 200:
        scraping_time_start = time()
        products = scrape_search(get("https://www.amazon.com/s", {"k": k}).text)
        scraping_time_end = time()

        return {
            "captcha-status-code": captcha_response.status_code,
            "captcha-time": float(f"{captcha_time_end - captcha_time_start:.2f}"),
            "scraping-time": float(f"{scraping_time_end - scraping_time_start:.2f}"),
            "products-count": len(products),
            "products": products,
            "csv": data_to_csv(["asin", "title", "price", "image_url"], products),
        }

    return {"captcha-status-code": captcha_response.status_code}
