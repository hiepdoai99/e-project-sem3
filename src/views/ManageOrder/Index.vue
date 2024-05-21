<template>
  <LayoutAdmin>
    <div class="flex flex-col w-full">
      <div class="p-4">
        <h1 class="font-semibold text-2xl">Manage Order</h1>
      </div>
      <div class="mt-6 ml-6 mr-6">
        <el-table :data="orders"
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
          <el-table-column prop="name" label="Customer" ></el-table-column>
          <el-table-column prop="phone" label="Phone" ></el-table-column>
          <el-table-column prop="email" label="Email" ></el-table-column>
          <el-table-column  label="Street">
            <template #default="{ row }">
              <span>{{ row.street }} - {{row.city}} - {{row.country}}</span>
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

const orders = ref()

const getOrders = async () => {
  await $axios.get('Order')
      .then((data) => {
        orders.value = data.data.items;
      });
}
onBeforeMount(() => {
  getOrders()
})
</script>

<style scoped>

</style>