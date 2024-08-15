<script lang="ts">
    import { createEventDispatcher } from 'svelte'



    const dispatch = createEventDispatcher()


    function closeModal() {
        dispatch('close')
    }
</script>


<div
class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
>
    <div class="bg-white p-4">
        <div>
            <button on:click={closeModal}>
                X
            </button>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>

</div>

