<template>
  <LayoutCustomer>
    <div class="p-16 -mb-16 ">
      <div class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-0 flex">
        <div class="w-1/2 rounded-lg">
          <img class="rounded-lg" src="/various-varieties-ice-cream-cones-various-varieties-ice-cream-cones-mint-blueberry-strawberry-pistachio-cherry-158155767.png" alt="">
        </div>
        <div class="w-1/2 p-6 rounded-lg shadow-lg flex gap-4 flex-col ml-4 ">
          <h2 class="mb-4 text-2xl font-bold bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 inline-block" style="color: transparent">Contact Us</h2>
          <div class="">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
              Name
            </label>
            <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
              Message
            </label>
            <textarea v-model="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message"></textarea>
          </div>
          <div class="flex items-center justify-center">
            <button @click="submitForm" class="bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 w-[200px] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Send message
            </button>
          </div>
        </div>
      </div>
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

}
</script>

<style scoped>
/* Add your styles here */
</style>



