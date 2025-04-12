<script setup>
  import { ref } from 'vue'

  import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

  import SongsList from '@/components/small-screen/SongsList.vue'
  import FullScreenCurrentSong from '@/components/small-screen/FullScreenCurrentSong.vue'
  import LargeScreenView from '@/components/large-screen/LargeScreen.vue'

  const fullScreenSongStore = useFullscreenSongStore()
</script>

<template>
  <div class="lg:hidden">
    <FullScreenCurrentSong v-if="fullScreenSongStore.isFullscreen" />
    <SongsList v-else />
  </div>
  
  <div class="hidden lg:block">
    <LargeScreenView />
  </div>
</template>