<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
</script>

<button
    on:click={() => dispatch("generate")}
    class="float-right px-4 py-2 text-sm font-medium text-white shadow-md rounded-md bg-gradient-to-br from-red-400 to-rose-600 hover:from-rose-500 hover:to-rose-600 focus:outline focus:outline-1 focus:outline-red-500"
>
    Generate
</button>
