<section
  id="sobre"
  class="grid-system grid-rows-[repeat(3,auto)] relative *:z-10 *:col-span-full *:2xl:col-span-11"
>
  <h2 class="font-bold uppercase text-5xl xl:text-8xl xl:w-1/2">
    Somos a Pradosoft
  </h2>

  <h3
    class="font-semibold uppercase text-4xl xl:text-5xl 2xl:text-6xl text-foreground-dimmed xl:w-8/10"
  >
    Desde 1991 prestando soluções de <i>software</i> para empresas do Médio alto
    uruguai
  </h3>

  <p
    class="font-medium text-2xl xl:text-4xl 2xl:text-5xl text-foreground-dimmed"
  >
    Especializados em assessoria, planejamento e desenvolvimento de sistemas de
    computação, atendendo micro, pequenas e médias empresas
  </p>
</section>

<style>
  section::before {
    background: url("img/about-cover.png") no-repeat right center / cover;
    content: "";
    height: 100%;
    mask-image: linear-gradient(to right, transparent, black);
    opacity: 0.25;
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
    z-index: 0;

    @media screen and (min-width: 1280px) {
      width: 50%;
    }
  }
</style>
