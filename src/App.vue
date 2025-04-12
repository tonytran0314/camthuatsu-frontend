<script setup>
  import { useSongStore } from '@/stores/useSongStore'
  import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

  import SongsList from '@/components/small-screen/SongsList.vue'
  import FullScreenCurrentSong from '@/components/small-screen/FullScreenCurrentSong.vue'
  import LargeScreenView from '@/components/large-screen/LargeScreen.vue'

  const songStore = useSongStore()
  const fullScreenSongStore = useFullscreenSongStore()
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
  
  <audio v-if="songStore.currentSong.soundFile" class="hidden" :src="songStore.currentSong.soundFile" autoplay controls></audio>
  
</template>