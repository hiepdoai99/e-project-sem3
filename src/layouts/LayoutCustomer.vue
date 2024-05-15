<template>
  <div class="bg-gradient-to-b from-violet-50 to-fuchsia-50 flex flex-col gap-16">
    <nav
        class="bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 border-gray-200 py-2.5 shadow-md fixed w-full top-0 h-16 text-white z-[9999]">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <router-link :to="{ name: 'home-customer' }">
          <a href="#" class="flex items-center">
            <img src="/ice-cream2.svg" class="h-6 mr-3 sm:h-9" alt="Cream">
            <span class="self-center text-xl font-semibold whitespace-nowrap ">Cream</span>
          </a>
        </router-link>

        <div class="flex items-center lg:order-2">
          <div class="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <!--          <router-link :to="{ name: 'login-customer' }">-->
          <button v-show="!user" @click="showLogin = true"
                  class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            Login
          </button>
          <!--          </router-link>-->
          <button v-show="!user" @click="showSignUp = true"
              class="ml-4 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
            Sign Up
          </button>
          <div v-show="user" class="flex items-center">
            <span v-if="user" class="mr-2">{{user.name}}</span>
            <button @click="logout"
                class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
              Logout
            </button>
          </div>
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <router-link :to="{ name: 'home-customer' }">
              <li>
                <a href="#"
                   :class="currentRoute === 'home-customer' ? 'text-white' : 'text-purple-700'"
                   class="block py-2 pl-3 pr-4  bg-purple-700 rounded lg:bg-transparent hover:text-white lg:p-0  "
                   aria-current="page"
                >Home</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'list-recipes-customer' }">
              <li>
                <a href="#"
                   :class="currentRoute === 'list-recipes-customer' ? 'text-white' : 'text-gray-400'"
                   class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Cream Recipes</a>
              </li>
            </router-link>

            <router-link :to="{ name: 'list-books-customer' }">
              <li>
                <a href="#"
                   :class="currentRoute === 'list-books-customer' ? 'text-white' : 'text-gray-400'"
                   class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Books</a>
              </li>
            </router-link>

            <router-link :to="{ name: 'faq' }">

              <li>
                <a href="#"
                   :class="currentRoute === 'faq' ? 'text-white' : 'text-gray-400'"
                   class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  FAQ</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'contact' }">
              <li>
                <a href="#"
                   :class="currentRoute === 'contact' ? 'text-white' : 'text-gray-400'"
                   class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Contact</a>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-16 mb-8">
      <main>
        <slot/>
      </main>
    </div>

    <footer class="relative bg-white rounded-lg px-32 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                  class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button">
                <i class="fab fa-twitter"></i></button>
              <button
                  class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button">
                <i class="fab fa-facebook-square"></i></button>
              <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button">
                <i class="fab fa-dribbble"></i></button>
              <button
                  class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://www.creative-tim.com/presentation?ref=njs-profile">About Us</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://www.github.com/creativetimofficial?ref=njs-profile">Github</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Free Products</a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul class="list-unstyled">
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT
                      License</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300">
      </div>
    </footer>

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
    <el-dialog
        v-model="showSignUp"
        style="border-radius: 8px"
        title=" Sign Up"
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
        <el-form-item label="Name" prop="name" >
          <el-input v-model="formState.name" type="email" placeholder="Please input name" />
        </el-form-item>
        <el-form-item label="Email" prop="email" >
          <el-input v-model="formState.email" type="email" placeholder="Please input email"/>
        </el-form-item>
        <el-form-item label="Plan" prop="planId" >
          <el-input v-model="formState.planId" placeholder="Please select planId"/>
        </el-form-item>
        <el-form-item label="Username" prop="username" >
          <el-input v-model="formState.username"  placeholder="Please input username"/>
        </el-form-item>
        <el-form-item label="Password" prop="password" >
          <el-input v-model="formState.password" type="password" show-password  placeholder="Please input password" />
        </el-form-item>
        <el-form-item>
          <div class="flex w-full">
            <div></div>
            <div  class="ml-auto">
              <el-button type="primary" @click="register">
                Sign Up
              </el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
import {ref, onMounted, reactive} from 'vue';
import {$axios} from "../utils/request";

const formState = reactive({
  name: '',
  email: '',
  planId: '',
  username: '',
  password: ''
});

const router = useRouter();
const showLogin = ref(false);
const showSignUp = ref(false);
const currentRoute = ref(null);
const register = () => {
  $axios.post('Auth/Register/', {
    username:formState.username,
    password:formState.password,
    name:formState.name,
    email:formState.email,
    planId:formState.planId
  })
      .then((data) => {
        if (data.status === 200){
          login();
          showSignUp.value = false;
        }
      })
};

const login = () => {
  $axios.post('Auth/Login/', {
    username:formState.username,
    password:formState.password
  })
      .then((data) => {

        if (data.data.accessToken){
          localStorage.setItem('token',data.data.accessToken)
          showLogin.value = false;
          checkUser();
          router.push('/')
        }
      })
};
const user = ref();
const checkUser = async () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const { data } = await $axios.get('Users/Current');
      user.value = data;
    } catch (error) {
      console.error('Lấy thông tin người dùng thất bại:', error);
      localStorage.removeItem('token');
      user.value = null;
    }
  }
};
onMounted(() => {
  currentRoute.value = router.currentRoute.value.name;
  checkUser();
});
const logout = () => {
  localStorage.removeItem('token');
  user.value = null;
  router.push('/')
}
</script>

<style scoped>

</style>