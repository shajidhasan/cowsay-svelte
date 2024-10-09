<script lang="ts">
  import { onMount } from "svelte";
  import { say } from "cowsay2";
  import { COW_FILES, COW_TEXT_WRAP } from "../data";
  import type { ColorScheme, Cow } from "../data";

  const WIDTH = 1000;
  const HEIGHT = 1000;
  const PADDING = 50;
  const BOTTOM_EXTRA = 2;
  const LINE_HEIGHT = 1.15;
  const FONT_SIZE = 10;
  const FONT_FACE = "IBM Plex Mono";
  let canvasFont = `500 ${FONT_SIZE}px "${FONT_FACE}"`;

  const resetCanvas = () => {
    canvas.height = HEIGHT;
    canvas.width = WIDTH;
  };

  export let canvas: HTMLCanvasElement;
  export let context: CanvasRenderingContext2D;

  export let text: string;
  export let colorScheme: ColorScheme;
  export let cow: Cow;

  const generate = () => {
    if (!text || !colorScheme || !cow) return;
    resetCanvas();
    let cowSay: string = say(text, {
      W: COW_TEXT_WRAP,
      cow: COW_FILES[cow],
    });

    let lines: string[] = cowSay.trimEnd().split("\n");
    let longestLine = lines.reduce(function (a, b) {
      return a.length > b.length ? a : b;
    });

    context.font = canvasFont;

    let textWidth = context.measureText(longestLine).width;
    let scaleFactor = (canvas.width - PADDING * 2) / textWidth;

    canvas.height =
      ((lines.length - 1) * FONT_SIZE * LINE_HEIGHT + BOTTOM_EXTRA) *
        scaleFactor +
      PADDING * 2;

    if (colorScheme.background.type === "solid") {
      context.fillStyle = colorScheme.background.color;
    } else {
      let gradient = context.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      gradient.addColorStop(0, colorScheme.background.gradient.from);
      gradient.addColorStop(1, colorScheme.background.gradient.to);
      context.fillStyle = gradient;
    }
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = canvasFont;
    context.scale(scaleFactor, scaleFactor);

    if (colorScheme.text.type === "solid") {
      context.fillStyle = colorScheme.text.color;
    } else {
      let gradient = context.createLinearGradient(
        0,
        0,
        canvas.width / scaleFactor,
        canvas.height / scaleFactor,
      );
      gradient.addColorStop(0, colorScheme.text.gradient.from);
      gradient.addColorStop(1, colorScheme.text.gradient.to);
      context.fillStyle = gradient;
    }

    for (let i = 0; i < lines.length; i++) {
      context.fillText(
        lines[i],
        PADDING / scaleFactor,
        PADDING / scaleFactor + FONT_SIZE * LINE_HEIGHT * i,
      );
    }
  };

  onMount(() => {
    context = canvas.getContext("2d");
  });

  $: {
    console.log(text);
    console.log(colorScheme);
    console.log(cow);
    generate();
  }
</script>

<canvas class="rounded-lg shadow bg-white w-full" bind:this={canvas} />
