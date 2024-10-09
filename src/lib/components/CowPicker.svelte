<script lang="ts">
  import { Select } from "bits-ui";
  import type { Selected } from "bits-ui";

  import { Check, PawPrint } from "lucide-svelte";
  import CaretUpDown from "./icons/CaretUpDown.svelte";

  import { flyAndScale } from "../utils";
  import type { Cow } from "../data";
  import { COWS } from "../data";

  export let cow: Cow = "cow";

  const cows = COWS.map((cow) => ({
    value: cow,
    label: cow,
  }));

  const onSelectedChange = (value: Selected<Cow>) => {
    cow = value.value;
  };
</script>

<div>
  <p class="text-gray-800 mb-1">Pick a character</p>

  <Select.Root {onSelectedChange} items={cows} selected={cows[0]}>
    <Select.Trigger
      class="flex items-center w-full py-2 px-3 text-left bg-white rounded-lg shadow-md cursor-default focus:outline focus:outline-1 focus:outline-rose-500"
      aria-label="Select a character"
    >
      <PawPrint class="mr-[9px] size-4 text-gray-600" />
      <Select.Value placeholder="Select a character" />
      <CaretUpDown class="ml-auto size-6 text-gray-600" />
    </Select.Trigger>
    <Select.Content
      class="w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 focus:outline-none"
      transition={flyAndScale}
      sideOffset={8}
    >
      {#each cows as cow_}
        <Select.Item
          let:isSelected
          value={cow_.value}
          label={cow_.label}
          class="hover:text-rose-900 hover:bg-rose-100 text-gray-900 flex items-center cursor-default select-none relative py-2 pr-4"
        >
          <Select.ItemIndicator asChild={false}>
            <Check class="size-5 mx-2" />
          </Select.ItemIndicator>
          <span class:ml-9={!isSelected}>
            {cow_.label}
          </span>
        </Select.Item>
      {/each}
    </Select.Content>
    <Select.Input name="favoriteFruit" />
  </Select.Root>
</div>
