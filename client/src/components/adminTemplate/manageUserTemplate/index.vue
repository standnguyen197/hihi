<template>
<div>
<vue-headful
    title="QUẢN LÝ NHÂN VIÊN | IBEE.VN"
    />
    <Row :gutter="16">
    <Col span="24">
        <Row :gutter="16">
            <Col span="6">
                <div class="CardBox">
                    <h3 class="titleCardContent">Tổng nhân viên</h3>
                    <h1 style="color:orange;font-size: 21px;"> 5 </h1>
                </div>
            </Col>
            <Col span="6">
                <div class="CardBox">
                    <h3 class="titleCardContent">Nhân viên sales & support </h3>
                    <h1 style="color:orange;font-size: 21px;"> 2 </h1>
                </div>
            </Col>
            <Col span="6">
                <div class="CardBox">
                    <h3 class="titleCardContent">Nhân viên analytics</h3>
                    <h1 style="color:orange;font-size: 21px;"> 1 </h1>
                </div>
            </Col>
            <Col span="6">
                <div class="CardBox">
                    <h3 class="titleCardContent">Tổng quản lý</h3>
                    <h1 style="color:orange;font-size: 21px;"> 0 </h1>
                </div>
            </Col>
            <Col span="24">
                <div class="CardBox">
                <h3 class="titleCardContent">Danh sách nhân viên</h3>
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
    export default {
        data () {
            return {
                columnsUser: [
                    {
                        title: 'Tên nhân viên',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Tuổi',
                        key: 'age'
                    },
                    {
                        title: 'Địa chỉ',
                        key: 'address'
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
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                dataUser: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'Thông tin nhân viên',
                    content: `Tên nhân viên：${this.dataUser[index].name}<br>Tuổi nhân viên：${this.dataUser[index].age}<br>Địa chỉ：${this.dataUser[index].address}`
                })
            },
            remove (index) {
                this.dataUser.splice(index, 1);
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
    .ivu-table .demo-table-info-cell-address {
        background-color: #333;
        color: #fff;
    }
</style>