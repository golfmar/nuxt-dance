<template lang="pug">
.form-container
  h2 Add Item to Firebase Array
  p RF
  p LF
  p fwd
  p back
  p Facing
  p Backing
  p to side
  p and
  p slightly
  p Rf
  p close
  p to
  p No turn
  
  form(@submit.prevent="handleSubmit")
    div
      label(for="myArray1Item") Add to myArray1:
      input(v-model="myArray1Item" type="text" id="myArray1Item" )

    div
      label(for="myArray2Item") Add to myArray2:
      input(v-model="myArray2Item" type="text" id="myArray2Item" )

    div
      label(for="myArray3Item") Add to myArray3:
      input(v-model="myArray3Item" type="text" id="myArray3Item" )

    div
      label(for="myArray4Item") Add to myArray4:
      input(v-model="myArray4Item" type="text" id="myArray4Item" )

    div
      label(for="myArray5Item") Add to myArray5:
      input(v-model="myArray5Item" type="text" id="myArray5Item" )

    div
      label(for="myArray6Item") Add to myArray6:
      input(v-model="myArray6Item" type="text" id="myArray6Item" )

    button(type="submit") Add to Arrays

  // Сообщение об успешном добавлении
  p(v-if="message") {{ message }}
</template>

<script setup>
import { ref } from 'vue';
import { db } from '@/composables/firebase'; // Импортируйте Firebase и Firestore
import { doc, collection, updateDoc, arrayUnion } from "firebase/firestore";

// Рефы для хранения значений полей формы
const myArray1Item = ref('');
const myArray2Item = ref('');
const myArray3Item = ref('');
const myArray4Item = ref('');
const myArray5Item = ref('');
const myArray6Item = ref('');
const message = ref('');

// Шаг 1: Получите доступ к документу и вложенной коллекции
const mainDocRef = doc(db, "Waltz", "RF Closed Change (Natural to Reverse)");
const subDocRef = doc(collection(mainDocRef, "Lady"), "steps");

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

<style scoped>
.form-container {
	max-width: 400px;
}

form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

button {
	padding: 0.5rem;
	background-color: #3498db;
	color: white;
	border: none;
	cursor: pointer;
}

button:hover {
	background-color: #2980b9;
}

p {
	color: green;
	font-weight: bold;
}
</style>
