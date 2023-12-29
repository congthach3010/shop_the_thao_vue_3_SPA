<template>
    <div class="row" id="app">
        <div class="card">
            <div class="modal fade" id="modalSanPham" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl" role="document">
                    <form id="createSanPham">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Thêm mới sản phẩm</h5>
                                <button ref="hideModal" class="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Mã sản phẩm</label>

                                            <input tabindex="1" 
                                                class="form-control" id="ma_san_pham" type="text" v-model="ma_san_pham"  v-on:blur="checkMaSanPham"
                                                placeholder="Nhập vào mã sản phẩm">
                                            <small id="message_ma_san_pham"><i>{{ message_ma_san_pham }}</i></small> 

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Tên sản phẩm</label>
                                            <input tabindex="1" class="form-control" 
                                                 id="ten_san_pham" type="text" v-model="ten_san_pham" v-on:keyup="chuyenDoiSlug()"
                                                placeholder="Nhập vào tên sản phẩm">
                                            <small id="message_ten_san_pham"><i></i></small>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Slug sản phẩm</label>
                                            <input tabindex="1" class="form-control" v-model="slug_san_pham"
                                                id="slug_san_pham" type="text" placeholder="Nhập vào slug sản phẩm">
                                            <small id="message_slug_san_pham"><i></i></small>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Giá</label>
                                            <input tabindex="1" class="form-control"  name="gia" id="gia" v-model="gia"
                                                type="text" placeholder="Nhập giá">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Giá khuyến mãi</label>
                                            <input tabindex="1" class="form-control" name="gia_khuyen_mai" v-model="gia_khuyen_mai"
                                                id="gia_khuyen_mai" type="text" placeholder="Nhập giá khuyến mãi">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Số lượng</label>
                                            <input tabindex="3" class="form-control"   name="so_luong" type="number" v-model="so_luong"
                                                id="so_luong" placeholder="Nhập số lượng" min="0">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Chi tiết</label>
                                            <textarea name="chi_tiet" id="chi_tiet" v-model="chi_tiet"  cols="30" rows="5" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <div class="mb-3">
                                                <label class="form-label">Hình Ảnh</label>
                                                <input type="file" ref="fileInput" multiple @change="handleFileUpload"
                                                    class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Danh mục</label>
                                            <select v-model="ma_danh_muc_id"  name="ma_danh_muc_id" id="ma_danh_muc_id" class="form-control">
                                                <template v-for="(value,key) in list_dm" :key=" key">
                                                    <option v-bind:value="value.id">
                                                        {{ value.ten_danh_muc }}
                                                    </option>
                                                </template>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="mb-3">
                                            <label class="form-label">Trạng Thái</label>
                                            <select  tabindex="8" v-model="is_open"  name="is_open" id="is_open" class="form-control">
                                                <option value=0>Tạm tắt</option>
                                                <option value=1>Hiển thị</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button class="btn btn-primary " type="button" data-bs-dismiss="modal">Đóng</button>
                                <button class="btn btn-secondary" type="button" v-on:click="addSP">Thêm
                                    mới</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-header mt-4">
                <div class="row">
                    <div class="col-md-10">

                        <div class="input-group md-form form-sm form-2 pl-0">
                            <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search"
                                aria-label="Search" id="searchSanPham" v-model="key_search" v-on:keyup.enter="search()">
                            <div class="input-group-append">
                                <button class="input-group-text red lighten-3" id="basic-text1" style="padding: 10px 15px;" v-on:click="search()"><font-awesome-icon icon="fas fa-search text-grey" /></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-original-title="test"
                            data-bs-target="#modalSanPham" style="padding: 6px 28px;"><font-awesome-icon icon="fa fa-plus-square text-grey" /></button>
                    </div>
                </div>
            </div>
            <div class="mt-4 table-responsive">
                <table class="table table-bordered table-responsive " id="listSanPham">
                    <thead>
                        <tr class="bg-primary">
                            <th class="text-center text-nowrap"><b>#</b></th>
                            <th class="text-center text-nowrap"><b>Mã sản phẩm</b></th>
                            <th class="text-center text-nowrap"><b>Tên sản phẩm</b></th>
                            <th class="text-center text-nowrap" style="min-width: 150px;"><b>Hình ảnh</b></th>
                            <th class="text-center text-nowrap"><b>Số lượng</b></th>
                            <th class="text-center text-nowrap"><b>Danh mục</b></th>
                            <th class="text-center text-nowrap"><b>Giá</b></th>
                            <th class="text-center text-nowrap"><b>Giá khuyến mãi</b></th>
                            <th class="text-center text-nowrap"><b>Chi tiết</b></th>
                            <th class="text-center text-nowrap"><b>Trạng thái</b></th>
                            <th class="text-center text-nowrap"><b>Action</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="(value, key) in list_sp" :key="key">
                            <tr class="bg-light">
                                <th class="text-center align-middle">{{ key + 1 }}</th>
                                <td class="align-middle">{{ value.ma_san_pham }}</td>
                                <td class="align-middle">{{ value.ten_san_pham }}</td>
                                <td class="align-middle">
                                    <div v-bind:id="'carouselExampleControls' + value.id" class="carousel slide"
                                        data-bs-ride="carousel" data-bs-interval="1000">
                                        <div class="carousel-inner">
                                            <template v-for="(v1, k1) in stringToArray(value.hinh_anh)" :key="k1">
                                                <template v-if="v1.startsWith('http') || v1.startsWith('https')">
                                                    <template v-if="k1 == 0">
                                                        <div class="carousel-item active">
                                                            <img style="height: 100px" v-bind:src="v1"
                                                                class="d-block w-100" alt="...">
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <div class="carousel-item">
                                                            <img style="height: 100px" v-bind:src="v1"
                                                                class="d-block w-100" alt="...">
                                                        </div>
                                                    </template>
                                                </template>
                                                <template v-else>
                                                    <template v-if="k1 == 0">
                                                        <div class="carousel-item active">
                                                            <img style="height: 100px" :src="`http://127.0.0.1:8000/hinh_anh_san_pham/${v1}`"
                                                                class="d-block w-100" alt="...">
                                                        </div>
                                                    </template>
                                                    <template v-else>
                                                        <div class="carousel-item">
                                                            <img style="height: 100px" :src="`http://127.0.0.1:8000/hinh_anh_san_pham/${v1}`"
                                                                class="d-block w-100" alt="...">
                                                        </div>
                                                    </template>
                                                </template>

                                            </template>
                                        </div>
                                        <a class="carousel-control-prev" type="button"
                                            v-bind:data-bs-target="'#carouselExampleControls' + value.id"
                                            data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" type="button"
                                            v-bind:data-bs-target="'#carouselExampleControls' + value.id"
                                            data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </a>
                                    </div>
                                </td>
                                <td class="align-middle text-center">{{ value.so_luong }}</td>
                                <td class="align-middle text-nowrap">{{ value.ten_danh_muc }}</td>
                                <td class="align-middle text-center">{{ formatPrice(value.gia) }}đ</td>
                                <td class="align-middle text-center">{{ formatPrice(value.gia_khuyen_mai) }}đ</td>
                                <td class="align-middle text-center" ><button v-on:click="modal = value, hienChiTiet()"
                                        data-bs-toggle="modal" data-bs-target="#moTaChiTiet"
                                        class="btn btn-primary"><font-awesome-icon :icon="['fas', 'circle-info']" /></button></td>

                                <td class="align-middle text-nowrap">

                                    <button v-if="value.is_open == 1" v-on:click="changeIsOpen(value)"
                                        class="btn btn-success">Hiển Thị</button>

                                    <button v-else v-on:click="changeIsOpen(value)" class="btn btn-danger">Tạm
                                        Tắt</button>

                                </td>
                                <td class="text-center align-middle text-nowrap">
                                    <button v-on:click="showUpdate(value)" type="button" data-bs-toggle="modal" data-bs-target="#editDanhMuc" class="btn btn-outline-primary" >Chỉnh sửa</button>
                                    <button v-on:click="delete_sp = value" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal" class="btn btn-outline-danger" style="margin-left: 10px">Xóa</button>

                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
                <!-- Chi Tiết -->
                <div class="modal fade" id="moTaChiTiet" tabindex="-1" aria-hidden="true" style="display: none;">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Mô Tả Chi Tiết</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <span id="hienChiTiet">{{ chi_tiet_sp }}</span>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                 <!-- Sửa -->
                 <div class="modal fade"  id="editDanhMuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa Sản Phẩm</h5>
                                <button ref="hideModal" class="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label class="form-label">Mã Sản Phẩm</label>
                                    <input tabindex="1" class="form-control" v-model="edit_sp.ma_san_pham" type="text"
                                        placeholder="Nhập vào mã danh mục">
                                    <small id="message_ma_san_pham"><i></i></small>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Tên Sản Phẩm</label>
                                    <input tabindex="1" class="form-control" id="ten_san_pham"
                                        v-model="edit_sp.ten_san_pham" type="text" v-on:keyup="chuyenDoiSlugEdit"
                                        placeholder="Nhập vào tên danh mục">
                                    <small id="message_ten_san_pham"><i></i></small>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Slug Sản Phẩm</label>
                                    <input class="form-control" id="slug_san_pham" disabled
                                        v-model="edit_sp.slug_san_pham" type="text"
                                        placeholder="Nhập vào slug danh mục">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Danh mục cha</label>
                                    <select v-model="edit_sp.ma_danh_muc_id" id="id_danh_muc_cha"
                                        class="form-control">
                                        <option value=0>Root</option>
                                        <template v-for="(value,key) in list_dm" :key="key">
                                            <option v-bind:value=" value.id ">{{ value.ten_danh_muc }}</option>
                                        </template>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <div class="mb-3">
                                        <label class="form-label">Hình Ảnh</label>
                                    
                                        <input type="file" ref="fileInput1" multiple @change="handleFileChange"
                                                    class="form-control" />
                                        <span  >{{ hinh_anh_update }}</span>
                                    </div>

                                    <img v-bind:src="hinh_anh_src" alt="" style="width: 200px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Hiển Thị</label>
                                    <select v-model="edit_sp.is_open" class="form-control">
                                        <option value="">Chọn Trạng Thái</option>

                                        <option value=1>Hiển Thị</option>
                                        <option value=0>Tạm Tắt</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" v-on:click="updateSanPham" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Xóa -->
                <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Xoá sản phẩm</h5>
                                <button class="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="alert alert-primary" role="alert">
                                    Bạn có chắc chắn muốn xóa sản phẩm: <b
                                        class="text-danger text-uppercase">{{ delete_sp.ten_san_pham }}</b> này
                                    không?
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" type="button"
                                    data-bs-dismiss="modal">Đóng</button>
                                <button v-on:click="deleteSanPham()" class="btn btn-secondary" type="button"
                                    data-bs-dismiss="modal">Xóa</button>
                            </div>
                        </div>
                        
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name : "app",
        data () {
            return{
                list_dm                 : [],
                list_sp                 : [],
                modal                   : {},
                chi_tiet                : '',
                chi_tiet_sp             : '',
                slug_san_pham           : '',
                ma_san_pham             : '',
                ten_san_pham            : '',
                ma_danh_muc_id          : 0,
                gia                     : 0,
                gia_khuyen_mai          : 0,
                so_luong                : 0,
                is_open                 : 0,
               
                message_ma_san_pham     : '',
                message_ten_san_pham    : '',
                message_slug_san_pham   : '',
                delete_sp               : {},
                edit_sp                 : {
                    is_open                 : '',
                },
                key_search              : '',
                selectedImages          : [],
                hinh_anh_update         : '',
            }
        },
        mounted(){
            this.getDataDM();
            this.getDataSP();
        },
        methods:{
            handleFileUpload() {
                this.selectedImages = Array.from(this.$refs.fileInput.files);
                console.log(this.selectedImages);
            },
            handleFileChange() {
                this.hinh_anh_update = Array.from(this.$refs.fileInput1.files);
                console.log(this.hinh_anh_update);
            },
            addSP(){
                const formData = new FormData();
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    }
                    formData.append('ma_san_pham', this.ma_san_pham);
                    formData.append('ten_san_pham', this.ten_san_pham);
                    formData.append('slug_san_pham', this.slug_san_pham);
                    formData.append('gia', this.gia);
                    formData.append('gia_khuyen_mai', this.gia_khuyen_mai);
                    formData.append('ma_danh_muc_id', this.ma_danh_muc_id);
                    formData.append('so_luong', this.so_luong);
                    formData.append('chi_tiet', this.chi_tiet);
                    formData.append('is_open', this.is_open);
                    this.selectedImages.forEach((image) => {
                        formData.append('images[]', image);
                    });
                axios
                    .post('http://127.0.0.1:8000/api/admin-shop/san-pham/create', formData,config)
                    .then(response => {
                            if (response.data.status === true) {
                                this.$toast.success(response.data.message);
                                this.$refs.hideModal.click();
                                this.getDataSP();
                                
                            } else {
                                this.$toast.error(response.data.message);
                            }
                        })
                    .catch((error) => {
                        const listError = error.response.data.errors;
                        Object.values(listError).forEach((value) => {
                            this.$toast.error(value[0]);
                        });
                    });
            },  
            getDataDM(){
                axios
                    .get('http://127.0.0.1:8000/api/admin-shop/danh-muc/data')
                    .then((res) => {
                        this.list_dm = res.data.data;
                    });

            },
            getDataSP(){
                axios
                    .get('http://127.0.0.1:8000/api/admin-shop/san-pham/data')
                    .then((res)=>{
                        this.list_sp = res.data.data;
                    })
            },
            changeIsOpen(v) {
                axios.get(`http://127.0.0.1:8000/api/admin-shop/san-pham/update-status/${v.id}`)
                    .then(response => {
                        if (response.data.status === true) {
                            this.$toast.success(response.data.message);
                            this.getDataSP();

                        } else if (response.data.status === false) {
                            this.$toast.error(response.data.message);
                        } else if (response.data.status === 2) {
                            this.$toast.warning(response.data.message);
                        }
                        })
                        .catch((error) => {
                            if (error.response && error.response.data && error.response.data.errors) {
                                const errors = error.response.data.errors;
                                Object.values(errors).forEach((errorMessages) => {
                                    errorMessages.forEach((errorMessage) => {
                                        this.$toast.error(errorMessage);
                                    });
                                });
                            } else if (error.response && error.response.data && error.response.data.message) {
                                this.$toast.error(error.response.data.message);
                            } else {
                                this.$toast.error(error.data.message);
                            }
                        });
            },
            updateSanPham(){
                const formData = new FormData();
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    }
                    formData.append('id', this.edit_sp.id);

                    formData.append('ma_san_pham', this.edit_sp.ma_san_pham);
                    formData.append('ten_san_pham', this.edit_sp.ten_san_pham);
                    formData.append('slug_san_pham', this.edit_sp.slug_san_pham);
                    formData.append('ma_danh_muc_id', this.edit_sp.ma_danh_muc_id);
                    formData.append('is_open', this.edit_sp.is_open);
                    formData.append('hinh_anh', this.hinh_anh_update);

                axios
                    .post('http://127.0.0.1:8000/api/admin-shop/san-pham/update', formData, config)
                    .then((response) => {
                        if (response.data.status === true) {
                            this.$toast.success(response.data.message);
                            this.$refs.hidemodal.click();
                            this.getData();

                        } else {
                            this.$toast.error(response.data.message);
                        }
                    })
                    .catch((res) => {
                        Object.values(res.response.data.errors).forEach((v) => {
                            this.$toast.error(v[0]);
                        });
                            
                    });
            },
            checkMaSanPham() {
                if (this.ma_san_pham === '') {
                    this.message_ma_san_pham = "Mã sản phẩm không được để trống!";
                    this.addClassToElements("message_ma_san_pham", "text-danger");
                    this.removeClassFromElements("ma_san_pham", "border", "border-danger");
                    this.addClassToElements("ma_san_pham", "border", "border-danger");
                    return;
                }
                
                const payload = {
                    ma_san_pham: this.ma_san_pham,
                };
                
                axios.post('http://127.0.0.1:8000/api/admin-shop/san-pham/check-product-id', payload)
                    .then((res) => {
                    if (res.data.status) {
                        this.message_ma_san_pham = "Mã sản phẩm đã tồn tại!";
                        this.addClassToElements("message_ma_san_pham", "text-danger");
                        this.removeClassFromElements("ma_san_pham", "border", "border-danger");
                        this.addClassToElements("ma_san_pham", "border", "border-danger");
                    } else {
                        this.message_ma_san_pham = "Mã sản phẩm có thể tạo!";
                        this.removeClassFromElements("message_ma_san_pham", "text-danger");
                        this.addClassToElements("message_ma_san_pham", "text-primary");
                        this.removeClassFromElements("ma_san_pham", "border", "border-danger");
                        this.addClassToElements("ma_san_pham", "border", "border-primary");
                    }
                    })
                    .catch((error) => {
                        const listError = error.response.data.errors;
                        Object.values(listError).forEach((value) => {
                            toastr.error(value[0]);
                        });
                    });
            },
            addClassToElements(elementId, ...classNames) {
                const element = document.getElementById(elementId);
                if (element) {
                    classNames.forEach((className) => {
                    element.classList.add(className);
                    });
                }
            },
            removeClassFromElements(elementId, ...classNames) {
                const element = document.getElementById(elementId);
                if (element) {
                    classNames.forEach((className) => {
                    element.classList.remove(className);
                    });
                }
            },
            search(){
                var payload ={
                    'key_search' : this.key_search,
                };
                axios.post('http://127.0.0.1:8000/api/admin-shop/san-pham/search', payload)
                    .then((res) => {
                        this.list_sp = res.data.data;
                        console.log(this.list_sp);
                    })
                    .catch((error) => {
                        const listError = error.response.data.errors;
                        Object.values(listError).forEach((value) => {
                            toastr.error(value[0]);
                        });
                    });
            },  
            showUpdate(value) {
                this.edit_sp = Object.assign({}, value);
                this.hinh_anh_src = "http://127.0.0.1:8000/hinh_anh_san_pham/" + value.hinh_anh;
                this.hinh_anh_update = value.hinh_anh;
                console.log(this.hinh_anh_update);
            },
            stringToArray(str) {
                return str.split(",");
            },
            hienChiTiet() {
                this.chi_tiet_sp = this.modal.chi_tiet;
            },
            converToSlug(title) {
                var slug = "";
                // Change to lower case
                var titleLower = title.toLowerCase();
                // Letter "e"
                slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
                // Letter "a"
                slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
                // Letter "o"
                slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
                // Letter "u"
                slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
                // Letter "d"
                slug = slug.replace(/đ/gi, 'd');
                // Trim the last whitespace
                slug = slug.replace(/\s*$/g, '');
                // Change whitespace to "-"
                slug = slug.replace(/\s+/g, '-');
                
                return slug;
            },
            chuyenDoiSlug(){
                this.slug_san_pham = this.converToSlug(this.ten_san_pham);
            }, 
            chuyenDoiSlugEdit(){
                this.edit_sp.slug_san_pham = this.converToSlug(this.edit_sp.ten_san_pham);
            },  
            formatPrice(value) {
                let val = (value / 1).toFixed(0).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },      
        },
    }
</script>