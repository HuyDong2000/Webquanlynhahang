import PageHome from './components/Home.vue'
import PageSignIn from './components/SignUp.vue'
import PageLogin from './components/Login.vue'
import {createRouter , createWebHashHistory} from 'vue-router'

const routes = [
    {
        name:'PageHome',
        component:PageHome,
        path:'/'
    },
    {
        name:'PageSignIn',
        component:PageSignIn,
        path:'/sign-up'
    },
    {
        name:'PageLogin',
        component:PageLogin,
        path:'/login'
    },
]


const router = createRouter({
    history:createWebHashHistory(), 
    routes
})
export default router
