<template lang="pug">
.form-container
    button(type='button' @click='dropClick')
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


const steps1 = [
  "LF fwd",
  "HT",
  "Facing DW",
  "No turn",
  "Rise e/o 1",
  "Slight<br>on 1",
  "St",
  "S",
];
const steps2 = [
  "RF to side",
  "T",
  "Facing DW",
  "-",
  "Up on 2",
  "-",
  "L",
  "Q",
];
const steps3 = [
  "LF closes to RF",
  "TH",
  "Facing DW",
  "-",
  "Up on 3. Lower<br>e/o 3",
  "-",
  "L",
  "Q",
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
      // 7: steps7,
      // 8: steps8,
      // 9: steps9,
      // 10: steps10,
      // 11: steps11,
      // 12: steps12,

    };

    const mainDocRef = doc(db, "Quickstep",
      "Cross Chasse"
    );
    await setDoc(doc(collection(mainDocRef, "Man"), "steps"), data);
    // await setDoc(doc(collection(mainDocRef, "Lady"), "steps"), data);
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
