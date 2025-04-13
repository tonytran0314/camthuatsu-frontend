<script setup>
    import SongItem from '@/components/SongItem.vue'
    
    import { useSongStore } from '@/stores/useSongStore'

    const songStore = useSongStore()

    const playPrevSong = () => {
        let currentSongIndex = songStore.songs.findIndex(song => song.id === songStore.currentSong.id)
        if(currentSongIndex > 0) {
            songStore.setCurrentSong(songStore.songs[--currentSongIndex])
        } else {
            songStore.setCurrentSong(songStore.songs[songStore.songs.length - 1])
        }
    }

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
    <div class="flex w-full h-screen bg-slate-900">
        <!-- left col -->
        <div class="flex-1 h-screen pb-12 overflow-x-hidden overflow-y-auto scrollbar-hide" :class="songStore.currentSong.id ? 'w-[60%]' : 'w-[100%]'">
        <!-- header -->
            <div class="w-full h-16 flex justify-center items-center">
                <p class="font-playwrite text-slate-100 text-2xl">Cấm Thuật Sư</p>
            </div>

            <!-- songs list -->
            <div class="w-full flex flex-wrap justify-center items-start gap-x-6 gap-y-8 py-8 pl-8" :class="songStore.currentSong.id ? 'pr-4' : 'pr-8'">
                <SongItem v-for="(song, index) in songStore.songs" @click="songStore.setCurrentSong(song)" :imageFile="song.imageFile" :title="song.title" />
            </div>
        </div>

        <!-- right col -->
        <div v-if="songStore.currentSong.id" class="h-screen w-auto p-8 text-slate-100 flex items-center">
            <!-- current song card -->
            <div v-if="songStore.currentSong.title || songStore.currentSong.imageFile" class="w-full rounded-2xl flex flex-col items-center">
                <div class="flex flex-col gap-4 max-w-lg">
                    <div class="flex justify-center">
                        <img :src="songStore.currentSong.imageFile" class="w-full max-w-lg aspect-square rounded-lg" alt="song cover">
                    </div>
                    <p class="text-slate-100 text-2xl line-clamp-1 px-6 pt-6 bg-slate-800 rounded-t-2xl">{{ songStore.currentSong.title }}</p>
                </div>
                <div class="w-full max-w-lg h-auto flex justify-center bg-slate-800 pt-8 pb-6 rounded-b-2xl">
                    <div class="flex flex-col xl:flex-row justify-around 2xl:justify-center 2xl:gap-12 items-center w-full gap-y-8">
                        <div class="hidden xl:block">
                            <i class="fa-solid fa-shuffle text-xl text-slate-500 cursor-pointer"></i>
                        </div>
                        <div class="flex items-center gap-8">
                            <i @click="playPrevSong" class="fa-solid fa-backward-step text-2xl cursor-pointer text-slate-100"></i>
                            <div class="bg-slate-600 size-14 xl:size-16 rounded-full flex justify-center items-center">
                                <div @click="songStore.toggle()">
                                    <i v-if="songStore.isPlaying" class="fa-solid fa-pause text-3xl xl:text-4xl cursor-pointer"></i>
                                    <i v-else class="fa-solid fa-play text-3xl xl:text-4xl cursor-pointer"></i>
                                </div>
                            </div>
                            <i @click="playNextSong" class="fa-solid fa-forward-step text-2xl cursor-pointer text-slate-100"></i>
                        </div>
                        
                        <div @click="songStore.toggleRepeat" class="hidden xl:block">
                            <i v-if="songStore.repeatCurrentSong" class="fa-solid fa-repeat text-xl text-slate-100 cursor-pointer"></i>
                            <i v-else class="fa-solid fa-repeat text-xl text-slate-500 cursor-pointer"></i>
                        </div>
                        <div class="flex items-center w-full justify-center gap-12 xl:hidden">
                            <i class="fa-solid fa-shuffle text-xl text-slate-500 cursor-pointer"></i>
                            <div @click="songStore.toggleRepeat">
                                <i v-if="songStore.repeatCurrentSong" class="fa-solid fa-repeat text-xl text-slate-100 cursor-pointer"></i>
                                <i v-else class="fa-solid fa-repeat text-xl text-slate-500 cursor-pointer"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
