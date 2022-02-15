<script lang="ts">
  import { saveAs } from "file-saver";
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
  class="text-white px-4 py-2 rounded-md inline-flex items-center text-sm font-medium shadow-md bg-black opacity-50 hover:opacity-60 focus:outline focus:outline-1 focus:outline-red-500"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="mr-1 h-5 w-5 text-white"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
      clip-rule="evenodd"
    />
  </svg>
  <span>Download</span>
</button>
