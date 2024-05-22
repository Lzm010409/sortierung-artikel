<script lang="ts">

    import {page} from "$app/stores";
    import Table from "$lib/table/Table.svelte";
    import Paginator from "$lib/table/Paginator.svelte";
    import Card from "$lib/Card.svelte";
    import {filterStore} from "$lib/stores/FilterStore"
    import SearchBar from "$lib/table/SearchBar.svelte";

    export let data;


    let products = data.products;
    $: products = data.products;

    let categories = data.categories;
    $: categories = data.categories;

    let limit = data.limit;
    $: limit = data.limit

    let skip = data.skip;
    $: skip = data.skip
    let total = data.total;
    $: total = data.total


    let priceVon = data.priceVon;
    $: priceVon = data.priceVon
    let priceBis = data.priceBis;
    $: priceBis = data.priceBis
    let selectedCategory = data.category;
    $: selectedCategory = data.category
    let searchParam = data.search;
    $: searchParam = data.search




</script>
<Card>
    <SearchBar categories="{categories}" {priceVon} {priceBis} {selectedCategory} {limit} {skip}
               {searchParam}></SearchBar>
    <Table prodcuts="{products}"></Table>
    <Paginator rootPath="/" {skip} {limit} {total}></Paginator>

</Card>
