<template>
  <LayoutAdmin>
    <div class="flex flex-col w-full">
      <div class="p-4">
        <h1 class="font-semibold text-2xl">Feedback</h1>
      </div>
      <div class="mt-6 ml-6 mr-6">
        <el-table :data="feedBacks"
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
          <el-table-column prop="name" label="Name" ></el-table-column>
          <el-table-column prop="email" label="Email" ></el-table-column>
          <el-table-column prop="content" label="Message" ></el-table-column>
          <el-table-column  label="Created At" >
            <template #default="{ row }">
            <span>{{ formatDate(new Date(row.createdAt)) }}</span>
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

const feedBacks = ref()
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}/${month}/${day} - ${hours}:${minutes}`;
}
const getFeedBacks = async () => {
  await $axios.get('FeedBacks')
      .then((data) => {
        feedBacks.value = data.data;
      });
}
onBeforeMount(() => {
  getFeedBacks()
})
</script>

<style scoped>

</style>