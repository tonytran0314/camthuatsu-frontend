<script setup>
  import { ref } from 'vue'
</script>

<template>
  <div class="w-full h-screen bg-slate-900 flex flex-col">
    <div class="w-full h-12 flex items-center justify-end pr-4">
      <i class="fa-solid fa-down-left-and-up-right-to-center text-slate-100 text-2xl"></i>
    </div>
    <div class="w-full flex flex-col flex-1 px-4 justify-center gap-16">
      <div class="flex flex-col gap-6">
        <div>
          <img src="https://as2.ftcdn.net/jpg/13/08/49/51/1000_F_1308495170_VhNuIh06pGrlm1Xjt1P6eYWna0EALSsk.jpg" class="w-full aspect-square rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 text-2xl line-clamp-1">
          Tên bài hát chữ chạy
        </p>
      </div>
      <div class="w-full h-auto flex justify-center">
        <div class="flex items-center gap-8">
          <i class="fa-solid fa-backward-step text-4xl cursor-pointer text-slate-100"></i>
          <div class="bg-slate-800 size-20 rounded-full flex justify-center items-center">
            <i class="fa-solid fa-pause text-5xl cursor-pointer text-slate-100"></i>
          </div>
          <i class="fa-solid fa-forward-step text-4xl cursor-pointer text-slate-100"></i>
        </div>
      </div>
    </div>
  </div>
</template>