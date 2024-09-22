<template lang='pug'>
.common-page.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      h1 FOXTROT
      p <strong>Time Signature</strong> - 4/4 Four beats to one bar
      p <strong>Tempo (beats per minute)</strong> - 30
      p <strong>Accented Beat</strong> - One and Three (One stronger)
      p <strong>Counting in Beats</strong> - 1234, 1234, etc.
      p <strong>Counting in Beats and Bars. Count the first bar, then each successive bar as they accumulate, thus:</strong> - 1234, 2234, 3234, etc.
      p A slow count equals 2 beats
      p A quick count equals 1 beat
      ul
        //-  --фигура 
        li(v-for="(item,index) in documents" :key="index") 
          h3 {{index+1}}. {{item.id.replace(/--/g, ' ')}}
            NuxtLink(:to="`/foxtrot/${item.id}`" class='linkTo')
              MyIcon



</template>
<script setup>
import { onMounted, ref } from 'vue'
import MyIcon from '@/assets/svg/click.svg'
import { useFetchDocuments } from '@/composables/useFetchDocuments'

definePageMeta({
  layout: "card"
})

const showComponent = ref(false)
const { documents } = useFetchDocuments('Foxtrot')

onMounted(() => {
  showComponent.value = true
});
</script>
