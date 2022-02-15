<script lang="ts">
  import { RadioGroup, RadioGroupOption } from "@rgossiaux/svelte-headlessui";

  import { COLOR_SCHEMES } from "../data";
  import type { ColorScheme } from "../data";

  export let selectedScheme: ColorScheme = null;
  if (selectedScheme === null) {
    selectedScheme = COLOR_SCHEMES[0];
  }

  const setSelected = (e: { detail: ColorScheme }) => {
    selectedScheme = e.detail;
  };
</script>

<div>
  <p class="text-gray-800 mb-1">Pick a color scheme</p>

  <RadioGroup
    value={selectedScheme}
    on:change={setSelected}
    class="flex flex-row flex-wrap gap-2"
  >
    {#each COLOR_SCHEMES as scheme, index (index)}
      <RadioGroupOption
        value={scheme}
        let:active
        let:checked
        class={({ active, checked }) =>
          `${active ? "outline outline-1 outline-rose-500" : ""} ${
            checked ? "bg-rose-400" : "bg-white/10"
          } rounded-lg shadow-md p-1`}
      >
        <div
          class={"w-10 h-10 flex  items-center justify-center rounded-lg" +
            " " +
            scheme.background.cssClass}
          class:border-red-200={scheme === selectedScheme}
        >
          <div class={"w-5 h-5 rounded-lg" + " " + scheme.text.cssClass} />
        </div>
      </RadioGroupOption>
    {/each}
  </RadioGroup>
</div>
