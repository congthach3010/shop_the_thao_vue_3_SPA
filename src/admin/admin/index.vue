<template lang="">
   <table class="table table-bordered table-responsive" id="listDanhMuc">
        <thead>
            <tr class="text-center  bg-primary text-nowrap">
                <th scope="col"><b>#</b></th>
                <th scope="col"><b>Tên Admin</b></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value,key) in list" :key="key">
                <th>{{ key+1 }}</th>
                <th>{{value.name}}</th>
            </tr>
        </tbody>
    </table>
</template>
<script>
import api from '../../core/api';
export default {
    name: "app",
    data() {
        return {
            list: [],
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            // Gọi API và thêm token vào header của yêu cầu
            api
                .get('/admin/data')
                .then((res) => {
                    this.list = res.data.data;
                });
        },
    },
}
</script>
