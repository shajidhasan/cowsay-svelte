<script lang="ts">
  import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Transition,
  } from "@rgossiaux/svelte-headlessui";
  import { COWS } from "../data";
  import type { Cow } from "../data";

  export let selectedCow: Cow = "cow";

  const setCow = (e: { detail: string }) => {
    selectedCow = e.detail as Cow;
  };
</script>

<div>
  <p class="text-gray-800 mb-1">Pick your character</p>
  <Listbox value={selectedCow} on:change={setCow}>
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline focus:outline-1 focus:outline-rose-500"
      >
        <span class="block truncate">{selectedCow}</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </ListboxButton>
      <div class="absolute w-full z-20">
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            class="w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 focus:outline-none"
          >
            {#each COWS as cow, index (index)}
              <ListboxOption
                let:selected
                let:active
                value={cow}
                class={({ active }) => ` ${
                  active ? "text-rose-900 bg-rose-100" : "text-gray-900"
                }
        cursor-default select-none relative py-2 pl-10 pr-4`}
              >
                <span
                  class:font-medium={selected}
                  class:font-normal={selected}
                  class="block truncate"
                >
                  {cow}
                </span>
                {#if selected}
                  <span
                    class:text-rose-600={active}
                    class="absolute inset-y-0 left-0 flex items-center pl-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                {/if}
              </ListboxOption>
            {/each}
          </ListboxOptions>
        </Transition>
      </div>
    </div>
  </Listbox>
</div>
