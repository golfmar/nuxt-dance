<template lang='pug'>
div
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      h1 Quickstep
      p <strong>Time Signature</strong> - 4/4 Four beats to one bar
      p <strong>Tempo (beats per minute)</strong> - 50
      p <strong>Accented Beat</strong> - One and Three (One stronger)
      p <strong>Counting in Beats</strong> - 1234     1234 etc.
      p <strong>Counting in Beats and Bars. Then each successive bar as they accumulate, thus:</strong> -1234 2234 3234, etc.
      p A slow count equals 2 beats
      p A quick count equals 1 beat
      ul
        //-  --фигура 
        li(v-for="(item,index) in documents" :key="index") 
          h3 {{index+1}}. {{item.id.replace(/--/g, ' ')}}
            NuxtLink(:to="`/quickstep/${item.id}`" class='linkTo')
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
  const mainCollectionRef = collection(db, "Quickstep");
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
<style lang='scss' scoped>
li {
  margin: 15px 0 0 0;
  display: flex;
  column-gap: 20px;
  align-items: center;
}

p {
  line-height: 1.4;
}

h2 {
  display: block;
}

h3 {
  position: relative;
  transition: all 0.2s;

  &:hover {
    color: brown;
  }

  .linkTo {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    left: 0;

    svg {
      position: absolute;
      right: -20px;
    }
  }
}

.opentab-enter-from {
  opacity: 0;
  transition: opacity .5s ease-in-out;
}

.opentab-enter-to {
  opacity: 1;
  transition: opacity .5s ease-in-out;
}
</style>