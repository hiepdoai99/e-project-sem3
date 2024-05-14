import Login from "@/views/Auth/LoginAdmin.vue";
import LoginCustomer from "@/views/Auth/LoginCustomer.vue";
import ListRecipes from "@/views/ManageRecipe/Index.vue";
import DetailRecipes from "@/views/ManageRecipe/Detail.vue";
import ListBook from "@/views/ManageBooks/Index.vue";
import DetailBook from "@/views/ManageBooks/Detail.vue";
import ListTournamentsRecipe from "@/views/TournamentsRecipe/Index.vue";
import DetailTournamentsRecipe from "@/views/TournamentsRecipe/Detail.vue";
import ListSubscribe from "@/views/ManageSubscribe/Index.vue";
import DetailSubscribe from "@/views/ManageSubscribe/Detail.vue";
import ListUsers from "@/views/ManageUsers/Index.vue";
import DetailUser from "@/views/ManageUsers/Detail.vue";
import Home from "@/views/HomeCustomer/Index.vue";
import ListRecipesCus from "@/views/HomeCustomer/ListRecipe.vue";
import ListBookCus from "@/views/HomeCustomer/ListBooks.vue";
import FAQ from "@/views/HomeCustomer/FAQ.vue";
import Contact from "@/views/HomeCustomer/Contact.vue";

export const routes = [
    //customer LoginCustomer
    {
        path: "/",
        component: Home,
        meta: {title: 'Home'},
        name: 'home-customer'
    },
    {
        path: "/login",
        component: LoginCustomer,
        meta: {title: 'Login'},
        name: 'login-customer'
    },
    {
        path: "/list-recipes-customer",
        component: ListRecipesCus,
        meta: {title: 'ListRecipesCus'},
        name: 'list-recipes-customer'
    },
    {
        path: "/list-books-customer",
        component: ListBookCus,
        meta: {title: 'ListBook'},
        name: 'list-books-customer'
    },
    {
        path: "/faq",
        component: FAQ,
        meta: {title: 'FAQ'},
        name: 'faq'
    },
    {
        path: "/contact",
        component: Contact,
        meta: {title: 'Contact'},
        name: 'contact'
    },




    //admin
    {
        path: "/admin/login",
        component: Login,
        meta: {title: 'Login'},
        name: 'login'
    },
    {
        path: "/admin",
        component: ListRecipes,
        meta: {title: 'Admin'},
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
