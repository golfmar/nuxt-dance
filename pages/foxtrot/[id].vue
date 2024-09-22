<template lang='pug'>
.common-id.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-show="dataLoaded")
      NuxtLink(:to="`/Foxtrot`" class='linkTo') Back to the figures
        MyIcon
      h1 {{id}} 
      DynamicID(:id="id" tanz="Foxtrot" topColl="top" @Fertig="handleFertig")
      General


</template>




<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import MyIcon from '@/assets/svg/click.svg'

// Получаем id из маршрута
const id = useRoute().params.id.replace(/--/g, ' ')
// Переменные для управления видимостью компонента
const dataLoaded = ref(false)

// Устанавливаем метаданные для страницы
definePageMeta({
  layout: "card"
})

// Обрабатываем событие "Fertig" из дочернего компонента
const handleFertig = (isLoaded) => {
  dataLoaded.value = isLoaded
}
</script>
