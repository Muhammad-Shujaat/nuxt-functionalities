<template>
    <div class="">
        home here
    </div>
    <h1>from public dir by img tag</h1>

    <img src="/img.png" alt="">
    <h1>{{ title }}</h1>
    <NuxtImg :src="`/${img}`" v-if="img" />



    <!-- <h1>from assets dir</h1>
    <NuxtImg scr="@/assets/img/img.png" />
    <img src="@/assets/img/img.png" alt=""> -->
</template>
<script setup>
defineProps({
    img: String,
    title:String
})


const { sum } = useStore()
sum()
</script>
