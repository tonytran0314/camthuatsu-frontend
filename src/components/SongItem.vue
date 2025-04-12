<script setup>
    const props =  defineProps(['imageFile', 'title'])
</script>

<template>
    <div class="flex flex-col gap-3 w-36 cursor-pointer">
        <div>
            <img :src="imageFile" class="w-full aspect-square rounded-lg" alt="song cover">
        </div>
        <p class="text-slate-100 line-clamp-2">{{ title }}</p>
    </div>
</template>