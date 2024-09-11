<template lang='pug'>
.container
  NuxtLink(:to="`/waltz`" class='linkTo') Back to the figures
    MyIcon
  h2 {{id}} 
  VideoFirebase(:videoLink="video" v-if="video")
  .card
    table.gros
      thead
        tr
          th(v-for="i in topColls" :key="index") {{ i }}
      h3 Man
      tbody(v-if="documentsMan")
        tr( v-for="(key, index) in keys" :key="index"   ) 
          td {{key}}
          td(v-for="(item, i) in documentsMan[key]" :key="i"  v-html='item') 
      h3 Lady
      tbody(v-if="documentsLady")
        tr( v-for="(key, index) in keys" :key="index"   ) 
          td {{key}}
          td(v-for="(item, i) in documentsLady[key]" :key="i"  v-html='item')
    table.clein
      tbody
        tr(v-if="documentsManNote") 
          th Note Man: 
          td
            div(v-for="el in documentsManNote" :key="index" ) 
              p(v-html='el')
        tr(v-if="documentsLadyNote")  
          th Note Lady: 
          td
            div(v-for="el in documentsLadyNote" :key="index" ) 
              p(v-html='el')
        tr(v-if="documentsPRECEDE")
          th PRECEDE
          td 
              div <strong>Associate:</strong> 
                p(v-for="i in documentsPRECEDE" :key="index" ) 
                  div(v-for="el in i.Associate" :key="index" ) 
                    p(v-html='el')
              div <strong>Member:</strong>
                p(v-for="i in documentsPRECEDE" :key="index" ) 
                  div(v-for="el in i.Member" :key="index" ) 
                    p(v-html='el')
        tr(v-if="documentsFOLLOW")
          th FOLLOW
          td 
              div <strong>Associate:</strong>
                p(v-for="i in documentsFOLLOW" :key="index" ) 
                  div(v-for="el in i.Associate" :key="index" ) 
                    p(v-html='el')
              div <strong>Member:</strong>
                p(v-for="i in documentsFOLLOW" :key="index" ) 
                  div(v-for="el in i.Member" :key="index" ) 
                    p(v-html='el')

  .card(v-if="id==='RF Closed Change (Natural to Reverse)'")
    h2 LF Closed Change (Reverse to Natural)
    table
      h3 Man
      p Except for alignment this Closed Change is the normal opposite to the above. Alignment DW throughout.
      table.clein
        tbody
          tr 
            th PRECEDE
            td 
                div Associate:
                div Member:
            td 
              div Rev Turn, 456 of Rev Turn after a Neat Spin Turn. Hesitation Change near Corner.
              div Double Rev Spin.
          tr
            th FOLLOW
            td 
                div Associate:
                div Member:
            td 
              div Any Nat Fig.
              div Any Nat Fig.
  General
</template>
<script setup>
const id = useRoute().params.id.replace(/--/g, ' ')
console.log(id);
import MyIcon from '@/assets/svg/click.svg'
definePageMeta({
  layout: "card"
})
import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc, getDocs } from "firebase/firestore";
// ==========top==========
var topColls = ref([]);
const top = query(collection(db, "top"));
// ==========content==========
const documentsMan = ref();
const documentsManNote = ref();
const documentsLadyNote = ref();
const documentsLady = ref();
const documentsPRECEDE = ref();
const documentsFOLLOW = ref();
const video = ref();
const keys = ref();
const fetchData = async () => {
  //   // Получение документов из основной коллекции
  const mainCollectionRef = collection(db, "Waltz");
  const mainQuerySnapshot = await getDocs(mainCollectionRef);
  //   // Извлечение данных только один раз для всех документов
  const firstDocSnapshot = mainQuerySnapshot.docs.id; // Берём id документ
  const subCollectionRefMan = collection(db, "Waltz", id, "Man");
  const subCollectionRefLady = collection(db, "Waltz", id, "Lady");
  const subCollectionRefPRECEDE = collection(db, "Waltz", id, "PRECEDE");
  const subCollectionRefFOLLOW = collection(db, "Waltz", id, "FOLLOW");
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
    const docSnap = await getDoc(doc(db, "Waltz", id));
    if (docSnap.exists()) {
      video.value = docSnap.data().video
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
};
onMounted(async () => {
  console.log(id);
  fetchData();
  onSnapshot(top, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      topColls.value = doc.data().top;
    });
  });
});
</script>
<style lang='scss' scoped>
.linkTo {
  margin: 0 0 30px 0;
}

h2 {
  margin: 0 0 10px 0;
}

.card {
  margin: 20px 0 0 0;
}

table {
  &.gros {
    width: auto;
    margin: 10px 0 0 0;
    background: #fff;
    outline: 2px solid brown;
    box-shadow: 1px 1px 4px #666;
    font-family: "Roboto-Regular", sans-serif;
    font-size: 1rem;
    font-weight: 400;

    th,
    td {
      border: 1px solid rgb(165, 164, 164);
      padding: 8px;
      text-align: left;
      /* Чтобы содержимое ячеек не переносилось */
    }

    /* Применяем видимые размеры только для шапки */
    thead th {
      border: 1px solid rgb(165, 164, 164);
      white-space: nowrap;
      /* Автоматическая ширина по содержимому */
    }

    thead tr th {
      font-size: 14px;
      font-weight: 400;
      line-height: 1;
      border: 1px solid #ededed;
      text-shadow: none;
      padding: 4px 15px;
      text-align: center;
      text-transform: uppercase;
      background-color: brown;
      color: #fff;
    }

    tbody {
      td {
        width: auto;
        white-space: pre-wrap;
      }

      tr {
        &:nth-child(2n) {
          background-color: $blue-grey-1;
        }
      }
    }
  }

  &.clein {
    margin: 10px 0 0 0;

    tr {
      border-top: 5px solid transparent;
    }

    th {
      white-space: nowrap;
      padding: 0 8px 8px 3px;
    }

    th,
    td {

      vertical-align: top;
    }

    td {
      display: inline-grid;
      // grid-template-columns: 100px minmax(100px, max-content);


      // grid-template-rows: 100px 1fr;


      &:not(:has(p)) div {
        padding: 8px 0 3px;

      }
    }


    p div {
      padding: 3px 8px 3px 3px;
    }
  }
}

h3 {
  font-size: 14px;
  display: inline-block;
  line-height: 1.8;
  text-shadow: none;
  padding: 2px 5px;
}
</style>
