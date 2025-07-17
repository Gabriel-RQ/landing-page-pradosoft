<script lang="ts">
  import { XIcon } from "@lucide/svelte";
  import { cubicOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  type MenuProps = {
    open: boolean;
    nav: { description: string; target: string }[];
    currentSection: string;
  };

  let { open = $bindable(false), nav, currentSection }: MenuProps = $props();
</script>

{#if open}
  <section
    class="fixed inset-0 bg-background py-5 px-4 grid grid-rows-[auto_1fr_auto] grid-cols-1 z-50"
    transition:slide={{ axis: "x", easing: cubicOut }}
  >
    <button onclick={() => (open = false)}>
      <XIcon class="size-9 justify-self-end" />
    </button>

    <nav class="text-center m-auto">
      <ul class="flex flex-col gap-5 text-4xl font-medium justify-center">
        {#each nav as { description, target } (target)}
          <li
            class="hover:text-secondary transition-colors {currentSection ===
            target
              ? 'text-foreground-dimmed'
              : null}"
          >
            <a href={target} onclick={() => (open = false)}>{description}</a>
          </li>
        {/each}
      </ul>
    </nav>

    <div class="text-center space-y-4">
      <p>Nossas redes sociais</p>
      <div class="flex gap-6 justify-self-center">
        <a
          href="https://www.instagram.com/pradosoftsistemas/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <i id="instagram" class="icon"></i>
        </a>

        <a
          href="https://wa.me/5555996860397"
          target="_blank"
          rel="noreferrer"
          aria-label="Whatsapp"
        >
          <i id="whatsapp" class="icon"></i>
        </a>
      </div>
    </div>
  </section>
{/if}
