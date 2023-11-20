import { createRouter, createWebHistory } from "vue-router"
import AllProductsView from "../views/AllProductsView.vue"
import AvailableView from "../views/AvailableView.vue"

const routes = [
    { 
        path: "/",
        name: "all",
        component: AllProductsView
    },
    {
        path: "/available",
        name: "available",
        component: AvailableView 
    },
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes,
})

export default router;