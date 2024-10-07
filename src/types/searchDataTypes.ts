export default interface SearchDataTypes {
    "captcha-status-code": number,
    "captcha-time": any,
    "scraping-time": any,
    "products-count": number,
    "asins": string[],
    "field-names": string[],
    "products": {
        "asin": string,
        "title": string,
        "price": string,
        "image_url": string
    }[]
}