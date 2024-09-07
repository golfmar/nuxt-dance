<template lang='pug'>
.container 
  h1 Waltz
  ul
    //-  --фигура 
    li(v-for="item in documents" :key="index") 
      
      h3 {{documents.indexOf(item)+1}}.  {{item.id}}
      NuxtLink(:to="`/gram/${item.id}`" class='linkTo') View Details
        MyIcon


</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import MyIcon from '@/assets/svg/click.svg'
import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc, getDocs } from "firebase/firestore";

const documents = ref([]);
const fetchData = async () => {
  // Получение документов из основной коллекции
  const mainCollectionRef = collection(db, "Waltz");
  const mainQuerySnapshot = await getDocs(mainCollectionRef);

  const fetchedDocuments = await Promise.all(mainQuerySnapshot.docs.map(async (docSnapshot) => {
    const docData = docSnapshot.data();

    // Получение вложенной коллекции
    const subCollectionRef = collection(db, "Waltz", docSnapshot.id, 'Man');
    const subQuerySnapshot = await getDocs(subCollectionRef);

    const subCollectionArray = subQuerySnapshot.docs.map(subDocSnapshot => ({
      // id: subDocSnapshot.id,
      ...subDocSnapshot.data()
    }));

    return {
      id: docSnapshot.id,
      subCollectionArray
    };
  }));

  documents.value = fetchedDocuments;
};

onMounted(() => {
  fetchData();
});
</script>
<style lang='scss' scoped>
li {
  margin: 15px 0 0 0;
  display: flex;
  column-gap: 20px;
  align-items: center;
}

h2 {
  display: block;
}
</style>