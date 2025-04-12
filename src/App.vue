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
      // KHÔNG cần gọi audioEl.value.load() nữa
    }
  })

  const handleCanPlayThrough = () => {
    isAudioReady.value = true
    if (audioEl.value && isAudioReady.value) {
      songStore.play()
    }
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
    v-show="songStore.currentSong.soundFile"
    class="hidden"
    :src="songStore.currentSong.soundFile"
    controls
    loop>
  </audio>
  
</template>