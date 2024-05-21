<template>
  <LayoutCustomer>
    <div class="px-[120px] mt-[32px] flex-col flex gap-4">
        <div class=" flex gap-4 flex-wrap">
          <div v-for="recipe in recipes" :key="recipe.in"
               class="w-[24%] bg-white border border-gray-100 rounded-lg shadow-xl">
            <div class="relative ">
              <img class="rounded-t-lg object-cover w-full  h-[240px]" :src="recipe.thumbnail ? recipe.thumbnail  : '/ice-cream-2k.png'" alt=""/>
              <div class="absolute top-0 right-0 bg-gradient-to-l from-violet-500 to-fuchsia-500 p-2 rounded-bl-lg rounded-tr-lg">{{ typeRecipe[recipe.type].name }}</div>
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 h-16">{{ recipe.title }}</h5>
              </a>
              <p v-html="recipe.shortDescription" class="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-6 line-clamp-2 h-12"></p>
                <a href="#" @click="getDetailRecipe(recipe.id, recipe.type)"
                   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-1" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
            </div>
          </div>
        </div>
      <div class="flex justify-between items-center w-full  text-[#797588]">
        <div></div>
        <div class="flex gap-2 mr-6">
          <button :disabled="page < 1" @click="previous" class="bg-gray-300 rounded-lg text-indigo-600 px-3 py-1 items-center justify-center ">
            Previous
          </button>
          <button @click="next" class="bg-gray-300 rounded-lg px-3 text-indigo-600 py-1 items-center justify-center ">
            Next
          </button>
        </div>
      </div>
    </div>
    <el-dialog
        v-model="showLogin"
        style="border-radius: 8px"
        title="Login"
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
        <el-form-item label="Username" prop="Username" >
          <el-input v-model="formState.username"  placeholder="Please input username"/>
        </el-form-item>
        <el-form-item label="Password" prop="password" >
          <el-input v-model="formState.password" type="password" show-password  placeholder="Please input password" />
        </el-form-item>
        <el-form-item>
          <div class="flex w-full">
            <div></div>
            <div  class="ml-auto">
              <el-button type="primary" @click="login">
                Login
              </el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
  </LayoutCustomer>

</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import {ref, onMounted, onBeforeMount,reactive} from "vue";
import {$axios} from "../../utils/request";
import router from "../../router";
import { ArrowLeftBold } from '@element-plus/icons-vue'
import { ArrowRightBold } from '@element-plus/icons-vue'
import { ArrowDownBold } from '@element-plus/icons-vue'

const recipes = ref()
const listRecipes = ref()

const login = () => {
  $axios.post('Auth/Login/', {
    username:formState.username,
    password:formState.password
  })
      .then((data) => {

        if (data.data.accessToken){
          localStorage.setItem('token',data.data.accessToken)
          localStorage.setItem('user', data.data.user)
          showLogin.value = false;
          checkUser();
        }
      })
};
const formState = reactive({
  username: '',
  password: '',
});
const page = ref(1)

const showLogin = ref(false);

const getRecipes = async () => {
  await $axios.get('Recipes/?PerPage=8&PageNo=' + page.value)
      .then((data) => {
        recipes.value = data.data.items;
        listRecipes.value = data.data;
      });
}
const previous = () => {
    page.value = page.value - 1
    getRecipes()
}
const next = () => {
  page.value = page.value + 1
  getRecipes()
}
onBeforeMount(() => {
  getRecipes()
})
const getDetailRecipe = (id,type) => {
  if (type == 1) {
    router.push({name: 'detail-recipe-customer', params: {id: id}})
  } else {
    const user = localStorage.getItem('user');
    if (user) {
      router.push({name: 'detail-recipe-customer', params: {id: id}})
    } else {
      showLogin.value = true
    }
  }
}
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

<style scoped>

</style>