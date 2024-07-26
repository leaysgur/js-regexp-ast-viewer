<script lang="ts">
  import { regjs, regexpp } from "$lib/parser";
  import Renderer from "./renderer.svelte";

  let pattern = $state("");
  let flags = $state("");

  let hiddenKeys = $state({ range: true, raw: true });
</script>

<section>
  <fieldset>
    <legend>RegExp</legend>
    <div class="regexp">
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

<div class="col">
  <section>
    <h3>regjsparser @0.10.0</h3>
    <Renderer result={regjs(hiddenKeys)(pattern, flags)} />
  </section>
  <section>
    <h3>@eslint-community/regexpp @4.11.0</h3>
    <Renderer result={regexpp(hiddenKeys)(pattern, flags)} />
    <small>Note: Cyclic refs are omitted.</small>
  </section>
</div>

<style>
  .regexp {
    display: grid;
    grid-template-columns: 1ch 1fr 1ch 6ch;
    align-items: center;
  }

  .col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
</style>
