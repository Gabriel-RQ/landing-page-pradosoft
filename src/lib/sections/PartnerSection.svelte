<script lang="ts">
  import { Card } from "$lib/components";

  const partners = [
    "/img/partners/logo_abes.webp",
    "/img/partners/logo_bonfanti.webp",
    "/img/partners/logo_lojaesportes.webp",
    "/img/partners/logo_piovesan.webp",
    "/img/partners/logo_trevisol.webp",
    "/img/partners/logo_cruzazul.webp",
  ];

  const partnersSmall = [
    "/img/partners/logo_centenaria.webp",
    "/img/partners/logo_silva.webp",
    "/img/partners/logo_centertoy.webp",
    "/img/partners/logo_agapel.webp",
    "/img/partners/logo_dipesca.webp",
    "/img/partners/logo_kelly.webp",
  ];

  const otherPartners = [
    "Relojoaria Barrea",
    "Ervateira Realeza",
    "Ervateira Alto Uruguai",
    "Agropecuária Albarello",
    "Boa Fé Agropecuária",
    "BR Madeiras",
    "Poços Makoski",
    "Embalagio",
    "Eletro Vale",
    "Vale Veneto",
    "Shopping do Real",
    "Mármores Tenedini",
    "Ousadia Modas",
  ];
</script>

<section id="parceiros" class="grid-system grid-rows-[auto_1fr_auto]">
  <div class="col-span-full">
    <h2
      class="font-bold mb-4 text-2xl xl:text-[40px] 2xl:text-5xl xl:text-center"
    >
      Conectados aos Líderes Regionais
    </h2>
    <h3
      class="font-semibold text-foreground-dimmed text-base xl:text-2xl 2xl:text-[32px] text-center"
    >
      Trabalhamos com empresas que são referência no mercado local — e que
      confiam nas nossas soluções para ir além.
    </h3>
  </div>

  <div
    class="col-span-full xl:col-span-6 xl:col-start-2 2xl:col-span-10 2xl:col-start-2 grid grid-rows-[4fr_1fr] gap-3 xl:gap-4 2xl:gap-6"
  >
    <!-- Main partners -->
    <div
      class="grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-3 xl:gap-4 2xl:gap-6 h-full"
    >
      {#each partners as partner}
        <Card>
          <div
            style="--logo-url:url({partner})"
            class="bg-[image:var(--logo-url)] bg-contain bg-no-repeat bg-center size-full"
          ></div>
        </Card>
      {/each}
    </div>

    <!-- Smaller partners -->
    <div class="grid grid-rows-1 grid-cols-6 gap-3 xl:gap-4 2xl:gap-6 h-full">
      {#each partnersSmall as partner}
        <Card>
          <div
            style="--logo-url:url({partner})"
            class="bg-[image:var(--logo-url)] bg-contain bg-no-repeat bg-center size-full"
          ></div>
        </Card>
      {/each}
    </div>
  </div>

  <!-- Other partners -->
  <div
    class="col-span-full xl:col-span-6 xl:col-start-2 2xl:col-start-2 2xl:col-span-10 marquee"
  >
    <ul class="marquee-content">
      {#each otherPartners as partner}
        <li class="font-medium text-xl xl:text-[32px] text-foreground-dimmed">
          {partner}
        </li>
      {/each}
    </ul>

    <ul class="marquee-content">
      {#each otherPartners as partner}
        <li
          class="font-medium text-xl xl:text-[32px] text-foreground-dimmed"
          aria-hidden="true"
        >
          {partner}
        </li>
      {/each}
    </ul>
  </div>
</section>
