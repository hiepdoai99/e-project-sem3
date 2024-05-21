<template>
  <div class="bg-gradient-to-b from-violet-50 to-fuchsia-50 flex flex-col gap-16">
    <nav
      class="bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 border-gray-200 py-2.5 shadow-md fixed w-full top-0 h-16 text-white z-[9999]">
      <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <router-link :to="{ name: 'home-customer' }">
          <a href="#" class="flex items-center">
            <img src="/ice-cream2.svg" class="h-6 mr-3 sm:h-9" alt="Ice-Cream-Parlour">
            <span class="self-center text-xl whitespace-nowrap font-serif">Ice Cream Parlour</span>
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
          <div v-show="user" class="flex items-center ">
            <img v-if="user" class="shadow-lg w-8 h-8 mr-2 rounded-full" :src="genAvatar(user.name)" alt="">
            <span v-if="user" class="mr-2">{{ user.name }}</span>
            <button @click="logout"
              class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
              Logout
            </button>
          </div>
          <router-link :to="{ name: 'cart' }">
            <div class="bg-gray-300 rounded-full h-10 w-10  ml-2 flex items-center justify-center ">
              <el-icon>
                <ShoppingCart />
              </el-icon>
              <p
                class="absolute ml-6 -mt-6 bg-white text-gray-700 rounded-full h-[20px] w-[20px] flex items-center justify-center">
                <span class="text-sm">{{ getCartCount() }}</span>
              </p>
            </div>
          </router-link>
        </div>
        <div class="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <router-link :to="{ name: 'home-customer' }">
              <li>
                <a href="#" :class="currentRoute === 'home-customer' ? 'text-white' : 'text-purple-700'"
                  class="block py-2 pl-3 pr-4  bg-purple-700 rounded lg:bg-transparent hover:text-white lg:p-0  "
                  aria-current="page">Home</a>
              </li>
            </router-link>

            <!-- about Us -->
            <router-link :to="{ name: 'about-us' }">
              <li>
                <a href="#" :class="currentRoute === 'about-us' ? 'text-white' : 'text-gray-400'"
                  class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  About Us</a>
              </li>
            </router-link>

            <router-link :to="{ name: 'list-recipes-customer' }">
              <li>
                <a href="#" :class="currentRoute === 'list-recipes-customer' ? 'text-white' : 'text-gray-400'"
                  class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Ice Cream Recipes</a>
              </li>
            </router-link>

            <router-link :to="{ name: 'list-books-customer' }">
              <li>
                <a href="#" :class="currentRoute === 'list-books-customer' ? 'text-white' : 'text-gray-400'"
                  class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  Books</a>
              </li>
            </router-link>

            <router-link :to="{ name: 'faq' }">

              <li>
                <a href="#" :class="currentRoute === 'faq' ? 'text-white' : 'text-gray-400'"
                  class="block py-2 pl-3 pr-4  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  FAQ</a>
              </li>
            </router-link>
            <router-link :to="{ name: 'contact' }">
              <li>
                <a href="#" :class="currentRoute === 'contact' ? 'text-white' : 'text-gray-400'"
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
        <slot />
      </main>
    </div>

    <footer class="relative bg-white rounded-lg px-32 pt-8 pb-6">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-center">
              <img src="/ice-cream2.svg" class="mr-3 h-24" alt="Ice-Cream-Parlour">
              <h4
                class="text-3xl text-blueGray-700 ml-4 font-serif bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 inline-block"
                style="color: transparent">
                Ice Cream Parlour</h4>
              <p class="text-lg mt-8 pl-1 pr-8">
                Creating Sweet, Memorable Moments with our Handcrafted Ice Cream and Dessert Recipes.
                Your satisfaction is our happiness!
              </p>
            </div>

            <div class="mt-6 lg:mb-0 mb-6">
              <h5 class=" mt-0 mb-2 ml-1 text-blueGray-600 font-semibold">
                Our social network
              </h5>
              <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fa-brands fa-x-twitter"></i></button>
              <button
                class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fa-brands fa-facebook"></i></button>
              <button
                class="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fa-brands fa-instagram "></i></button>
              <button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button">
                <i class="fa-brands fa-tiktok"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4 mt-6">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul class="list-unstyled">
                  <li>
                    <router-link :to="{ name: 'about-us' }">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'list-recipes-customer' }">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Recipes</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'list-books-customer' }">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Books</a>
                    </router-link>
                  </li>
                  <li>
                    <a v-show="!user" @click="showSignUp = true"
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm cursor-pointer">
                      Register
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul class="list-unstyled">
                  <li>
                    <router-link to="/">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">License</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms &amp;
                        Conditions</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy
                        Policy</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'contact' }">
                      <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact
                        Us</a>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300">
        <p class="text-center">
          Copyright &copy; 2024, Ice Cream Parlour. All rights reserved.
        </p>
      </div>
    </footer>

    <el-dialog v-model="showLogin" style="border-radius: 8px" title="Login" width="400">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm"
        label-position="top">
        <el-form-item label="Username" prop="Username">
          <el-input v-model="formState.username" placeholder="Please input username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="formState.password" type="password" show-password placeholder="Please input password" />
        </el-form-item>
        <el-form-item>
          <div class="flex w-full">
            <div></div>
            <div class="ml-auto">
              <el-button type="primary" @click="login">
                Login
              </el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog v-model="showSignUp" style="border-radius: 8px" title=" Sign Up" width="400">
      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm"
        label-position="top">
        <el-form-item label="Name" prop="name">
          <el-input v-model="formState.name" type="email" placeholder="Please input name" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="formState.email" type="email" placeholder="Please input email" />
        </el-form-item>
        <el-form-item label="Plan" prop="planId">
          <el-select v-model="formState.planId" placeholder="Please select a plan">
            <el-option v-for="plan in plans" :key="plan.id" :label="plan.planType" :value="plan.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Username" prop="username">
          <el-input v-model="formState.username" placeholder="Please input username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="formState.password" type="password" show-password placeholder="Please input password" />
        </el-form-item>
        <el-form-item>
          <div class="flex w-full">
            <div></div>
            <div class="ml-auto">
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
import { useRouter } from 'vue-router'
import { ref, onMounted, reactive } from 'vue';
import { $axios } from "../utils/request";
import { ShoppingCart } from '@element-plus/icons-vue'

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
    username: formState.username,
    password: formState.password,
    name: formState.name,
    email: formState.email,
    planId: formState.planId
  })
    .then((data) => {
      if (data.data) {
        window.location.href = data.data;
      }
    })
      .catch((error) => {
        ElNotification({
          title: "Error",
          message: 'Sign up failed! Please try again!',
          type: "error",
          zIndex: 10000
        })
      });
};

const login = () => {
  $axios.post('Auth/Login/', {
    username: formState.username,
    password: formState.password
  })
    .then((data) => {
      if (data.data.accessToken) {
        localStorage.setItem('token', data.data.accessToken)
        localStorage.setItem('user', data.data.user)
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
      localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
      localStorage.removeItem('token');
      user.value = null;
    }
  }
};
const genAvatar = (name) => {
  return 'https://ui-avatars.com/api/?name=' + name;
}
onMounted(() => {
  currentRoute.value = router.currentRoute.value.name;
  getCartCount()
  checkUser();
});
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  user.value = null;
  router.push('/')
}
const getCartCount = () => {
  // Lấy danh sách sách từ localStorage
  let books = localStorage.getItem('books');

  // Nếu không có sách nào trong localStorage, trả về 0
  if (!books) {
    return 0;
  }

  // Chuyển đổi chuỗi JSON thành mảng
  books = JSON.parse(books);

  // Trả về độ dài của mảng
  return books.length;
}
const plans = [
  {
    id: 1,
    planType: "Monthly",
    price: 15
  },
  {
    id: 2,
    planType: "Yearly",
    price: 150
  }
];
</script>

<style scoped></style>
