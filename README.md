zjhtvilXbyDSUShe

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



    //- table.clein
    //-   tbody
    //-     tr(v-if="documentsManNote") 
    //-       th Note Man: 
    //-       td
    //-         div(v-for="el in documentsManNote" :key="index" ) 
    //-           p(v-html='el')
    //-     tr(v-if="documentsLadyNote")  
    //-       th Note Lady: 
    //-       td
    //-         div(v-for="el in documentsLadyNote" :key="index" ) 
    //-           p(v-html='el')
    //-     tr(v-if="documentsPRECEDE && documentsPRECEDE.length > 0")
    //-       th 
    //-         h3 PRECEDE 
    //-       td
    //-           .recomendet(v-if="documentsPRECEDE.some(item => item.note)")
    //-             div(v-for="i in documentsPRECEDE" :key="index" ) 
    //-               p(v-for="el in i.note" :key="index" v-html='el') 
    //-           .recomendet
    //-             h4(v-if="documentsPRECEDE.some(item => item.Associate)") Associate:
    //-             div(v-for="i in documentsPRECEDE" :key="index" ) 
    //-               p(v-for="el in i.Associate" :key="index" v-html='el')
    //-           .recomendet
    //-             h4(v-if="documentsPRECEDE.some(item => item.Member)") Member:
    //-             .all
    //-               div(v-for="i in documentsPRECEDE" :key="index" )
    //-                 p(v-for="el in i.Member" :key="index" v-html='el') 
    //-             .Note
    //-               p(v-for="i in documentsPRECEDE" :key="index" v-html='i.Note') 
        //- tr(v-if="documentsFOLLOW && documentsFOLLOW.length > 0")
        //-   th 
        //-     h3 FOLLOW
        //-   td 
        //-       .recomendet(v-if="documentsFOLLOW.some(item => item.note)")
        //-         div(v-for="i in documentsFOLLOW" :key="index" ) 
        //-           p(v-for="el in i.note" :key="index" v-html='el') 
        //-       .recomendet
        //-         h4(v-if="documentsFOLLOW.some(item => item.Associate)") Associate:
        //-         div(v-for="i in documentsFOLLOW" :key="index" ) 
        //-           p(v-for="el in i.Associate" :key="index" v-html='el') 
        //-       .recomendet
        //-         h4(v-if="documentsFOLLOW.some(item => item.Member)") Member:
        //-         .all
        //-           div(v-for="i in documentsFOLLOW" :key="index" )
        //-             p(v-for="el in i.Member" :key="index" v-html='el') 
        //-         .Note
        //-           p(v-for="i in documentsFOLLOW" :key="index" v-html='i.Note') 
  
  //- .card(v-if="id==='RF Closed Change (Natural to Reverse)'")
  //-   h2 LF Closed Change (Reverse to Natural)
  //-   table
  //-     h3 Man
  //-     p Except for alignment this Closed Change is the normal opposite to the above. Alignment DW throughout.
  //-     table.clein
  //-       tbody
  //-         //- tr 
  //-         //-   th h3 PRECEDE
  //-         //-   td 
  //-         //-       div Associate:
  //-         //-       div Member:
  //-         //-   td 
  //-         //-     div Rev Turn, 456 of Rev Turn after a Neat Spin Turn. Hesitation Change near Corner.
  //-         //-     div Double Rev Spin.

  //-         tr(v-if="documentsPRECEDE && documentsPRECEDE.length > 0")
  //-           th 
  //-             h3 PRECEDE 
  //-           td
  //-               .recomendet(v-if="documentsPRECEDE.some(item => item.note)")
  //-                 div(v-for="i in documentsPRECEDE" :key="index" ) 
  //-                   p(v-for="el in i.note" :key="index" v-html='el') 
  //-               .recomendet
  //-                 h4(v-if="documentsPRECEDE.some(item => item.Associate)") Associate:
  //-                 div(v-for="i in documentsPRECEDE" :key="index" ) 
  //-                   p(v-for="el in i.Associate" :key="index" v-html='el')
  //-               .recomendet
  //-                 h4(v-if="documentsPRECEDE.some(item => item.Member)") Member:
  //-                 .all
  //-                   div(v-for="i in documentsPRECEDE" :key="index" )
  //-                     p(v-for="el in i.Member" :key="index" v-html='el') 
  //-                 .Note
  //-                   p(v-for="i in documentsPRECEDE" :key="index" v-html='i.Note') 

  
//- <div class='unit'> 
//- <h3>MAN</h3> 
//- <p> 
//- LF side and sligntly fwd in PP
//- </p> 
//- </div>

//- <div class='unit'> 
//- <h3>LADY</h3> 
//- <p> 
//- RF diag fwd R shoulder leading in PP
//- </p> 
//- </div>

//- <div class='unit'> 
//- <h3>FOLLOW</h3> 
//- <p> 
//- Cross Hesitation, Chasse from PP
//- </p> 
//- </div>

//- <h3>
//- or
//- </h3> 
//- <div class='unit'> 
//- <h3>MAN</h3> 
//- <p> 
//- LF side and slightly back in PP
//- </p> 
//- </div>

//- <div class='unit'> 
//- <h3>LADY</h3> 
//- <p> 
//- RF fwd and slightly to R, R shoulder leading in PP
//- </p> 
//- </div>



//- <div class='unit'> 
//- <h3>ALIGNMENT</h3> 
//- <p> 
//- When the follows are Cross Hesitation, Chasse from PP or Wing: the alignment as Man wilt be:<br>
//- Pointing CW body facing Wall.<br>
//- When the follow is the Weave: the alignment as Man will be: Facing DW.<br>
//- In all cases the Lady's alignment will be: Pointing to LOD.<br>
//- </p> 
//- </div>

//- <div class='unit'> 
//- <h3>Note Man</h3> 
//- <p> 
//- May end with partner Square.<br>
//- May also be danced in Quickstep ending in PP or with lady square:<br>
//- Timing QQS or QQQQ.
//- </p> 
//- </div>

//- <div class='unit'> 
//- <h3>Note Lady</h3> 
//- <p> 
//- When ending with Lady square, ladies Foot position on step 4 will be 'Side and slightly back, Backing DC'.
 
//- </p> 
//- </div>










//- <div class='unit'> 
//- <h3>Note Man</h3> 
//- <p> 
//- The Wing may be underturned end facing LOD, there will be no F swivel between steps 5 and 6.
//- </p> 
//- </div>

//- <div class='unit'> 
//- <h3>Note Lady</h3> 
//- <p> 
//- Step 1 of the following Fig will be taken backing DC. There is no F swivel on step 3 of the Wing.
//- </p> 
//- </div>


//- <div class='unit'> 
//- <h3>Note Lady</h3> 
//- <p>
//- The lady should retain her backward poise trought with her head turned to L
//- </p>
//- </div>



//- <div class='unit'> 
//- <h3>PRECEDE</h3> 
//- A Chasse from PP ended DC after a Whisk or Back Whisk.<br>
//- Turning Lock ended DC after underturned Spin Turn or Impetus Turn.<br>
//- Outside Change ended DC after Open Telemark Cross Hesitation, or after Rev Corte (3/8).
//- </div> 



//- <div class='unit'> 
//- <h3>FOLLOW</h3> 
//- <p> 
//- LF fwd in CBMP OP on partner's L side into any Rev Fig.<br>
//- The best follows are Closed Telemark or Prog Chasse to R.
//- </p> 
//- </div>






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






    textarea.drop-linea( v-model="drop")
    .inputs
      button.clear(type = "button"  @click='clear') clear
      button(type = "button"  @click='clickHandler("RF")') RF
      button(type = "button"  @click='clickHandler("Rf")') Rf
      button(type = "button"  @click='clickHandler("LF")') LF
      button(type = "button"  @click='clickHandler("L")') L
      button(type = "button"  @click='clickHandler("R")') R
      button(type = "button"  @click='clickHandler("T")') T
      button(type = "button"  @click='clickHandler("HT")') HT
      button(type = "button"  @click='clickHandler("TH")') TH
      button(type = "button"  @click='clickHandler("St")') St
      button(type = "button"  @click='clickHandler("DC")') DC
      button(type = "button"  @click='clickHandler("DW")') DW
      button(type = "button"  @click='clickHandler("Centre")') Centre
    .inputs
      button(type = "button"  @click='clickHandler("fwd")') fwd
      button(type = "button"  @click='clickHandler("back")') back
      button(type = "button"  @click='clickHandler("side")') side
      button(type = "button"  @click='clickHandler("diag")') diag

      button(type = "button"  @click='clickHandler("Down")') Down
      button(type = "button"  @click='clickHandler("Up")') Up
      button(type = "button"  @click='clickHandler("Lower")') Lower
      button(type = "button"  @click='clickHandler("Rise")') Rise
      button(type = "button"  @click='clickHandler("Pointing")') Pointing 
    .inputs
      button(type = "button"  @click='clickHandler("Start")') Start
      button(type = "button"  @click='clickHandler("Continue")') Continue
      button(type = "button"  @click='clickHandler("Facing")') Facing
      button(type = "button"  @click='clickHandler("Backing")') Backing

      button(type = "button"  @click='clickHandler("Slight")') Slight
      button(type = "button"  @click='clickHandler("Body")') Body
      button(type = "button"  @click='clickHandler("Along")') Along
    .inputs
      button(type = "button"  @click='clickHandler("against")') against
      button(type = "button"  @click='clickHandler("across")') across
      button(type = "button"  @click='clickHandler("and")') and
      button(type = "button"  @click='clickHandler("close")') close
      button(type = "button"  @click='clickHandler("close")') closes
      button(type = "button"  @click='clickHandler("in")') in
      button(type = "button"  @click='clickHandler("facing")') facing
      button(type = "button"  @click='clickHandler("on")') on
      button(type = "button"  @click='clickHandler("turn")') turn
      button(type = "button"  @click='clickHandler("to")') to
      button(type = "button"  @click='clickHandler("rise")') rise
      button(type = "button"  @click='clickHandler("crosses")') crosses


    .inputs
      button(type = "button"  @click='clickHandler("e/o")') e/o
      button(type = "button"  @click='clickHandler("between")') between
      button(type = "button"  @click='clickHandler("behind")') behind
      button(type = "button"  @click='clickHandler("slightly")') slightly
      button(type = "button"  @click='clickHandler("without weight")') without weight
      button(type = "button"  @click='clickHandler("H of LF, then")') H of LF, then
      button(type = "button"  @click='clickHandler("Toes of both")') Toes of both
      button(type = "button"  @click='clickHandler("feet")') feet


      button(type = "button"  @click='clickHandler("No turn")') No turn
    .inputs
      button(type = "button"  @click='clickHandler("body")') body 
      button(type = "button"  @click='clickHandler("Wall")') Wall
      button(type = "button"  @click='clickHandler("completes")') completes
      button(type = "button"  @click='clickHandler("body turns less")') body turns less




      button(type = "button"  @click='clickHandler("NFR")') NFR
      button(type = "button"  @click='clickHandler("LOD")') LOD
      button(type = "button"  @click='clickHandler("PP")') PP
      button(type = "button"  @click='clickHandler("CBM")') CBM
      button(type = "button"  @click='clickHandler("CBMP")') CBMP
    .inputs
      button(type = "button"  @click='clickHandler("1")') 1
      button(type = "button"  @click='clickHandler("2")') 2
      button(type = "button"  @click='clickHandler("3")') 3
      button(type = "button"  @click='clickHandler("4")') 4
      button(type = "button"  @click='clickHandler("5")') 5
      button(type = "button"  @click='clickHandler("6")') 6
      button(type = "button"  @click='clickHandler("1/8")') 1/8
      button(type = "button"  @click='clickHandler("3/8")') 3/8
      button(type = "button"  @click='clickHandler("5/8")') 5/8
      button(type = "button"  @click='clickHandler("1/4")') 1/4
      button(type = "button"  @click='clickHandler("1/2")') 1/2
    .inputs
      button(type = "button"  @click='clickHandler(" - ")') -
      button(type = "button"  @click='clickHandler("&lt;br&gt;")') &lt;br&gt;

     
  
    form(@submit.prevent="handleSubmit")
      div

        //- input(type="radio" name="option" value="option1" id="option1") 
        //- label(for="option1") 1
        input(v-model="myArray1Item" type="text" id="myArray1Item" @focus=" myArray1Item=drop; drop = '';" )
  
      div

        //- input(type="radio" name="option" value="option1" id="option2" ) 
        //- label(for="option2") 2
        input(v-model="myArray2Item" type="text" id="myArray2Item" @focus="myArray2Item=drop; drop = '';")
  
      div

        //- input(type="radio" name="option" value="option1" id="option3") 
        //- label(for="option3") 3
        input(v-model="myArray3Item" type="text" id="myArray3Item" @focus="myArray3Item=drop; drop = '';")
  
      div

        //- input(type="radio" name="option" value="option1" id="option4") 
        //- label(for="option4") 4
        input(v-model="myArray4Item" type="text" id="myArray4Item" @focus="myArray4Item=drop; drop = '';")
  
      div

        //- input(type="radio" name="option" value="option1" id="option5") 
        //- label(for="option5") 5
        input(v-model="myArray5Item" type="text" id="myArray5Item" @focus="myArray5Item=drop; drop = '';")
  
      div

        //- input(type="radio" name="option" value="option1" id="option6" ) 
        //- label(for="option6") 6
        input(v-model="myArray6Item" type="text" id="myArray6Item" @focus="myArray6Item=drop; drop = '';")
  
      button(type="submit"   ) Add to Arrays
  
    // Сообщение об успешном добавлении
    
    //- form(@submit.prevent="handleFertig")
    //-   .input-field
    //-     input(type='text' v-model="collectionName"  id="collectionName"   placeholder=' Denzel Washington')
    //-     label.text-field__label(for="collectionName") collectionName
    //-   .input-field
    //-     input(type='text' v-model="figureName"  id="figureName"   placeholder=' Denzel Washington')
    //-     label.text-field__label(for="figureName") figureName
    //-   .input-field
    //-     input(type='text' v-model="sex"  id="sex"   placeholder=' Denzel Washington')
    //-     label.text-field__label(for="sex") sex
    //-   button(type="submit") collection data fertig

