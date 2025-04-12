import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { api } from '@/services/axios.js'

export const useSongStore = defineStore('useSongStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const songs = ref(null)
    const currentSong = reactive({
        'title': null,
        'imageFile': null,
        'soundFile': null
    })



    /* -------------------------------------------------------------------------- */
    /*                                   METHODS                                  */
    /* -------------------------------------------------------------------------- */
    const getSongs = async () => {
        try {
            const res = await api.get('/sounds')
            songs.value = res.data.data
        } catch (error) {
            console.log(error)
        }
    }
    const setCurrentSong = (newSong) => {
        currentSong.title = newSong.title
        currentSong.imageFile = newSong.imageFile
        currentSong.soundFile = newSong.soundFile
    }


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        songs,
        currentSong,
        getSongs,
        setCurrentSong
    }
})