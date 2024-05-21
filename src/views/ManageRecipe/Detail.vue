<template>
  <LayoutAdmin>
    <div class="p-8 border border-gray-100 rounded-lg">
      <h1 class="font-semibold text-2xl text-center">Edit Recipe</h1>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          status-icon
          :rules="rules"
          class="demo-ruleForm"
          label-position="top"
      >
        <el-form-item  label="Title" prop="title">
          <el-input v-model="formState.title" type="text"/>
        </el-form-item>
        <el-form-item  label="Ingredients" prop="ingredients">
          <!--            <el-input v-model="formState.ingredients" type="text"/>-->
          <ckeditor
              v-model="formState.ingredients"
              :editor="editor"
              :style="{ maxHeight: '600px' }"
          ></ckeditor>
        </el-form-item>
        <el-form-item  label="Short Description" prop="shortDescription">
          <ckeditor
              v-model="formState.shortDescription"
              :editor="editor"
              :style="{ maxHeight: '600px' }"
          ></ckeditor>
        </el-form-item>

        <el-form-item  label="Description" prop="description">
          <!--            <el-input id="description" v-model="formState.description" type="text"/>-->
          <ckeditor
              v-model="formState.description"
              :editor="editor"
              :style="{ maxHeight: '600px' }"
          ></ckeditor>
        </el-form-item>
        <!--          <el-form-item  label="Thumbnail" prop="thumbnail">-->
        <!--            <el-input v-model="formState.thumbnail" type="text"/>-->
        <!--          </el-form-item>-->
        <el-form-item prop="thumbnail" label="Thumbnail">
          <div
              class="relative h-[120px] w-[120px] rounded-full object-cover mb-4"
              @click="changeImage"
          >
            <img
                class="h-full w-full rounded-[12px] object-cover"
                v-if="!beforeImage"
                :src="''"
                alt
            />
            <img
                class="h-full w-full rounded-[12px] object-cover"
                v-else="beforeImage"
                :src="beforeImage"
                alt
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                class="absolute z-50 cursor-pointer bottom-[-20px] right-[-14px]"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
            >
              <g filter="url(#filter0_d_3950_23986)">
                <rect x="8" y="4" width="40" height="40" rx="20" fill="white"/>
                <path
                    d="M30.4997 24.834C30.4997 26.2147 29.3804 27.334 27.9997 27.334C26.619 27.334 25.4997 26.2147 25.4997 24.834C25.4997 23.4533 26.619 22.334 27.9997 22.334C29.3804 22.334 30.4997 23.4533 30.4997 24.834Z"
                    fill="#26282C"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.0577 17.334C32.9206 17.334 32.7856 17.3001 32.6648 17.2355C32.5438 17.1708 32.4407 17.0772 32.3646 16.9632L31.6879 15.9473C31.4596 15.6049 31.1503 15.3241 30.7875 15.1299C30.4246 14.9356 30.0195 14.834 29.6079 14.834H26.3912C25.9797 14.834 25.5745 14.9356 25.2117 15.1299C24.8488 15.3241 24.5395 15.6049 24.3112 15.9473L23.6346 16.9632C23.5584 17.0772 23.4553 17.1708 23.3344 17.2355C23.2135 17.3001 23.0786 17.334 22.9415 17.334H22.9997C20.6985 17.334 18.833 19.1995 18.833 21.5007V28.1673C18.833 30.4685 20.6985 32.334 22.9997 32.334H32.9997C35.3009 32.334 37.1663 30.4685 37.1663 28.1673V21.5007C37.1663 19.1995 35.3009 17.334 32.9997 17.334H33.0577ZM32.1663 24.834C32.1663 27.1352 30.3009 29.0007 27.9997 29.0007C25.6985 29.0007 23.833 27.1352 23.833 24.834C23.833 22.5328 25.6985 20.6673 27.9997 20.6673C30.3009 20.6673 32.1663 22.5328 32.1663 24.834Z"
                    fill="#26282C"
                />
              </g>
              <defs>
                <filter
                    id="filter0_d_3950_23986"
                    x="0"
                    y="0"
                    width="56"
                    height="56"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                  />
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.184314 0 0 0 0 0.192157 0 0 0 0 0.211765 0 0 0 0.1 0"
                  />
                  <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3950_23986"
                  />
                  <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3950_23986"
                      result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <input
                type="file"
                @change="befoceImage"
                ref="changeImageProfile"
                accept="image/png, image/jpeg"
                class="hidden"
            />
          </div>
        </el-form-item>
        <el-form-item  label="Type" prop="type">
          <el-select v-model="formState.type"  placeholder="Please select a type">
            <el-option
                v-for="item in type"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <div class="flex w-full">
            <div></div>
            <div class="ml-auto">
              <el-button @click="updateRecipe" type="primary">
                Update
              </el-button>
              <el-button @click="back">Cancel</el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </LayoutAdmin>
</template>

<script setup>
import LayoutAdmin from "../../layouts/LayoutAdmin.vue";
import {ref, onMounted, onBeforeMount, reactive, watch} from "vue";
import {$axios} from "../../utils/request";
import {$ax} from "../../utils/requestPost";
import {useRouter, useRoute} from 'vue-router'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const editor = ClassicEditor;
const router = useRouter()
const recipe = ref();
const route = useRoute();
const id =  route.params.id;

const formState = reactive({
  title:'',
  ingredients:'',
  shortDescription:'',
  description:'',
  type:'',
  thumbnail:''
});
onMounted(() => {
  getRecipes();
});
watch(recipe, (newValue, oldValue) => {
  formState.title = newValue.title;
  formState.ingredients = newValue.ingredients;
  formState.shortDescription = newValue.shortDescription;
  formState.description = newValue.description;
  formState.type = newValue.type;
  formState.thumbnail = newValue.thumbnail;
});
const getRecipes = async () => {
  await $axios.get('Recipes/' + id )
      .then((data) => {
        recipe.value = data.data;
      });
}
const back = () => {
  router.push('/admin')
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
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} - ${hours}:${minutes}`;
}
const updateRecipe = () => {
  const user = localStorage.getItem('user');


  $ax.put('/Recipes/' + id, {
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
        ElNotification({
          title: "Success",
          message: 'Update successfully',
          type: "success",
          zIndex: 10000
        })
        getRecipes()
        setTimeout(back(),3000)
      })
      .catch((error) => {
        ElNotification({
          title: 'Error',
          message: 'Update fail!',
          type: 'error',
        })
      });
}
</script>

<style scoped>

</style>