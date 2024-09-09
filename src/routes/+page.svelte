<script lang="ts">
  import { browser, regjs, regexpp, regexpTree, oxc } from "$lib/parser";
  import Renderer from "./renderer.svelte";

  let pattern = $state("");
  let flags = $state("");

  let hiddenKeys = $state({ range: true, raw: true });
</script>

<section>
  <fieldset>
    <legend>RegExp</legend>
    <div class="input">
      /<input type="text" bind:value={pattern} placeholder="Pattern" />/
      <input type="text" bind:value={flags} placeholder="Flags" />
    </div>
  </fieldset>

  <fieldset>
    <legend>Output options</legend>
    <label>
      <input type="checkbox" bind:checked={hiddenKeys.range} /> Hide Range
    </label>
    <label>
      <input type="checkbox" bind:checked={hiddenKeys.raw} /> Hide Raw
    </label>
  </fieldset>
</section>

<section>
  {#await browser(hiddenKeys)}
    <p>Loading...</p>
  {:then { parse, meta }}
    <h2>{meta.name}<span>@{meta.version}</span></h2>
    <Renderer result={parse(pattern, flags)} />
  {/await}
</section>

<div class="col">
  {#each [oxc, regjs, regexpp, regexpTree] as factory}
    <section>
      {#await factory(hiddenKeys)}
        <p>Loading...</p>
      {:then { parse, meta }}
        <h2>{meta.name}<span>@{meta.version}</span></h2>
        <Renderer result={parse(pattern, flags)} />
        {#if meta.notes !== ""}
          <small>NOTE: {meta.notes}</small>
        {/if}
      {/await}
    </section>
  {/each}
</div>

<style>
  .input {
    display: grid;
    grid-template-columns: 1ch 1fr 1ch 6ch;
    align-items: center;
  }

  .col {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }

  h2 {
    font-size: 1rem;

    span {
      font-size: 0.8rem;
    }
  }
</style>
