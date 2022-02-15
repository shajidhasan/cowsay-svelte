<script lang="ts">
  export let value: string = "";
</script>

<div>
  <p class="text-gray-800 mb-1">Enter text</p>
  <input
    class="w-full border-none p-2 text-left text-gray-700 bg-white rounded-lg shadow-md focus:border-red-500 focus:ring-red-500 placeholder:text-gray-400"
    type="text"
    placeholder="Ex: Hello, world!"
    bind:value
  />
</div>
