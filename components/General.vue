<template lang='pug'>
.notes
  .column
    h2 abbreviations
    .abbreviations
      .unit
        strong Align
        span - Alignment
      .unit
        strong BOF
        span - Ball of foot
      .unit
        strong CBM
        span - Contrary Body Movement (CBM)
      .unit
        strong CBMP
        span - Contrary Body Movement Position (CBMP)
      .unit
        strong Diag
        span - diagonal(ly)
      .unit
        strong e/0
        span - End of
      .unit
        strong F
        span - Foot
      .unit
        strong Fig
        span - Figure
      .unit
        strong fwd
        span - Forward
      .unit
        strong Fwk
        span - Footwork
      .unit
        strong H
        span - Heel
      .unit
        strong IE
        span - Inside edge
      .unit
        strong L
        span - Left
      .unit
        strong LOD
        span - Line of Dance (LOD)
      .unit
        strong Nat
        span - Natural
      .unit
        strong NFR
        span - Not foot rise
      .unit
        strong OP
        span - Outside Partner (OP)
      .unit
        strong PP
        span - Promenade position
      .unit
        strong PO
        span - Partner ouside
      .unit
        strong Pos
        span - Position
      .unit
        strong Prog
        span - Progressive
      .unit
        strong Prom
        span - Promenade
      .unit
        strong Q
        span - Quick
      .unit
        strong R
        span - Right
      .unit
        strong Rev
        span - Reverse
      .unit
        strong S
        span - Slow
      .unit
        strong St
        span - Straight
      .unit
        strong T
        span - Toe
  .column
    h2 General notes
    .unit(v-for="(doc, index) in documents" :key="index")
      button.doc-button.linkTo(@click="handlerClick(doc)")  {{index+1}}. {{ doc.id }}
        MyIcon
      p(v-if="doc.x !== '' && doc.isOpen== true " v-html='doc.x') 
    


  .column
    h2 DEFINITIONS
    .unit(v-for="(doc, index) in DEFINITIONS" :key="index")
      button.doc-button.linkTo(@click="handlerClick(doc)")  {{index+1}}. {{ doc.id }}
        MyIcon
      p(v-if="doc.x !== '' && doc.isOpen== true " v-html='doc.x') 
    



</template>
<script setup>
import { ref } from 'vue';
import MyIcon from '@/assets/svg/click.svg'
import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc } from "firebase/firestore";


const documents = reactive([
  { id: 'POSITIONS OF FEET', x: '', isOpen: false },
  { id: 'Left or Right Shoulder Leading', x: '', isOpen: false },
  { id: 'AMOUNTS OF TURN', x: '', isOpen: false },
  { id: 'Inside of a Turn', x: '', isOpen: false },
  { id: 'Left or Right Shoulder Leading', x: '', isOpen: false },
  { id: 'Outside of a Turn', x: '', isOpen: false },
  { id: 'Preparing to Step Outside Partner', x: '', isOpen: false },
  { id: 'Terms', x: '', isOpen: false },
  { id: 'RISE AND FALL', x: '', isOpen: false },
  { id: 'Alignment', x: '', isOpen: false },
  { id: 'FOOTWORK', x: '', isOpen: false },
  { id: 'CONTRARY BODY MOVEMENT (CBM)', x: '', isOpen: false },
  { id: 'SWAY', x: '', isOpen: false },
  { id: 'Poise', x: '', isOpen: false },
  { id: 'Balance', x: '', isOpen: false },
  { id: 'Hold', x: '', isOpen: false },
  { id: 'Walk Forward', x: '', isOpen: false },
  { id: 'Walk Backward', x: '', isOpen: false },
  { id: 'DESCRIPTIONS OF FIGURES', x: '', isOpen: false },
  { id: 'Heel Turn', x: '', isOpen: false },
  { id: 'Heel Pull', x: '', isOpen: false },
  { id: 'Contrary Body Movement Position (CBMP)', x: '', isOpen: false },
  { id: 'Direction', x: '', isOpen: false },
  { id: 'Promenade position', x: '', isOpen: false },
  { id: 'Outside Partner (OP)', x: '', isOpen: false },
  { id: 'Line of Dance (LOD)', x: '', isOpen: false },
])
const DEFINITIONS = reactive([
  { id: 'Closed Turn', x: '', isOpen: false },
  { id: 'Open Turn', x: '', isOpen: false },
  { id: 'Heel Turn.', x: '', isOpen: false },
  { id: 'Brush Step', x: '', isOpen: false },
  { id: 'The Natural Pivot', x: '', isOpen: false },
  { id: 'Heel Pull.', x: '', isOpen: false },
  { id: 'Pivoting Action', x: '', isOpen: false },
])



const selectedDocument = ref(null)


const handlerClick = async (el) => {
  try {
    const docRef = doc(db, 'General', el.id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      el.isOpen = !el.isOpen
      el.x = docSnap.data().x

    } else {
      console.log("Документ не найден")
    }

  } catch (error) {
    console.error("Ошибка получения документа:", error)
  }
}

</script>
<style lang='scss' scoped>
p {
  margin: 0 0 0 5px;
  font-size: 18px;
  line-height: 1.2;

}

.column h2 {
  display: block;
  font-size: 18px;
  margin: 10px 0 7px 0;
}

.notes {
  margin: 20px 0 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 25px;



  .abbreviations {
    .unit {
      display: flex;
      column-gap: 5px;
      align-items: center;
    }
  }

  .unit {

    strong,
    .doc-button {
      font-size: 14px;
      display: inline-block;
      font-weight: 600;
      line-height: 1.8;
      text-shadow: none;
      padding: 2px 0;
      text-transform: uppercase;
      line-height: 1;
      background: transparent;
      display: flex;
      align-items: center;

    }
    p {
      transition: all 0.2s;
      box-shadow: 0px 0px 8px #f4f2f2;
      background:  #fbfdfa;
      border-radius: 5px;
      padding: 5px;
      margin: 5px 0 5px 20px;
      color: #000;
    }
  }
}
</style>
