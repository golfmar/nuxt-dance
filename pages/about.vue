<template lang='pug'>
.page
  transition(mode='easy-in-out' name='opentab')
    .container(v-if="showComponent") 
      h1 FIGURES COMMON TO MORE THAN ONE DANCE
      table
        caption
          | Except for the timing and some precedes and follows, the technique will be the same in the undermentioned.
        thead
          tr
            th
            th(scope="col") WALTZ
            th(scope="col") FOXTROT
            th(scope="col") QUICKSTEP
        tbody
          tr
            th Impetus Turn and Open Impetus Turn
            td(data-label="WALTZ") 1 2 3
            td(data-label="FOXTROT") S Q Q
            td(data-label="QUICKSTEP") S S S
          tr
            th Telemark and Open Telemark
            td(data-label="WALTZ") 1 2 3
            td(data-label="FOXTROT") S Q Q
            td(data-label="QUICKSTEP") S S S
          tr
            th Double Rev Spin
            td(data-label="WALTZ") 1 2 &amp; 3 <br> or 1 2 3 &amp;
            td(data-label="FOXTROT") S Q &amp; Q <br> or Q Q &amp; Q
            td(data-label="QUICKSTEP") S S Q Q
         
          tr
            th Outside Change
            td(data-label="WALTZ")  1 2 3
            td(data-label="FOXTROT")  S Q Q
            td(data-label="QUICKSTEP")  S Q Q
          tr
            th Outside Spin
            td(data-label="WALTZ")  1 2 3
            td(data-label="FOXTROT")  S Q Q<br> or &amp; Q Q
            td(data-label="QUICKSTEP")  S S S<br> or &amp; Q Q
          tr
            th Passing Nat Turn (from PP)
            td(data-label="WALTZ")  1 2 3
            td(data-label="FOXTROT")  S Q Q
            td(data-label="QUICKSTEP")  S Q Q
          tr
            th Prog Chasse to R
            td(data-label="WALTZ")  1 2 &amp; 3
            td(data-label="FOXTROT")  - - - -
            td(data-label="QUICKSTEP")  S Q Q S
          tr
            th Fall away Rev and Slip Pivot
            td(data-label="WALTZ")  1 2 &amp; 3<br>1 2 3 &amp;<br>1 &amp; 2 3<br>1 2 3 1
            td(data-label="FOXTROT")  S Q Q Q<br>S Q Q &amp;<br>S Q &amp; Q <br>S Q Q S
            td(data-label="QUICKSTEP")  S Q Q S
          tr
            th Rev Pivot
            td(data-label="WALTZ")  &amp; or Any whole count
            td(data-label="FOXTROT")  S or Q or &amp;
            td(data-label="QUICKSTEP")  S or Q or &amp;
          tr
            th Whisk and Back Whisk
            td(data-label="WALTZ")  1 2 3
            td(data-label="FOXTROT")  S Q Q
            td(data-label="QUICKSTEP")  S S S



      p In Whisk and Back Whisk Rise and Fall in Foxtrot and Quickstep would not be gradual as in Waltz.
      h3 TANGO
      p <strong>Open Telemark</strong> Q Q S. When preceded by a Href Pivot or a Slip Pivot counted Q, the Telemark would be Q Q Q, this would also apply when followed by steps 2 and 3 of Prom Link QQQQS.
      p <strong>Whisk and Back Whisk</strong> Q Q S
      p <strong>Outside Spin</strong> Q Q S
      p <strong>Fallaway Rev and Slip Pivot</strong> QQQQ QQS &
      p A Rev Pivot may be danced in advanced dancing at any time when the normal would be a closed or open finish, e g dance 1-4 of That Rock Turn SQQS, follow with a Rev Pivot count (&) turning to face DC, follow with the Oversway or any Rev figure. <br>In the above figures, Tango character and technique will apply.
</template>
<script setup>
import { ref, onMounted } from 'vue'
definePageMeta({
  layout: "card"
})
const showComponent = ref(false)
onMounted(() => {
  showComponent.value = true
})
</script>

<style lang="scss" scoped>

table {
  border-collapse: collapse;
  width: auto;
  margin: 10px 0 0 0;
  background: #fff;
  border: 2px solid #2d019b;
  box-shadow: 1px 1px 4px #666;
  font-family: "Roboto-Regular", sans-serif;
 
  font-weight: 400;
  color: #000;
}

h3 {
  margin: 20px 0 0 0;
}

caption {
  color: azure;
  caption-side: top;
  margin: 0 0 10px 0;
  text-align: left;
}

thead tr th {
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  border: 1px solid #ededed;
  text-shadow: none;
  padding: 4px 15px;
  text-align: center;
  text-transform: uppercase;
  background-color: #9167fc;
  color: #fff;
}

th,
td {
  border: 1px solid rgb(165, 164, 164);
  padding: 8px;
  text-align: center;
  padding: 8px 6px;
  vertical-align: top;
}

p {
  margin: 3px 0;
}

@media (max-width: 767px) {

  table,
  thead,
  tbody,
  th,
  td,
  tr,caption {
    display: block; // каждая часть таблицы становится блочной
  }
caption {
  padding: 5px;
  color: #000;
}
  thead tr {
    display: none; // скрываем заголовки таблицы
  }

  tr {
  
    
  }

  td {
    display: flex;
    justify-content: space-between;
    padding: 3px 0 3px 125px;
    position: relative;
    text-align: right;

    &:before {
      content: attr(data-label); // Используем атрибут для отображения заголовка
      position: absolute;
      left: 10px;
      font-weight: bold;
      text-align: left;
    }
  }
}
</style>
