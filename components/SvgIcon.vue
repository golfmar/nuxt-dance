<template lang='pug'>
svg(aria-hidden="true")
	use(:href="symbolId" :fill="current")
</template>
<script setup>


const props = defineProps({
	prefix: {
		type: String,
		default: 'icon',
	},
	name: {
		type: String,
		required: true,
	},
	color: {
		type: String,
	},
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>
<style lang='scss' scoped></style>