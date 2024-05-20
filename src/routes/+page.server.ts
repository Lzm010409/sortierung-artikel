import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({url, params}) => {

    let skip = url.searchParams.get("skip")
    let limit = url.searchParams.get("limit")
    let search = url.searchParams.get("searchparam");
    let category = url.searchParams.get("category");

    if (!limit) {
        limit = 10;
    }
    if (!skip) {
        skip = 0;
    }

    let searchUrl;
    if (search && (!category || category == 'alle')) {
        searchUrl = `https://dummyjson.com/products/search?q=${search}`
    } else if (!search && category && category != 'alle') {
        searchUrl = `https://dummyjson.com/products/category/${category}`
    } else {
        searchUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    }

    const fetchData = async () => {
        return await fetch(searchUrl)
            .then(res => res.json());

    }
    const fetchCategories = async () => {
        return await fetch('https://dummyjson.com/products/categories')
            .then(res => res.json());

    }

    const products = await fetchData();
    const categories = await fetchCategories();
    return {
        products: products,
        limit: products.limit,
        skip: products.skip,
        total: products.total,
        categories: categories

    }

};