<script setup lang="ts">
    import {onMounted, ref} from 'vue'


    const first = ref(null)
    const second = ref(null)
    const slots = ref([first, second])
    const active = ref(slots[0])
    onMounted(() => {
        active.cl
    })
</script>

<template>
    <div>
        <slot ref="first" name="first"></slot>
        <slot ref="second" name="second"></slot>
    </div>
</template>
