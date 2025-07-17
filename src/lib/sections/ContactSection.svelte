<script lang="ts">
  import { SendHorizontalIcon } from "@lucide/svelte";
</script>

<section
  id="contato"
  class="grid-system grid-rows-[repeat(2,max-content)] min-h-max"
>
  <div class="col-span-full">
    <h2
      class="font-bold uppercase text-[40px] xl:text-5xl 2xl:text-[64px] leading-11 mb-3"
    >
      Como podemos te ajudar?
    </h2>
    <p
      class="font-medium text-base xl:text-xl 2xl:text-2xl text-foreground-dimmed"
    >
      Adoramos ouvir nossos clientes! Fale com a gente e descubra como podemos
      ajudar a transformar suas ideias em realidade. Basta preencher o
      formulário ou nos chamar pelos contatos abaixo.
    </p>
  </div>

  <div
    class="col-span-full flex flex-col xl:flex-row xl:justify-between gap-10 *:grow"
  >
    <div>
      <label for="message" class="font-medium text-base"> Sua mensagem </label>
      <textarea
        id="message"
        class="w-full resize-none outline-none glass shadow-none rounded-lg p-2 mt-3 mb-1 h-60"
      ></textarea>
      <button
        class="cta rounded-lg w-full text-base flex gap-1 items-center justify-center"
      >
        Entrar em contato
        <SendHorizontalIcon class="size-6" />
      </button>
    </div>

    <div>
      <span class="font-medium text-base">Encontre nosso escritório</span>
      <div class="w-full h-50 xl:h-100 my-3 overflow-hidden rounded-lg">
        <iframe
          class="size-full"
          title="Escritório da Pradosoft"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.5194775422437!2d-53.40512!3d-27.4842154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fb8289a0ccaf0d%3A0xb23c073cc64a62c1!2sPradosoft!5e0!3m2!1spt-BR!2sbr!4v1752761626331!5m2!1spt-BR!2sbr"
          style="border:0;"
          allowfullscreen={false}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <span>Rua José Bonifácio, 704 - São Luiz, Seberi - RS, 98380-000</span>
    </div>
  </div>
</section>
