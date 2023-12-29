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
                        <span>Myaccount</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!-- breadcrumb end -->

   <!-- start cart-section -->
    <section class="cart-section woocommerce-cart pb-80">
        <div class="container">
            <div class="row ">
                <div class="col-xl-3 col-md-4">
                    <!-- My Account Menu Start -->
                    <div class="my-account-menu mt-6">
                        <ul class="nav account-menu-list flex-column">
                            
                            <li>
                                <a data-bs-toggle="pill" href="#pills-order"><i class="fa fa-shopping-cart"></i>
                                    Order</a>
                            </li>
                            
                            <li>
                                <a data-bs-toggle="pill" href="#pills-payment"><i class="fa fa-credit-card"></i>
                                    Password change</a>
                            </li>
                            <li>
                                <a data-bs-toggle="pill" href="#pills-address"><i class="fa fa-map-marker"></i>
                                    Address</a>
                            </li>
                            <li>
                                <a data-bs-toggle="pill" href="#pills-account"><i class="fa fa-user"></i>
                                    Account Details</a>
                            </li>
                            <li>
                                <a href="login.html"><i class="fa fa-sign-out"></i> Logout</a>
                            </li>
                        </ul>
                    </div>
                    <!-- My Account Menu End -->
                </div>
                <div class="col-xl-9 col-md-8">
                    <!-- Tab content start -->
                    <div class="tab-content my-account-tab mt-6">
                        

                        <div class="tab-pane fade" id="pills-order">
                            <div class="my-account-order account-wrapper">
                                <h4 class="account-title">Orders</h4>
                                <div class="account-table text-center mt-30 table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th class="no">No</th>
                                                <th class="name">Name</th>
                                                <th class="date">Date</th>
                                                <th class="status">Status</th>
                                                <th class="total">Total</th>
                                                <th class="action">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mostarizing Oil</td>
                                                <td>Aug 22, 2020</td>
                                                <td>Pending</td>
                                                <td>$100</td>
                                                <td>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#viewBuy" class="p-1 rounded-sm btn-block" style="background:rgb(255, 135, 23);color:white;">
                                                    View
                                                </a></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Katopeno Altuni</td>
                                                <td>July 22, 2020</td>
                                                <td>Approved</td>
                                                <td>$45</td>
                                                <td><a href="#" data-bs-toggle="modal" data-bs-target="#viewBuy" class="p-1  rounded-sm  btn-block" style="background:rgb(255, 135, 23);color:white;">
                                                    View
                                                </a></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Murikhete Paris</td>
                                                <td>June 22, 2020</td>
                                                <td>On Hold</td>
                                                <td>$99</td>
                                                <td>
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="#viewBuy" class="p-1 rounded-sm btn-block" style="background:rgb(255, 135, 23);color:white;">
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                </div>
                                    <!-- Modal View Buy -->
                                    <div class="modal fade" id="viewBuy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <div class="login-sign-btn">

                                            <a href="#" class="thm-btn thm-btn__black">
                                                <span class="btn-wrap">
                                                    <span>Close</span>
                                                    <span>Close</span>
                                                </span>
                                            </a>
                                            </div>
                                            <div class="login-sign-btn">
                                                <a class="thm-btn" href="#">
                                                    <span class="btn-wrap">
                                                        <span>Save</span>
                                                        <span>Save</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="tab-pane fade" id="pills-payment">
                            <div class="my-account-payment account-wrapper">
                                <h4 class="account-title">Payment Method</h4>
                                <div class="row mt-1">
                                    <div class="form-group col-md-12 mt-1">
                                        <label>Current Password <span class="required">*</span></label>
                                        <input required="" class="form-control" name="password" type="password">
                                    </div>
                                    <div class="form-group col-md-12 mt-1">
                                        <label>New Password <span class="required">*</span></label>
                                        <input required="" class="form-control" name="npassword" type="password">
                                    </div>
                                    <div class="form-group col-md-12 mt-1">
                                        <label>Confirm Password <span class="required">*</span></label>
                                        <input required="" class="form-control" name="cpassword" type="password">
                                    </div>
                                    <div class="col-md-12 mt-3">
                                        <div class="login-sign-btn">
                                            <a class="thm-btn" href="#">
                                                <span class="btn-wrap">
                                                    <span>Save</span>
                                                    <span>Save</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-address">
                            <div class="my-account-address account-wrapper">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4 class="account-title">Billing address</h4>
                                        <div class="account-address mt-30">
                                            <h6 class="name">Alex Tuntuni</h6>
                                            <p>1355 Market St, Suite 900 <br> San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                            <div class="login-sign-btn mt-2">
                                                <a class="thm-btn" href="#" data-bs-toggle="modal" data-bs-target="#editAddress">
                                                    <span class="btn-wrap">
                                                        <span>Edit Address</span>
                                                        <span>Edit Address</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="account-title">Shipping address</h4>
                                        <div class="account-address mt-30">
                                            <h6 class="name">Alex Tuntuni</h6>
                                            <p>1355 Market St, Suite 900 <br> San Francisco, CA 94103</p>
                                            <p>Mobile: (123) 456-7890</p>
                                            <div class="login-sign-btn mt-2">
                                                <a class="thm-btn" href="#" data-bs-toggle="modal" data-bs-target="#editAddress">
                                                    <span class="btn-wrap">
                                                        <span>Edit Address</span>
                                                        <span>Edit Address</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal Edit Address -->
                        <div class="modal fade" id="editAddress" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <div class="login-sign-btn">

                                    <a href="#" class="thm-btn thm-btn__black">
                                        <span class="btn-wrap">
                                            <span>Close</span>
                                            <span>Close</span>
                                        </span>
                                    </a>
                                    </div>
                                    <div class="login-sign-btn">
                                        <a class="thm-btn" href="#">
                                            <span class="btn-wrap">
                                                <span>Save</span>
                                                <span>Save</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-account">
                            <div class="account__wrap pr-60">
                                <h2 class="account__title">Account Details</h2>
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
                                        <div class="col-md-12 mt-3">
                                            <div class="login-sign-btn">
                                                <a class="thm-btn" href="#">
                                                    <span class="btn-wrap">
                                                        <span>Save</span>
                                                        <span>Save</span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Tab content End -->
                </div>
            </div>
        </div>
    </section>
    <!-- end cart-section -->
</template>
<script>
import "../../assets/client/js/jquery-3.5.1.min.js";
	import "../../assets/client/js/bootstrap.bundle.min.js";
	import "../../assets/client/js/slick.js";
	import "../../assets/client/js/backToTop.js";
	import "../../assets/client/js/uikit.min.js";
	import "../../assets/client/js/resize-sensor.min.js";
	import "../../assets/client/js/theia-sticky-sidebar.min.js";
	// import "../../assets/client/js/wow.min.js";
	import "../../assets/client/js/jqueryui.js";
	import "../../assets/client/js/touchspin.js";
	import "../../assets/client/js/countdown.js";
	import "../../assets/client/js/jquery.magnific-popup.min.js";
	import "../../assets/client/js/metisMenu.min.js";
	import "../../assets/client/js/main.js";
export default {
    
}
</script>
<style lang="">
    
</style>