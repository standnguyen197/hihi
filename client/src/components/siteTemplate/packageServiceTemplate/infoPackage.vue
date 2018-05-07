<style scoped>
    .mt-1{
        margin-top: 10px;
    }
    .mt-2{
        margin-top: 20px;
    }
    .mt-3{
        margin-top: 30px;
    }
    .mt-4{
        margin-top: 40px;
    }
    .mt-5{
        margin-top: 50px;
    }
    .mb-5{
        margin-bottom: 50px;
    }
    .ml-0{
        margin-left: 5px;
    }
    .font-small{
        font-size: 14px !important;
    }
   
    .transferClass{
        background: #FFF;
        min-height: 500px;
        padding: 30px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }   
    .transferClass hr{
        margin-bottom:10px;
        border-top: 1px solid #CCC;
        border-bottom: 0px;
    }
    .transferClass h1{
        font-family: 'Arimo';
    }
    .transferClass p{
        font-size: 15px;

    }
    .transferClass form input{
        width: 100%;
        border: 1px solid #CCC;
        padding: 5px 10px;
        font-size: 20px;
        border-radius: 5px;
    }
    .namePackage {
                background: #333;
                border-top-left-radius: 6px;
                padding: 10px;
                text-align: center;
        }
   
    .subtitle-transfer{
        color:#FFF;text-shadow: 1px 1px 1px #577;
    }
   @media all and (max-width: 760px) {
        .bg-transfer{
            background: orange;
            background-size: cover;
            min-height: 200px;
            vertical-align: middle;
            line-height: 40px; 
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
         .title-transfer{
            margin-top: 14%;font-size:20px;
            color:#FFF;text-shadow: 1px 1px 1px #577;
        }
        .namePackage {
                background: #333;
                border-top-left-radius: 0px;
                padding: 10px;
                text-align: center;
        }
        .bodyPackage{
            padding:20px;
        }
        .xSubPackage {
            color: #FFF;
            font-size: 18px;
            font-weight: 600;
            margin: 4px 0px;padding: 5px 0px;
            border-bottom: 1px solid #d4d4d4;
        }
   } 


   @media all and (min-width: 760px) {
        .bg-transfer{
            background: orange;
            background-size: cover;
            min-height: 500px;
            vertical-align: middle;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
        .namePackage {
                background: #333;
                border-top-left-radius: 6px;
                padding: 10px;
                text-align: center;
        }
        .bodyPackage{
            padding:20px;
        }
        .xSubPackage {
            color: #FFF;
            font-size: 18px;
            font-weight: 600;
            margin: 4px 0px;padding: 5px 0px;
            border-bottom: 1px solid #d4d4d4;
        }
        .title-transfer{
            font-size:20px;
            color:#FFF;text-shadow: 1px 1px 1px #577;
        }
   }
</style>
<template>
    <div>
        <Row>
            <Col class="mt-5 mb-5" :xs="24" :sm="24" :md="{ span: 14 , offset: 5}" :lg="{ span:14 , offset: 5 }"> 
                <div> 
                        <Col :xs="24" :sm="{ span: 10 }" :md="{ span: 10 }" :lg="{ span:10 }" class="bg-transfer">
                            <div class="namePackage"><h1 class="subtitle-transfer">{{ dataPackage.namePackage }}</h1></div>
                            <div class="bodyPackage">
                                <p class="xSubPackage">
                                <Icon type="ribbon-b"></Icon> {{ dataPackage.xSubPackage }} 
                                </p>
                                <p v-for="item in dataPackage.subPackage" :key="item.index" style="color: #FFF;
                                font-size: 16px;margin: 4px 0px;padding: 5px 0px;
                                border-bottom: 1px solid #d4d4d4;">
                                    <Icon type="ios-checkmark-empty"></Icon> {{ item.value }} 
                                </p>
                            </div>
                        </Col>
                        <div v-if="serviceStatus == 0 || serviceStatus == 1  && dataPackage.typePackage !== 'trial'">
                        <Col v-if="!infoSuccess" :xs="24" :sm="{ span: 14 }" :md="{ span: 14 }" :lg="{ span:14 }" class="transferClass">
                            <h1>MÃ COUPON</h1>
                            <p>Nhập mã coupon khuyến mãi nếu có.</p>
                            <br/>
                            <form>
                                <input v-model="couponValue" type="text" placeholder="Nhập mã coupon..."/>
                                <br/>
                                <br/>
                                <div v-if="!applyCouponIsActive">
                                <Button v-if="!loading" @click="applyCoupon" :loading="loadingCoupon" type="warning" size="large" > 
                                    <span v-if="!loadingCoupon">ÁP DỤNG</span>
                                    <span v-else>Đang xử lý...</span>
                                 </Button>
                                 <Button v-else  type="warning" size="large" disabled> 
                                    ÁP DỤNG
                                 </Button>
                                 </div>
                                 <div v-else>
                                    <Button type="warning" size="large" disabled> 
                                      <Icon type="ios-checkmark" color="#19be6b"></Icon>  ÁP DỤNG
                                    </Button>
                                 </div>
                            </form>
                            <br/>
                            <hr/>
                            <p style="font-size: 20px;"><b>THANH TOÁN : <span style="color:orange"> {{ moneysFormat(pricePackage) }} </span></b></p>
                            <br/>
                            <br/>
                            <Button v-if="!loadingCoupon" @click="paymentsPackage(dataPackage._id,pricePackage)" :loading="loading" type="warning" size="large" long> 
                                    <span v-if="!loading">THANH TOÁN</span>
                                    <span v-else>Đang giao dịch...</span>
                            </Button>
                            <Button v-else type="warning" size="large" long disabled> 
                                   THANH TOÁN
                            </Button>
                            <br/>
                            <br/>
                            <p style="display: flex;
                            flex-direction: row-reverse;"><b>SỐ DƯ HIỆN CÓ : {{ moneysFormat(currentBalance) }} </b></p>
                        </Col>
                        <Col v-else :xs="24" :sm="{ span: 14 }" :md="{ span: 14 }" :lg="{ span:14 }" class="transferClass">
                            <transition name="bounce">
                                     <h1  v-show="showIconSuccess" style="text-align:center;
                                        font-size: 130px;
                                        color: #19BE68;">
                                        <Icon type="ios-checkmark"></Icon>
                                    </h1>
                            </transition>
                            <h1 style="text-align:center;">Giao dịch thành công!</h1>
                            <form>
                                <br/>
                                <center>
                                    <Button @click="toDashboard" type="warning" size="large"> 
                                        ĐẾN DASHBOARD
                                    </Button>
                                </center>
                            </form>
                        </Col>
                     </div>
                     <div v-else-if="dataPackage.typePackage == 'trial'">
                        <Col :xs="24" :sm="{ span: 14 }" :md="{ span: 14 }" :lg="{ span:14 }" class="transferClass">
                                
                                        <h1  style="text-align:center;
                                            font-size: 130px;
                                            color: #ed3f14;">
                                            <Icon type="ios-close"></Icon>
                                        </h1>
                                <h1 style="text-align:center;">Gói Trial không khả dụng!</h1>
                                <form>
                                    <br/>
                                    <center>
                                        <Button @click="toOtherPackage" type="warning" size="large"> 
                                            CÁC GÓI KHÁC
                                        </Button>
                                    </center>
                                </form>
                                <br/>
                                <p class="mt-5">Vì bạn đã bắt đầu sử dụng dịch vụ nên gói này sẽ không khả dụng!</p>
                            </Col>
                     </div>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios';
import baseURL from '../../../services/baseURLClient';
import moneysFormatter from 'currency-formatter';
import objectAssignDeep from 'object-assign-deep';
import { eventBus } from '../../../main';
    export default {
        name: 'infoPackage',
        data(){
            return {
                loadingCoupon: false,
                applyCouponIsActive: false,
                loading: false,
                infoSuccess: false,
                showIconSuccess: false,
                couponValue:'',
                dataPackage:'',
                pricePackage:'',
                currentBalance:'',
                serviceStatus: ''
            }
        },
        created(){
            var idPackages = this.$route.params.id;
                this.serviceStatus = this.$session.get('auth').serviceStatus;
                eventBus.$on('thisBalance', (balanceNow) => {
                    this.currentBalance = balanceNow
                })
            axios.post(`${baseURL}/api/packages/getPathPackages`, {idPackages})
            .then((response) => {
                var status = response.data.status;
                if(status != 404){
                    this.dataPackage = response.data.resultPackages;
                    this.pricePackage = response.data.resultPackages.pricePackage;
                }else{
                    this.$router.push('/dich-vu');
                }
            }).catch((e) => {
                console.log(e);
            })
        },
        methods:{
            moneysFormat(value){
                return moneysFormatter.format(value, {
                        symbol: 'VND',
                        thousand: '.',
                        precision: 0,
                        format: '%v %s' // %s is the symbol and %v is the money
            });
        },
        paymentsPackage(idPackage , pricePackage){
            var _this = this;
            var auth = this.$session.get('auth');
            var tokenJWT = this.$session.get('jwt');
            var idPackages = idPackage;
            var idPartner = this.$session.get('auth')._id;
            var currentBalance = parseInt(this.currentBalance);
            var currentPricePackage = parseInt(pricePackage);
            this.loading = true;

            if(currentBalance >= pricePackage){
                axios.post(`${baseURL}/api/subscriptions/registerServices`,{ idPartner , idPackages , currentPricePackage } , {
                        headers: { Authorization: `Bearer ${tokenJWT}` } 
                    }).then((response) => {
                        if(response.status !== 404){
                                var newInfoUser = response.data.infoServicesUser;

                                var updateServiceStatus = newInfoUser.serviceStatus;
                                var roleIdPartner = newInfoUser.roleIdPartner;
                                const newAuth = {
                                    serviceStatus:updateServiceStatus,
                                    roleIdPartner: roleIdPartner
                                };
                                const result = objectAssignDeep(auth, newAuth);
                                _this.$session.set('auth', result);
                                eventBus.$emit('newServiceStatus', updateServiceStatus);
                                eventBus.$emit('newRoleIdPartner', roleIdPartner);

                                var newBalance = response.data.newBalance.balance;
                                 setTimeout(function(){ 
                                    _this.infoSuccess = true;
                                    setTimeout(function(){
                                        _this.showIconSuccess = true;
                                        eventBus.$emit('newBalance', newBalance);
                                    },10);
                                },2000);
                        }else{
                            this.loading = false;
                            this.$Notice.warning({
                                title: 'Thông báo',
                                desc:'Giao dịch thất bại. Xin hãy thử lai!'
                            });
                        }
                       
                    }).catch((e) => {
                        console.log(e);
                    })
               

            }else{
                this.loading = false;
                this.$Notice.warning({
                    title: 'Thông báo',
                    desc:'Bạn không đủ tiền đăng ký gói dịch vụ này!'
                });
            }
            
        },
        applyCoupon(){
            var _this = this;
            this.loadingCoupon = true;
            setTimeout(function(){
                if(_this.couponValue == 'OFF50'){
                    _this.pricePackage = parseInt(_this.pricePackage) - 100000;
                     _this.applyCouponIsActive = true; 
                }
                _this.loadingCoupon = false;
            },2000);
        },
        toDashboard(){
           this.$router.push('/channels/@me');
        },
        toOtherPackage(){
            this.$router.push('/dich-vu');
        }
    }
}

</script>