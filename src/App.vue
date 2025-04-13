<script setup>
  import { ref, onMounted, watch } from 'vue'

  import { useSongStore } from '@/stores/useSongStore'
  import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

  import SongsList from '@/components/small-screen/SongsList.vue'
  import FullScreenCurrentSong from '@/components/small-screen/FullScreenCurrentSong.vue'
  import LargeScreenView from '@/components/large-screen/LargeScreen.vue'

  const songStore = useSongStore()
  const fullScreenSongStore = useFullscreenSongStore()

  const audioEl = ref(null)
  const isAudioReady = ref(false)

  onMounted(() => {
    songStore.setAudioRef(audioEl.value)
  })

  watch(() => songStore.currentSong?.soundFile, (newSrc) => {
    if (newSrc && audioEl.value) {
      isAudioReady.value = false
    }
  })

  const handleCanPlayThrough = () => {
    isAudioReady.value = true
    if (audioEl.value && isAudioReady.value) {
      songStore.play()
    }
  }
  const handleSongEnded = () => {
    // when the song ends, there are 2 choices: repeat or next song
    // if repeat, check this first

    // else next song
    let currentSongIndex = songStore.songs.findIndex(song => song.id === songStore.currentSong.id)
    songStore.setCurrentSong(songStore.songs[++currentSongIndex])

      // if isPlaylistRepeat, then play the first song

      // else, stop when the song ends
  }
</script>

<template>
  <Suspense>
    <div>
      <div class="lg:hidden">
        <FullScreenCurrentSong v-if="fullScreenSongStore.isFullscreen" />
        <SongsList v-else />
      </div>
      <div class="hidden lg:block">
        <LargeScreenView />
      </div>
    </div>
    <template #fallback>loading...</template>
  </Suspense>
  
  <audio
    ref="audioEl"
    @canplaythrough="handleCanPlayThrough"
    @ended="handleSongEnded"
    v-show="songStore.currentSong.soundFile"
    class="hidden"
    :src="songStore.currentSong.soundFile"
    controls>
  </audio>
  
</template>