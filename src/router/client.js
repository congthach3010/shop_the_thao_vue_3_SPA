const client = [
    {
        
        path :  "/",
        component: () => import("../layout/client/Home.vue"),
        children :[
            {
                path: "trang-chu",
                name: "client-trang-chu",
                component:() => import("../client/trang_chu/index.vue"),
            },
            {
                path: "login-register",
                name: "client-login-register",
                component:() => import("../client/login_register/index.vue"),
            },
            {
                path: "myaccount",
                name: "client-myaccount",
                component:() => import("../client/myaccount/index.vue"),
            },
        ]
       
    }
]
export default client;