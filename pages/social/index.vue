<template lang='pug'>
.common-page.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      h1 SOCIAL RHYTHM
      p This form of Dancing is the best and simplest way of introducing 4/4 timing to a beginner. It is suitable for the crowded Ballroom or the<br> small floor (nightclub), and is sometimes referred to as Crush Dancing. May also be danced to Tango music 2/4.
      p <strong>Time Signature</strong> - 4/4 Four beats to one bar
      p <strong>Tempo (beats per minute)</strong> - 26 to 50
      p <strong>Accented Beat</strong> - One and Three or Two and Four
      p <strong>Slow Count</strong> - 2 Beats
      p <strong>Quick Count</strong> - 1 Beat
      p <strong>Timing</strong> - Slow Slow Quick Quick throughout
      p <strong>Footwork</strong> - Ball Heel throughout. A soft heel lead may be used on fwd steps.
      p <strong>Rise and Fall</strong> - Nil
      p <strong>Sway</strong> - Slight sway may be used
      p <strong>CBM</strong> - As normal
      p Small steps should be taken.
      p The Hold should be compact - similar to Tango, and all figures should be danced in a soft casual manner.
      p <strong>Note:</strong> Best Slow Tempo 28 to 32 BPM
      p Best Quick Tempo 36 to 42 BPM

      ul
        //-  --фигура 
        li(v-for="(item,index) in documents" :key="index") 
          h3 {{index+1}}. {{item.id.replace(/--/g, ' ')}}
            NuxtLink(:to="`/social/${item.id}`" class='linkTo')
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
const { documents } = useFetchDocuments('Social')

onMounted(() => {
  showComponent.value = true
});
</script>
