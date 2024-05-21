<template>
  <LayoutAdmin>
    <div class="flex flex-col w-full">
      <div class="p-4 ">
        <h1 class="font-semibold text-2xl">Manage Recipe</h1>
      </div>
      <div class="mt-6 ml-6 mr-6 mb-4">
        <div class="w-full mb-4">
          <el-button type="primary" @click="formRecipe = true">
          Add Recipe
        </el-button>
        </div>
        <el-table :data="recipes"
                  stripe
                  style="width: 98% ;border-radius: 8px ; border: 1px solid #ebeef5;"
                  size="large"
                  :header-cell-style="{
            'font-size': '12px',
            color: 'black',
            'text-align': 'center',
            background: '#F5F5F5',
          }"
                  :cell-style="{
            'text-align': 'center',
            padding: '28px 0',
            'font-size': '14px',
            color: '#000000D9',
          }"
        >
          <el-table-column prop="authorName" label="Created by" ></el-table-column>
          <el-table-column  label="Title"  >
            <template #default="{ row }">
              <span class="line-clamp-2">{{ row.title }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="type" label="Type" >
            <template #default="{ row }">
              <span>{{ typeRecipe[row.type].name }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="createdAt" label="CreatedAt" >
            <template #default="{ row }">
              <span>{{ formatDate(new Date(row.createdAt)) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Action" >
            <template #default="{ row }">
              <el-button type="primary" :icon="Edit" @click="handleEdit(row.id)"></el-button>
              <el-button type="danger"  :icon="Delete" @click="showPopupDelete(row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="flex justify-between items-center w-full mt-2 mr-6  text-[#797588]">
          <div></div>
          <div class="flex gap-2 mr-6">
            <button @click="previous" class="bg-gray-300 rounded-lg text-indigo-600 px-3 py-1 items-center justify-center ">
              Previous
            </button>
            <button @click="next" class="bg-gray-300 rounded-lg px-3 text-indigo-600 py-1 items-center justify-center ">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
        v-model="formRecipe"
        style="border-radius: 8px"
        title="Add Recipe"
        width="670"
    >
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
              <el-button @click="postRecipe" type="primary">
                Submit
              </el-button>
              <el-button>Reset</el-button>
            </div>
          </div>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog style="border-radius: 8px" v-model="popupDelete" title="Confirm delete" width="400">
      <p class="text-center  ">Are you sure delete<span class="font-semibold"></span>
      </p>
      <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="popupDelete = false"
                                   style="background: #1F1B540D;width: 47.5%;height: 40px; border-radius: 8px">
                          Cancel
                        </el-button>
                          <el-button style="width: 47.5%;height: 40px;border-radius: 8px" type="danger"
                                     @click="confirmDelete">
                         Confirm
                        </el-button>
                      </span>
      </template>
    </el-dialog>
  </LayoutAdmin>
</template>

<script setup>
import LayoutAdmin from "../../layouts/LayoutAdmin.vue";
import {ref, onMounted, onBeforeMount, reactive} from "vue";
import {$axios} from "../../utils/request";
import {$ax} from "../../utils/requestPost";
import router from "../../router";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const editor = ClassicEditor;
import { Edit } from '@element-plus/icons-vue'
import { Delete } from '@element-plus/icons-vue'


const recipes = ref()
const listRecipes = ref()
const popupDelete = ref(false);
const idDelete = ref()
const showPopupDelete = (id) => {
  popupDelete.value = true;
  idDelete.value = id;
}

const confirmDelete = () => {
  $axios.delete('Recipes/' + idDelete.value)
      .then((data) => {
        popupDelete.value = false;
        getRecipes()
      })
}

const handleEdit = (id) => {
  router.push({name: 'detail-recipe', params: {id: id}})
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
const page = ref(1);
const getRecipes = async () => {
  await $axios.get('Recipes/Admin?from=Admin&PerPage=7&PageNo=' + page.value)
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
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} - ${hours}:${minutes}`;
}
const formRecipe = ref(false);

const formState = reactive({
  title:'',
  ingredients:'',
  shortDescription:'',
  description:'',
  type:'',
  thumbnail:''
});
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
const postRecipe = () => {
  const user = localStorage.getItem('user');

  $ax.post('/Recipes', {
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

<style scoped>

</style>