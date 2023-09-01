import {Ref, onMounted, onUnmounted, ref} from 'vue'

export function useScroll(element: Ref<HTMLElement> | Ref<null> , duration: number, isPaused: Ref<Boolean>) {

    const isBlocked = ref(false)
    const direction = ref(false)
    const triggered = ref(false)

    const handle = (e: any) => {

        if(isPaused.value == true) {
            return;
        }

        if(!isBlocked.value){
            isBlocked.value = true;

            const scrollEvent = e as any
            
            triggered.value = !triggered.value
      
            if(scrollEvent.deltaY > 0){
                direction.value = false
            } else {
                direction.value = true
            }

            setTimeout(() => {

                isBlocked.value = false

            }, duration)
        }
    }

 
    onMounted(() => {
        if(element.value) {
            element.value.addEventListener("wheel", handle)
        }
   
    })
    onUnmounted(() => {
        if(element.value) {
            element.value.removeEventListener("wheel", handle)
        }
    })

    return {
        direction,
        triggered
    }
}