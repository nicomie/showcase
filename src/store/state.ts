import { defineStore } from "pinia";
import { ref } from "vue";

export const useStateStore = defineStore('state',() => {
    const activeIndex = ref(0)
    const fullscreen = ref(false)
    const hash = ref(0)

    const setActiveIndex = (val: number) => {
        activeIndex.value = val
    }

    const setFullscreen = (val: boolean) => {
        fullscreen.value = val
    }

    const setHash = (id: number) => {
        hash.value = id
    }


    return {
        activeIndex, setActiveIndex, fullscreen, setFullscreen, hash, setHash
    }
})