<script lang="ts">
  import { MenuIcon, ExternalLinkIcon } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { Menu } from ".";

  const navOptions: { description: string; target: string }[] = [
    {
      description: "Início",
      target: "#home",
    },
    {
      description: "Serviços",
      target: "#servicos",
    },
    {
      description: "Parceiros",
      target: "#parceiros",
    },
    {
      description: "Sobre",
      target: "#sobre",
    },
    {
      description: "Contato",
      target: "#contato",
    },
  ];

  let showBackground = $state(false);
  let currentSection = $state("#home");
  let isMenuOpen = $state(false);

  onMount(() => {
    const currentSectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentSection = "#" + entry.target.id;
        }
      },
      {
        threshold: 0.6,
      }
    );

    const showBackgroundObserver = new IntersectionObserver(
      ([entry]) => {
        showBackground = !entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    navOptions.forEach((option) => {
      const target = document.querySelector(option.target);
      if (!target) return;
      currentSectionObserver.observe(target);
    });

    const homeSection = document.querySelector("#home");
    if (homeSection) showBackgroundObserver.observe(homeSection);

    return () => {
      showBackgroundObserver.disconnect();
      currentSectionObserver.disconnect();
    };
  });
</script>

<header
  class="fixed items-center justify-center grid grid-cols-2 xl:grid-cols-3 p-4 xl:pt-10 xl:px-5 2xl:px-[80px] w-full z-20 {showBackground
    ? 'bg-background/75'
    : null} transition-colors duration-500 ease-in"
>
  <a class="flex items-center select-none" href="#home">
    <img src="/prado.png" alt="Logo da Pradosoft" class="h-[84px]" />
    <h1 class="font-bold text-xl xl:text-2xl">Pradosoft</h1>
  </a>

  <nav class="hidden xl:inline">
    <ul class="flex gap-5 text-xl font-medium justify-center">
      {#each navOptions as { description, target } (target)}
        <li
          class="hover:text-secondary transition-colors {currentSection ===
          target
            ? 'text-foreground-dimmed'
            : null}"
        >
          <a href={target}>{description}</a>
        </li>
      {/each}
    </ul>
  </nav>

  <button
    class="xl:hidden place-self-start justify-self-end cursor-pointer"
    onclick={() => (isMenuOpen = true)}
  >
    <MenuIcon class="size-9" />
  </button>

  <a
    href="https://get.teamviewer.com/pradosoft"
    target="_blank"
    rel="noreferrer"
    class="cta hidden xl:flex items-center gap-1 px-3 py-2 h-fit w-fit justify-self-end"
  >
    Suporte
    <ExternalLinkIcon class="size-4" />
  </a>
</header>

<Menu bind:open={isMenuOpen} nav={navOptions} {currentSection} />
