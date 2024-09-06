<template lang='pug'>
.container 
  h1 erste
  ul
    li(v-for="item in Hero" :key="index")
      p {{item.t}}
      p {{item.x}}
      
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'

// onMounted(async () => {
//   try {
//     const docSnap = await getDoc(doc(db, "my-collection", "erste"));
//     if (docSnap.exists()) {
//       Hero.value = docSnap.data()
//       console.log(Hero.value);
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
// });


import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc } from "firebase/firestore";
var Hero = reactive([]);
const SomeColl = query(collection(db, "my-collection"));
onMounted(async () => {
  onSnapshot(SomeColl, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      Hero.push(doc.data());
    });
  });
});



// onMounted(async () => {
//   try {
//     const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Präsens"));
//     if (docSnap.exists()) {
//       console.log(docSnap.data());
//       // docSnap.data().forEach((cell) => {
//       //   Hero.value.push(cell)
//       // });
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
// });












</script>
