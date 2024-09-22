<template lang='pug'>
.div 
  .card(v-if="documentsMan")
          table.gros
            thead
              tr
                th(v-for="i in topColls" :key="index" v-html='i') 
            h3(v-if="documentsMan") Man
            tbody(v-if="documentsMan")
              tr( v-for="(key, index) in keys" :key="index"   ) 
                td(data-label="Step") {{key}}
                td(v-for="(item, i) in documentsMan[key]" :key="i"  v-html='item' :data-label="topColls[i+1]") 
            h3(v-if="documentsLady") Lady
            tbody(v-if="documentsLady")
              tr( v-for="(key, index) in keys" :key="index"   ) 
                td(data-label="Step") {{key}}
                td(v-for="(item, i) in documentsLady[key]" :key="i"  v-html='item' :data-label="topColls[i+1]")
  .Note(v-html='Note')

</template>


<script setup>
import { ref, onMounted } from 'vue'
import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc, getDocs } from "firebase/firestore";


const props = defineProps({
 id: {
	type: String,
	required: false, 
},
	topColl: {
	type: String,
	required: false, 
},
	tanz: {
	type: String,
	required: false,
}
});

const id = props.id;
const tanz = props.tanz;
const topColl = props.topColl;
const emit = defineEmits(['Fertig'])




// ==========top==========
var topColls = ref([]);
const top = query(collection(db, topColl));
// ==========content==========
const documentsMan = ref();
const documentsManNote = ref();
const documentsLadyNote = ref();
const documentsLady = ref();
const documentsPRECEDE = ref();
const documentsFOLLOW = ref();
const video = ref();
const Note = ref();
const keys = ref();
const fetchData = async () => {
	//   // Получение документов из основной коллекции
	const mainCollectionRef = collection(db, tanz);
	const mainQuerySnapshot = await getDocs(mainCollectionRef);
	//   // Извлечение данных только один раз для всех документов
	const firstDocSnapshot = mainQuerySnapshot.docs.id; // Берём id документ
	const subCollectionRefMan = collection(db, tanz, id, "Man");
	const subCollectionRefLady = collection(db, tanz, id, "Lady");
	const subCollectionRefPRECEDE = collection(db, tanz, id, "PRECEDE");
	const subCollectionRefFOLLOW = collection(db, tanz, id, "FOLLOW");
	const subQuerySnapshotMan = await getDocs(subCollectionRefMan);
	const subQuerySnapshotLady = await getDocs(subCollectionRefLady);
	const subQuerySnapshotPRECEDE = await getDocs(subCollectionRefPRECEDE);
	const subQuerySnapshotFOLLOW = await getDocs(subCollectionRefFOLLOW);
	const subCollectionArrayMan = subQuerySnapshotMan.docs.map(subDocSnapshot => ({
		...subDocSnapshot.data()
	}));
	const subCollectionArrayLady = subQuerySnapshotLady.docs.map(subDocSnapshot => ({
		...subDocSnapshot.data()
	}));
	const subCollectionArrayPRECEDE = subQuerySnapshotPRECEDE.docs.map(subDocSnapshot => ({
		...subDocSnapshot.data()
	}));
	const subCollectionArrayFOLLOW = subQuerySnapshotFOLLOW.docs.map(subDocSnapshot => ({
		...subDocSnapshot.data()
	}));
	try {
		const docSnap = await getDoc(doc(db, tanz, id));
		if (docSnap.exists()) {
			video.value = docSnap.data().video
			Note.value = docSnap.data().note
			
		}
	} catch (e) {
		console.error("Error getting document: ", e);
	}




	if (subCollectionArrayMan.length > 1) {
		documentsMan.value = subCollectionArrayMan[1];
		documentsManNote.value = subCollectionArrayMan[0];
	} else {
		documentsMan.value = subCollectionArrayMan[0];
	}
	if (subCollectionArrayLady.length > 1) {
		documentsLady.value = subCollectionArrayLady[1];
		documentsLadyNote.value = subCollectionArrayLady[0];
	} else {
		documentsLady.value = subCollectionArrayLady[0];
	}
	documentsPRECEDE.value = subCollectionArrayPRECEDE;
	documentsFOLLOW.value = subCollectionArrayFOLLOW;
	keys.value = Object.keys(documentsMan.value)
	
	emit('Fertig', true)
};

onMounted(async () => {
	fetchData();
	onSnapshot(top, (querySnapshot) => {
		querySnapshot.forEach((doc) => {
			topColls.value = doc.data().top;
		});
	});

});
</script>
<style lang='scss' scoped>
.Note {
	::v-deep .unit {
		display: grid;

		grid-template-columns: 100px 1fr;
		column-gap: 5px;
		margin: 15px 0 0 0;

		h3 {
			grid-row: 1/5;
			display: inline-block;
			font-size: 14px;
		}

		div {
			display: grid;
			margin: 0 0 5px 0;
			grid-template-columns: max-content 1fr;
		}

		h4 {
			margin: 0 10px 0 0;
		}
	}
}
</style>
