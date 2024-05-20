<template>
  <LayoutCustomer>
    <div class="p-16 mb-0">
      <!-- <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-0">
        <h2 class="mb-4 text-2xl font-bold text-gray-700">Frequently Asked Questions</h2>
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-gray-900">Question 1</h3>
          <p class="text-gray-700">Answer to question 1.</p>
        </div>
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-gray-900">Question 2</h3>
          <p class="text-gray-700">Answer to question 2.</p>
        </div>
        <div class="mb-4">
          <h3 class="text-xl font-semibold text-gray-900">Question 3</h3>
          <p class="text-gray-700">Answer to question 3.</p>
        </div>
      </div> -->
      <div class="container flex flex-col justify-center p-4 mx-auto md:p-8 bg-white shadow-md rounded-lg">
        <h2
          class="mb-12 text-5xl text-center font-bold bg-clip-text bg-gradient-to-r hover:bg-gradient-to-l from-violet-500 to-fuchsia-500 inline-block"
          style="color: transparent">Frequently Asked Questions</h2>
        <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details v-for="question in questions">
            <summary class="py-4 text-xl font-medium outline-none cursor-pointer focus:underline">{{ question.q }}
            </summary>
            <div class="px-4 pb-4">
              <p>{{ question.a }}</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </LayoutCustomer>

</template>

<script setup>
import LayoutCustomer from "../../layouts/LayoutCustomer.vue";

const questions = [
  {
    q: "Do I have to be vegetarian to enjoy the recipes?",
    a: "Everything you see here is 100% omnivore-approved! When you are cooking with good-quality seasonal ingredients, the results are going to taste great, whether you are vegetarian or not."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept various payment methods, including credit cards, debit cards, net banking through VNPay Payment portal. You can choose the payment option that is most convenient for you during the checkout process."
  },
  {
    q: "How long does shipping take?",
    a: "Shipping times may vary depending on your location and the shipping method chosen. Typically, delivery can take 1-4 business days within Viet Nam. You will receive a tracking notification once your order is shipped."
  },
  {
    q: "Can I return a product if I'm not satisfied?",
    a: "We hope you enjoy our dessert and ice cream recipe book! If you wish to return the book, you may do within 7 working days. Please ensure the book is in its original condition. For assistance with returns, please contact us for better customer support."
  },
  {
    q: "Do you offer international shipping?",
    a: "Currently, we only provide shipping services within Viet Nam. However, we may consider expanding our shipping options to international locations in the future. Please stay updated with our website for any changes in shipping destinations."
  },
  {
    q: "What is your subscription policy?",
    a: "When you subscribe to our website, you gain access to our exclusive content, include premium dessert and ice cream recipes from our chef, special promotions and member-only newsletters. Subscription plans: We offer monthly and yearly subscription plans, please choose the plan that best fits for your need. Refunds: We do not offer refunds for partially used subscription periods. Once the billing cycle has started, it will be non-refundable."
  },
  {
    q: "What are your terms and conditions?",
    a: "You can find our detailed terms and conditions by visiting our Terms of Service page on our website. It includes information about our policies, user guidelines, and more."
  }
];


</script>



<style scoped></style>
