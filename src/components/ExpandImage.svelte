<script lang="ts">
  import Modal from "./Modal.svelte";

  export let src: string;
  export let alt: string;

  let isExpanded = false;

  const handleClick = () => {
    isExpanded = !isExpanded;
  };


</script>

<button class="cursor-pointer" on:click={handleClick}>
  <img {src} class="w-full h-full" {alt} />
</button>

{#if isExpanded}
    <Modal on:close={handleClick}>
        <img {src} {alt} />
    </Modal>
{/if}


