<script lang="ts">
  import { MenuIcon, ExternalLinkIcon } from "@lucide/svelte";
</script>

<header class="sticky flex col-span-full h-fit items-center justify-between">
  <a class="flex items-center select-none" href="#home">
    <img src="/prado.png" alt="Logo da Pradosoft" class="h-[84px]" />
    <h1 class="font-bold text-xl">Pradosoft</h1>
  </a>

  <nav class="hidden xl:block">
    <ul class="flex gap-5 text-xl font-medium">
      <li>
        <a href="#home">Início</a>
      </li>
      <li>
        <a href="#servicos">Serviços</a>
      </li>
      <li>
        <a href="#parceiros">Parceiros</a>
      </li>
      <li>
        <a href="#sobre">Sobre</a>
      </li>
      <li>
        <a href="#contato">Contato</a>
      </li>
    </ul>
  </nav>

  <button class="xl:hidden">
    <MenuIcon class="size-9" />
  </button>

  <button class="cta hidden xl:flex items-center gap-1 px-3 py-2 h-fit w-fit">
    Suporte
    <ExternalLinkIcon class="size-4" />
  </button>
</header>
