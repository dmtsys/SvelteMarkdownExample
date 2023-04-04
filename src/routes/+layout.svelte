<script>
  /*import Header from './Header.svelte';*/
  import { Noise } from 'dmt-gui-kit';
  import './styles.css';
</script>

<svelte:head>
  <title>SvelteMarkdown</title>
</svelte:head>

<div class="app">
  <!-- <Header /> -->

  <Noise />

  <main>
    <slot />
  </main>

</div>

<style>

main {
  color: #f9f9fb;
  padding: 50px 0;
}

</style>
