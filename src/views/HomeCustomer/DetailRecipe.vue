<template>
  <LayoutCustomer>
    <div v-if="recipe" class="bg-white rounded-lg mt-8 m-[120px] p-4 shadow-lg -mb-16">
      <div class="flex gap-4">
        <div class="w-1/2">
          <div
              class="box-image flex items-center p-4 gap-4 bg-[#FFF] rounded-lg w-full"
          >
            <div class="image-center">
              <img
                  class="w-[653px] h-[397px] object-cover"
                  :src="recipe.thumbnail ? recipe.thumbnail : '/ice-cream-2k.png'"
                  alt="image recipe"
              />
            </div>

            <div class="image-child flex flex-col gap-4 items-center relative">
              <div
                  v-for="item in recipe.images"
                  :key="item"
                  class="h-full w-full"
                  :class="index > 2 ? 'hidden' : ''"
              >
                <img
                    class="w-[119px] h-[122px] object-cover"
                    :src="item.image"
                    alt
                />
              </div>

              <div class="absolute bottom-0 w-[119px] h-[124px]">
                <div class="w-full h-full see_more relative opacity-60"></div>
                <div
                    class="text-base font-bold opacity-100 text-[#FFF] w-full h-full absolute top-0 flex items-center justify-center cursor-pointer"
                    @click="openModal"
                >
                  More
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2 p-8 flex gap-2 flex-col">
          <h1 class="text-4xl font-bold text-gray-900">{{recipe.title}}</h1>
          <p v-html="recipe.shortDescription" class="text-gray-700 dark:text-gray-400"></p>
          <p v-html="recipe.description" class="text-gray-700 dark:text-gray-400"></p>
          <p v-html="recipe.ingredients" class="text-gray-700 dark:text-gray-400"></p>
        </div>
      </div>
    </div>
<!--    <el-dialog v-model="centerDialogVisible" width="60%" align-center>-->
<!--      <div class="flex items-center justify-between flex-wrap gap-4">-->
<!--        <div class="modal-store-craft-images">-->
<!--          <Splide-->
<!--              :options="sliderMainOption"-->
<!--              class="text-center"-->
<!--              ref="mainSlider"-->
<!--              id="main-slider"-->
<!--          >-->
<!--            <SplideSlide-->
<!--                style="background: #dbdada"-->
<!--                v-for="item in recipe.images"-->
<!--                :key="index"-->
<!--            >-->
<!--              <img-->
<!--                  class="w-full rounded-lg h-[500px] object-contain"-->
<!--                  :src="item.image"-->
<!--                  alt-->
<!--              />-->
<!--            </SplideSlide>-->
<!--          </Splide>-->

<!--          <div class="thumb-slider-wrap">-->
<!--            <Splide-->
<!--                :options="sliderThumbOptions"-->
<!--                ref="mainSlider1"-->
<!--                id="thumbnail-slider"-->
<!--            >-->
<!--              <SplideSlide-->
<!--                  v-for="item in recipe.images"-->
<!--                  :key="index"-->
<!--                  class="mt-2"-->
<!--              >-->
<!--                <img-->
<!--                    @click="index = i"-->
<!--                    class="rounded-lg h-[85px] w-[120px] object-cover"-->
<!--                    :src="item.image"-->
<!--                    alt-->
<!--                />-->
<!--              </SplideSlide>-->
<!--            </Splide>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </el-dialog>-->
  </LayoutCustomer>
</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";
import {ref, onMounted, onBeforeMount,reactive} from "vue";
import {$axios} from "../../utils/request";
import {useRouter, useRoute} from 'vue-router'
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const mainSlider = ref();
const mainSlider1 = ref();
const sliderMainOption = ref({
  type: "fade",
  perPage: 1,
  start: 0,
  perMove: 1,
  cloneStatus: true,
  rewind: true,
  rewindByDrag: true,
  paginationKeyboard: false,
  pagination: false,
  autoplay: false,
});
const openModal = () => {
  setTimeout(() => {
    const thumbsSplide = mainSlider1.value?.splide;
    if (thumbsSplide) {
      mainSlider.value?.sync(thumbsSplide);
    }
  }, 500);
  centerDialogVisible.value = true;
};
const centerDialogVisible = ref(false);

const sliderThumbOptions = ref({
  type: "slide",
  rewind: true,
  gap: "1em",
  isNavigation: true,
  perPage: 7,
  perMove: 1,
  focus: "left",
  arrows: false,
  paginationKeyboard: false,
});
const recipe = ref();
const route = useRoute();
const id =  route.params.id;

onMounted(() => {
  getRecipes();
});

const getRecipes = async () => {
  await $axios.get('Recipes/' + id )
      .then((data) => {
        recipe.value = data.data;
        console.log(recipe.value);
      });
}

</script>

<style scoped>

</style>
