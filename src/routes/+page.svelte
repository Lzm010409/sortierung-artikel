<script lang="ts">

    import {page} from "$app/stores";
    import Table from "$lib/table/Table.svelte";
    import Paginator from "$lib/table/Paginator.svelte";
    import Card from "$lib/Card.svelte";
    import {goto} from "$app/navigation";
    import {redirect} from "@sveltejs/kit";

    export let data;


    let products = data.products.products;
    $: products = data.products.products;

    let categories = data.categories;
    $: categories = data.categories;

    let limit = data.limit
    $: limit = data.limit

    let skip = data.skip;
    $: skip = data.skip

    let total = data.total;
    $: total = data.total


</script>
<Card>

    <Table prodcuts="{products}" categories="{categories}"></Table>
    <Paginator rootPath="/" {skip} {limit} {total}></Paginator>

</Card>
