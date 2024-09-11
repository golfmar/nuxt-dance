<template lang="pug">
.form-container
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
    button(type='button' @click='dropClick')
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
    p(v-if="message") {{ message }}
</template>

<script setup>
import { ref } from 'vue';
import { db } from '@/composables/firebase'; // Импортируйте Firebase и Firestore
import { doc, collection, setDoc } from "firebase/firestore";

const drop = ref('');

const clickHandler = (value) => {
  value = value.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  drop.value = drop.value + " " + value
};


// Рефы для хранения значений полей формы
const myArray1Item = ref('');
const myArray2Item = ref('');
const myArray3Item = ref('');
const myArray4Item = ref('');
const myArray5Item = ref('');
const myArray6Item = ref('');
const message = ref('');

const clear = () => {
  drop.value = '';
  // myArray1Item.value = '';
  // myArray2Item.value = '';
  // myArray3Item.value = '';
  // myArray4Item.value = '';
  // myArray5Item.value = '';
  // myArray6Item.value = '';
};


// "Waltz"
// "RF Closed Change (Natural to Reverse)"
// "Lady"




// // Шаг 1: Получите доступ к документу и вложенной коллекции
// const mainDocRef = doc(db, "Waltz", "Weave in Waltz Time");
// const subDocRef = doc(collection(mainDocRef, "Man"), "steps");
// // const subDocRef = doc(collection(mainDocRef, "Lady"), "steps");


// <br>


const steps1 = [

];

const steps2 = [

];
const steps3 = [

];
const steps4 = [

];
const steps5 = [

];
const steps6 = [

];


const uploadDataToFirebase = async () => {
  try {
    const data = {
      1: steps1,
      2: steps2,
      3: steps3,
      // 4: steps4,
      // 5: steps5,
      // 6: steps6,
    };

    const mainDocRef = doc(db, "Waltz",
      "Contra Check"
    );
    // await setDoc(doc(collection(mainDocRef, "Man"), "steps"), data);
    await setDoc(doc(collection(mainDocRef, "Lady"), "steps"), data);
    alert("Массив успешно загружен в Firebase");
  } catch (e) {
    alert("Ошибка при загрузке данных: ");
  }
};

const dropClick = () => {
  uploadDataToFirebase()
};
// Функция для отправки данных в Firestore
// const handleSubmit = async () => {
// 	if (myArray1Item.value !== '') {
// 		try {
// 			await updateDoc(subDocRef, {
// 				1: arrayUnion(myArray1Item.value),
// 			});
// 			// Обнуляем поля и выводим сообщение об успешной операции
// 			message.value = 'Items successfully added to arrays!';
// 			myArray1Item.value = '';
// 		} catch (error) {
// 			console.error("Error adding item: ", error);
// 			message.value = 'Error adding items to arrays!';
// 		}
// 	}
// 	if (myArray2Item.value !== '') {
// 		try {
// 			await updateDoc(subDocRef, {
// 				2: arrayUnion(myArray2Item.value),
// 			});
// 			// Обнуляем поля и выводим сообщение об успешной операции
// 			message.value = 'Items successfully added to arrays!';
// 			myArray2Item.value = '';
// 		} catch (error) {
// 			console.error("Error adding item: ", error);
// 			message.value = 'Error adding items to arrays!';
// 		}
// 	}
// 	if (myArray3Item.value !== '') {
// 		try {
// 			await updateDoc(subDocRef, {
// 				3: arrayUnion(myArray3Item.value),
// 			});
// 			// Обнуляем поля и выводим сообщение об успешной операции
// 			message.value = 'Items successfully added to arrays!';
// 			myArray3Item.value = '';
// 		} catch (error) {
// 			console.error("Error adding item: ", error);
// 			message.value = 'Error adding items to arrays!';
// 		}
// 	}
// 	if (myArray4Item.value !== '') {
// 		try {
// 			await updateDoc(subDocRef, {
// 				4: arrayUnion(myArray4Item.value),
// 			});
// 			// Обнуляем поля и выводим сообщение об успешной операции
// 			message.value = 'Items successfully added to arrays!';
// 			myArray4Item.value = '';
// 		} catch (error) {
// 			console.error("Error adding item: ", error);
// 			message.value = 'Error adding items to arrays!';
// 		}
// 	}
// 	if (myArray5Item.value !== '') {
// 		try {
// 			await updateDoc(subDocRef, {
// 				5: arrayUnion(myArray5Item.value),
// 			});
// 			// Обнуляем поля и выводим сообщение об успешной операции
// 			message.value = 'Items successfully added to arrays!';
// 			myArray5Item.value = '';
// 		} catch (error) {
// 			console.error("Error adding item: ", error);
// 			message.value = 'Error adding items to arrays!';
// 		}
// 	}
// 	if (myArray6Item.value !== '') {
// 		try {
// 			await updateDoc(subDocRef, {
// 				6: arrayUnion(myArray6Item.value),
// 			});
// 			// Обнуляем поля и выводим сообщение об успешной операции
// 			message.value = 'Items successfully added to arrays!';
// 			myArray6Item.value = '';
// 		} catch (error) {
// 			console.error("Error adding item: ", error);
// 			message.value = 'Error adding items to arrays!';
// 		}
// 	}
// 	clear()
// 	myArray1Item.value = '';
// 	myArray2Item.value = '';
// 	myArray3Item.value = '';
// 	myArray4Item.value = '';
// 	myArray5Item.value = '';
// 	myArray6Item.value = '';
// }


</script>

<style lang="scss" scoped>
input[type='text'] {
  // display: none;
  height: 30px;
}

input[type="radio"] {
  position: fixed;
  z-index: -1;
  left: 1050%;
}

input[type="radio"]+label {
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  transform: translate(0%, -50%);
  transition: all 0.2s;
  cursor: pointer;
  border-radius: 10px;
  background: beige;
  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, .3), inset 0 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);

}

input[type="radio"]:checked+label {}

input[type="radio"]:checked+label+input[type='text'] {
  display: inline-block;
}

.form-container {
  max-width: 800px;
  /* display: grid; */
  /* column-gap: 25px; */
  /* grid-template-columns: repeat(2, max-content); */

}

.inputs {
  display: flex;
  column-gap: 5px;
  flex-wrap: wrap;
}

.input-field {
  margin: 20px 0 0 0;
}

.drop-linea {
  width: 100%;
  margin: 10px 0;
}

form {
  margin: 30px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: $purple-1;
  padding: 5px;
  grid-row: 1/-1;

  div {
    position: relative;
    padding: 0 0 0 40px;
    height: 30px;
  }


}

button {
  padding: 0.5rem;
  background-color: #3498db;
  color: white;
  border: 3px solid white;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}

.clear {
  background: rgba(0, 0, 0, .75);
}

p {
  color: green;
  font-weight: bold;
}
</style>
