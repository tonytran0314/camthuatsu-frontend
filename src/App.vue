<script setup>
  import { ref, onMounted } from 'vue'

  const soundData = ref([])

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
  <div>
    <h1>Danh sách nhạc</h1>
    <ul>
      <li v-for="(sound, index) in soundData" :key="index" class="">
        {{ sound.name }}
        <br>
        <video :src="sound.url" controls></video>
      </li>
    </ul>
  </div>
</template>