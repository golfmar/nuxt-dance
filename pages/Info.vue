<template lang='pug'>
.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent")
      h1 common info
      General
      .info
        h2 STANDARD VARIATIONS
        .unit
          h3 Waltz 
          p  Double Rev Spin
          p  Drag Hesitation
          p  Backward Lock Step
          p  Outside Spin
          p  Underturned Outside Spin
          p  Turning Lock
          p  Telemark
          p  Open Telemark and Wing
          p  Open Telemark Cross Hesitation
          p  Open Impetus Turn
          p  Wing After Open Impetus Turn
          p  Cross Hesitation After Open Impetus
          p  Weave from PP After Open Impetus Turn
          p  The Weave from PP After a Whisk
          p  The Turning Lock to the Right
        .unit
          h3 Quickstep 
          p  Fish Tail
          p  Four Quick Run
          p  Running Right Turn
          p  Nat Turn Back Lock Running Finish
          p  V-6
          p  Telemark
          p  Tipple Chasse to Left
        .unit
          h3 Foxtrot
          p  Open Telemark Nat Turn Outside Swivel
          p  The Weave from PP after Open Impetus
          p  Top Spin
          p  Hover Feather
          p  Nat Telemark
          p  Telemark
          p  Quick Open Reverse
          p  Quick Natural Weave
          p  Reverse Pivot
          p  Open Telemark Feather ending
          p  Nat Weave
          p  Hover Telemark
          p  Nat Twist Turn
        .unit
          h3 Tango
          p  Prom Link
          p  Four Step
          p  Fallaway Prom
          p  Brush Tap
          p  Four Step Change
          p  Outside Swivel after Open Prom
          p  Outside Swivel turning L after Open Finish
          p  Outside Swivel after 1 and 2 of Rev Turn
          p  Back Open Prom
      .info
        h2 THE NAMED VARIATIONS
        .unit
          h3 Waltz 
          p  Left Whisk
          p  Fallaway Whisk
          p  Closed Wing
          p  Contra Check
          p  Fallaway Natural Turn
          p  Running Spin Turn
        .unit
          h3 Quickstep 
          p  Six Quick Run
          p  Hover Corte
          p  Tipsy
          p  Rumba Cross
          p  Running Spin Turn
        .unit
          h3 Foxtrot
          p  Hover Cross
          p  Curved Feather
          p  Back Feather
          p  Nat Hover Telemark
          p  Fallaway Rev and Slip Pivot
          p  Nat Zig-Zag from PP
          p  Curved Three Step
          p  Extended Reverse Wave
        .unit
          h3 Tango
          p  Fallaway Four Step
          p  Chase
          p  Oversway
          p  Tilt Oversway
          p  Five Step
          p  Mini Five Step
</template>
<script setup>

import { ref, onMounted } from 'vue'
definePageMeta({
  layout: "card"
})


const showComponent = ref(false)
onMounted(() => {
  showComponent.value = true
})
</script>
<style lang='scss' scoped>
.unit{
h3 {
    margin: 7px 0 0  0;
  }
}
.info{
  float: left;
  margin: 20px 20px 0 0;
  h2{
    margin: 0 0 10px 0;
  }
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