import type {PageServerLoad} from './$types';

export const load: PageServerLoad = async ({url, params}) => {

    let skip = url.searchParams.get("skip")
    let limit = url.searchParams.get("limit")

    const fetchData = async () => {
        return await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(res => res.json());

    }

    const products = await fetchData();
    return {
        products: products,
        limit: products.limit,
        skip: products.skip,
        total: products.total

    }

};