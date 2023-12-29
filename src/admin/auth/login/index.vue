<template lang="">
   <div class="wrapper" id="app">
		<div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div class="container-fluid">
				<div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
					<div class="col mx-auto">
						<div class="mb-4 text-center">
							<img src="../../../assets/images/logo-img.png" width="180" alt="" />
						</div>
						<div class="card">
							<div class="card-body">
								<div class="border p-4 rounded">
									<div class="text-center">
										<h3 class="">Sign in</h3>
										<p>Don't have an account yet? <a href="authentication-signup.html">Sign up here</a>
										</p>
									</div>
									<div class="form-body">
											<div class="col-12">
												<label for="inputEmailAddress" class="form-label">Email Address</label>
												<input type="email" v-model="email" class="form-control" id="inputEmailAddress" placeholder="Email Address">
											</div>
											<div class="col-12">
												<label for="inputChoosePassword" class="form-label">Enter Password</label>
												<input type="password" v-model="password" class="form-control" id="inputEmailAddress" placeholder="Email Address">

											</div>
											<div class="col-md-6">
												<div class="form-check form-switch">
													<input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
													<label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
												</div>
											</div>
											<div class="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
											</div>
											<div class="col-12">
												<div class="d-grid">
													<button class="btn btn-primary" v-on:click="login"><i class="bx bxs-lock-open"></i>Sign in</button>
												</div>
											</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!--end row-->
			</div>
		</div>
	</div>
</template>
<script>
import "../../../assets/js/bootstrap.bundle.min.js";
import "../../../assets/js/jquery.min.js";
import "../../../assets/plugins/simplebar/js/simplebar.min.js";
import "../../../assets/plugins/metismenu/js/metisMenu.min.js";
export default {
	name: "app",
	components: {

	},
	data() {
		return {
			email: '',
			password: '',
		}
	},
	created() {
		const token = localStorage.getItem("token");
		if (token) {
			this.$router.push({ name: "admin-admin" });
		}
	},
	methods: {
		login() {
			axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
			const payload = {
				email: this.email,
				password: this.password,
			};
			axios
				.post('http://127.0.0.1:8000/api/login', payload)
				.then((res) => {
					if (res.data.status == 1) {
						this.$toast.success(res.data.message);
						localStorage.setItem('token', res.data.token);
						this.$router.push({ name: 'admin-admin' });
					} else {
						this.$toast.error(res.data.message);
					}
				})
				.catch((res) => {
					Object.values(res.response.data.errors).forEach((v) => {
						this.$toast.error(v[0]);
					});
				});
			});
		}
		
	},
}
</script>
<style >
@import"../../../assets/plugins/simplebar/css/simplebar.css";
@import"../../../assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css";
@import"../../../assets/plugins/metismenu/css/metisMenu.min.css";
@import"../../../assets/css/pace.min.css";
/* <script src="../../../assets/js/pace.min.js"></script> */
@import"../../../assets/css/bootstrap.min.css";
@import"../../../assets/css/bootstrap-extended.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
@import"../../../assets/css/app.css";
@import"../../../assets/css/icons.css";
</style>