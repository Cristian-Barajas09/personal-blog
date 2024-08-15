<script lang="ts">
  export let message: string;
  export let title: string;
  const extra = message.split(";");

  const selectRandomMessage = extra[Math.floor(Math.random() * extra.length)];
</script>

<div>
  <h3>{title}</h3>
  <div class="shadow p-2 rounded">
    <em class="">"{selectRandomMessage}"</em>
  </div>
</div>
