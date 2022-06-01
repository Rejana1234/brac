import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/*import router*/
import AuthRouter from "./auth/AuthRouter";

/*route route-list*/

const routes =[
    ...AuthRouter
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})

export default router