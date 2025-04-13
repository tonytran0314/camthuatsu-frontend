import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/axios.js'

export const useSongStore = defineStore('useSongStore', () => {

    /* -------------------------------------------------------------------------- */
    /*                                   STATES                                   */
    /* -------------------------------------------------------------------------- */
    const songs = ref(null)
    const currentSong = ref({
        id: null,
        title: null,
        imageFile: null,
        soundFile: null
    })
    const isPlaying = ref(false)
    const audioRef = ref(null)
    const repeatCurrentSong = ref(false)



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
    const setCurrentSong = (song) => {
        currentSong.value = {
            id: song.id,
            title: song.title,
            imageFile: song.imageFile,
            soundFile: song.soundFile
        }
        play()
    }
    const setAudioRef = (el) => {
        audioRef.value = el
    }
    const play = () => {
        if (audioRef.value) {
          audioRef.value.play()
          isPlaying.value = true
        }
    }

    const pause = () => {
        if (audioRef.value) {
            audioRef.value.pause()
            isPlaying.value = false
        }
    }

    // toggle play/pause
    const toggle = () => {
        if (!audioRef.value) return
        isPlaying.value ? pause() : play()
    }

    const toggleRepeat = () => {
        repeatCurrentSong.value = !repeatCurrentSong.value
    }


    /* -------------------------------------------------------------------------- */
    /*                                   RETURN                                   */
    /* -------------------------------------------------------------------------- */
    return {
        songs,
        currentSong,
        audioRef,
        isPlaying,
        repeatCurrentSong,
        getSongs,
        setCurrentSong,
        setAudioRef,
        toggle,
        play,
        pause,
        toggleRepeat
    }
})