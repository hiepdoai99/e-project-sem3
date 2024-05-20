<template>
    <LayoutCustomer>
        <div class="p-16">
            <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mx-8">
                    <div class="max-w-lg">
                        <h2 class="mb-4 text-4xl font-bold bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 inline-block"
                            style="color: transparent">About Us</h2>
                        <p class="mt-4 text-gray-600 text-lg">Welcome to Mr. A's Culinary Creations, the ultimate
                            destination for dessert and ice cream enthusiasts! Founded by the renowned Mr. A, our
                            website is dedicated to sharing his passion for creating delightful and high-quality
                            desserts. Known for his unique and delicious recipes, Mr. A has decided to bring his
                            expertise online, allowing everyone to enjoy and recreate his masterpieces at home.
                        </p>
                        <p class="mt-8 text-gray-600 text-lg">
                            Thank you for visiting Mr. A's Culinary Creations. Let's make something delicious together!
                        </p>
                        <div class="mt-8">
                            <router-link class="link" to="/">
                                <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Experience our recipes
                                    <span class="ml-2">&#8594;</span></a>
                            </router-link>
                        </div>
                    </div>
                    <div class="mt-12 md:mt-0">
                        <img src="https://www.thespruceeats.com/thmb/_XMZO3SQQ9GIskXqsT9tHVgUJaQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/easy-chocolate-ice-cream-recipe-1945798-6_preview-5b16c882ff1b780036a4e1a2.jpeg"
                            alt="About Us Image" class="object-cover rounded-lg shadow-md">
                    </div>
                </div>
            </div>
        </div>
    </LayoutCustomer>
</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";

</script>

<style scoped>
/* Add your styles here */
</style>
