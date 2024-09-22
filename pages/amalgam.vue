<template lang='pug'>
.common-page.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent")
      h1 AMALGAMATIONS
      p The following amalgamations are suggested in each dance:
      .info
        h2 Waltz
        p 1. LF Closed Change, Nat Turn, RF Closed Change, Rev Turn. This is the basic amalgamation. 
        p 2. Whisk or Whisk at a corner. Chasse from PP, Nat Spin Turn, 4-6 Rev Turn to face LOD, 1-3 Rev Turn, Weave in Waltz time. 
        p 3. Hesitation Change, 1-3 Rev Turn, Rev Corte, Back Whisk, Chasse from PP, Underturned Nat Spin Turn, 4-6 Rev Turn to end DC, Rev Turn. 
        p 4. Rev Turn, Whisk Turning, Weave from PP, Spin Turn, Turning Lock. Nat 
        p 5. Underturned Nat Spin Turn or Impetus Turn, 4-6 Rev Turn, Open Telemark Wing, Chasse to R (1/2 turn), Outside Change. 
        p 6. Double Rev Spin. Drag Hesitation, Back Lock. Open Impetus, Weave from PP. 
        p 7. 1-3 Rev Turn, Rev Corte. Outside Spin. Hesitation Change, Open Telemark, Cross Hesitation, Back Whisk, Chasse from PP. 
        p 8. Reverse turn, Whisk, Chasse from PP, Nat spin Turn or Running Spin, Overturned Turning Lock, Weave from PP.
      .info
        h2 Foxtrot
        p 1. Feather Step, Rev Turn, Three Step, Nat Turn, Feather Step, 1-4 Rev Wave then Weave.
        p 2. Impetus Turn along side of room, Feather Finish ended DC, Open Telemark Feather ending. Change of Direction - or instead of Change of Direction -1-6 Rev Wave, Impetus Turn, Feather Finish.
        p 3 Feather Step, Open Telemark, Nat Turn, Outside Swivel, Weave from PP, Change of Direction ended DC, Nat Weave ended DW. 
        p 4. Impetus Turn, 4-6 Rev Turn ended DC against LOD, Top Spin, Hover Telemark, Feather Step ended DC, Open Telemark Feather ending, Three Step. Nat Telemark or Not Twist Turn. 
        p 5. Impetus Turn, Feather Finish and DC, Quick Open Reverse. Reverse Wave or Extended Reserve Wave.
      .info
        h2 Quickstep
        p 1. Quarter Turn to Right, Prog Chasse, Fwd Lock. Nat Turn with Hesitation, Chasse Rev, Prog Chase, Nat spin Turn. 
        p 2 Underturned Nat Spin Turn, Prog Chasse ended DC, Quick Open Rev. Prog Chasse ended DW, Tipple Chasse to Left, 2-4 of Back Lock, Running Finish. 
        p 3 Natural Turn at a corner, Tipple Chasse to R into 2- 4 of Fwd Lock, Natural Turn with Hesitation, Prog Chasse to the Right, Back Lock, Running finish. 
        p 4. Nat Spin Turn Rev Pivot ended DC. Double Rev Spin, Prog Chasse to R (1/2 turn) Outside Change end DW Fishtail. 
        p 5. Impetus Turn or Underturned Nat Spin Turn, Progressive Chasse ended DC, Quick Open Rev, Four Quick Run, Running Right Turn, Nat Turn, Back Lock, Running Finish or Tipple Chasse to Right. 
        p 6. Double Reverse Spin, Prog Chasse to Right end Backing DW, Tipple Chasse to Right, 2-4 of Forward Lock Step and DW. 
        p 7. Nat Spin Turn, Prog Chasse, Tipple Chasse to L. 2-4 Back Lock. Running Finish end DW, Fishtail.
      .info
        h2 Tango
        p 1. Two Walks LF RF, Prog Link, Closed Prom, Walk fwd LF, Rock Turn, Closed Finish, Two Walks LF RF ended DC, Open Rev lady in line. 
        p 2. Two Walks LF RF, Prog Link, That Twist Turn, Natural Prom Turn, Rock Turn Closed Finish. 
        p 3. 1-7 Prog Side Step Rev Turn, RF Rock, Back Corte, LF Walk, RF Walk turning to PP, Prom Turn along side of room, Closed Prom ended DC, Basic Rev Turn. 
        p 4. Open Rev lady outside Open Finish, Outside Swivel, 2-3 Prom Link, Brush Tap. 
        p 5. Four Step or Mini Five Step, Fallaway Prom, Prom turn, Rock Turn. Closed Finish, Four Step Change. 
        p 6 . Two Walks to DC (LF RF), 1-2 Open Rev, Outside Swivel. 2-3 Prom Link, Four Step or Mini Five Step, Nat Twist Turn - man turning square, LF Rock, Closed Finish. 
        p 7. Two Walks (LF RF) curved to end DC. Five Step end in PP DW. Fallaway Promenade, Prom Turn to Rock Turn.
      .info
        h2 Social Rhythm 
        p 1. Forward Walks to Side Step and Repeat. 
        p 2. Quarter Turn to R and L. Repeat and end second Quarter Turn to L in PP. 
        p 3. Promenade Chasse end with Lady square. 
        p 4. Follow with Natural Pivot Turn. 
        p 5. Forward walk to Side Step, and LOG. Follow with Reverse Pivot Turn, End Facing Wall. 
        p 6. Continue with Side Step with Lady Square, then side Step in PP. End with Lady Square.
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
.unit {
  h3 {
    margin: 7px 0 0 0;
  }
}

.info {
  float: left;
  margin: 20px 20px 0 0;

  h2 {
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