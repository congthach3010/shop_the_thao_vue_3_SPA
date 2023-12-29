<template lang="">
    <!-- breadcrumb start -->
    <section class="breadcrumb-area">
                <div class="container">
                    <div class="radios-breadcrumb breadcrumbs">
                        <ul class="list-unstyled d-flex align-items-center">
                            <li class="radiosbcrumb-item radiosbcrumb-begin">
                                <a href="index.html"><span>Home</span></a>
                            </li>
                            <li class="radiosbcrumb-item radiosbcrumb-end">
                                <span>Account</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <!-- breadcrumb end -->

            <!-- account start -->
            <section class="account pb-90">
                <div class="container">
                    <div class="row mt-none-30">
                        <div class="col-lg-6 mt-30">
                            <div class="account__wrap pr-60">
                                <h2 class="account__title">Sign Up</h2>
                                <form action="#">
                                    <div class="row">
                                        <div class="account__input-field col-md-6">
                                            <label>First Name <span class="required">*</span></label>
                                            <input required="" class="form-control" name="name" type="text">
                                        </div>
                                        <div class="account__input-field col-md-6">
                                            <label>Last Name <span class="required">*</span></label>
                                            <input required="" class="form-control" name="name" type="text">
                                        </div>

                                        <div class="account__input-field col-md-12">
                                            <label>Email Address <span class="required">*</span></label>
                                            <input required="" class="form-control" name="email" type="email">
                                        </div>
                                        <div class="account__input-field col-md-12">
                                            <label>Phone <span class="required">*</span></label>
                                            <input required="" class="form-control" name="email" type="tel">
                                        </div>
                                        <div class="account__input-field col-md-6">
                                            <label>Date <span class="required">*</span></label>
                                            <input required="" class="form-control" name="password" type="date">
                                        </div>
                                        <div class="account__input-field col-md-6">
                                            <label>Sex <span class="required">*</span></label>
                                            <select class="form-select" aria-label="Default select example">
                                                <option value="1">Woman</option>
                                                <option value="2">Men</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="account__input-field">
                                        <input class="form-check-input" id="checkbox" type="checkbox">
                                        <label class="form-check-label" for="checkbox">I agree to al <a
                                                href="#!">Terms</a> & <a href="#!">Condition</a> and Feeds</label>
                                    </div>
                                    <div class="account__btn">
                                        <a class="thm-btn thm-btn__2" href="#!">
                                            <span class="btn-wrap">
                                                <span>Sign Up</span>
                                                <span>Sign Up</span>
                                            </span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-6 mt-30">
                            <div class="account__wrap pl-60">
                                <h2 class="account__title">Login here</h2>
                                <form action="#">
                                    <div class="account__input-field">
                                        <label for="lemail">Email Address</label>
                                        <input id="lemail" type="email" placeholder="Enter Email Address">
                                    </div>
                                    <div class="account__input-field">
                                        <label for="lpassword">Password</label>
                                        <input id="lpassword" type="password" placeholder="password">
                                    </div>
                                    <div class="account__input-field">
                                        <a href="forgot_password.html" class="form-check-label">Forgot password ?</a>
                                    </div>
                                    <div class="account__btn">
                                        <a class="thm-btn thm-btn__2" href="#!">
                                            <span class="btn-wrap">
                                                <span>Login here</span>
                                                <span>Login here</span>
                                            </span>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- account end -->

</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>