<template>
  <LayoutAdmin>
    <div class="flex flex-col w-full">
      <div class="p-4">
        <h1 class="font-semibold text-2xl">Manage User</h1>
      </div>
      <div class="mt-6 ml-6 mr-6">
        <el-table :data="users"
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
          <el-table-column prop="name" label="name" width="180"></el-table-column>
          <el-table-column prop="username" label="username" width="180" ></el-table-column>
          <el-table-column prop="email" label="email" width="180"></el-table-column>
          <el-table-column prop="isActivated" label="isActivated" width="180"></el-table-column>
          <el-table-column prop="subscriptions" label="subscriptions" width="180"></el-table-column>
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

const users = ref()

const getUsers = async () => {
  await $axios.get('Users')
      .then((data) => {
        users.value = data.data.items;
      });
}
onBeforeMount(() => {
  getUsers()
})
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} - ${hours}:${minutes}`;
}
</script>

<style scoped>

</style>