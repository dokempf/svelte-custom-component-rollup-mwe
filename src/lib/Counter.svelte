<svelte:options customElement='my-counter' />

<script>
  import { Button } from 'flowbite-svelte';

  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<Button class="max-w-full" on:click={increment}>
  count is {count}
</Button>
