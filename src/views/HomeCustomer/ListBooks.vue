<template>
  <LayoutCustomer>
    <div class="px-[120px] mt-[32px]  flex gap-4">
      <div class="p-8 flex gap-4 flex-wrap">
        <div v-for="book in books" :key="book.in"
             class="max-w-[24%] bg-white border border-gray-100 rounded-lg shadow-xl">
          <div class="relative">
            <img class="rounded-t-lg" src="/ice-cream-2k.png" alt=""/>
<!--            <div class="absolute top-0 right-0 bg-gradient-to-l from-violet-500 to-fuchsia-500 p-2 rounded-bl-lg rounded-tr-lg">{{ typeRecipe[recipe.type].name }}</div>-->
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{ book.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ book.description }}</p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ book.price }}</p>
            <router-link :to="{ name: 'detail-recipe-customer' ,params: { id: book.id }  }">
              <a href="#"
                 class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-1" aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </LayoutCustomer>

</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import {ref, onMounted, onBeforeMount} from "vue";
import {$axios} from "../../utils/request";

const books = ref()

const getBooks = async () => {
  await $axios.get('Book')
      .then((data) => {
        books.value = data.data;
      });
}
onBeforeMount(() => {
  getBooks()
})

</script>

<style scoped>

</style>