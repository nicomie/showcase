import {Ref, onMounted, onUnmounted, ref} from 'vue'

export function useScroll(element: Ref<HTMLElement> | Ref<null> , duration: number, isPaused: Ref<Boolean>) {

    const isBlocked = ref(false)
    const direction = ref(false)
    const triggered = ref(false)
    const touchStartPoint = ref(0)

    const handle = (e: any) => {
        
        if(isPaused.value == true || isBlocked.value) {
            return;
        }
        
      
     
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

    const handleTouch = (e: TouchEvent) => {

        
        if(isPaused.value == true || isBlocked.value) {
            return;
        }

        e.preventDefault()
               

        isBlocked.value = true;
        triggered.value = !triggered.value

        const deltaY = e.touches[0].clientY - touchStartPoint.value;

        if (deltaY > 0) {
      
            direction.value = true
        } else {
            direction.value = false
        }

        setTimeout(() => {

            isBlocked.value = false

        }, duration)
    }

 
    onMounted(() => {
        if(element.value) {
            element.value.addEventListener("wheel", handle)
            element.value.addEventListener("touchstart", (e: TouchEvent) => {  touchStartPoint.value = e.touches[0].clientY})
            element.value.addEventListener("touchmove", handleTouch)
        }
   
    })
    onUnmounted(() => {
        if(element.value) {
            element.value.removeEventListener("wheel", handle)
            element.value.removeEventListener("touchstart", (e: TouchEvent) => {  touchStartPoint.value = e.touches[0].clientY})
            element.value.removeEventListener("touchmove", handleTouch)
        }
    })

    return {
        direction,
        triggered
    }
}