<template lang="pug">
div
	video(v-if="videoUrl" controls width="600")
		source(:src="videoUrl" type="video/mp4")
	p(v-else) Загрузка видео...
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { ref as storageRef, getDownloadURL } from 'firebase/storage'
import { storage } from '@/composables/firebase.ts'
const { videoLink } = defineProps(['videoLink'])
const videoUrl = ref(null)
onMounted(async () => {
	try {
		const videoRef = storageRef(storage, `Waltz/${videoLink}`)
		videoUrl.value = await getDownloadURL(videoRef)
	} catch (error) {
		console.error('Ошибка загрузки видео:', error)
	}
})
</script>
<style lang="scss" scoped>
div {
	display: inline-block;
	border-radius: 5px;
	overflow: hidden;
	@include shadow;
}
</style>