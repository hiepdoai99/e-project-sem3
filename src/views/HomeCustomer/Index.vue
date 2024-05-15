<template>
  <LayoutCustomer>
    <div class="detail-order">
      <div class="w-full h-[800px] z-10">
        <img class="w-full object-cover h-[800px]" src="/ice-cream-2k.png" alt="">
        <div class="absolute mt-16 top-20 left-20">
          <p class="text-white text-[28px]">Our mission is to create a community of <br> people who love making ice
            cream</p>
          <div class="mt-[90%]">
            <p class="text-white text-[20px]">You can submit your ice cream recipe here to enter the contest</p>
            <button class="mt-4 hover:bg-purple-700 bg-purple-500 text-white px-4 py-2 rounded-lg" @click="toggleModal">
              Post
            </button>

          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg mx-32">
        <div class="flex p-8 mt-10">
          <h1 class="text-2xl font-semibold">Outstanding Recipe</h1>
          <router-link class="ml-auto text-red-400 flex" :to="{ name: 'list-recipes-customer' }">
            <p class="flex">Xem thêm
              <span class="mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                  d="M4.59192 4.37695C4.18526 3.97029 4.18526 3.29719 4.59192 2.89053C4.80226 2.68019 5.06869 2.58203 5.33513 2.58203C5.60156 2.58203 5.86799 2.68019 6.07833 2.89053L11.0284 7.84058C11.435 8.24724 11.435 8.92033 11.0284 9.32699L6.07834 14.277C5.67167 14.6837 4.99858 14.6837 4.59192 14.277C4.18526 13.8704 4.18526 13.1973 4.59192 12.7906L8.79875 8.58378L4.59192 4.37695Z"
                  fill="#f87171"></path>
            </svg></span>
            </p>
          </router-link>
        </div>
        <div class="p-8 flex gap-4 rounded-lg shadow-lg">
          <div v-for="recipe in recipes" :key="recipe.in"
               class="max-w-[25%] bg-white border border-gray-100 rounded-lg shadow-xl">
            <div class="relative">
              <img class="rounded-t-lg" src="/ice-cream-2k.png" alt=""/>
              <div class="absolute top-0 right-0 bg-gradient-to-l from-violet-500 to-fuchsia-500 p-2 rounded-bl-lg rounded-tr-lg">{{ typeRecipe[recipe.type].name }}</div>
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{ recipe.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Công thức</p>
              <router-link :to="{ name: 'detail-recipe-customer' ,params: { id: recipe.id }  }">
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
      <div class="bg-white rounded-lg mx-32 shadow-lg">
        <div class="flex p-8  mt-10">
          <h1 class="text-2xl font-semibold">Book Recipe</h1>
          <router-link class="ml-auto text-red-400 flex" :to="{ name: 'list-books-customer' }">

            <p class="flex">Xem thêm
              <span class="mt-1 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
              <path
                  d="M4.59192 4.37695C4.18526 3.97029 4.18526 3.29719 4.59192 2.89053C4.80226 2.68019 5.06869 2.58203 5.33513 2.58203C5.60156 2.58203 5.86799 2.68019 6.07833 2.89053L11.0284 7.84058C11.435 8.24724 11.435 8.92033 11.0284 9.32699L6.07834 14.277C5.67167 14.6837 4.99858 14.6837 4.59192 14.277C4.18526 13.8704 4.18526 13.1973 4.59192 12.7906L8.79875 8.58378L4.59192 4.37695Z"
                  fill="#f87171"></path>
            </svg></span>
            </p>
          </router-link>
        </div>
        <div class="p-8 flex gap-4 rounded-lg shadow-lg">
          <div v-for="book in books" :key="book.in"
               class="max-w-[25%] bg-white border border-gray-100 rounded-lg shadow-xl">
            <div class="relative">
              <img class="rounded-t-lg" src="/ice-cream-2k.png" alt=""/>
<!--              <div class="absolute top-0 right-0 bg-gradient-to-l from-violet-500 to-fuchsia-500 p-2 rounded-bl-lg rounded-tr-lg">{{ typeRecipe[book.type].name }}</div>-->
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{{ book.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ book.description }}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ book.price }}</p>
              <router-link :to="{ name: 'detail-book-customer' ,params: { id: book.id }  }">
                <a href="#"
                   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Buy now
                </a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <el-dialog
          v-model="formRecipe"
          style="border-radius: 8px"
          title="Post Recipe"
          width="400"
      >
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            class="demo-ruleForm"
            label-position="top"
        >
          <el-form-item label="Title" prop="title">
            <el-input type="text"/>
          </el-form-item>
          <el-form-item label="Ingredients" prop="ingredients">
            <el-input type="text"/>
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input type="text"/>
          </el-form-item>
          <el-form-item label="Type" prop="type">
            <el-input type="text"/>
          </el-form-item>
          <el-form-item label="Description" prop="description">
            <el-input type="text"/>
          </el-form-item>
          <el-form-item>
            <div class="flex w-full">
              <div></div>
              <div class="ml-auto">
                <el-button type="primary">
                  Submit
                </el-button>
                <el-button>Reset</el-button>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </el-dialog>

    </div>
  </LayoutCustomer>
</template>

<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import FormRecipe from "../../components/FormRecipe.vue";
import {$axios} from "../../utils/request";


const toggleModal = () => {
  formRecipe.value = !formRecipe.value;
}

const formRecipe = ref(false);

const recipes = ref()
const books = ref()

const getRecipes = async () => {
  await $axios.get('Recipes')
      .then((data) => {
        recipes.value = data.data.items.slice(0, 4);
      });
}
const getBooks = async () => {
  await $axios.get('Book')
      .then((data) => {
        books.value = data.data.slice(0, 4);
      });
}
onBeforeMount(() => {
  getRecipes()
  getBooks()
})
const typeRecipe = {
  0: {
    name: 'Premium'
  },
  1: {
    name: 'Free'
  },
  2: {
    name: 'Candidate'
  },
  3: {
    name: 'Winner'
  },
}


</script>

<style>

.el-dialog__title {
  color: #26282C;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
}

.el-dialog__header {
  text-align: center;
}

</style>