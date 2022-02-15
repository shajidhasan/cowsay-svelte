<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./lib/routes";
  import "pattern.css/dist/pattern.min.css";
</script>

<div
  class="min-h-screen flex flex-col items-center justify-center bg-gray-200 pattern-cross-dots-xl text-gray-300"
>
  <Router {routes} />
</div>
