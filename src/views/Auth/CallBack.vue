<template>
  <div v-if="view" class="bg-gray-100 h-full">
    <div class="bg-white p-6  md:mx-auto">
      <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
        <path fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
        </path>
      </svg>
      <div class="text-center">
        <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
        <p class="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
        <p> Wish you have a great day!  </p>
        <div class="py-10 text-center">
          <router-link :to="{ name: 'home-customer' }">
            <a href="#" class="px-12  text-white font-semibold py-3 bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg">
              GO BACK TO HOME
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="bg-gray-100 h-full">
    <div class="bg-white p-6  md:mx-auto">
      <div class="text-center">
        <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment failed!</h3>
        <p class="text-gray-600 my-2">Thank you. Please try again later
          .</p>
        <p> Wish you have a great day!  </p>
        <div class="py-10 text-center">
          <router-link :to="{ name: 'home-customer' }">
            <a href="#" class="px-12  text-white font-semibold py-3 bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg">
              GO BACK TO HOME
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {$axios} from "../../utils/request";
import {ref, reactive, onMounted} from 'vue';
import {useRouter} from 'vue-router'
const router = useRouter()

const view = ref(false)
const url = new URL(window.location.href);
const status = url.searchParams.get('status');
onMounted(() => {
  if (status == '1') {
    view.value = true
  } else {
    view.value = false
  }
})
</script>

<style scoped>

</style>