<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { onMount } from 'svelte';


    const dispatch = createEventDispatcher()


    function closeModal() {
        dispatch('close')
    }


    function handleEsc(event: KeyboardEvent) {
        if (event.key === 'Escape') {

            closeModal()
        }
    }

    onMount(()=> {
        document.addEventListener('keydown', handleEsc)
        return () => {
            document.removeEventListener('keydown', handleEsc)
        }
    })

</script>


<div
class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"

>
    <div class="bg-white p-4"
    >
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

