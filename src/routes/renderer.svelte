<script lang="ts">
  import type { ParseResult } from "$lib/parser";

  let { result }: { result: ParseResult } = $props();
</script>

{#if result.ok}
  <pre class="ok">{result.ast}</pre>
{:else}
  <pre class="ng">{result.err}</pre>
{/if}

<style>
  pre {
    border: 1px solid transparent;

    &.ok {
      border-color: #0f0;
    }
    &.ng {
      border-color: #f00;
      white-space: wrap;
    }
  }
</style>
