<script lang="ts">
    export let rootPath;

    export let limit;

    export let skip;

    export let total;


</script>

{#if rootPath }
    <nav class="flex items-center flex-column flex-wrap md:flex-row  pt-4 justify-center align-middle"
         aria-label="Table navigation">
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            {#if Number(skip - limit) > 0}
                <li>
                    <a href="{rootPath}?limit={Number(limit)}&skip={Number(skip-limit)}"
                       class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Vorher
                    </a>
                </li>
            {/if}
            {#if Number(skip - limit*2) > 0}
                <li>
                    <a href="{rootPath}?limit={Number(limit)}&skip={Number(skip-limit*2)}"
                       class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip - limit*2)}
                    </a>
                </li>
            {/if}
            {#if Number(skip - limit) > 0}
                <li>
                    <a href="{rootPath}?limit={Number(limit)}&skip={Number(skip-limit)}"
                       class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip - limit)}
                    </a>
                </li>
            {/if}
            <li>
                <a aria-current="page" href="{rootPath}?limit={Number(limit)}&skip={Number(skip)}"
                   class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                    {Number(skip)}
                </a>
            </li>
            {#if Number(skip + limit) < Number(total)}
                <li>
                    <a href="{rootPath}?limit={Number(limit)}&skip={Number(skip+limit)}"
                       class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip + limit)}
                    </a>
                </li>
            {/if}
            {#if Number(skip + limit*2) < Number(total)}
                <li>
                    <a href="{rootPath}?limit={Number(limit)}&skip={Number(skip+limit*2)}"
                       class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip + limit*2)}
                    </a>
                </li>
            {/if}
            {#if Number(skip + limit) < Number(total)}
                <li>
                    <a href="{rootPath}?limit={Number(limit)}&skip={Number(skip+limit)}"
                       class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Nächste
                    </a>
                </li>
            {/if}
        </ul>
    </nav>

{/if}