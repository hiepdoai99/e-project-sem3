<template>
  <LayoutCustomer>
    <section class="py-24 relative">
      <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-white bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500" style="color: transparent">Shopping Cart
        </h2>
        <div class="flex border-b-2  py-6">
          <div class="font-normal w-1/3 text-xl leading-8 text-gray-500">Book</div>
          <div class="font-normal w-1/3 text-xl leading-8 text-center text-gray-500">Quantity</div>
          <div class="font-normal w-1/3 text-xl leading-8 text-right text-gray-500 mr-6">Total</div>
        </div>
        <div v-for="item in books" class="flex  border-b-2 py-4 ">
          <div class="img-box w-1/3 items-start flex gap-4">
            <img :src="item.bookImages[0]?.image ? item.bookImages[0].image : '/default-book.png'" alt="book" class="w-[120px] h-[120px] rounded-lg">
            <div class="pro-data w-full max-w-sm ">
              <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center line-clamp-1">{{item.title}}</h5>
              <p class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center line-clamp-1">{{item.description}}</p>
              <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center"><span class="text-gray-700 font-semibold">Price:</span> ${{item.price}}</h6>
            </div>
          </div>

          <div class="flex  w-1/3 items-center flex-col   gap-2">
            <h6 class="font-manrope font-bold text-2xl  leading-9 text-black w-full max-w-[176px] text-center">
              $ {{item.price}}<span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap"></span>
            </h6>
            <div class="flex items-center ">
              <label for="">Quantity: 1</label>
            </div>
          </div>
          <div class="w-1/3 text-right flex ">
            <h6 class="text-indigo-600 font-manrope font-bold  text-2xl leading-9 w-full ml-auto mr-2">
             ${{item.price  * quantity}}
            </h6>
            <p @click="removeItem(item.id)" class="ml-auto bg-gray-200  flex items-center justify-center rounded-full h-6 w-6 cursor-pointer">
              <el-icon><CloseBold /></el-icon>
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col mt-2">
          <p class="ml-auto text-indigo-600 font-bold text-2xl">Total Order: ${{calculateTotalOrder(books)}}</p>
          <button @click="showPayment = true" class="bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 mt-2 text-white font-bold text-xl px-6 py-2 rounded-lg ml-auto max-w-[160px]">Checkout</button>
        </div>
      </div>
    </section>
    <el-dialog v-model="showPayment" style="border-radius: 8px;width: 30%">
      <template #title>
        <h2 class="text-2xl font-bold bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 inline-block" style="color: transparent">Payment</h2>
      </template>
      <template #default>
        <div class="flex flex-col gap-4">
          <div class="">
            <label for="name">Name</label>
            <input v-model="formState.name" type="text" id="name" class="w-full border border-gray-300 rounded-lg p-2">
          </div>
          <div class="">
            <label for="email">Email</label>
            <input v-model="formState.email" type="email" id="email" class="w-full border border-gray-300 rounded-lg p-2">
          </div>
          <div class="">
            <label for="phone">Phone</label>
            <input v-model="formState.phone" type="text" id="phone" class="w-full border border-gray-300 rounded-lg p-2">
          </div>
          <div class="">
            <label for="street">Street</label>
            <input v-model="formState.street" type="text" id="street" class="w-full border border-gray-300 rounded-lg p-2">
          </div>
          <div class="">
            <label for="city">City</label>
            <input v-model="formState.city" type="text" id="city" class="w-full border border-gray-300 rounded-lg p-2">
          </div>
          <div class="">
            <label for="country">Country</label>
            <input v-model="formState.country" type="text" id="country" class="w-full border border-gray-300 rounded-lg p-2">
          </div>
        </div>
      </template>
      <template #footer>
        <div class="flex gap-4 items-center justify-center">
          <button @click="showPayment = false" class=" bg-gray-200 text-gray-700 font-bold text-xl px-4 py-1 rounded-lg">Cancel</button>
          <button @click="payment" class=" bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 text-white font-bold text-xl px-4 py-1 rounded-lg">Go to payment page</button>
        </div>
      </template>
    </el-dialog>
  </LayoutCustomer>
</template>
<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import {ref, onMounted, onBeforeMount, reactive} from "vue";
import {$axios} from "../../utils/request";
import {CloseBold} from '@element-plus/icons-vue'

const quantity = ref(1)
const books = ref()
const totalOrder = ref(0)
const showPayment = ref(false)

const formState = reactive({
  name: '',
  email: '',
  phone: '',
  street: '',
  city: '',
  country: ''
})

let cart;
try {
  cart = JSON.parse(localStorage.getItem('books')) || [];
} catch (e) {
  cart = [];
}
const getBooks = async () => {
  if (Array.isArray(cart) && cart.length > 0) {
    const promises = cart.map(id => $axios.get(`Book/${id}`));

    try {
      const responses = await Promise.all(promises);
      books.value = responses.map(response => response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu sách:", error);
    }
  }
}
const removeItem = (id) => {
  cart = cart.filter(item => item !== id);
  localStorage.setItem('books', JSON.stringify(cart));
  window.location.reload();
  getBooks();
}
const calculateTotalOrder = (books) => {
  if (Array.isArray(books) && books.length > 0) {
    return books.reduce((total, book) => total + book.price, 0);
  }
  return 0;

}

const payment = () => {
  const params = {
    userId: null,
    name: formState.name,
    email: formState.email,
    phone: formState.phone,
    street: formState.street,
    city: formState.city,
    country: formState.country,
    totalAmount: calculateTotalOrder(books.value),
    orderDetails: books.value.map(book => ({
      bookId: book.id,
      purchasePrice: book.price,
      quantity: 1
    }))
  }
  $axios.post('Book/checkout', params
  ).then((data) => {
    if (data.data) {
      localStorage.removeItem('books');
      window.location.href = data.data;
    }
  }).catch(error => {
    console.error(error);
  })
}


onBeforeMount(() => {
  getBooks()
})

</script>