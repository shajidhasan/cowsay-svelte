<script lang="ts">
  import TextInput from "../components/TextInput.svelte";
  import CowPicker from "../components/CowPicker.svelte";
  import ColorSchemePicker from "../components/ColorSchemePicker.svelte";
  import DownloadButton from "../components/DownloadButton.svelte";
  import CopyButton from "../components/CopyButton.svelte";
  import GenerateButton from "../components/GenerateButton.svelte";
  import CowCanvas from "../components/CowCanvas.svelte";

  import type { ColorScheme, Cow } from "../data";

  let canvas: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;

  let text: string, cow: Cow, colorScheme: ColorScheme;
  let _text: string, _cow: Cow, _colorScheme: ColorScheme;

  const generate = () => {
    text = _text;
    cow = _cow;
    colorScheme = _colorScheme;
  };
</script>

<h1 class="font-mono text-4xl text-gray-600 mb-4 md:mb-8 font-medium">
  {"<cowsay>"}
</h1>

<div
  class="w-full flex flex-col md:flex-row space-y-4 justify-center items-center md:space-x-8 md:space-y-0 text-gray-900"
>
  <div class="w-full p-4 md:p-0 md:w-80 lg:w-96 space-y-3">
    <TextInput bind:value={_text} />
    <CowPicker bind:selectedCow={_cow} />
    <ColorSchemePicker bind:selectedScheme={_colorScheme} />
    <GenerateButton on:generate={generate} />
  </div>
  <div class="w-full p-4 md:p-0 md:w-80 lg:w-96 space-y-3">
    <div class="flex flex-row justify-end space-x-2">
      <DownloadButton {canvas} />
      <CopyButton {canvas} {text} {cow} />
    </div>
    <CowCanvas bind:canvas bind:context {text} {colorScheme} {cow} />
  </div>
</div>

<div class="mt-4 md:mt-8 flex flex-row items-center space-x-4">
  <a
    class="text-rose-500 underline"
    href="https://github.com/shajidhasan/cowsay-svelte"
    rel="nofollow"
    target="_blank"
  >
    GitHub
  </a>
</div>
