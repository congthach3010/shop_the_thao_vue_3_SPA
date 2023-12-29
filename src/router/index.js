import { createRouter, createWebHistory } from "vue-router";
import admin from "./admin";
import client from "./client";
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({
  position: "top-right",
});
const routes = [...admin, ...client];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const routerAdmin = (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      toaster.error('Vui Lòng Đăng Nhập !');
      next({ name: "admin-login" }); // Redirect đến trang login nếu không có token
    } else {
      next(); // Cho phép truy cập nếu có token
    }
  } else {
    next(); // Không yêu cầu xác thực, cho phép truy cập
  }
};
router.beforeEach(routerAdmin);
export default router;
