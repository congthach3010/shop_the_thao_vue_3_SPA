import Home from '../components/Home.vue';
const admin = [
  {
    path: "/admin",
    component: Home,
    children: [
      {
        path: "san-pham",
        name: "admin-san-pham",
        component: () => import("../admin/san_pham/index.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "danh-muc",
        name: "admin-danh-muc",
        component: () => import("../admin/danh_muc/index.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "nhap-kho",
        name: "admin-nhap-kho",
        component: () => import("../admin/nhap_kho/index.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "admin",
        name: "admin-admin",
        
        component: () => import("../admin/admin/index.vue"),
        meta: { requiresAuth: true }
      },
    ],
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: () => import("../admin/auth/login/index.vue"),
    meta: { requiresAuth: false }
  },
];

export default admin;
