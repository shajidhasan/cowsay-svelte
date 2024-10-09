<script lang="ts">
  import { RadioGroup } from "bits-ui";

  import { COLOR_SCHEMES } from "../data";
  import type { ColorScheme } from "../data";

  export let colorScheme: ColorScheme = null;

  if (colorScheme === null) {
    colorScheme = COLOR_SCHEMES[0];
  }

  const onValueChange = (value: string) => {
    colorScheme = COLOR_SCHEMES.find((scheme) => scheme.name === value);
  };
</script>

<div>
  <p class="text-gray-800 mb-1">Pick a color scheme</p>

  <RadioGroup.Root
    class="flex flex-row flex-wrap gap-2"
    value={colorScheme.name}
    {onValueChange}
  >
    {#each COLOR_SCHEMES as scheme}
      <RadioGroup.Item
        class="hover:outline outline-1 outline-rose-500 data-[state=checked]:bg-rose-400 bg-white/10 rounded-lg shadow-md p-1"
        value={scheme.name}
      >
        <div
          title={scheme.label}
          class={"w-10 h-10 flex items-center justify-center rounded-lg" +
            " " +
            scheme.background.cssClass}
          class:border-red-200={scheme === colorScheme}
        >
          <div class={"w-5 h-5 rounded-lg" + " " + scheme.text.cssClass} />
        </div>
      </RadioGroup.Item>
    {/each}
  </RadioGroup.Root>
</div>
