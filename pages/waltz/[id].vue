<template lang='pug'>
div
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      NuxtLink(:to="`/waltz`" class='linkTo') Back to the figures
        MyIcon
      h1 {{id}} 
      VideoFirebase(:videoLink="video" v-if="video")

      .card(v-if="documentsMan")
        table.gros
          thead
            tr
              th(v-for="i in topColls" :key="index") {{ i }}
          h3(v-if="documentsMan") Man
          tbody(v-if="documentsMan")
            tr( v-for="(key, index) in keys" :key="index"   ) 
              td {{key}}
              td(v-for="(item, i) in documentsMan[key]" :key="i"  v-html='item') 
          h3(v-if="documentsLady") Lady
          tbody(v-if="documentsLady")
            tr( v-for="(key, index) in keys" :key="index"   ) 
              td {{key}}
              td(v-for="(item, i) in documentsLady[key]" :key="i"  v-html='item')
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
const top = query(collection(db, "top"));

// ==========content==========
const documentsMan = ref();
const documentsLady = ref();
const video = ref();
const Note = ref();
const keys = ref();

const fetchData = async () => {
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

  try {
    const docSnap = await getDoc(doc(db, "Waltz", id));
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
  } else {
    documentsMan.value = subCollectionArrayMan[0];
  }

  if (subCollectionArrayLady.length > 1) {
    documentsLady.value = subCollectionArrayLady[1];
  } else {
    documentsLady.value = subCollectionArrayLady[0];
  }

  keys.value = Object.keys(documentsMan.value);
  showComponent.value = true;
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
.linkTo {
  margin: 0 0 30px 0;
}

h2 {
  font-family: "RR", sans-serif;
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
    border: 2px solid #2d019b;
    box-shadow: 1px 1px 4px #666;
    font-family: "Roboto-Regular", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #000;

    h3 {
      display: block;
      font-size: 14px;
      line-height: 1;
      padding: 6px 2px;
      margin: 0 0 0 2px;
    }


    thead tr {

      th {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        text-shadow: none;
        // text-align: center;
        text-transform: uppercase;
        background-color: #9167fc;
        color: #fff;
        padding: 6px 33px 4px 5px;
        white-space: nowrap;
        border: 1px solid #fff;
      }
    }

    tbody {
      td {
        width: auto;
        white-space: pre-wrap;
        padding: 6px 33px 4px 5px;
        text-align: left;
        border: 1px solid $blue-grey-3;
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
      border-bottom: 15px solid transparent;
    }

    th {
      white-space: nowrap;
      padding: 0 20px 8px 0;
    }

    th,
    td {
      vertical-align: top;
    }

    td {
      display: inline-grid;
      row-gap: 5px;

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
  line-height: 1;
  padding: 2px 0;
}

.recomendet {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  column-gap: 6px;

  .Note {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 20px;

    p {
      position: relative;
      opacity: .6;
      white-space: nowrap;

      &::after {
        content: "";
        position: absolute;
        background-color: red;
        width: 2px;
        height: 100%;
        top: 0;
        left: -6px;
      }
    }
  }
}

.Note {
  ::v-deep .unit {
    display: grid;
    grid-template-rows: max-content 1fr;
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
      grid-template-columns: 100px 1fr;
    }

    h4 {
      // display: inline-block;
    }
  }
}
.linkTo {
  @include ts;
  color: azure;

}
.opentab-enter-from {
  opacity: 0;
  transition: opacity .3s ease-in-out;
}

.opentab-enter-to {
  opacity: 1;
  transition: opacity .3s ease-in-out;
}
</style>
