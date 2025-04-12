<script setup>
  import { ref } from 'vue'

  import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

  import SongsList from '@/components/small-screen/SongsList.vue'
  import FullScreenCurrentSong from '@/components/small-screen/FullScreenCurrentSong.vue'

  const fullScreenSongStore = useFullscreenSongStore()
</script>

<template>
  <FullScreenCurrentSong v-if="fullScreenSongStore.isFullscreen" />
  <SongsList v-else />
</template>