<template>
    <div class="row" id="app">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    <form v-on:submit.prevent="createDanhMuc()">
                        <div class="mb-3">
                            <h4 class="form-label">Thêm mới danh mục </h4>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Mã danh mục</label>
                            <input tabindex="1" class="form-control" id="ma_danh_muc" v-model="ma_danh_muc" type="text"
                                placeholder="Nhập vào mã danh mục">
                            <small id="message_ma_danh_muc"><i></i></small>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Tên danh mục</label>
                            <input tabindex="1" class="form-control" id="ten_danh_muc" v-model="ten_danh_muc" type="text"
                                v-on:keyup="chuyenDoiSlug()" placeholder="Nhập vào tên danh mục">
                            <small id="message_ten_danh_muc"><i></i></small>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Slug danh mục</label>
                            <input class="form-control" id="slug_danh_muc" v-model="slug_danh_muc" type="text"
                                placeholder="Nhập vào slug danh mục">
                        </div>
                        <div class="row">
                            <div class="col-xl-9 mx-auto">
                                <h6 class="mb-0 text-uppercase">Fancy File Upload</h6>
                                <hr />
                                <div class="card">
                                    <div class="card-body">
                                        <input id="fancy-file-upload" type="file" name="files"
                                            accept=".jpg, .png, image/jpeg, image/png" multiple>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Danh mục cha</label>
                            <select v-model="id_danh_muc_cha" id="id_danh_muc_cha" class="form-control">
                                <option value=0>Root</option>
                                <template v-for="(value, key) in list_dm_cha" :key="key">
                                    <option v-bind:value="value.id">{{ value.ten_danh_muc }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Hiển Thị</label>
                            <select v-model="is_open" class="form-control">
                                <option value=''>Chọn Trạng Thái</option>
                                <option value=1>Hiển Thị</option>
                                <option value=0>Tạm Tắt</option>
                            </select>
                        </div>
                        <div class="text-end">
                            <button class="btn btn-secondary" type="submit">Thêm mới</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <h4 class="text-center">Danh sách Danh Mục</h4>
                </div>
                <div class="card-body table-responsive">
                    <table class="table table-bordered table-responsive" id="listDanhMuc">
                        <thead>
                            <tr class="text-center  bg-primary text-nowrap">
                                <th scope="col"><b>#</b></th>
                                <th scope="col"><b>Mã Danh Mục</b></th>
                                <th scope="col"><b>Tên Danh Mục</b></th>
                                <th scope="col"><b>Danh Mục Cha</b></th>
                                <th scope="col"><b>Hình Ảnh</b></th>
                                <th scope="col"><b>Trạng thái</b></th>
                                <th scope="col"><b>Action</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, key) in list_dm" :key="key">
                                <th>{{ key + 1 }}</th>
                                <td>{{ value.ma_danh_muc }}</td>
                                <td>{{ value.ten_danh_muc }}</td>
                                <td v-if="value.id_danh_muc_cha == 0">Root</td>
                                <td v-else>{{ value.ten_danh_muc_cha }}</td>

                                <td v-if="value.hinh_anh == null">Null</td>
                                <td class="align-middle" style="width: 200px;" v-else>
                                    <img v-if="value.hinh_anh.startsWith('http') || value.hinh_anh.startsWith('https')"
                                        :src="value.hinh_anh" class="img-fluid br-sm shadow-sm" alt="Image title">
                                    <img v-else :src="`http://127.0.0.1:8000/hinh_anh_danh_muc/${value.hinh_anh}`"
                                        class="img-fluid br-sm shadow-sm" alt="Image title">


                                </td>

                                <td v-if="value.is_open == 1">
                                    <button v-on:click="changeStatus(value)" class="btn btn-success">Hiển Thị</button>
                                </td>
                                <td v-else>
                                    <button v-on:click="changeStatus(value)" class="btn btn-danger">Tạm Tắt</button>
                                </td>
                                <td><button v-on:click="showUpdate(value)" type="button" data-bs-toggle="modal"
                                        data-bs-target="#editDanhMuc" class="btn btn-outline-primary">Chỉnh sửa</button>
                                    <button v-on:click="delete_dm = value" type="button" data-bs-toggle="modal"
                                        data-bs-target="#deleteModal" class="btn btn-outline-danger"
                                        style="margin-left: 10px">Xóa</button>
                                </td>

                            </tr>

                        </tbody>
                    </table>

                </div>
                <!-- Sửa -->
                <div class="modal fade" id="editDanhMuc" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Chỉnh Sửa Danh Mục</h5>
                                <button ref="hidemodal" class="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label class="form-label">Mã danh mục</label>
                                    <input tabindex="1" class="form-control" id="ma_danh_muc" v-model="edit_dm.ma_danh_muc"
                                        type="text" placeholder="Nhập vào mã danh mục">
                                    <small id="message_ma_danh_muc"><i></i></small>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Tên danh mục</label>
                                    <input tabindex="1" class="form-control" id="ten_danh_muc"
                                        v-model="edit_dm.ten_danh_muc" type="text" v-on:keyup="chuyenDoiSlugEdit"
                                        placeholder="Nhập vào tên danh mục">
                                    <small id="message_ten_danh_muc"><i></i></small>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Slug danh mục</label>
                                    <input class="form-control" id="slug_danh_muc" v-model="edit_dm.slug_danh_muc"
                                        type="text" placeholder="Nhập vào slug danh mục">
                                </div>

                                <div class="mb-3">
                                    <label class="form-label">Danh mục cha</label>
                                    <select v-model="edit_dm.id_danh_muc_cha" id="id_danh_muc_cha" class="form-control">
                                        <option value=0>Root</option>
                                        <template v-for="(value, key) in list_dm_cha" :key="key">
                                            <option v-bind:value="value.id">{{ value.ten_danh_muc }}</option>
                                        </template>
                                    </select>
                                </div>

                                <div class="mb-3">
                                    <div class="mb-3">
                                        <label class="form-label">Hình Ảnh</label>

                                        <input type="file" ref="fileInput" v-on:change="handleFileChange()"
                                            class="form-control" />
                                        <span>{{ hinh_anh_update }}</span>
                                    </div>

                                    <img v-bind:src="hinh_anh_src" alt="" style="width: 200px;">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Hiển Thị</label>
                                    <select v-model="edit_dm.is_open" class="form-control">
                                        <option value=1>Hiển Thị</option>
                                        <option value=0>Tạm Tắt</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" v-on:click="updateDanhMuc()" class="btn btn-primary">Save
                                    changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Xóa  -->
                <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Xóa Danh Mục</h5>
                                <button ref="hidemodal" class="btn-close" type="button" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <!-- <input type="text" v-model="delete_dm.id" hidden> -->
                                <div class="alert bg-warning" role="alert">
                                    <h4 class="alert-heading">Xóa Danh Mục!</h4>
                                    <p>Bạn có chắc chắn muốn xóa danh mục <b class="text-danger">{{ delete_dm.ten_danh_muc
                                    }}</b>
                                        không?</p>
                                    <hr>
                                    <p class="mb-0"><i>Lưu ý: Hành động không thể khôi phục lại!</i></p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-primary" type="button" data-bs-dismiss="modal">Đóng</button>
                                <button v-on:click="deleteDanhMuc" class="btn btn-danger" type="button">Xóa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
		$('#fancy-file-upload').FancyFileUpload({
			params: {
				action: 'fileuploader'
			},
			maxfilesize: 1000000
		});
	</script>
	<script>
		$(document).ready(function () {
			$('#image-uploadify').imageuploadify();
		})
	</script>
<script>
import api from '../../core/api';

export default {
    name: "app",
    data() {
        return {
            ma_danh_muc: '',
            ten_danh_muc: '',
            slug_danh_muc: '',
            is_open: '',
            id_danh_muc_cha: 0,

            selectedImages: '',
            hinh_anh_src: '',
            hinh_anh_update: '',

            list_dm: [],
            list_dm_cha: [],
            edit_dm: {},
            delete_dm: {},

        }
    },
    mounted() {
        this.getData();
        this.getDataCha();

    },
    methods: {
        handleFileChange() {
            this.hinh_anh_update = this.$refs.fileInput.files[0];

            console.log(this.hinh_anh_update);
        },
        handleFileUpload() {
            this.selectedImages = this.$refs.fileInput1.files[0];
            console.log(this.selectedImages);
        },
        getData() {
            api
                .get('/admin/danh-muc/data')
                .then((res) => {
                    this.list_dm = res.data.data;
                    console.log(this.list_dm);
                });

        },
        getDataCha() {
            api
                .get('/admin/danh-muc/data')
                .then((res) => {
                    this.list_dm_cha = res.data.dataCha;
                });

        },
        changeStatus(v) {
            api.get(`/admin/danh-muc/update-status/${v.id}`)
                .then(response => {
                    if (response.data.status === true) {
                        this.$toast.success(response.data.message);
                        this.getData();
                        this.getDataCha();

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
        createDanhMuc() {
            const formData = new FormData();
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            formData.append('ma_danh_muc', this.ma_danh_muc);
            formData.append('ten_danh_muc', this.ten_danh_muc);
            formData.append('slug_danh_muc', this.slug_danh_muc);
            formData.append('is_open', this.is_open);
            formData.append('id_danh_muc_cha', this.id_danh_muc_cha);
            formData.append('hinh_anh', this.selectedImages);
            api
                .post('/admin/danh-muc/create', formData, config)
                .then(response => {
                    if (response.data.status === true) {
                        this.$toast.success(response.data.message);
                        this.getData();
                        this.getDataCha();
                        this.ma_danh_muc = '';
                        this.ten_danh_muc = '';
                        this.slug_danh_muc = '';
                        this.is_open = 0;
                        this.id_danh_muc_cha = 0;
                        this.selectedImages = '';

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
        showUpdate(value) {
            this.edit_dm = Object.assign({}, value);
            this.hinh_anh_src = "http://127.0.0.1:8000/hinh_anh_danh_muc/" + value.hinh_anh;
            this.hinh_anh_update = value.hinh_anh;
            console.log(this.hinh_anh_update);
        },
        updateDanhMuc() {
            const formData = new FormData();
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            formData.append('id', this.edit_dm.id);

            formData.append('ma_danh_muc', this.edit_dm.ma_danh_muc);
            formData.append('ten_danh_muc', this.edit_dm.ten_danh_muc);
            formData.append('slug_danh_muc', this.edit_dm.slug_danh_muc);
            formData.append('id_danh_muc_cha', this.edit_dm.id_danh_muc_cha);
            formData.append('is_open', this.edit_dm.is_open);
            formData.append('hinh_anh', this.hinh_anh_update);

            api
                .post('/admin/danh-muc/update', formData, config)
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
        deleteDanhMuc() {
            api.get(`/admin/danh-muc/destroy/${this.delete_dm.id}`)
                .then(response => {
                    if (response.data.status === true) {
                        this.$toast.success(response.data.message);
                        this.$refs.hidemodal.click();
                        this.getData();
                        this.getDataCha();

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
        chuyenDoiSlug() {
            this.slug_danh_muc = this.converToSlug(this.ten_danh_muc);
        },
        chuyenDoiSlugEdit() {
            this.edit_dm.slug_danh_muc = this.converToSlug(this.edit_dm.ten_danh_muc);
        },
    },
};

</script>
