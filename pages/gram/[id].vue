<template lang='pug'>
.container
  NuxtLink(:to="`/gram`" class='linkTo') Back to the figures
    MyIcon
  .card
    h2 {{id}}
    table
      thead
        tr
          th(v-for="i in topColls" :key="index") {{ i }}
      h3 Man
      tbody
        tr( v-for="(key, index) in keys" :key="index"   ) 
          td {{key}}
          td(v-for="(item, i) in documentsMan[key]" :key="i") {{ item }}
      h3 Lady
      tbody
        tr( v-for="(key, index) in keys" :key="index"   ) 
          td {{key}}
          td(v-for="(item, i) in documentsLady[key]" :key="i") {{ item }}

  General
</template>
<script setup>
const { id } = useRoute().params
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
const documentsLady = ref();
const keys = ref();

const fetchData = async () => {
  //   // Получение документов из основной коллекции
  const mainCollectionRef = collection(db, "Waltz");
  const mainQuerySnapshot = await getDocs(mainCollectionRef);

  //   // Извлечение данных только один раз для всех документов
  const firstDocSnapshot = mainQuerySnapshot.docs.id; // Берём id документ
  const subCollectionRefMan = collection(db, "Waltz", id, "Man");
  const subCollectionRefLady = collection(db, "Waltz", id, "Lady");
  const subQuerySnapshotMan = await getDocs(subCollectionRefMan);
  const subQuerySnapshotLady = await getDocs(subCollectionRefLady);

  const subCollectionArrayMan = subQuerySnapshotMan.docs.map(subDocSnapshot => ({
    ...subDocSnapshot.data()
  }));
  const subCollectionArrayLady = subQuerySnapshotLady.docs.map(subDocSnapshot => ({
    ...subDocSnapshot.data()
  }));


  documentsMan.value = subCollectionArrayMan[0];
  documentsLady.value = subCollectionArrayLady[0];
  keys.value = Object.keys(documentsMan.value)
};



// const top = collection(db, "top");
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
.linkTo {
  margin: 0 0 30px 0;
}


table {
  width: auto;
  margin: 10px 0 0 0;
  background: #fff;
  border: 2px solid brown;
  box-shadow: 1px 1px 4px #666;
  font-family: "Roboto-Regular", sans-serif;
  font-size: 1rem;
  font-weight: 400;
}


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
    white-space: wrap;
  }

  tr {
    &:nth-child(2n) {
      background-color: $blue-grey-1;
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

// .tabel {
//   margin: 10px 0 0 0;
//   background: #fff;
//   border: 2px solid brown;
//   box-shadow: 1px 1px 4px #666;
//   font-family: "Roboto-Regular", sans-serif;
//   font-size: 1rem;
//   font-weight: 400;
//   display: inline-grid;
//   grid-template-columns: repeat(9, max-content);



//   p {
//     grid-column: 1/-1;
//   }

//   span {
//     font-size: 14px;
//     font-weight: 400;
//     line-height: 1;
//     border: 1px solid #ededed;
//     text-shadow: none;
//     display: grid;
//     place-items: center;
//     padding: 4px 15px;
//     text-align: center;

//     &.tabel__head {
//       text-transform: uppercase;
//       background-color: brown;
//       color: #fff;
//     }
//   }
// }</style>
