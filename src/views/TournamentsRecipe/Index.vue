<template>
  <LayoutAdmin>
    <div class="flex flex-col w-full">
      <div class="p-4">
        <h1 class="font-semibold text-2xl">Manage Recipe</h1>
      </div>
      <div class="mt-6 ml-6 mr-6">
        <el-table
            :data="recipes"
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
          <el-table-column prop="authorName" label="Created by" width="180"></el-table-column>
          <el-table-column prop="title" label="Title" width="180" ></el-table-column>
          <el-table-column prop="ingredients" label="Ingredients" width="180"></el-table-column>
          <el-table-column prop="description" label="Description" width="180"></el-table-column>
          <el-table-column prop="type" label="type" width="180"></el-table-column>
          <el-table-column prop="createdAt" label="createdAt" width="180">
            <template #default="{ row }">
              <span>{{ formatDate(new Date(row.createdAt)) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Action" >
            <template #default="{ row }">
              <el-button type="primary"  @click="handleEdit(row)">Edit</el-button>
              <el-button type="danger"  @click="handleDelete(row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </LayoutAdmin>
</template>

<script setup>
import LayoutAdmin from "../../layouts/LayoutAdmin.vue";
import {ref, onMounted, onBeforeMount} from "vue";
import {$axios} from "../../utils/request";

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

</script>

<style scoped>

</style>