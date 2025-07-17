<script>
  import { Header } from "$lib/components";
  import { CircleChevronDown } from "@lucide/svelte";
</script>

<section
  id="home"
  class="grid-system grid-rows-[auto_1fr] relative size-full *:z-10"
>
  <Header />

  <div
    class="col-span-full xl:col-span-6 xl:col-start-2 2xl:col-span-10 2xl:col-start-2"
  >
    <h2
      class="font-bold text-5xl xl:text-7xl 2xl:text-8xl uppercase text-balance wrap-anywhere xl:wrap-normal mb-11"
    >
      Soluções tecnológicas para sua empresa
    </h2>

    <h3
      class="font-medium text-4xl xl:text-5xl 2xl:text-6xl text-foreground-dimmed"
    >
      Comércio
    </h3>
  </div>

  <div
    class="flex flex-col gap-12 col-span-full xl:col-span-2 xl:col-start-4 2xl:col-span-4 2xl:col-start-5 mb-5 items-center"
  >
    <button class="cta w-full">Conheça nosso trabalho</button>
    <CircleChevronDown class="size-12 animate-bounce" />
  </div>
</section>

<style>
  section::before {
    background: url("main-cover.png") no-repeat 30% 50% / cover;
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
