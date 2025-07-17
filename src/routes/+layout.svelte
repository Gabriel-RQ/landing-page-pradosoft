<script lang="ts">
  import { Footer, Header } from "$lib/components";
  import "../app.css";

  let { children } = $props();
</script>

<Header />

<main>
  {@render children()}
</main>

<Footer />
