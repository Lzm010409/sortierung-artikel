import type {PageServerLoad} from './$types';
import {filterStore} from "$lib/stores/FilterStore";

export const load: PageServerLoad = async ({url, params}) => {

    let skip = url.searchParams.get("skip")
    let limit = url.searchParams.get("limit")
    let search = url.searchParams.get("searchparam");
    let category = url.searchParams.get("category");
    let priceVon = url.searchParams.get("pricevon");
    let priceBis = url.searchParams.get("pricebis");

    let searchUrl = `https://product-api-9566dd903a0b.herokuapp.com/api/v1/product`


    let productFilter = []
    productFilter.push("title=" + search, "category=" + category, "pricefrom=" + priceVon, "priceto=" + priceBis, "pageSize=" + limit, "pageNo=" + skip);

    let effectiveFilter = productFilter.filter((filtervalues) => !filtervalues.includes("null"))
    searchUrl = searchUrl + "?" + effectiveFilter.join("&")
    console.log(searchUrl)
    const fetchData = async () => {
        return await fetch(searchUrl)
            .then(res => res.json());

    }
    const fetchCategories = async () => {
        return await fetch('https://product-api-9566dd903a0b.herokuapp.com/api/v1/category')
            .then(res => res.json());

    }

    const products = await fetchData();
    const categories = await fetchCategories();
    console.log(products)
    return {
        products: products.data,
        categories: categories.data,
        limit: limit,
        search: search,
        priceVon: priceVon,
        priceBis: priceBis,
        category: category


    }

};