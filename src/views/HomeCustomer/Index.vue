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
            <p class="flex">Discover more
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
            class="w-[calc(100%/4)] bg-white border border-gray-100 rounded-lg shadow-xl">
            <div class="relative ">
              <img class="rounded-t-lg object-cover w-full  h-[240px]"
                :src="recipe.thumbnail ? recipe.thumbnail : '/ice-cream-2k.png'" alt="" />
              <div
                class="absolute top-0 right-0 bg-gradient-to-l from-violet-500 to-fuchsia-500 p-2 rounded-bl-lg rounded-tr-lg">
                {{ typeRecipe[recipe.type].name }}</div>
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-0 text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 h-16">{{ recipe.title }}
                </h5>
              </a>
              <p v-html="recipe.shortDescription"
                class="mb-1 line-clamp-2 h-12 font-normal text-gray-700 dark:text-gray-400 mt-6"></p>
              <a href="#" @click="getDetailRecipe(recipe.id, recipe.type)"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-lg mx-32 shadow-lg">
        <div class="flex p-8  mt-10">
          <h1 class="text-2xl font-semibold">Book Recipe</h1>
          <router-link class="ml-auto text-red-400 flex" :to="{ name: 'list-books-customer' }">
            <p class="flex">Discover more
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
            class="w-[calc(100%/4)] bg-white border border-gray-100 rounded-lg shadow-xl">
            <div class="relative">
              <img class="rounded-t-lg  object-cover w-full  h-[240px]"
                :src="book.bookImages[0].image ? book.bookImages[0].image : '/ice-cream-2k.png'" alt="" />
            </div>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 ">{{ book.title }}</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700  line-clamp-2  ">{{ book.description }}</p>
              <p class="mb-3 font-normal  text-gray-700 "> <span class="font-bold">Price:</span> ${{ book.price }}</p>
              <a href="#" @click="addToCart(book.id)"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
      <el-dialog v-model="formRecipe" style="border-radius: 8px" title="Post Recipe" width="670">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" class="demo-ruleForm"
          label-position="top">
          <el-form-item label="Title" prop="title">
            <el-input v-model="formState.title" type="text" />
          </el-form-item>
          <el-form-item label="Ingredients" prop="ingredients">
            <!--            <el-input v-model="formState.ingredients" type="text"/>-->
            <ckeditor v-model="formState.ingredients" :editor="editor" :style="{ maxHeight: '600px' }"></ckeditor>
          </el-form-item>
          <el-form-item label="Short Description" prop="shortDescription">
            <ckeditor v-model="formState.shortDescription" :editor="editor" :style="{ maxHeight: '600px' }"></ckeditor>
          </el-form-item>

          <el-form-item label="Description" prop="description">
            <!--            <el-input id="description" v-model="formState.description" type="text"/>-->
            <ckeditor v-model="formState.description" :editor="editor" :style="{ maxHeight: '600px' }"></ckeditor>
          </el-form-item>
          <!--          <el-form-item  label="Thumbnail" prop="thumbnail">-->
          <!--            <el-input v-model="formState.thumbnail" type="text"/>-->
          <!--          </el-form-item>-->
          <el-form-item prop="thumbnail" label="Thumbnail">
            <div class="relative h-[120px] w-[120px] rounded-full object-cover mb-4" @click="changeImage">
              <img class="h-full w-full rounded-[12px] object-cover" v-if="!beforeImage" :src="''" alt />
              <img class="h-full w-full rounded-[12px] object-cover" v-else="beforeImage" :src="beforeImage" alt />
              <svg xmlns="http://www.w3.org/2000/svg" width="56"
                class="absolute z-50 cursor-pointer bottom-[-20px] right-[-14px]" height="56" viewBox="0 0 56 56"
                fill="none">
                <g filter="url(#filter0_d_3950_23986)">
                  <rect x="8" y="4" width="40" height="40" rx="20" fill="white" />
                  <path
                    d="M30.4997 24.834C30.4997 26.2147 29.3804 27.334 27.9997 27.334C26.619 27.334 25.4997 26.2147 25.4997 24.834C25.4997 23.4533 26.619 22.334 27.9997 22.334C29.3804 22.334 30.4997 23.4533 30.4997 24.834Z"
                    fill="#26282C" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M33.0577 17.334C32.9206 17.334 32.7856 17.3001 32.6648 17.2355C32.5438 17.1708 32.4407 17.0772 32.3646 16.9632L31.6879 15.9473C31.4596 15.6049 31.1503 15.3241 30.7875 15.1299C30.4246 14.9356 30.0195 14.834 29.6079 14.834H26.3912C25.9797 14.834 25.5745 14.9356 25.2117 15.1299C24.8488 15.3241 24.5395 15.6049 24.3112 15.9473L23.6346 16.9632C23.5584 17.0772 23.4553 17.1708 23.3344 17.2355C23.2135 17.3001 23.0786 17.334 22.9415 17.334H22.9997C20.6985 17.334 18.833 19.1995 18.833 21.5007V28.1673C18.833 30.4685 20.6985 32.334 22.9997 32.334H32.9997C35.3009 32.334 37.1663 30.4685 37.1663 28.1673V21.5007C37.1663 19.1995 35.3009 17.334 32.9997 17.334H33.0577ZM32.1663 24.834C32.1663 27.1352 30.3009 29.0007 27.9997 29.0007C25.6985 29.0007 23.833 27.1352 23.833 24.834C23.833 22.5328 25.6985 20.6673 27.9997 20.6673C30.3009 20.6673 32.1663 22.5328 32.1663 24.834Z"
                    fill="#26282C" />
                </g>
                <defs>
                  <filter id="filter0_d_3950_23986" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feColorMatrix type="matrix"
                      values="0 0 0 0 0.184314 0 0 0 0 0.192157 0 0 0 0 0.211765 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3950_23986" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3950_23986" result="shape" />
                  </filter>
                </defs>
              </svg>
              <input type="file" @change="befoceImage" ref="changeImageProfile" accept="image/png, image/jpeg"
                class="hidden" />
            </div>
          </el-form-item>
          <el-form-item label="Type" prop="type">
            <el-select v-model="formState.type" placeholder="Please select a type">
              <el-option v-for="item in type" :key="item.id" :label="item.name" :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <div class="flex w-full">
              <div></div>
              <div class="ml-auto">
                <el-button @click="postRecipe" type="primary">
                  Submit
                </el-button>
                <el-button>Reset</el-button>
              </div>
            </div>
          </el-form-item>
        </el-form>
      </el-dialog>
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
    </div>
  </LayoutCustomer>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, reactive } from "vue";
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import FormRecipe from "../../components/FormRecipe.vue";
import { $axios } from "../../utils/request";
import { $ax } from "../../utils/requestPost";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import router from "../../router";
const editor = ClassicEditor;

const toggleModal = () => {
  const token = localStorage.getItem("token");
  if (token) {
    formRecipe.value = !formRecipe.value;
  } else {
    showLogin.value = true
  }
}

const showLogin = ref(false);
const formState = reactive({
  name: '',
  email: '',
  planId: '',
  username: '',
  password: '',
  title: '',
  ingredients: '',
  shortDescription: '',
  description: '',
  type: '',
  thumbnail: ''
});

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
      }
    })
};
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
const addToCart = (id) => {
  // Lấy danh sách sách từ localStorage
  let books = localStorage.getItem('books');

  // Nếu không có sách nào trong localStorage, khởi tạo mảng rỗng
  if (!books) {
    books = [];
  } else {
    // Chuyển đổi chuỗi JSON thành mảng
    books = JSON.parse(books);
  }
  if (!books.includes(id)) {
    // Nếu chưa tồn tại, thêm ID của sách mới vào mảng
    books.push(id);
  }


  // Chuyển đổi mảng thành chuỗi JSON
  const booksJSON = JSON.stringify(books);

  // Lưu chuỗi JSON trở lại localStorage
  localStorage.setItem('books', booksJSON);
}
onBeforeMount(() => {
  getRecipes()
  getBooks()
})
const getDetailRecipe = (id, type) => {
  if (type == 1) {
    router.push({ name: 'detail-recipe-customer', params: { id: id } })
  } else {
    const user = localStorage.getItem('user');
    if (user) {
      router.push({ name: 'detail-recipe-customer', params: { id: id } })
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
const type = [
  {
    id: 0,
    name: 'Premium'
  },
  {
    id: 1,
    name: 'Free'
  },
  {
    id: 2,
    name: 'Candidate'
  },
  {
    id: 3,
    name: 'Winner'
  },
]

const beforeImage = ref();
const changeImageProfile = ref();
const avatar = ref();

const changeImage = () => {
  changeImageProfile.value.click();
};
const befoceImage = (e) => {
  let value = e.target.files[0];

  let allowedExtension = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/heic",
    "image/JPEG",
    "image/JPG",
    "image/PNG",
    "image/HEIC",
  ];
  if (value) {
    avatar.value = value;
    if (!allowedExtension.includes(value.type)) {
      showMessage("error", "File không được hỗ trợ");
      return false;
    }
    if (value.size / 1024 / 1024 > 5) {
      showMessage("error", "Chỉ được nhập ảnh bé hơn 5 MB");
      return false;
    }
    beforeImage.value = URL.createObjectURL(value);
  }
};

// "Content-Type": "multipart/form-data"
const postRecipe = () => {
  const user = localStorage.getItem('user');

  $ax.post('/Users/Recipes', {
    UserId: user.id,
    Title: formState.title,
    Ingredients: formState.ingredients,
    ShortDescription: formState.shortDescription,
    Description: formState.description,
    Type: formState.type,
    Thumbnail: avatar.value
  },
  )
    .then((data) => {
      formRecipe.value = false;
    })
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
  line-height: 24px;
  /* 150% */
}

.el-dialog__header {
  text-align: center;
}
</style>
