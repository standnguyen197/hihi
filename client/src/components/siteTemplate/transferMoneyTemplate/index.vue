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
        min-height: 400px;
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
        font-family: 'Arimo';
    }
    .transferClass form input{
        width: 100%;
        border: 1px solid #CCC;
        padding: 5px 10px;
        font-size: 20px;
        border-radius: 5px;
    }
   
    .subtitle-transfer{
        color:#FFF;text-shadow: 1px 1px 1px #577;
    }
   @media all and (max-width: 760px) {
        .bg-transfer{
            background: url('../../../assets/img-system/bg-payment.jpg') no-repeat;
            background-size: cover;
            min-height: 200px;
            vertical-align: middle;
            line-height: 40px; 
            text-align:center;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
        }
         .title-transfer{
            margin-top: 14%;font-size:20px;
            color:#FFF;text-shadow: 1px 1px 1px #577;
        }
   } 


   @media all and (min-width: 760px) {
        .bg-transfer{
            background: url('../../../assets/img-system/bg-payment.jpg') no-repeat;
            background-size: cover;
            min-height: 400px;
            vertical-align: middle;
            line-height: 40px; 
            text-align:center;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
         .title-transfer{
            margin-top: 46%;font-size:20px;
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
                            <div class="title-transfer">SỐ TIỀN BẠN NHẬP</div>
                            <div><h1 class="subtitle-transfer">{{ moneysFormat(numberMoneys) }}</h1></div>
                        </Col>
                        <Col v-if="!transferSuccess" :xs="24" :sm="{ span: 14 }" :md="{ span: 14 }" :lg="{ span:14 }" class="transferClass">
                            <h1>NẠP TIỀN</h1>
                            <p>Xin nhập số tiền bạn muốn nạp.</p>
                            <br/>
                            <br/>
                            <form>
                                <input v-model="numberMoneys" type="number" placeholder="Nhập số tiền..."/>
                                <br/>
                                <br/>
                                <Button @click="sendTransfer" :loading="loading" type="warning" size="large" long> 
                                    <span v-if="!loading">NẠP TIỀN</span>
                                    <span v-else>Đang xử lý...</span>
                                 </Button>
                            </form>
                            <br/>
                            <hr/>
                            <p><b>Điều khoản: </b></p>
                            <p class="ml-0 font-small"> - Hãy kiểm tra số tiền trước khi NẠP TIỀN. Chúng tôi không chịu trách nhiệm khi bạn nhập sai số tiền. </p>
                            <p class="ml-0 font-small"> - Thông tin thanh toán của bạn được đảm bảo an toàn với chứng chỉ SSL Bảo mật chuẩn quốc tế.</p>
                        </Col>
                        <Col v-else :xs="24" :sm="{ span: 14 }" :md="{ span: 14 }" :lg="{ span:14 }" class="transferClass">
                            <transition name="bounce">
                                     <h1  v-show="showIconSuccess" style="text-align:center;
                                        font-size: 130px;
                                        color: #19BE68;">
                                        <Icon type="ios-checkmark"></Icon>
                                    </h1>
                            </transition>
                           
                            <h1 style="text-align:center;">Nạp tiền thành công!</h1>
                            <form>
                                <br/>
                                <center>
                                    <Button @click="toHome" type="warning" size="large"> 
                                        TRANG CHỦ
                                    </Button>
                                </center>
                            </form>
                        </Col>


                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import moneysFormatter from 'currency-formatter';
import bgImages from '@/assets/img-system/bg-payment.jpg'; 
import axios from 'axios';  
import baseURL from '../../../services/baseURLClient';
import { eventBus } from '../../../main';
    export default {
        name: 'transferMoneyTemplate',
        props: ['balanceNow'],
        data(){
            return {
                numberMoneys: '',
                loading: false,
                currentBalance: '0',
                transferSuccess: false,
                showIconSuccess: false
                
            }
        },
        created(){
            eventBus.$on('thisBalance', (balanceNow) => {
                this.currentBalance = balanceNow
            })
        },
        methods: {
             moneysFormat(value){
                return moneysFormatter.format(value, {
                        symbol: 'VND',
                        thousand: '.',
                        precision: 0,
                        format: '%v %s' // %s is the symbol and %v is the money
                });
                
            },
            sendTransfer(){
                var idPartner = this.$session.get('auth')._id;
                var tokenJWT = this.$session.get('jwt');
                var _this = this;
                if(this.numberMoneys == ''){
                    alert('Xin hãy nhập số tiền!');
                }else{
                    this.loading = true;
                    var balance = this.numberMoneys
                    var currentBalance = this.currentBalance;
                    axios.post(`${baseURL}/api/wallets/sendTransfers`,{ idPartner , balance , currentBalance } , {
                        headers: { Authorization: `Bearer ${tokenJWT}` } 
                    }).then((response) => {
                        var updatedBalance = response.data.balance;
                        
                        setTimeout(function(){ 
                           _this.loading = false;
                           _this.transferSuccess = true;
                                setTimeout(function(){
                                    _this.showIconSuccess = true;
                                    // Gửi cập nhật tiền
                                    eventBus.$emit('updateBalance', updatedBalance);

                                    },10);
                            }, 2000);

                    }).catch((e) => {
                        console.log(e)
                    })
                }
                
            },
            toHome(){
                this.$router.push('/');
            }
        }

    }
</script>