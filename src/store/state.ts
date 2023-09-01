import { defineStore } from "pinia";
import { ref } from "vue";

export const useStateStore = defineStore('state',() => {
    const activeIndex = ref(0)

    function setActiveIndex(val: number) {
        activeIndex.value = val
    }

    return {
        activeIndex, setActiveIndex
    }
})