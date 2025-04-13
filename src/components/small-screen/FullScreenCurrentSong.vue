<script setup>
    import { useSongStore } from '@/stores/useSongStore'
    import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

    const songStore = useSongStore()
    const fullScreenSongStore = useFullscreenSongStore()
</script>

<template>
    <div class="w-full h-screen bg-slate-900 flex flex-col overflow-y-auto pb-16">
        <div class="w-full h-12 flex items-center justify-end p-8">
            <i @click="fullScreenSongStore.exitFullscreen" class="fa-solid fa-down-left-and-up-right-to-center text-slate-100 text-xl sm:text-2xl p-1 cursor-pointer"></i>
        </div>
        <div class="w-full flex flex-col flex-1 px-12 justify-center gap-16">
            <div class="flex flex-col gap-6 items-center">
                <div class="max-w-2xl w-full">
                    <img :src="songStore.currentSong.imageFile" class="w-full max-w-2xl aspect-square rounded-lg" alt="song cover">
                </div>
                <p class="text-slate-100 text-2xl line-clamp-1">{{ songStore.currentSong.title }}</p>
            </div>
            <div class="w-full h-auto flex justify-center">
                <div class="flex flex-col sm:flex-row sm:justify-center sm:gap-12 gap-y-8 justify-around items-center w-full max-w-2xl">
                    <div class="hidden sm:block">
                        <i class="fa-solid fa-shuffle text-xl text-slate-500 cursor-pointer"></i>
                    </div>
                    <div class="flex items-center gap-6">
                        <i class="fa-solid fa-backward-step text-2xl cursor-pointer text-slate-100"></i>
                        <div @click="songStore.toggle()" class="bg-slate-800 size-16 rounded-full flex justify-center items-center cursor-pointer">
                            <div>
                                <i v-if="songStore.isPlaying" class="fa-solid fa-pause text-2xl text-slate-100 cursor-pointer"></i>
                                <i v-else class="fa-solid fa-play text-2xl text-slate-100 cursor-pointer"></i>
                            </div>
                        </div>
                        <i class="fa-solid fa-forward-step text-2xl cursor-pointer text-slate-100"></i>
                    </div>
                    <div @click="songStore.toggleRepeat" class="hidden sm:block">
                        <i v-if="songStore.repeatCurrentSong" class="fa-solid fa-repeat text-xl text-slate-100 cursor-pointer"></i>
                        <i v-else class="fa-solid fa-repeat text-xl text-slate-500 cursor-pointer"></i>
                    </div>
                    <div class="flex items-center w-full justify-center gap-12 sm:hidden">
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
</template>

<style>
    
</style>