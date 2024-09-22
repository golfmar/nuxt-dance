<template lang='pug'>
.common-page.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      h1 TANGO
      p <strong>Time Signature</strong> - 2/4 Two beats to one bar
      p <strong>Tempo (beats per minute)</strong> - 33 to 34
      p <strong>Accented Beat</strong> - Equal on each beat
      p <strong>Counting in Beats</strong> - 1 and 2 and, 1 and 2 and, etc.
      p <strong>Counting in Beats and Bars. Count the first bar, then each successive bar as they accumulate, thus:</strong> - 1234, 2234, 3234, etc.
      p Counting in Beats and Bars:
      p Count the first bar, then each successive bar as they accumulate, thus:
      p 1 and 2 and, 2 and 2 and, 3 and 2 and, etc.
      p A slow count equals 1 beat
      p A quick count equals 1/2 beat



      h2 THE HOLD
      h3 Man
      p Stand facing LOD with feet closed, slip the right foot slightly back, turning the feet and body to the left, to face almost DC.<br> The hold will be more compact and the lady held more to the man's right side than in the other dances. The man will place his right arm a little further round the lady's back, with his forearm parallel to the floor. His left arm will be held as in other dances, except that the elbow will be higher and the forearm more acutely angled, bringing the left hand slightly closer to the body.
      h3 Lady
      p Stand backing LOD with feet closed, slip the LF slightly forward turning the feet and body to the left to back almost DC.<br> Place the left hand on the man's back with the fingers neatly grouped just under his armpit, the palm of the hand should not be showing. The right arm is held as in other dances, but will not slant as much forward from the elbow.
      h2 THE WALK FORWARD
      p Stand as described in the hold, knees slightly flexed.<br> Allow the booy to start to move forward, release the heel of the moving foot from the floor by further flexing the knee of the moving leg. Pick the foot up to just clear the floor, and place it forward onto the heel, straightening the knee of the front leg, immediately lowering the ball of foot when the front knee will again slightly fiex.<br> Delay the back foot for as long as the music will allow, bring the back foot sharply forward to its forward oosition, the knee flexing more on passing the supporting foot, but taking care not to flex further the supporting knee - then continue as above.<br> It is normal to dance two Walks following a Closed Finish, but more Wa'ks could be danced. These may be danced with no turn, or curved to the left if following with a Reverse figure.<br> When dancing a RF Walk to PP, step forward RF right shoulder leading, then turn lady to PP. The right shoulder will move back as LF is placed to the side of RF without weight in PP. Footwork will be H of RF and IE of B LF. The lady turns 1/4 to R to end in PP. Her footwork will be IE of BH, then IE of B RF. (Timing S&)
      h2 THE WALK BACKWARD
      h3 Lady
      p The points mentioned in the Walk Forward would apply to the Backward Walk. The step is taken back onto the toe, and at the end of the step, release the ball of the front foot, each time picking the foot up very slightly from the floor as it moves to a back position.
      h3 Man
      p The man would not walk back in the same manner when dancing such steps as 1 and 2 of a Back Corte, steps 3 and 4 of Reverse Turns, steps 4 and 5 of Fallaway Promenade, etc. His poise will be more forward and he is in control of the movement. When stepping back on step 1 of a Back Corte or the above mentioned figures, the heel will lower at the end of the step, and as the heel lowers the heel of the front foot will be released from the floor - not the toe.
      h2 GENERAL
      p Because of the hold and position of the body - lady held to man's right side, his right side in advance- steps on LF will be placed forward with thighs crossed in CBMP. RF forward, thighs will be open, right shoulder leading, When moving backwards left side would lead, LF back left shoulder leading, RF back in CBMP thighs crossing and uncrossing in a similar manner.<br> Steps forward and backwards will be slightly shorter than in other dances due to the lack of swing from the hips. The feet are picked up more, the back foot may skim over the flocr as it moves forward, or may leave the floor slightly. Although the footwork of steps forward is given as heel, pressure will be felt on the outside edge of LF and inside edge of RF. Backward steps inside edge of LF and outside edge of RF. Tension should be felt in the calves and thighs. Walks are a very important part of Tango character. and body weight should be kept forward at all times.<br> Because, when walking forward along the LOD the man would be facing almost DC with his feet and body, the lady backing almost DC, direction only will be given on a forward or backward step, eg down LOD not facing LOD, DC - not facing DC. Other type positions of feet are given as alignments as in other dances.<br> eg Basic Reverse Turn as man: 1 Direction, 2 and 3 Alignment, 4 Direction, 5 and 6 Alignment, When in PP, and the direction and alignment are different, give both direction and alignment, eg Steps 1 and 2 of Promenade.
      h2 FOOTWORK
      p As there is no rise. ball of foot is used instead of toe.<br> All normal forward walks and steps 1 and 2 of Prom figures are heel. When closing the feet: whole foot. When closing in PP: ball heel. Back steps with a shoulder lead: inside edge of ball heel. Back steps in CBMP or with CBM: bail heel.<br> When turning to the left, the second step will be bali heel as man, whole foot as lady. Exception: step 2 of Progressive Side Step Reverse Turn, this is inside edge of foot as man and lady. Other side steps vary. some are inside edge of foot, others inside edge of ball heel.
      h2 AMOUNT OF TURN
      p Candidates need not give the amount of turn between each step of a figure, only the overall amount of turn is required.

      ul
        //-  --фигура 
        li(v-for="(item,index) in documents" :key="index") 
          h3 {{index+1}}. {{item.id.replace(/--/g, ' ')}}
            NuxtLink(:to="`/Tango/${item.id}`" class='linkTo')
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
const { documents } = useFetchDocuments('Tango')

onMounted(() => {
  showComponent.value = true
});
</script>
