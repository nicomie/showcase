import { defineStore } from "pinia";
import { ref } from "vue";

export const useStateStore = defineStore('state',() => {
    const activeIndex = ref(0)
    const fullscreen = ref(false)
    const hash = ref(0)

    const setActiveIndex = (val: number) => {
        activeIndex.value = val
    }

    const getActiveIndex = () => {
        return activeIndex
    }

    const setFullscreen = (val: boolean) => {
        fullscreen.value = val
    }

    const getFullscreen = () => {
        return fullscreen
    }

    const setHash = (id: number) => {
        hash.value = id
    }
    const getHash = () => {
        return hash
    }

    return {
        getActiveIndex, setActiveIndex, getFullscreen, setFullscreen, getHash, setHash
    }
})