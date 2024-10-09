<script lang="ts">
  import { saveAs } from "file-saver";
  import { Download } from "lucide-svelte";
  export let canvas: HTMLCanvasElement;

  const randomString = (length: number) => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const download = () => {
    console.log("Hehe");
    canvas.toBlob((blob) => {
      saveAs(blob, `cowsay_${randomString(3)}.png`);
    });
  };
</script>

<button
  on:click={download}
  class="text-white px-4 py-2 rounded-md gap-2 inline-flex items-center text-sm font-medium shadow-md bg-black opacity-50 hover:opacity-60 focus:outline focus:outline-1 focus:outline-red-500"
>
  <Download class="size-4" />
  <span>Download</span>
</button>
