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
              <el-button type="primary" :icon="View" @click="handleEdit(row.id)"></el-button>
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
import {ref, onMounted, onBeforeMount} from "vue";
import {$axios} from "../../utils/request";
import { View } from '@element-plus/icons-vue'
import { Delete } from '@element-plus/icons-vue'
import router from "../../router";

const page = ref(1);
const recipes = ref()
const getRecipes = async () => {
  await $axios.get('Recipes/Admin?from=User')
      .then((data) => {
        recipes.value = data.data.items;
      });
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
const handleEdit = (id) => {
  router.push({name: 'detail-recipe', params: {id: id}})
}
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
</script>

<style scoped>

</style>