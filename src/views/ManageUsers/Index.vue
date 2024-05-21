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
          <el-table-column prop="name" label="Name" ></el-table-column>
          <el-table-column prop="username" label="Username"  ></el-table-column>
          <el-table-column prop="email" label="email" ></el-table-column>
          <el-table-column prop="isActivated" label="Activated" ></el-table-column>
          <el-table-column label="Action" >
            <template #default="{ row }">
              <el-button v-if="row.isActivated" type="danger"  :icon="CloseBold"  @click="showPopupDelete(row.id)"></el-button>
              <el-button v-if="!row.isActivated" type="success"  :icon="Select"  @click="showPopupActive(row.id)"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog style="border-radius: 8px" v-model="popupDelete" title="Deactivate user" width="400">
      <p class="text-center  ">Are you sure deactivate<span class="font-semibold"></span>
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
    <el-dialog style="border-radius: 8px" v-model="popupActive" title="Active user" width="400">
      <p class="text-center  ">Are you sure Active<span class="font-semibold"></span>
      </p>
      <template #footer>
                      <span class="dialog-footer">
                        <el-button @click="popupActive = false"
                                   style="background: #1F1B540D;width: 47.5%;height: 40px; border-radius: 8px">
                          Cancel
                        </el-button>
                          <el-button style="width: 47.5%;height: 40px;border-radius: 8px" type="success"
                                     @click="confirmActive">
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
import { Select } from '@element-plus/icons-vue'
import { CloseBold } from '@element-plus/icons-vue'

const users = ref()
const popupDelete = ref(false);
const idDelete = ref()
const showPopupDelete = (id) => {
  popupDelete.value = true;
  idDelete.value = id;
}
const confirmDelete = () => {
  $axios.patch('Users/' + idDelete.value)
      .then((data) => {
        popupDelete.value = false;
        getUsers()
      })
}
const popupActive = ref(false);
const idActive = ref()
const showPopupActive = (id) => {
  popupActive.value = true;
  idActive.value = id;
}
const confirmActive = () => {
  $axios.patch('Users/' + idActive.value)
      .then((data) => {
        popupActive.value = false;
        getUsers()
      })
}
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