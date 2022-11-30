import Detail from "./page/Detail.vue";
import Shipping from "./page/Shipping.vue";
import Home from "./page/Home.vue";
import Card from "./page/Card.vue";
export default [
    {
        path: "/detail",
        component: Detail,
    },
    {
        path: "/shipping",
        component: Shipping,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/catalog",
        component: Card,
    }
    
    
]