import {writable} from "svelte/store";

export const filterStore = writable({
    searchParam: "",
    priceVon: "",
    priceBis: "",
    selectedCategory: "alle"
})