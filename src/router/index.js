import Login from "@/views/Auth/LoginAdmin.vue";
import CallBack from "@/views/Auth/CallBack.vue";
import LoginCustomer from "@/views/Auth/LoginCustomer.vue";
import ListRecipes from "@/views/ManageRecipe/Index.vue";
import DetailRecipes from "@/views/ManageRecipe/Detail.vue";
import ListBook from "@/views/ManageBooks/Index.vue";
import DetailBook from "@/views/ManageBooks/Detail.vue";
import ListTournamentsRecipe from "@/views/TournamentsRecipe/Index.vue";
import DetailTournamentsRecipe from "@/views/TournamentsRecipe/Detail.vue";
import ListSubscribe from "@/views/ManageSubscribe/Index.vue";
import DetailSubscribe from "@/views/ManageSubscribe/Detail.vue";
import ManageOrder from "@/views/ManageOrder/Index.vue";
import DetailOrder from "@/views/ManageOrder/DetailOrder.vue";
import ManageFeedback from "@/views/ManageFeedback/Index.vue";
import ListUsers from "@/views/ManageUsers/Index.vue";
import DetailUser from "@/views/ManageUsers/Detail.vue";
import Home from "@/views/HomeCustomer/Index.vue";
import ListRecipesCus from "@/views/HomeCustomer/ListRecipe.vue";
import ListBookCus from "@/views/HomeCustomer/ListBooks.vue";
import FAQ from "@/views/HomeCustomer/FAQ.vue";
import Contact from "@/views/HomeCustomer/Contact.vue";
import DetailRecipe from "@/views/HomeCustomer/DetailRecipe.vue";
import DetailBookCus from "@/views/HomeCustomer/DetailBook.vue";
import Cart from "@/views/HomeCustomer/Cart.vue";

import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "../views/HomeCustomer/AboutUs.vue";

const routerCustom = [
    //customer LoginCustomer
    {
        path: "/",
        component: Home,
        meta: { title: 'Home' },
        name: 'home-customer'
    },
    {
        path: "/about-us",
        component: AboutUs,
        meta: { title: 'About Us' },
        name: 'about-us'
    },
    {
        path: "/login",
        component: LoginCustomer,
        meta: { title: 'Login' },
        name: 'login-customer'
    },
    {
        path: "/callback",
        component: CallBack,
        meta: { title: 'callback' },
        name: 'callback'
    },
    {
        path: "/cart",
        component: Cart,
        meta: {title: 'Cart'},
        name: 'cart'
    },
    {
        path: "/list-recipes-customer",
        component: ListRecipesCus,
        meta: { title: 'ListRecipesCus' },
        name: 'list-recipes-customer'
    },
    {
        path: "/detail-recipes/:id",
        component: DetailRecipe,
        meta: { title: 'Detail Recipe' },
        name: 'detail-recipe-customer'
    },
    {
        path: "/detail-book/:id",
        component: DetailBookCus,
        meta: { title: 'Detail Book' },
        name: 'detail-book-customer'
    },
    {
        path: "/list-books-customer",
        component: ListBookCus,
        meta: { title: 'ListBook' },
        name: 'list-books-customer'
    },
    {
        path: "/faq",
        component: FAQ,
        meta: { title: 'FAQ' },
        name: 'faq'
    },
    {
        path: "/contact",
        component: Contact,
        meta: { title: 'Contact' },
        name: 'contact'
    },




    //admin
    {
        path: "/admin/login",
        component: Login,
        meta: { title: 'Login' },
        name: 'login'
    },
    {
        path: "/admin",
        component: ListRecipes,
        meta: { title: 'Admin' },
        name: 'home'
    },
    {
        path: "/admin/detail-recipe/:id",
        component: DetailRecipes,
        name: 'detail-recipe'
    },
    {
        path: "/admin/list-book",
        component: ListBook,
        name: 'list-book'
    },
    {
        path: "/admin/mannage-order",
        component: ManageOrder,
        name: 'mannage-order'
    },
    {
        path: "/admin/detail-order/:id",
        component: DetailOrder,
        name: 'detail-order'
    },
    {
        path: "/admin/mannage-feedback",
        component: ManageFeedback,
        name: 'mannage-feedback'
    },
    {
        path: "/admin/detail-book/:id",
        component: DetailBook,
        name: 'detail-book'
    },
    {
        path: "/admin/list-tournaments-recipe",
        component: ListTournamentsRecipe,
        name: 'list-tournaments-recipe'
    },
    {
        path: "/admin/detail-tournaments-recipe/:id",
        component: DetailTournamentsRecipe,
        name: 'detail-tournaments-recipe'
    },
    {
        path: "/admin/list-subscribe",
        component: ListSubscribe,
        name: 'list-subscribe'
    },
    {
        path: "/admin/detail-subscribe/:id",
        component: DetailSubscribe,
        name: 'detail-subscribe'
    },
    {
        path: "/admin/list-users",
        component: ListUsers,
        name: 'list-users'
    },
    {
        path: "/admin/detail-user/:id",
        component: DetailUser,
        name: 'detail-user'
    },
];

const createCustomRouter = () =>
    createRouter({
        history: createWebHistory(""),
        routes: routerCustom,
        scrollBehavior(to) {
            if (to.hash) {
                return {
                    el: to.hash,
                    behavior: "smooth",
                };
            }
        },
    });

const router = createCustomRouter();

router.beforeEach(async (to, from, next) => {
    // set title
    const appName = "Cream";

    document.title = to.meta?.title ? to.meta.title + " - " + appName : appName;

    const token = localStorage.getItem("token");
    const isAdminRoute = to.path.startsWith("/admin");

    // If the user is not authenticated and trying to access an admin route, redirect to login
    if (isAdminRoute && !token) {
        if (to.name !== 'login') {
            next({
                name: 'login',
            });
        } else {
            next();
        }
        return;
    }

    next();
});


export default router;
