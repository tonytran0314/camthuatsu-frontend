<script setup>
  import { ref, onMounted } from 'vue'

  import { Button } from '@/components/ui/button'

  const soundData = ref([])
  const currentSongName = ref(null)
  const currentSongUrl = ref(null)

  const changeCurrentSongName = (newSongName, songUrl) => {
    currentSongName.value = newSongName
    currentSongUrl.value = songUrl
  }

  onMounted(async () => {
    try {
      const response = await fetch('/sounds.json')
      const data = await response.json()
      soundData.value = data
    } catch (error) {
      console.error('Error fetching JSON data:', error)
    }
  })
</script>

<template>
  <div class="bg-gray-900 text-blue-50 p-16">
    <div class="flex flex-wrap gap-8 justify-center relative mb-24">
      <div v-for="(sound, index) in soundData" :key="index" class="bg-gray-800 rounded-lg p-4 w-96 space-y-4">
        <p class="text-xl line-clamp-1">{{ sound.name }}</p>
        <div @click="changeCurrentSongName(sound.name, sound.url)" class="bg-cyan-600 size-20 m-auto rounded-full flex justify-center items-center cursor-pointer hover:bg-black-700">
          <p>Phát nhạc</p>
        </div>
        <!-- <video :src="sound.url" controls loop class="m-auto"></video> -->
      </div>
      <div class="fixed w-full h-24 bg-gray-800 bottom-0 border-t-1 border-t-cyan-700 flex justify-center items-center">
        <p class="text-xl">Bài hát hiện tại: {{ currentSongName }}</p>
      </div>
    </div>
  </div>
  <audio v-if="currentSongUrl" :src="currentSongUrl" controls autoplay loop class="hidden"></audio>
</template>