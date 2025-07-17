<script lang="ts">
  import { Card } from "$lib/components";
  import {
    Icon,
    BoxesIcon,
    PiggyBankIcon,
    CircleDollarSignIcon,
    CalculatorIcon,
    TruckIcon,
    BookIcon,
  } from "@lucide/svelte";

  const products: { description: string; icon: typeof Icon }[] = [
    {
      description: "Estoque",
      icon: BoxesIcon,
    },
    {
      description: "Financeiro",
      icon: PiggyBankIcon,
    },
    {
      description: "Folha de pagamento",
      icon: CircleDollarSignIcon,
    },
    {
      description: "Contabilidade",
      icon: CalculatorIcon,
    },
    {
      description: "Frota",
      icon: TruckIcon,
    },
    {
      description: "Livros fiscais",
      icon: BookIcon,
    },
  ];
</script>

<section class="grid-system grid-rows-[auto_1fr_auto]">
  <div class="col-span-full xl:text-center">
    <h2 class="font-bold mb-4 text-2xl xl:text-[40px] 2xl:text-5xl">
      Soluções criadas para otimizar processos, aumentar a produtividade e
      impulsionar resultados.
    </h2>
    <h3
      class="font-semibold text-foreground-dimmed text-base xl:text-2xl 2xl:text-[32px]"
    >
      Módulos que resolvem seus problemas
    </h3>
  </div>

  <div
    class="col-span-full xl:col-span-6 xl:col-start-2 2xl:col-span-10 2xl:col-start-2 grid grid-cols-2 gap-3 xl:gap-6 self-center"
  >
    {#each products as { description, icon }}
      <Card>
        {@const Icon = icon}
        <Icon class="size-18 xl:size-32 stroke-1" />
        <span class="font-medium text-base xl:text-xl text-center"
          >{description}</span
        >
      </Card>
    {/each}
  </div>

  <a
    href="#contato"
    class="cta justify-self-center col-span-full xl:col-span-4 xl:col-start-3 2xl:col-start-5 w-full"
  >
    Nos contate
  </a>
</section>
