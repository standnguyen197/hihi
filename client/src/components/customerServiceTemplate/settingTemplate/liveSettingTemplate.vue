<style scoped>
    .submain {
        display: flex;
        width:100%
    }
    .submainLeft {
        background: #FFF;
        border-right: 1px solid #EEE;
        flex:1;
    }
    .submainRight {
        flex:4
    }

    .submainLeft ul li {
        padding: 8px 10px;
        width:100%;
        border-bottom: 1px solid #eaeaea;
    }
    .submainLeft ul li:hover{
        background: orange
    }
    .submainLeft ul a{
        color: orange
    }
    .submainLeft ul a:hover{
        color: #FFF
    }
    .mainRight {
        margin: 10px;
        background: #FFF;
        padding:10px;
        display: flex;
        
    }
</style>
<template>
    <div class="submain">
        <div class="submainLeft">
            <ul>
                <router-link to="/channels/settings"><li>Bảng cài đặt</li></router-link>
                <router-link to="/channels/settings/liveSettings"><li style="background: orange;color:#FFF">Cài đặt Live</li></router-link>
            </ul>
        </div>
        <div class="submainRight">
        <div class="mainRight">
        <Col :xs="24" :md="{span: 16,offset: 4}" :lg="{span: 16,offset: 4}">
           <h2>CÀI ĐẶT LIVE</h2>
               <hr style="border-top:1px solid #CCC;border-bottom:none"/>
               <br/>
                    <Form>
                    <label>BẠN LIVE BẰNG TÀI KHOẢN NÀO?</label>
                       <FormItem>
                            <Select v-model="accountLive" size="large">
                                <Option v-for="item in xAccountLive" :value="item.value" :key="item.index"> {{ item.label }}</Option>
                            </Select>
                        </FormItem>
                        <span v-if="fanpageIsActive">
                        <label>HÃY CHỌN FANPAGE BẠN LIVE</label>
                        <FormItem>
                            <Select v-model="idFanpageLive" size="large">
                                <Option v-for="item in xIdFanpageLive" :value="item.id+'|'+item.access_token" :key="item.id">{{ item.name }}</Option>
                            </Select>
                        </FormItem>
                        </span>
                        <label>BẠN MUỐN MÃ SỐ SẢN PHẨM "<b>NGẪU NHIÊN</b>" HAY TRÙNG "<b>MÃ SẢN PHẨM</b>"?</label>
                        <FormItem>
                            <Select v-model="codeLive" size="large">
                                <Option v-for="item in xCodeLive" :value="item.value" :key="item.index"> {{ item.label }}</Option>
                            </Select>
                        </FormItem>
                        <label>BẠN BÁN 1 SẢN PHẨM HAY NHIỀU SẢN PHẨM?</label>
                        <FormItem>
                            <Select v-model="typeProductLive" size="large">
                                <Option v-for="item in xTypeProductLive" :value="item.value" :key="item.index"> {{ item.label }}</Option>
                            </Select>
                        </FormItem>
                        <label>BẠN MUỐN BAO NHIÊU NGƯỜI DỰ BỊ KHI ĐƠN CHÍNH BỊ BỎ</label>
                        <FormItem>
                           <Input v-model="subOrderLive" placeholder="Xin hãy nhập số người dự bị..." size="large"></Input>
                        </FormItem>
                        <FormItem>
                            <Button :loading="loading" @click="saveSetting" type="primary">
                                <span v-if="!loading">LƯU CÀI ĐẶT</span>
                                <span v-else>Đang xử lý...</span>
                            </Button>
                        </FormItem>
                    </Form>
                </Col>
           </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import baseURL from '../../../services/baseURLClient';
    export default {
        name: 'indexSettingTemplate',
        data(){
            return {
                loading: false,
                accountLive: null,
                fanpageIsActive: false,
                idFanpageLive: null,
                codeLive: null,
                typeProductLive: null,
                subOrderLive: '1',

                xAccountLive: [
                    {   index: 1,
                        label: 'TRANG CÁ NHÂN',
                        value: 'profile'
                    },
                    {   
                        index: 2,
                        label: 'TRANG FANPAGE',
                        value: 'fanpage'
                    }
                ],
                xIdFanpageLive: [],
                xCodeLive: [
                    {
                        index: 1,
                        label: 'NGẪU NHIÊN',
                        value: 'random'
                    },
                    {
                        index: 2,
                        label: 'TRÙNG MÃ SẢN PHẨM',
                        value: 'product'
                    }
                ],
                xTypeProductLive: [
                    {
                        index: 1,
                        label: 'MỘT LOẠI SẢN PHẨM',
                        value: 'onlyProduct'
                    },
                    {
                        index: 2,
                        label: 'NHIỀU LOẠI SẢN PHẨM',
                        value: 'manyProduct'
                    }
                ]
            }
        },
        watch: {
            accountLive(value){
                var _this = this;
                var access_token = this.$session.get('longAccessToken');
                if(value == 'fanpage'){
                    this.fanpageIsActive = true;
                    FB.api(`me/accounts?access_token=${access_token}`, (response) => {
                        const dataFanpage = response.data;
                            if(dataFanpage.length == 0){
                                    _this.fanpageIsActive = false;
                                    _this.accountLive = 'profile'
                                        _this.$Notice.error({
                                            title: 'THÔNG BÁO',
                                            desc: 'Bạn không có Fanpage nào cả!'
                                        });

                            }else{
                                     _this.xIdFanpageLive = response.data;
                                 }
                    });

                }else{
                    this.fanpageIsActive = false;
                }
            }
        },
        created(){
            var idPartner = this.$session.get('auth')._id;
            var tokenJWT = this.$session.get('jwt');
            axios.post(`${baseURL}/api/lives/getSetting`, 
                {idPartner} ,{
                    headers: { Authorization: `Bearer ${tokenJWT}` } 

                }).then((response) => {

                    this.accountLive = response.data.accountLive;
                    this.codeLive = response.data.codeLive;
                    this.typeProductLive = response.data.typeProductLive;
                   
                }).catch((e) => {
                    console.log(e);
                })
        },
        methods:{
            saveSetting(event){
                event.preventDefault();
                this.loading = true;
                var _this = this;
                var tokenJWT = this.$session.get('jwt');
                var accountLive = this.accountLive;
                var FanpageLive = this.idFanpageLive;
                if(accountLive == 'fanpage'){
                    var idFanpageLive = FanpageLive.split('|')[0];
                    var accessTokenPage = FanpageLive.split('|')[1];
                    this.$localStorage.set('accessTokenPage', accessTokenPage);
                }else{
                    var idFanpageLive = null;
                    var accessTokenPage = null;
                }

                // ========= LOAD LIST ===========//
                var idPartner = this.$session.get('auth')._id;
                var codeLive = this.codeLive;
                var typeProductLive = this.typeProductLive;
                var subOrderLive = this.subOrderLive;

                axios.post(`${baseURL}/api/lives/saveSetting`, 
                {idPartner,accountLive,idFanpageLive,accessTokenPage,codeLive,typeProductLive,subOrderLive  } ,{
                    headers: { Authorization: `Bearer ${tokenJWT}` } 
                }).then((response) => {
                    _this.loading = false;
                    var result = response.data;
                    if(result == 1){
                         _this.$Notice.success({
                                            title: 'THÔNG BÁO',
                                            desc: 'Cài đặt thành công! Bạn có thể sử dụng LIVE ngay bây giờ!'
                                });
                    }else{
                        _this.$Notice.warning({
                                            title: 'THÔNG BÁO',
                                            desc: 'Cài đặt không thành công!'
                                });
                    }
                }).catch((e) => {
                    console.log(e);
                })
            
            }
        }
    }
</script>