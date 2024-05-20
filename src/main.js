import {createApp} from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import ElementPlus from 'element-plus'
import CKEditor from "@ckeditor/ckeditor5-vue";

const app = createApp(App);



app.use(router)
    .use(ElementPlus)
    .use( CKEditor )
    .mount("#app");
