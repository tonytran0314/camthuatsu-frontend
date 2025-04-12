import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFullscreenSongStore = defineStore('useFullscreenSongStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const isFullscreen = ref(false)



    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const enterFullscreen = () => {
        isFullscreen.value = true
    }

    const exitFullscreen = () => {
        isFullscreen.value = false
    }



    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        isFullscreen,
        enterFullscreen,
        exitFullscreen
    }
})