<script lang="ts">


    import {goto} from "$app/navigation";
    import {page} from "$app/stores";

    export let prodcuts;
    export let categories;

    export let selectedCategory;

    let limit;


    let searchParam = "";

    function handleLimitChange() {
        goto(`/?limit=${limit}&skip=${$page.data.skip}`)
    }

    function handleCategoryChange() {
        goto(`/?category=${selectedCategory}`)
    }


    function handleSearch(searchparam: string) {
        goto(`/?searchparam=${searchparam}`)
    }

    function handleReset() {
        goto(`/?limit=${limit}&skip=${$page.data.skip}`)
    }


</script>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">

    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div class="flex flex-row gap-10">
            <div>
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
            <div>
                <label for="limit"
                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategorie</label>
                <select id="limit" bind:value={selectedCategory} on:change={handleCategoryChange}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="alle">Alle</option>
                    {#if categories}
                        {#each categories as category}
                            <option value="{category}">{category}</option>
                        {/each}
                    {/if}
                </select>
            </div>
        </div>
        <div>
            <label for="table-search" class="sr-only">Suche</label>
            <div class="relative flex flex-row gap-2">

                <input type="text" id="table-search"
                       class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Suche nach Produkten..." bind:value={searchParam}>
                <button type="button" on:click={()=>handleSearch(searchParam)}
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                    <span class="sr-only">Suche...</span>
                </button>
                <button type="button" on:click={()=>handleReset()}
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
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                Bild
            </th>
            <th scope="col" class="px-6 py-3">
                Titel
            </th>
            <th scope="col" class="px-6 py-3">
                Beschreibung
            </th>
            <th scope="col" class="px-6 py-3">
                Preis
            </th>
        </tr>
        </thead>
        <tbody>
        {#each prodcuts as item}
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="rounded-full w-12 h-12" src="{item.thumbnail}" alt="image description">
                </th>
                <td class="px-6 py-4">
                    {item.title}
                </td>
                <td class="px-6 py-4">
                    {item.description}
                </td>
                <td class="px-6 py-4">
                    {item.price} $
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
