
<script setup lang="ts">
/**
import { ref, watch} from 'vue'
import { useScroll } from '../composition/useScroll';

    let state = useStateStore()
    const main = ref(null)
    const idx = ref(0)

    const props = defineProps<{
        content: Array<string>
    }>()

  //  const {direction, triggered} = useScroll(main, 300)

    const handleScroll = (val: number) => {

        if (val > 0) {
            if(idx.value >= props.content.length-1 ) {
            return
            }
        } else if (val < 0) {
            if(idx.value <= 0) {
                return
            }
        }

        idx.value += val
  
        state.setActiveIndex(idx.value)
              
    }

    watch(triggered, () => {
        direction.value ? handleScroll(-1) : handleScroll(1)
    })


import { useStateStore } from '../store/state';
*/
</script>

