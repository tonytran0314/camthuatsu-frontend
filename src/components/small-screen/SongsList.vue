<script setup>    
    import SongItem from '@/components/SongItem.vue'

    import { useSongStore } from '@/stores/useSongStore'
    import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

    const songStore = useSongStore()
    const fullScreenSongStore = useFullscreenSongStore()

    const playNextSong = () => {
        let currentSongIndex = songStore.songs.findIndex(song => song.id === songStore.currentSong.id)
        if(currentSongIndex < songStore.songs.length - 1) {
            songStore.setCurrentSong(songStore.songs[++currentSongIndex])
        } else {
            songStore.setCurrentSong(songStore.songs[0])
        }
    }

    await songStore.getSongs()
</script>

<template>
    <div class="w-full h-screen overflow-auto bg-slate-900 relative scrollbar-hide">
    <!-- [small screen] header -->
    <div class="w-full h-16 flex justify-center items-center">
      <p class="text-slate-100 font-playwrite text-2xl">Cấm Thuật Sư</p>
    </div>

    <!-- [small screen] songs list -->
    <div class="mt-4 pb-24 px-2 flex flex-wrap justify-center gap-x-4 gap-y-8">
      <!-- item -->
      <SongItem v-for="(song, index) in songStore.songs" @click="songStore.setCurrentSong(song)" :imageFile="song.imageFile" :title="song.title" />
    </div>

    <!-- [small screen] current song -->
    <div v-if="songStore.currentSong.title || songStore.currentSong.imageFile" class="w-full h-20 fixed bottom-0 shadow-lg p-4 flex gap-6 justify-between bg-slate-800 text-slate-100">
        <div @click="fullScreenSongStore.enterFullscreen" class="flex gap-2 cursor-pointer">
          <div class="size-12 min-w-12 min-h-12">
            <img :src="songStore.currentSong.imageFile" class="size-12 rounded-lg" alt="song cover">
          </div>
          <p class="line-clamp-2 text-base">{{ songStore.currentSong.title }}</p>
        </div>
        <div class="flex gap-8 items-center">
          <div @click="songStore.toggle()">
            <i v-if="songStore.isPlaying" class="fa-solid fa-pause text-2xl cursor-pointer"></i>
            <i v-else class="fa-solid fa-play text-2xl cursor-pointer"></i>
          </div>
          <i @click="playNextSong" class="fa-solid fa-forward-step text-2xl cursor-pointer"></i>
        </div>
    </div>
  </div>
</template>

<style>
    
</style>