<script lang="ts">

    import {page} from "$app/stores"
    import {goto} from "$app/navigation";
    import {redirect} from "@sveltejs/kit";

    export let rootPath;

    export let limit;

    export let skip;

    export let total;


    function redirectTo(skip) {
        $page.url.searchParams.set("skip", skip)
        goto($page.url.href,
            {
                invalidateAll: true
            }
        )
    }

</script>

{#if rootPath }
    <nav class="flex items-center flex-column flex-wrap md:flex-row  pt-4 justify-center align-middle"
         aria-label="Table navigation">
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            {#if Number(skip) - Number(limit) >= 0}
                <li>
                    <button on:click={()=>redirectTo(Number(skip)-Number(limit))
                    } type="button"
                            class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Vorher
                    </button>
                </li>
            {/if}
            {#if Number(skip) - Number(limit) * 2 > 0}
                <li>
                    <button on:click={()=>redirectTo(Number(skip) - Number(limit) * 2)
                    } type="button"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip) - Number(limit) * 2 }
                    </button>
                </li>
            {/if}
            {#if Number(skip) - Number(limit) > 0}
                <li>
                    <button on:click={()=>redirectTo(Number(skip) - Number(limit))
                    } type="button"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip) - Number(limit)}
                    </button>
                </li>
            {/if}
            <li>
                <button on:click={()=>redirectTo(Number(skip))
                    } type="button"
                        class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                    {Number(skip)}
                </button>
            </li>
            {#if Number(skip) + Number(limit) < Number(total)}
                <li>
                    <button on:click={()=>redirectTo(Number(limit)+Number(skip))
                    } type="button"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip) + Number(limit)}
                    </button>
                </li>
            {/if}
            {#if Number(skip) + Number(limit) * 2 < Number(total)}
                <li>
                    <button on:click={()=>redirectTo(Number(skip) + Number(limit) * 2)
                    } type="button"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        {Number(skip) + Number(limit) * 2}
                    </button>
                </li>
            {/if}
            {#if Number(skip) + Number(limit) < Number(total)}
                <li>
                    <button on:click={()=>
                            redirectTo(Number(limit)+Number(skip))

                    } type="button"
                            class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Nächste
                    </button>
                </li>
            {/if}
        </ul>
    </nav>

{/if}