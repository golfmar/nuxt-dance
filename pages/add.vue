<template lang="pug">
.container
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
    textarea.drop-linea( v-model="drop")
    .inputs
      button.clear(type = "button"  @click='clear') clear
      button(type = "button"  @click='clickHandler("RF")') RF
      button(type = "button"  @click='clickHandler("Rf")') Rf
      button(type = "button"  @click='clickHandler("LF")') LF
      button(type = "button"  @click='clickHandler("fwd")') fwd
      button(type = "button"  @click='clickHandler("back")') back
      button(type = "button"  @click='clickHandler("side")') side
      button(type = "button"  @click='clickHandler("to side and slightly fwd")') to side and slightly fwd
      button(type = "button"  @click='clickHandler("to side and slightly back")') to side and slightly back
      button(type = "button"  @click='clickHandler("RF")') to
      button(type = "button"  @click='clickHandler("and")') and
      button(type = "button"  @click='clickHandler("Facing")') Facing
      button(type = "button"  @click='clickHandler("Backing")') Backing
      button(type = "button"  @click='clickHandler("slightly")') slightly
      button(type = "button"  @click='clickHandler("close")') close
      button(type = "button"  @click='clickHandler("No turn")') No turn

     
  
    form(@submit.prevent="handleSubmit")
      div
        label(for="myArray1Item") 1--->
        input(v-model="myArray1Item" type="text" id="myArray1Item" @focus="myArray1Item=drop" )
  
      div
        label(for="myArray2Item") 2--->
        input(v-model="myArray2Item" type="text" id="myArray2Item" @focus="myArray2Item=drop")
  
      div
        label(for="myArray3Item") 3--->
        input(v-model="myArray3Item" type="text" id="myArray3Item" @focus="myArray3Item=drop")
  
      div
        label(for="myArray4Item") 4--->
        input(v-model="myArray4Item" type="text" id="myArray4Item" @focus="myArray4Item=drop")
  
      div
        label(for="myArray5Item") 5--->
        input(v-model="myArray5Item" type="text" id="myArray5Item" @focus="myArray5Item=drop")
  
      div
        label(for="myArray6Item") 6--->
        input(v-model="myArray6Item" type="text" id="myArray6Item" @focus="myArray6Item=drop")
  
      button(type="submit") Add to Arrays
  
    // Сообщение об успешном добавлении
    p(v-if="message") {{ message }}
</template>

<script setup>
import { ref } from 'vue';
import { db } from '@/composables/firebase'; // Импортируйте Firebase и Firestore
import { doc, collection, updateDoc, arrayUnion } from "firebase/firestore";

const drop = ref('');

const clickHandler = (value) => {
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
	myArray1Item.value = '';
	myArray2Item.value = '';
	myArray3Item.value = '';
	myArray4Item.value = '';
	myArray5Item.value = '';
	myArray6Item.value = '';
};


// "Waltz"
// "RF Closed Change (Natural to Reverse)"
// "Lady"




// Шаг 1: Получите доступ к документу и вложенной коллекции
const mainDocRef = doc(db, "Waltz", "RF Closed Change (Natural to Reverse)");
const subDocRef = doc(collection(mainDocRef, "Man"), "steps");


// Функция для отправки данных в Firestore
const handleSubmit = async () => {
	if (myArray1Item.value !== '') {
		try {
			await updateDoc(subDocRef, {
				1: arrayUnion(myArray1Item.value),
			});
			// Обнуляем поля и выводим сообщение об успешной операции
			message.value = 'Items successfully added to arrays!';
			myArray1Item.value = '';
		} catch (error) {
			console.error("Error adding item: ", error);
			message.value = 'Error adding items to arrays!';
		}
	}
	if (myArray2Item.value !== '') {
		try {
			await updateDoc(subDocRef, {
				2: arrayUnion(myArray2Item.value),
			});
			// Обнуляем поля и выводим сообщение об успешной операции
			message.value = 'Items successfully added to arrays!';
			myArray2Item.value = '';
		} catch (error) {
			console.error("Error adding item: ", error);
			message.value = 'Error adding items to arrays!';
		}
	}
	if (myArray3Item.value !== '') {
		try {
			await updateDoc(subDocRef, {
				3: arrayUnion(myArray3Item.value),
			});
			// Обнуляем поля и выводим сообщение об успешной операции
			message.value = 'Items successfully added to arrays!';
			myArray3Item.value = '';
		} catch (error) {
			console.error("Error adding item: ", error);
			message.value = 'Error adding items to arrays!';
		}
	}
	if (myArray4Item.value !== '') {
		try {
			await updateDoc(subDocRef, {
				4: arrayUnion(myArray4Item.value),
			});
			// Обнуляем поля и выводим сообщение об успешной операции
			message.value = 'Items successfully added to arrays!';
			myArray4Item.value = '';
		} catch (error) {
			console.error("Error adding item: ", error);
			message.value = 'Error adding items to arrays!';
		}
	}
	if (myArray5Item.value !== '') {
		try {
			await updateDoc(subDocRef, {
				5: arrayUnion(myArray5Item.value),
			});
			// Обнуляем поля и выводим сообщение об успешной операции
			message.value = 'Items successfully added to arrays!';
			myArray5Item.value = '';
		} catch (error) {
			console.error("Error adding item: ", error);
			message.value = 'Error adding items to arrays!';
		}
	}
	if (myArray6Item.value !== '') {
		try {
			await updateDoc(subDocRef, {
				6: arrayUnion(myArray6Item.value),
			});
			// Обнуляем поля и выводим сообщение об успешной операции
			message.value = 'Items successfully added to arrays!';
			myArray6Item.value = '';
		} catch (error) {
			console.error("Error adding item: ", error);
			message.value = 'Error adding items to arrays!';
		}
	}

}


</script>

<style lang="scss" scoped>
.form-container {
	max-width: 800px;
	/* display: grid; */
	/* column-gap: 25px; */
	/* grid-template-columns: repeat(2, max-content); */

}

.inputs {
	display: flex;
	column-gap: 5px;
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

	label {
		margin: 0 20px 0 0;
		font-weight: 600;
		color: red;
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
