<template lang='pug'>
.common-id.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      NuxtLink(:to="`/Tango`" class='linkTo') Back to the figures
        MyIcon
      h1 {{id}} 
      VideoFirebase(:videoLink="video" v-if="video")

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
      General


</template>




<script setup>
const id = useRoute().params.id.replace(/--/g, ' ')
import MyIcon from '@/assets/svg/click.svg'
definePageMeta({
  layout: "card"
})

import { ref, onMounted } from 'vue'
const showComponent = ref(false)



import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc, getDocs } from "firebase/firestore";
// ==========top==========
var topColls = ref([]);
const top = query(collection(db, "topTango"));
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
  const mainCollectionRef = collection(db, "Tango");
  const mainQuerySnapshot = await getDocs(mainCollectionRef);
  //   // Извлечение данных только один раз для всех документов
  const firstDocSnapshot = mainQuerySnapshot.docs.id; // Берём id документ
  const subCollectionRefMan = collection(db, "Tango", id, "Man");
  const subCollectionRefLady = collection(db, "Tango", id, "Lady");
  const subCollectionRefPRECEDE = collection(db, "Tango", id, "PRECEDE");
  const subCollectionRefFOLLOW = collection(db, "Tango", id, "FOLLOW");
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
    const docSnap = await getDoc(doc(db, "Tango", id));
    if (docSnap.exists()) {
      video.value = docSnap.data().video
      Note.value = docSnap.data().note
      showComponent.value = true
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
  showComponent.value = true

};
onMounted(async () => {
  fetchData();
  onSnapshot(top, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      topColls.value = doc.data().topTango;

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
  }
}
</style>
