<template lang='pug'>
div
  transition(mode='easy-in-out' name='opentab')
    #home(v-if="showComponent")
      .big-circles
        .big-circle
        .big-circle
        .big-circle
        .big-circle
        .big-circle
      
      .circle-wrapper
          .smallcircles
            .small-circle
            .small-circle
            .small-circle
            .small-circle
            .small-circle
            .small-circle
          .cover-wrapper
            h1 Technique of BALLROOM DANCING
            p Guy Howard
       
</template>

<script setup>
import { ref, onMounted } from 'vue'
const showComponent = ref(false)
onMounted(() => {
  showComponent.value = true
})
</script>




<style lang='scss' scoped>
#home {}


.cover-wrapper {

  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  font-size: 40px;
  text-align: center;
}

p {
  font-family: "RR", sans-serif;
  font-size: 20px;
  text-align: center;
  color: azure;
}

.opentab-enter-from {
  opacity: 0;
  transition: opacity .5s ease-in-out;
}

.opentab-enter-to {
  opacity: 1;
  transition: opacity .5s ease-in-out;
}


</style>