<script setup>
    import SongItem from '@/components/SongItem.vue'
    
    import { useSongStore } from '@/stores/useSongStore'

    const songStore = useSongStore()
    
    await songStore.getSongs()
</script>

<template>
    <div class="flex w-full h-screen bg-slate-900">
        <!-- left col -->
        <div class="h-screen pb-12 w-[60%] overflow-x-hidden overflow-y-auto scrollbar-hide">
        <!-- header -->
            <div class="w-full h-16 flex justify-center items-center">
                <p class="font-playwrite text-slate-100 text-2xl">Cấm Thuật Sư</p>
            </div>

            <!-- songs list -->
            <div class="w-full flex flex-wrap justify-center items-start gap-x-6 gap-y-8 py-8 pl-8 pr-4">
                <SongItem v-for="(song, index) in songStore.songs" @click="songStore.setCurrentSong(song)" :imageFile="song.imageFile" :title="song.title" />
            </div>
        </div>

        <!-- right col -->
        <div class="h-screen w-[40%] p-8 text-slate-100">
        <!-- current song card -->
        <div v-if="songStore.currentSong.title || songStore.currentSong.imageFile" class="w-full rounded-2xl px-16 pt-16 pb-12 bg-slate-800 flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <div>
                    <img :src="songStore.currentSong.imageFile" class="w-full aspect-square rounded-lg" alt="song cover">
                </div>
                <p class="text-slate-100 text-2xl line-clamp-1">{{ songStore.currentSong.title }}</p>
            </div>
            <div class="w-full h-auto flex justify-center">
                <div class="flex justify-around items-center w-full">
                    <i class="fa-solid fa-shuffle text-xl text-slate-500 cursor-pointer"></i>
                    <div class="flex items-center gap-8">
                        <i class="fa-solid fa-backward-step text-4xl cursor-pointer text-slate-100"></i>
                        <div class="bg-slate-800 size-20 rounded-full flex justify-center items-center">
                            <div @click="songStore.toggle()">
                                <i v-if="songStore.isPlaying" class="fa-solid fa-pause text-5xl cursor-pointer"></i>
                                <i v-else class="fa-solid fa-play text-5xl cursor-pointer"></i>
                            </div>
                        </div>
                        <i class="fa-solid fa-forward-step text-4xl cursor-pointer text-slate-100"></i>
                    </div>
                    
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
