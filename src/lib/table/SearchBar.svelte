<script lang="ts">

    import {goto} from "$app/navigation";
    import {page} from "$app/stores";
    import {filterStore} from "$lib/stores/FilterStore";

    export let priceVon;
    export let priceBis;

    export let limit;
    export let categories;

    export let selectedCategory;

    export let searchParam = "";

    function handleLimitChange() {
        $page.url.searchParams.set("limit", limit)
        console.log($page.url.href)
        goto($page.url.href, {
            invalidateAll: true
        })
    }

    $: console.log(priceVon)

    function handleFilterRequest() {
        if (selectedCategory != null && selectedCategory != 'alle') {
            $page.url.searchParams.set("category", selectedCategory)
        }
        if (priceVon) {
            $page.url.searchParams.set("pricevon", priceVon)
        }
        if (priceBis) {
            $page.url.searchParams.set("pricebis", priceBis)
        }
        if (searchParam) {
            $page.url.searchParams.set("searchparam", searchParam)
        }
        console.log($page.url.href)
        goto($page.url.href, {
            invalidateAll: true
        })
    }


    function handleReset() {
        $page.url.searchParams.delete("searchparam")
        $page.url.searchParams.delete("pricevon")
        $page.url.searchParams.delete("pricebis")
        $page.url.searchParams.delete("category")
        console.log($page.url.href)
        goto($page.url.href, {
            invalidateAll: true
        })
    }
</script>

<div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 relative z-0">
    <div class="flex flex-row gap-10 basis-2/3">
        <div class="basis-1/4">
            <label for="limit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Limit
                einstellen</label>
            <select id="limit" bind:value={limit} on:change={handleLimitChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>
        <div class="flex flex-row gap-2 basis-3/4 justify-evenly">
            <div class="basis-1/6">
                <label for="category"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategorie</label>
                <select id="category" bind:value={selectedCategory}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="alle">Alle</option>
                    {#if categories}
                        {#each categories as category}
                            <option value="{category.name}">{category.name}</option>
                        {/each}
                    {/if}
                </select>
            </div>
            <div class="basis-5/6">
                <div class="flex flex-row gap-2">
                    <div class="relative mb-6 basis-1/2">
                        <label for="preisVon"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preis von:</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </div>
                            <input type="number" bind:value="{priceVon}" id="preisVon"
                                   class="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                   placeholder="Von..."/>
                        </div>
                    </div>
                    <div class="relative mb-6 basis-1/2">
                        <label for="preisBis"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preis bis:</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                                </svg>
                            </div>
                            <input type="number" bind:value="{priceBis}" id="preisVon"
                                   class="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                   placeholder="Bis..."/>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </div>

    <div class=" basis-1/3 flex justify-end">
        <label for="table-search" class="sr-only">Suche</label>
        <div class="relative flex flex-row gap-2">

            <input type="text" id="table-search"
                   class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder="Suche nach Produkten..." bind:value={searchParam}>
            <button type="button" on:click={handleFilterRequest}
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
                <span class="sr-only">Suche...</span>
            </button>
            <button type="button" on:click={handleReset}
                    class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>

                <span class="sr-only">Suche...</span>
            </button>
        </div>
    </div>
</div>