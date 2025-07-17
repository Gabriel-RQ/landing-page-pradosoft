<script lang="ts">
  import type { Snippet } from "svelte";

  type CardProps = {
    children?: Snippet;
    class?: string;
  };

  let { children, class: className }: CardProps = $props();
</script>

<div
  class="glass flex flex-col gap-2 items-center justify-center rounded-lg p-2 {className}"
>
  {@render children?.()}
</div>
