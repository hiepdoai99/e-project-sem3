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
          <el-table-column  label="Status">
            <template #default="{ row }">
              <p class="">{{ orderStatus[row.status].name }}</p>
            </template>
          </el-table-column>
          <el-table-column label="Action" >
            <template #default="{ row }">
              <el-button type="primary" :icon="View" @click="viewDetail(row.id)"></el-button>
              <el-button type="primary" :icon="Edit" @click="showPopup(row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="flex justify-between items-center w-full mt-2 mr-14  text-[#797588]">
      <div></div>
      <div class="flex gap-2 mr-14">
        <button @click="previous" class="bg-gray-300 rounded-lg text-indigo-600 px-3 py-1 items-center justify-center ">
          Previous
        </button>
        <button @click="next" class="bg-gray-300 rounded-lg px-3 text-indigo-600 py-1 items-center justify-center ">
          Next
        </button>
      </div>
    </div>

    <el-dialog style="border-radius: 8px" v-model="popupEdit" title="Update status" width="400">
      <el-select v-model="status" placeholder="Please select a status">
        <el-option v-for="item in listStatus" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
      <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="popupEdit = false"
                                   style="background: #1F1B540D;width: 47.5%;height: 40px; border-radius: 8px">
                          Cancel
                        </el-button>
                          <el-button style="width: 47.5%;height: 40px;border-radius: 8px" type="danger"
                                     @click="confirmUpdate">
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
import router from "../../router";
import { Edit } from '@element-plus/icons-vue'


const orders = ref()
const popupEdit = ref(false)
const status = ref()
const idUpdate = ref()

const showPopup = (id) => {
  popupEdit.value = true
  idUpdate.value = id
}
const previous = () => {
  page.value = page.value - 1
  getOrders()
}
const next = () => {
  page.value = page.value + 1
  getOrders()
}
const page = ref(1);
const getOrders = async () => {
  await $axios.get('Order?PerPage=7&PageNo='+ page.value)
      .then((data) => {
        orders.value = data.data.items;
      });
}
const confirmUpdate = () =>{
  $axios.put('/Order/'+ idUpdate.value ,status.value)
      .then((data) => {
        getOrders()
        popupEdit.value = false
      });
}
onBeforeMount(() => {
  getOrders()
})
const viewDetail = (id) => {
  router.push({name: 'detail-order', params: {id: id}})
}
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
const listStatus = [
  {
    id:1,
    name: "Process"
  },
  {
    id:2,
    name: "Paid"
  },
  {
    id:3,
    name: "Shipping"
  },
  {
    id:4,
    name: "Completed"
  },
  {
    id:5,
    name: "Return"
  },
  {
    id:6,
    name: "Returned"
  },
  {
    id:7,
    name: "Cancel"
  }


]
// const updateStatus = (id) =>{
//   $axios.put('Order')
//       .then((data) => {
//         orders.value = data.data.items;
//       });
// }
</script>

<style scoped>

</style>