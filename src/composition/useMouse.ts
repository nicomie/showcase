import {ref, onMounted, onBeforeUnmount} from 'vue'

export function useMouse() {
    const mouseX = ref(0)
    const mouseY = ref(0)

    const update = (e: MouseEvent) => {
        mouseX.value = e.pageX;
        mouseY.value = e.pageY;
    };

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('mousemove', update)
    })

    return {
        mouseX,
        mouseY,
      };
}