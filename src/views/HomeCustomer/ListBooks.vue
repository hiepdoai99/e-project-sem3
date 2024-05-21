<template>
  <LayoutCustomer>
    <div class="px-[120px] mt-[32px]  flex gap-4">
      <div class="p-8 flex gap-4 flex-wrap">
        <div v-for="book in books" :key="book.in"
             class="w-[24%] bg-white border border-gray-100 rounded-lg shadow-xl">
          <div class="relative">
            <img class="rounded-t-lg  object-cover w-full  h-[240px]"
                 :src="book.bookImages[0].image ? book.bookImages[0].image : '/ice-cream-2k.png'" alt="" />
          </div>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-2 ">{{ book.title }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700  line-clamp-2  ">{{ book.description }}</p>
            <p class="mb-3 font-normal  text-gray-700 "> <span class="font-bold">Price:</span> ${{ book.price }}</p>
            <a href="#" @click="addToCart(book.id)"
               class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add to cart
            </a>
          </div>
        </div>
      </div>

    </div>
  </LayoutCustomer>

</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import {ref, onMounted, onBeforeMount} from "vue";
import {$axios} from "../../utils/request";



const books = ref()

const getBooks = async () => {
  await $axios.get('Book')
      .then((data) => {
        books.value = data.data;
      });
}
onBeforeMount(() => {
  getBooks()
})
const addToCart = (id) => {
  // Lấy danh sách sách từ localStorage
  let books = localStorage.getItem('books');

  // Nếu không có sách nào trong localStorage, khởi tạo mảng rỗng
  if (!books) {
    books = [];
  } else {
    // Chuyển đổi chuỗi JSON thành mảng
    books = JSON.parse(books);

  }
  if (!books.includes(id)) {
    // Nếu chưa tồn tại, thêm ID của sách mới vào mảng
    books.push(id);
    ElNotification({
      title: "Success",
      message: 'Add to cart successfully',
      type: "success",
      zIndex: 10000
    })

  }else {
    ElNotification({
      title: "Warning",
      message: 'Products already in the cart',
      type: "warning",
      zIndex: 10000
    })
  }


  // Chuyển đổi mảng thành chuỗi JSON
  const booksJSON = JSON.stringify(books);

  // Lưu chuỗi JSON trở lại localStorage
  localStorage.setItem('books', booksJSON);
}
</script>

<style scoped>

</style>