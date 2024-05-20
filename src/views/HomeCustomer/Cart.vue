<template>
    <LayoutCustomer>
        <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
            </h2>
            <div class="flex  py-6">
                <div class="font-normal w-1/3 text-xl leading-8 text-gray-500">Book</div>
                <div class="font-normal w-1/3 text-xl leading-8 text-center text-gray-500">Quantity</div>
                <div class="font-normal w-1/3 text-xl leading-8 text-right text-gray-500">Total</div>
            </div>

            <div class="flex">
                
                <div class="img-box w-1/3 items-start flex gap-4">
                    <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image" class="xl:w-[140px]">
                    <div class="pro-data w-full max-w-sm ">
                        <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">Latest N-5
                            Perfuam
                        </h5>
                        <p
                            class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                            Perfumes</p>
                        <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">$120.00</h6>
                    </div>
                </div>
                
                <div
                    class="flex  w-1/3 items-center flex-col min-[550px]:flex-row  max-xl:max-w-xl max-xl:mx-auto gap-2">
                    <h6 class="font-manrope font-bold text-2xl ml-10 leading-9 text-black w-full max-w-[176px] text-center">
                        $15.00 <span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                            Charge)</span></h6>
                    <div class="flex  items-center  ">
                        <button
                            class="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                        <input type="text"
                            class="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                            placeholder="1">
                        <button
                            class="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg class="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                                    stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                    <h6
                        class="text-indigo-600 font-manrope font-bold ml-10 text-2xl leading-9 w-full max-w-[176px] text-center">
                        $120.00</h6>
                        
                </div>

                <div class="w-1/3 text-right flex items-end">
                            <h6
                        class="text-indigo-600 font-manrope font-bold ml-10 text-2xl leading-9 w-full max-w-[176px] text-center">
                        $120.00</h6>
                </div>
                
            </div>
        </div>
            
    </section>
                                            
    </LayoutCustomer>
</template> 
<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";

</script>