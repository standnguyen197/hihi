<template>
<div>
<vue-headful
    title="QUẢN LÝ DỊCH VỤ | IBEE.VN"
    />
    <Row :gutter="16">
    <Col span="24">
        <Row :gutter="16">
            <Col span="6">
                <div class="CardBox">
                    <h3 class="titleCardContent">Tổng dịch vụ</h3>
                    <br/>
                <h1 style="color:orange;font-size: 21px;"> {{ numPackages }} </h1>
                </div>
            </Col>

            <Col span="18">
                <div class="CardBox">
                    <h3 class="titleCardContent">Công cụ dịch vụ</h3>
                    <br/>
                    <Button type="primary" @click="createServiceModal = true"><Icon type="plus-circled"></Icon> Tạo dịch vụ</Button> <Button type="primary"><Icon type="stats-bars"></Icon> Thống kê dịch vụ</Button>
                </div>
                <Modal
                    title="Tạo dịch vụ"
                    :transition-names= "['none']"
                    :styles="{top: '6%'}"
                    v-model="createServiceModal"
                    @on-ok="createPackage"
                    class-name="vertical-center-modal">
                    <Form  label-position="top">
                    <FormItem label="Tên dịch vụ">
                        <Input v-model="namesPackageServices" placeholder="Xin điền tên dịch vụ ..." ></Input>
                    </FormItem>
                    <FormItem label="Mô tả dịch vụ (giá/thời gian)">
                        <Input v-model="descriptionsPackageServices" placeholder="Xin điền mô tả dịch vụ ..." ></Input>
                    </FormItem>
                    
                    <FormItem
                            v-for="(item, index) in formDynamic.items"
                            v-if="item.status"
                            :key="index"
                            :label="'Mô tả ' + item.index"
                            :prop="'items.' + index + '.value'">
                        <Row>
                            <Col span="18" style="padding:0px">
                                <Input type="text" v-model="item.value" placeholder="Xin nhập mô tả..."></Input>
                            </Col>
                            <Col span="4" offset="1" style="padding:0px">
                                <Button type="ghost" @click="handleRemove(index)">Xóa mô tả</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem>
                        <Row>
                            <Col span="12" style="padding:0px">
                                <Button type="dashed" long @click="handleAdd" icon="plus-round">Thêm mô tả</Button>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="Số kiểu dịch vụ">
                        <Input   v-model="typesPackageServices" placeholder="Xin nhập số kiểu dịch vụ ..."></Input>
                    </FormItem>
                     <FormItem label="Thời gian sử dụng dịch vụ">
                        <Input   v-model="timesPackageServices" placeholder="Xin nhập thời gian ..."></Input>
                    </FormItem>
                    <FormItem label="Giá dịch vụ">
                        <Input   v-model="pricesPackageServices" placeholder="Xin nhập giá dịch vụ ..."></Input>
                    </FormItem>
                </Form>
                </Modal>
            </Col>
            <Col span="24">
                <div class="CardBox">
                <h3 class="titleCardContent">Danh sách dịch vụ</h3>
                <br/>
                    <Table :row-class-name="rowClassName" border :columns="columnsUser" :data="dataUser"></Table>
                </div>
            </Col>
        </Row>
    </Col>
   </Row>
</div>
</template>
<script>
import axios from 'axios';
import baseURL from '../../../services/baseURLClient';
    export default {
        data () {
            return {
                createServiceModal: false,
                descriptionsPackageServices: '',
                pricesPackageServices: '',
                namesPackageServices: '',
                timesPackageServices:'',
                typesPackageServices: '',
                numPackages: '0',
                index: 1,
                formDynamic: {
                    items: [
                        {
                            value: '',
                            index: 1,
                            status: 1
                        }
                    ]
                },
                columnsUser: [
                    {
                        title: 'STT',
                        key: '_id',
                    },
                    {
                        title: 'Tên dịch vụ',
                        key: 'namePackage',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.namePackage)
                            ]);
                        }
                    },
                    {
                        title: 'Mô tả dịch vụ',
                        key: 'xSubPackage'
                    },
                    {
                        title: 'Giá dịch vụ',
                        key: 'pricePackage'
                    },
                    {
                        title: 'Chức năng',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(params.row._id)
                                        }
                                    }
                                }, 'Sửa'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.row._id)
                                        }
                                    }
                                }, 'Xóa')
                            ]);
                        }
                    }
                ],
                dataUser: []
            }
        },
        created(){
            var tokenJWT = this.$session.get('jwt');
            axios.post(`${baseURL}/api/packages/getPackages`,{},{
                    headers: { Authorization: `Bearer ${tokenJWT}` }
                }).then((response) =>{
                    
                    this.numPackages = response.data.numPackages;

                    if(response.data.numPackages !== 0){
                        this.dataUser = response.data.result;
                    }

                }).catch((err) => {
                     this.$Notice.warning({
                        title: 'Thông báo',
                        desc: err
                    });
                })

        },
        methods: {
            createPackage(){
                var tokenJWT = this.$session.get('jwt');
                var idPartner = this.$session.get('auth')._id;
                var namePackage = this.namesPackageServices;
                var typePackage = this.typesPackageServices;
                var pricePackage = this.pricesPackageServices;
                var timePackage = this.timesPackageServices;
                var subPackage = this.formDynamic.items;
                var xSubPackage = this.descriptionsPackageServices;
                var packages = {
                    idPartner,
                    typePackage,
                    namePackage,
                    pricePackage,
                    xSubPackage,
                    timePackage,
                    subPackage
                }
                axios.post(`${baseURL}/api/packages/createPackages`, packages , {
                    headers: { Authorization: `Bearer ${tokenJWT}` }
                }).then((response) =>{
                    console.log(response.data);
                    this.$Notice.success({
                        title: 'Thông báo',
                        desc: 'Thêm thành công!'
                    });
                    setTimeout(()=>{  location.reload(); }, 1300);
                   
                }).catch((err) => {
                     this.$Notice.warning({
                        title: 'Thông báo',
                        desc: err
                    });
                })
            },
            edit (index) {
                this.$router.push(`/admin/managePackageService/edit/${index}`);
            },
            remove (index) {
                console.log(index);
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            handleAdd () {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove (index) {
                this.formDynamic.items[index].status = 0;
            },
             rowClassName (row, index) {
                return 'demo-table-dark-row';
            }
        }
    }  
</script>
<style>

    .ivu-table th{
        background-color: #1a1a1b !important;
        color: #FFF !important;
    }
    .ivu-table .demo-table-dark-row td{
        background-color: #333;
        color: #fff;
    }
    .ivu-table td.demo-table-dark-column{
        background-color: #333;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color:#333;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #333;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-price {
        background-color: #333;
        color: #fff;
    }
</style>
