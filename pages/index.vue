<template lang='pug'>
#home
  transition(mode='easy-in-out' name='opentab')
    div(v-if="showComponent")
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
.cover-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  h1{
    font-size: 40px;
  }
}



p {
  font-family: "RR", sans-serif;
  font-size: 20px;
  text-align: center;
  color: azure;
  margin: 20px 0 0 0;
}

@media (max-width: 767px) {
  p {

    font-size: 15px;
  }
}
</style>