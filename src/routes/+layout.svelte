<script lang="ts">
  import { Header } from "$lib/components";
  import "../app.css";

  let { children } = $props();
</script>

<main>
  {@render children()}
</main>
