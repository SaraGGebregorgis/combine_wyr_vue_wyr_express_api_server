<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
  answer1: String,
  answer2: String,
})
//string that will pass from the parent and displayed

const emit = defineEmits([
  'answer-selected'
])
//define an event that th child comp will emmit
//and send to the parent


const choice = ref(null)
//ref that stores the value of the users selection

//function choiceMade() {
  //emit event to tell parent that user has made their choice
//   emit('answer-selected', choice.value)
//}

function choiceMade() {
  console.log('User choice:', choice.value)
  emit('answer-selected', choice.value)
}
//monitor the changes to choice

</script>

<template>
  <div id="wyr">
      <h2>Make your choice!</h2>

      <div id="question">
      {{ question }} 
    </div>

    <div id="answers">
      <input type="radio" id="answer-1" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade">
        <label for="answer-1"> {{ answer1 }} </label>

      <!--this value attribute is the html value, for what data an inout stores-->
      <input type="radio" id="answer-2" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade"> 
        <label for="answer-2">{{ answer2 }}</label>
    </div>
    <!--The child comp displays the question prop and
    // provides two radio buttons for the user to select from
    //When the choice changes, the watch function triggers and emits the answer-selected
    // passing the selected answer back to the parent-->
  </div>
  
</template>

<style scoped>
#wyr {
  background-color: hotpink;
  padding: 20px;
}

#answers {
  padding: 10px;
}

</style>
