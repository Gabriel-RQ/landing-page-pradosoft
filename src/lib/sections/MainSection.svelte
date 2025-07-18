<script lang="ts">
  import { typewriter } from "$lib";
  import { CircleChevronDown } from "@lucide/svelte";

  const messages = [
    "Comércio",
    "Indústria",
    "Mercados",
    "Transportadoras",
    "Lojas",
  ];

  let currentMessageIndex = $state(0);
  const timeout = 2500;

  setInterval(() => {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  }, timeout);
</script>

<section id="home" class="grid-system grid-rows-12 h-[1dvh] relative *:z-10">
  <div
    class="col-span-full xl:col-span-6 xl:col-start-2 2xl:col-span-10 2xl:col-start-2 row-start-4 row-span-3"
  >
    <h2
      class="font-bold text-5xl xl:text-7xl 2xl:text-8xl uppercase text-balance wrap-anywhere xl:wrap-normal mb-11"
    >
      Soluções tecnológicas para sua empresa
    </h2>

    {#key currentMessageIndex}
      <h3
        class="font-medium text-4xl xl:text-5xl 2xl:text-6xl text-foreground-dimmed"
        in:typewriter
      >
        {messages[currentMessageIndex]}
      </h3>
    {/key}
  </div>

  <div
    class="flex flex-col gap-12 col-span-full xl:col-span-2 xl:col-start-4 2xl:col-span-4 2xl:col-start-5 mb-5 items-center -row-start-1"
  >
    <a href="#servicos" class="cta w-full">Conheça nosso trabalho</a>
    <CircleChevronDown class="size-12 animate-bounce" />
  </div>
</section>

<style>
  section::before {
    background: url("img/main-cover.png") no-repeat 30% 50% / cover;
    content: "";
    inset: 0;
    opacity: 0.25;
    position: absolute;
    z-index: 0;

    @media screen and (min-width: 1280px) {
      background-position: center;
    }
  }
</style>
