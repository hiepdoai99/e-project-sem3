<template>
  <LayoutAdmin>
    <div class="m-4 p-4 h-full border border-gray-100 rounded-lg">
      <h1 class="font-semibold text-2xl ">Detail Order</h1>
      <div class="mt-4">
        <div class="flex flex-col ">
          <h3 class="font-semibold text-xl ">Customer information</h3>
          <div v-if="order" class="mt-4">
            <p class="font-normal text-gray-500">Name: <span class="font-bold text-gray-700">{{order.name}}</span></p>
            <p class="font-normal text-gray-500">Email: <span class="font-bold text-gray-700">{{order.email}}</span></p>
            <p class="font-normal text-gray-500">Phone: <span class="font-bold text-gray-700">{{order.phone}}</span></p>
            <p class="font-normal text-gray-500">Address: <span class="font-bold text-gray-700">{{order.street}} - {{order.city}} - {{order.country}}</span></p>
          </div>
          <h3 class="font-semibold text-xl text-center mb-6 mt-2">List item order</h3>
          <div >
            <el-table :data="orderDetails"
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
              <el-table-column  label="ISBN" >
                <template #default="{ row }">
                  <span >{{ row.book.isbn }}</span>
                </template>
              </el-table-column>
              <el-table-column  label="Name Book" >
                <template #default="{ row }">
                  <span class="line-clamp-1">{{ row.book.title }}</span>
                </template>
              </el-table-column>
              <el-table-column  label="Price" >
                <template #default="{ row }">
                  <span>${{ row.book.price }}</span>
                </template>
              </el-table-column>
              <el-table-column  label="Quantity" >
                <template #default="{ row }">
                  <span>1</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </LayoutAdmin>
</template>

<script setup>
import LayoutAdmin from "../../layouts/LayoutAdmin.vue";
import {useRoute, useRouter} from "vue-router";
import {ref, onMounted, onBeforeMount, reactive, watch} from "vue";
import {$axios} from "../../utils/request";

const router = useRouter()
const order = ref();
const orderDetails = ref();
const route = useRoute();
const id =  route.params.id;

const getOrder = async () => {
  await $axios.get('Order/' + id )
      .then((data) => {
        order.value = data.data;
        orderDetails.value = data.data.orderDetails;
      });
}
onMounted(() => {
  getOrder();
});
const orderStatus ={
  1: {
    type: 1,
    name: "Process"
  },
  2: {
    type: 2,
    name: "Paid"
  },
  3: {
    type: 3,
    name: "Shipping"
  },
  4: {
    type: 4,
    name: "Completed"
  },
  5: {
    type: 5,
    name: "Return"
  },
  6: {
    type: 6,
    name: "Returned"
  },
  7:{
    type: 7,
    name: "Cancel"
  }
}
</script>

<style scoped>

</style>