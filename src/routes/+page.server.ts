import type {PageServerLoad} from './$types';
import {filterStore} from "$lib/stores/FilterStore";

export const load: PageServerLoad = async ({url, params}) => {

    let skip = url.searchParams.get("skip")
    let limit = url.searchParams.get("limit")
    let search = url.searchParams.get("searchparam");
    let category = url.searchParams.get("category");
    let priceVon = url.searchParams.get("pricevon");
    let priceBis = url.searchParams.get("pricebis");

    let searchUrl = `https://api.escuelajs.co/api/v1/products`
    let productFilter = []
    productFilter.push("title=" + search, "category=" + category, "price_min=" + priceVon, "price_max=" + priceBis, "limit=" + limit, "offset=" + skip);

    let effectiveFilter = productFilter.filter((filtervalues) => !filtervalues.includes("null"))
    searchUrl = searchUrl + "?" + effectiveFilter.join("&")
    console.log(searchUrl)
    const fetchData = async () => {
        return await fetch(searchUrl)
            .then(res => res.json());

    }
    const fetchCategories = async () => {
        return await fetch('https://api.escuelajs.co/api/v1/categories')
            .then(res => res.json());

    }

    const products = await fetchData();
    const categories = await fetchCategories();
    console.log(categories)
    return {
        products: products,
        categories: categories,
        limit: limit,
        skip: skip,
        total: 50,
        search: search,
        priceVon: priceVon,
        priceBis: priceBis,
        category: category


    }

};