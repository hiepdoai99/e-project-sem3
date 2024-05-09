<template>
  <LayoutCustomer>
    <div class="px-40 mt-30 flex gap-4">
      <form @submit.prevent="submitForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" v-model="name" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" v-model="email" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
            Message
          </label>
          <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" v-model="message" required></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </LayoutCustomer>
</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  // Handle form submission here
  console.log(name.value, email.value, message.value);
}
</script>

<style scoped>
/* Add your styles here */
</style>



