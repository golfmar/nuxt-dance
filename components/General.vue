<template lang='pug'>
.notes
    h2 abbreviations
    .abbreviations
      .unit
        h3 Align
        span - Alignment
      .unit
        h3 BOF
        span - Ball of foot
      .unit
        h3 CBM
        span - Contrary Body Movement (CBM)
      .unit
        h3 CBMP
        span - Contrary Body Movement Position (CBMP)
      .unit
        h3 Diag
        span - diagonal(ly)
      .unit
        h3 e/0
        span - End of
      .unit
        h3 F
        span - Foot
      .unit
        h3 Fig
        span - Figure
      .unit
        h3 fwd
        span - Forward
      .unit
        h3 Fwk
        span - Footwork
      .unit
        h3 H
        span - Heel
      .unit
        h3 IE
        span - Inside edge
      .unit
        h3 L
        span - Left
      .unit
        h3 LOD
        span - Line of Dance (LOD)
      .unit
        h3 Nat
        span - Natural
      .unit
        h3 NFR
        span - Not foot rise
      .unit
        h3 OP
        span - Outside Partner (OP)
      .unit
        h3 PP
        span - Promenade position
      .unit
        h3 PO
        span - Partner ouside
      .unit
        h3 Pos
        span - Position
      .unit
        h3 Prog
        span - Progressive
      .unit
        h3 Prom
        span - Promenade
      .unit
        h3 Q
        span - Quick
      .unit
        h3 R
        span - Right
      .unit
        h3 Rev
        span - Reverse
      .unit
        h3 S
        span - Slow
      .unit
        h3 St
        span - Straight
      .unit
        h3 T
        span - Toe
    h2 General notes
    .unit(v-for="(doc, index) in documents" :key="index")
      button.doc-button.linkTo(@click="handlerClick(doc)")  {{index+1}}. {{ doc.id }}
        MyIcon
      p(v-if="doc.x !== '' && doc.isOpen== true " v-html='doc.x') 
    


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
			console.log("Документ получен:", el.x)
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

.notes {
	margin: 20px 0 0 0;

	h2 {
		display: block;
		font-size: 18px;
		margin: 10px 0 0 0;
	}

	.abbreviations {
		.unit {
			display: flex;
			column-gap: 5px;
			align-items: center;
		}
	}

	.unit {

		h3,
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
			box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, .2), inset 0px 2px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
			background: white;
			border-radius: 5px;
			padding: 5px;
			margin: 5px 0 5px 20px;
		}
	}
}
</style>
