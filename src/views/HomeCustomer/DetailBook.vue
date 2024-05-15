<template>
  <LayoutCustomer>
    <div class="bg-white rounded-lg mt-8 m-[120px] p-4 shadow-lg -mb-16">
      <div class="flex gap-4">
        <div class="w-1/2">
          <img class="w-full h-[500px] object-cover rounded-lg" src="/ice-cream-2k.png" alt=""/>
        </div>
        <div class="w-1/2 p-8">
          <h1 class="text-4xl font-bold text-gray-900">Title</h1>
          <p class="text-gray-700 dark:text-gray-400">Description</p>
          <p class="text-gray-700 dark:text-gray-400">Ingredients</p>
          <p class="text-gray-700 dark:text-gray-400">Type</p>
          <p class="text-gray-700 dark:text-gray-400">Description</p>
          <div class="mt-4">
            <a href="#"
               class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Buy now
            </a>
          </div>
        </div>
      </div>

    </div>
  </LayoutCustomer>
</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";

</script>

<style scoped>

</style>