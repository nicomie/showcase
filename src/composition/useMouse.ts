import {ref} from 'vue'


export function useMouse() {
    const mouseX = ref(0)
    const mouseY = ref(0)

    const update = (e: Event) => {
        const ex = e as MouseEvent
        mouseX.value = ex.pageX;
        mouseY.value = ex.pageY;
    };



    return {
        mouseX,
        mouseY,
    };
}