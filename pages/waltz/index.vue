<template lang='pug'>
.common-page.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      h1 Waltz
      p <strong>Time Signature</strong> - 3/4 Three beats to one bar
      p <strong>Tempo (beats per minute)</strong> - 30
      p <strong>Accented Beat</strong> - One
      p <strong>Counting in Beats</strong> - 123, 123, etc.
      p <strong>Counting in Beats and Bars</strong> - Count the first bar, then each successive bar as they accumulate, thus:
      p 123, 223, 323, etc.
      p Each step will equal one beat.
      ul
        //-  --фигура 
        li(v-for="(item,index) in documents" :key="index") 
          h3(v-if="item.id =='RF-Closed-Change-(Natural-to-Reverse)'") {{index+1}}. {{item.id.replace(/--/g, ' ') +' / ' +'LF Closed Change (Reverse  to Natural)'}}
            NuxtLink(:to="`/waltz/${item.id}`" class='linkTo')
              MyIcon
          h3(v-else) {{index+1}}. {{item.id.replace(/--/g, ' ')}}
            NuxtLink(:to="`/waltz/${item.id}`" class='linkTo')
              MyIcon


</template>
<script setup>
import { onMounted, ref } from 'vue'
import MyIcon from '@/assets/svg/click.svg'
import { db } from "@/composables/firebase.ts";
import { collection, getDocs } from "firebase/firestore";
definePageMeta({
  layout: "card"
})
const showComponent = ref(false)

const documents = ref([]);
const fetchData = async () => {
  // Получение документов из основной коллекции
  const mainCollectionRef = collection(db, "Waltz");
  const mainQuerySnapshot = await getDocs(mainCollectionRef);

  documents.value = await Promise.all(mainQuerySnapshot.docs.map(async (docSnapshot) => {
    // const docData = docSnapshot.data();

    // Получение вложенной коллекции
    // const subCollectionRef = collection(db, "Waltz", docSnapshot.id, 'Man');
    // const subQuerySnapshot = await getDocs(subCollectionRef);

    // const subCollectionArray = subQuerySnapshot.docs.map(subDocSnapshot => ({
    //   // id: subDocSnapshot.id,
    //   ...subDocSnapshot.data()
    // }));

    return {
      // ---здесь нужно только id которое посылается на дочерний
      // id: docSnapshot.id.replace(/\s+/g, '-'),
      id: docSnapshot.id.replace(/\s+/g, '--'),
      // subCollectionArray
    };
  }));
};

onMounted(() => {
  fetchData();
  showComponent.value = true
});
</script>
