<header>
  <h1>JS RegExp AST Viewer</h1>
  <a
    href="https://github.com/leaysgur/js-regexp-ast-viewer"
    target="_blank"
    rel="noopener noreferrer"
  >GitHub</a>
</header>

<main>
  <slot />
</main>

<style>
  :global(body) {
    font-family: monospace;
    margin: 0;
    padding: 0;
    background-color: #123;
    color: #def;
  }
  :global(a) {
    color: #0ff;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    padding-block-end: 0;

    h1 {
      font-size: 1.2rem;
      margin: 0;
    }
  }

  main {
    padding: 0.5rem;
  }
</style>
