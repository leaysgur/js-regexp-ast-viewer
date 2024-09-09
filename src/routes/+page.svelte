<script lang="ts">
  import { browser, regjs, regexpp, regexpTree, oxc } from "$lib/parser";
  import type { ParseResult, ParseMeta } from "$lib/parser";

  let pattern = $state("");
  let flags = $state("");

  let hiddenKeys = $state({ range: true, raw: true });
</script>

{#snippet result(result: ParseResult, meta: ParseMeta)}
  <h2>
    {meta.name}
    <wbr />
    <span>@{meta.version}</span>
  </h2>

  {#if result.ok}
    <pre class="ok">{result.ast}</pre>
  {:else}
    <pre class="ng">{result.err}</pre>
  {/if}
{/snippet}

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
    {@render result(parse(pattern, flags), meta)}
  {/await}
</section>

<div class="col">
  {#each [oxc, regjs, regexpp, regexpTree] as factory}
    <section>
      {#await factory(hiddenKeys)}
        <p>Loading...</p>
      {:then { parse, meta }}
        {@render result(parse(pattern, flags), meta)}
        {#if meta.notes !== ""}
          <small>NOTE: {meta.notes}</small>
        {/if}
      {:catch err}
        <p>Error: {String(err)}</p>
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
    word-break: break-word;

    span {
      font-size: 0.8rem;
    }
  }

  pre {
    border: 1px solid transparent;

    &.ok {
      border-color: #0f0;
      overflow-x: auto;
    }
    &.ng {
      border-color: #f00;
      white-space: wrap;
    }
  }
</style>
