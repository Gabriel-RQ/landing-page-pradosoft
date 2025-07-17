<script>
  import { PhoneIcon, MessageCircleIcon, MailIcon } from "@lucide/svelte";
</script>

<footer class="col-span-full px-4 xl:px-[40px] 2xl:px-[80px] pb-3">
  <div class="flex flex-col xl:justify-between xl:flex-row">
    <address class="flex flex-col gap-2">
      <span class="font-medium text-base text-center">Nossos contatos</span>
      <span class="*:inline-block">
        <PhoneIcon class="size-6 mr-2" />
        (55) 3746-1225
      </span>

      <a href="tel:+5555996860397" class="*:inline-block">
        <MessageCircleIcon class="size-6 mr-2" />
        (55) 99686-0397
      </a>

      <a href="mailto:suporte@pradosoft.com.br" class="*:inline-block">
        <MailIcon class="size-6 mr-2" />
        suporte@pradosoft.com.br
      </a>
    </address>

    <div class="flex gap-6 my-6 xl:my-0 self-center xl:self-end">
      <a
        href="https://www.instagram.com/pradosoftsistemas/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
      >
        <i id="instagram"></i>
      </a>

      <a
        href="https://wa.me/5555996860397"
        target="_blank"
        rel="noreferrer"
        aria-label="Whatsapp"
      >
        <i id="whatsapp"></i>
      </a>
    </div>
  </div>

  <p class="text-center">&copy; Pradosoft 2025</p>
</footer>

<style>
  i {
    display: inline-block;
    height: 56px;
    width: 56px;
  }

  #instagram {
    background: url("/img/instagram-logo.svg") no-repeat center center / cover;
  }

  #whatsapp {
    background: url("/img/whatsapp-logo.svg") no-repeat center center / cover;
  }
</style>
