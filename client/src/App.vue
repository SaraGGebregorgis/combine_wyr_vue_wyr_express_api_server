//parent component
<script setup>

import { ref, onMounted } from 'vue'
import wyrService from './services/wyrService';

import WouldYouRather from './components/WouldYouRather.vue'
//child comp thiat is imported and used here


const wyrQuestion = ref('')
const wyrAnswer1 = ref('')
const wyrAnswer2 = ref('')
//ref hold the texts to be displayed in the child comp

const userSelection = ref('')
//will hold the user answer once they make a selection

onMounted( () => {
  wyrService.getRandomWYR().then( (wyrData) => {

      wyrQuestion.value = wyrData.question
      wyrAnswer1.value = wyrData.answer1
      wyrAnswer2.value = wyrData.answer2
  })
})

function updateUserSelection(userChoice) {
  userSelection.value = `Thanks! you chose ${userChoice}`
}
//its called when the user selects answer the child comp
//updates the userselection with the message showing the user choice

</script>

<template>

<div id="app">
      <h1>Hello! Would You Rather?</h1>

      <WouldYouRather
      v-bind:question="wyrQuestion" 
      v-bind:answer1="wyrAnswer1"
      v-bind:answer2="wyrAnswer2"
      v-on:answer-selected="updateUserSelection"
    ></WouldYouRather>

<!--parent use this component and passes all this as props to the child comp
parent also listens for answer selected emitted by the child component-->
    {{ userSelection }}
   

</div>
</template>

<style scoped>

#app {
  background-color: aqua;
}

</style>
