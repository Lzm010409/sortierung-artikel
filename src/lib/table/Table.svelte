<script lang="ts">


    import {goto} from "$app/navigation";
    import {page} from "$app/stores";
    import Card from "$lib/Card.svelte";

    export let prodcuts;


    let filterMenuVisible = true;


    function handleVisibilityChange() {
        filterMenuVisible = !filterMenuVisible
        console.log(filterMenuVisible)
    }


</script>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg z-0">

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
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
