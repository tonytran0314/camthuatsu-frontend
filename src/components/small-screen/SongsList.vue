<script setup>
    import { useFullscreenSongStore } from '@/stores/useFullscreenSongStore'

    const fullScreenSongStore = useFullscreenSongStore()
</script>

<template>
    <div class="w-full h-screen overflow-auto bg-slate-900 relative">
    <!-- [small screen] header -->
    <div class="w-full h-16 flex justify-center items-center">
      <p class="text-slate-100 font-playwrite text-2xl">Cấm Thuật Sư</p>
    </div>

    <!-- [small screen] songs list -->
    <div class="mt-4 pb-24 flex flex-col gap-2">
      <!-- [small screen] song item -->
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>

      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
      <div class="flex gap-2 items-center font-bevietnam text-base px-4 py-2 hover:bg-slate-800 cursor-pointer">
        <div class="size-10 min-w-10 min-h-10">
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-10 rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-1">
          Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
        </p>
      </div>
    </div>

    <!-- [small screen] current song -->
    <div class="w-full h-20 fixed bottom-0 shadow-lg p-4 flex gap-6 justify-between bg-slate-800 text-slate-100">
        <div @click="fullScreenSongStore.enterFullscreen" class="flex gap-2">
          <div class="size-12 min-w-12 min-h-12">
            <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="size-12 rounded-lg" alt="song cover">
          </div>
          <p class="line-clamp-2 text-base">
            Tên bài hát ở đây, nhiều chữ Tên bài hát ở đây, nhiều chữ  
          </p>
        </div>
        <div class="flex gap-8 items-center">
          <i class="fa-solid fa-pause text-2xl cursor-pointer"></i>
          <i class="fa-solid fa-forward-step text-2xl cursor-pointer"></i>
        </div>
    </div>
  </div>
</template>

<style>
    
</style>