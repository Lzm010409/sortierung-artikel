<script lang="ts">


    import {page} from "$app/stores";

    export let rootPath;

    export let pageNo;

    export let maxNumberOfPages;

    export let limit;


    function returnNewLink(pageNo, limit) {
        $page.url.searchParams.set("skip", pageNo)
        if (limit !== null) {
            $page.url.searchParams.set("limit", limit)
        }
        return $page.url.href
    }


</script>

{#if rootPath }
    <nav class="flex items-center flex-column flex-wrap md:flex-row  pt-4 justify-center align-middle"
         aria-label="Table navigation">
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            {#if Number(pageNo) - 1 > 0}
                <li>
                    <a href='{returnNewLink(Number(pageNo)-1, limit)}'
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Vorher
                    </a>
                </li>
            {/if}
            {#if Number(pageNo) - 2 > 0}
                <li>
                    <a href="{returnNewLink(Number(pageNo)-2, limit)}"
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(pageNo) - 2}
                    </a>
                </li>
            {/if}
            {#if Number(pageNo) - 1 > 0}
                <li>
                    <a href="{returnNewLink(Number(pageNo)-1, limit)}"
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(pageNo) - 1}
                    </a>
                </li>
            {/if}
            <li>
                <a href="{returnNewLink(Number(pageNo), limit)}"
                   class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    {Number(pageNo)}
                </a>
            </li>
            {#if Number(pageNo) + 1 < Number(maxNumberOfPages)}
                <li>
                    <a href="{returnNewLink(Number(pageNo)+1, limit)}"
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(pageNo) + 1 }
                    </a>
                </li>
            {/if}
            {#if Number(pageNo) + 2 < Number(maxNumberOfPages)}
                <li>
                    <a href="{returnNewLink(Number(pageNo)+2, limit)}"
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(pageNo) + 2}
                    </a>
                </li>
            {/if}
            {#if Number(pageNo) + 1 < Number(maxNumberOfPages)}
                <li>
                    <a href="{returnNewLink(Number(pageNo)+1, limit)}"
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Nächste
                    </a>
                </li>
            {/if}
        </ul>
    </nav>

{/if}