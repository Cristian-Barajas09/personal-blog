<script lang="ts">
  import Modal from "./Modal.svelte";

  export let src: string;
  export let alt: string;
  export let downloadMessage: string = "download picture"

  let isExpanded = false;

  const handleClick = () => {
    isExpanded = !isExpanded;
  };


</script>

<div>
  <button class="cursor-pointer w-full" on:click={handleClick}>
    <img {src} class="w-full h-full" {alt} />
  </button>

  <div>
    <a href="{src}" download >{downloadMessage}</a>
  </div>

</div>

{#if isExpanded}
    <Modal on:close={handleClick}>
        <div class="w-[400px]">
          <img {src} {alt}  class="w-full h-full"/>
        </div>
    </Modal>
{/if}


