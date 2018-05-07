<style scoped >

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child), .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
  .navbar-right{
    float: none;
 }  
}

@media screen and (max-width: 600px) {
  .topnav.responsive {position: relative;}
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
  .topnav.responsive .dropdown {float: none;}
  .topnav.responsive .dropdown-content {position: relative;}
  .topnav.responsive .dropdown .dropbtn {
    display: block;
    width: 100%;
    text-align: left;
  }
}



/* Dành cho điện thoại */
@media all and (max-width: 760px) {
    .iconDesktop {
        display:none
    }
    .HeaderNavLeft {
        display: none;
        flex: 3;
    }
    .HeaderNavLeft a {
        color: #c1c1c1;
    }
    .HeaderNavLeft a:hover{
        color: #FFF;
    }
    .HeaderNavRight {
        display: none;
        flex: 1;
        justify-content: flex-end;
    }
    .HeaderNavRight a {
    color: #c1c1c1
    }
    .HeaderNavRight a:hover{
        color: #FFF;
    }
    .LogoHeaderNav{
        display: none;
        flex: 0;
        margin: 1rem 1rem 0.3rem 0rem;
    }
    .HeaderNavRight .LoginButton {
        border: 2px solid;
        padding: 5px 8px;
        border-radius: 20px;
        font-size: 13px;
        display: none;
    }
    .HeaderNavRight .ButtonIcon{
        font-size: 16px;
        display: none;
    }
    .ivu-select-dropdown ul li {
        margin: 0px;
    }

    .HeaderNavLeftMobile a{
        color: #FFF;

    }
    .HeaderNavLeftMobile{
        margin-top: 12px;
        display: flex;
        flex: 1;
    }
    .HeaderNavLeftMobile .ivu-dropdown .ivu-select-dropdown{
            left: 4px !important;
    }
    .HeaderNavMobile {
        padding: 0.3rem 1rem;
        font-size: 21px;
        display: flex;
        flex: 1;
    }
    .HeaderNavLeftMobile .ivu-dropdown {
        margin-top: -2px;
    }
    .LogoHeaderNavMobile{
        display: flex;
        flex: 4;
        justify-content: center;
        align-items: center;
    }
    
}
 
/* Dành cho máy tính bảng */
@media only screen and (min-width: 680px) and (max-width: 960px) {
    .ButtonIcon {
        display: none
    }
}
@media all and (min-width: 761px) {

.HeaderNavLeft {
    display: flex;
    flex: 3;
}
.HeaderNavLeft a {
    color: #c1c1c1
}
.HeaderNavLeft a:hover{
    color: #FFF;
}
.HeaderNavRight {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: relative;
    
}


.HeaderNavRight a {
   color: #c1c1c1
}
.HeaderNavRight a:hover{
    color: #FFF;
}
.LogoHeaderNav{
    display: flex;
    flex: 0;
    margin: 1rem 1rem 0.3rem 0rem;
}
.HeaderNavRight .LoginButton {
    border: 2px solid;
    padding: 5px 8px;
    border-radius: 20px;
    font-size: 13px;
    position: relative;
    z-index:2;
}
.HeaderNavRight .ButtonIcon{
    font-size: 16px;
    position:relative;
    z-index:2
}
.ivu-select-dropdown ul li {
    margin: 0px;
}

.HeaderNavLeftMobile a{
    display:none;
}

}


nav{
    background: #18191c;
    padding: 7px 3%;
    height:auto;
    display: flex;
}

nav ul li {
    list-style:none;
    margin: 1.3rem 0.6rem;
}


.rotate-90 {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    transform: rotate(90deg);
}
.colorBlackHeader{
    background: #18191c;
}

.colorOrangeHeader{
    background: #f29000 url('../assets/5.png');
    
}
.titleHeader{
    text-align: center;
    font-size: 38px;
    padding: 30px 10px;
    background: #ffad33 url('../assets/5.png');
    color: rgb(255, 255, 255);
    font-family: 'Baloo Bhaina' , sans-serif;
}

.backgroundTransfer{
    background:#CCC
}
.openDashboard {
    border: 2px solid;
    padding: 5px 8px;
    border-radius: 20px;
    font-size: 13px;
}
.openDashboardHub .ivu-select-dropdown a {
    color:#333
}
.background-image{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to right, transparent 0%, #18191c 100%);
    background-size: cover;
    z-index: 0;
    height: auto;	
}
.background-image-bottom{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, transparent 0%, #18191c 110%);
    background-size: cover;
    z-index: 0;
    height: auto;	
}
.background-img{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(to left, transparent 0%, #18191c 100%);
    background-size: cover;
    z-index: 0;
    height: auto;	
}
</style>
<template>
    <div>
         <vue-headful
            :title="'iBee.vn nền tảng quản lý và hỗ trợ bán hàng qua Live Facebook'"
        />
        <div  :class="optionsClass">
        <div>
            <nav class="HeaderNavMobile">
                <div class="HeaderNavLeftMobile"> 
                    <Dropdown trigger="click" placement="bottom-start" :transfer="true">
                    <a href="javascript:void(0)">
                        <Icon type="navicon-round"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>Giới thiệu</DropdownItem>
                        <DropdownItem>Hướng dẫn</DropdownItem>
                        <DropdownItem>Dịch vụ</DropdownItem>
                        <DropdownItem>Blog</DropdownItem>
                        <DropdownItem>Đăng nhập</DropdownItem>
                    </DropdownMenu>
                </Dropdown> 
                 <div class="LogoHeaderNavMobile"><a href=""><img style="width: 35px;" :src="logo"/></a></div>
                </div>
                <div class="LogoHeaderNav"><a href=""><img style="width: 35px;" :src="logo"/></a></div>
                <ul class="HeaderNavLeft">
                    <li><a href="">Giới thiệu</a></li>
                     <li><a href="">Hướng dẫn</a></li>
                    <li><router-link to="/dich-vu">Dịch vụ</router-link></li>
                     <li><a href="">Blog</a></li>
                    <li> <Dropdown trigger="click" placement="bottom-end">
                            <a href="javascript:void(0)">
                                Thêm 
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>Tình trạng</DropdownItem>
                                <DropdownItem>Partner</DropdownItem>
                                <DropdownItem>Donate</DropdownItem>
                                <DropdownItem>Hỗ trợ & liên hệ</DropdownItem>
                                <DropdownItem>Phản hồi</DropdownItem>
                            </DropdownMenu>
                        </Dropdown></li>
                </ul>
                <ul class="HeaderNavRight" :style="{ background: 'url('+ imgAvatar +')', backgroundPositionY: '50%'}">
                <div class="background-image"></div>
                <div class="background-image-bottom"></div>
                <div class="background-img"></div>
                    <li ><a href="" class="ButtonIcon"><Icon type="social-twitter"></Icon></a></li>
                    <li ><a href="" class="ButtonIcon"><Icon type="social-youtube"></Icon></a></li>
                    <li v-if="!auth"><router-link to="/dang-nhap" class="LoginButton">Đăng nhập</router-link></li>
                    <li v-else>
                    <Dropdown trigger="click" class="openDashboardHub" placement="bottom-end">
                            <a href="javascript:void(0)" class="openDashboard">
                              Open
                            </a>
                            <DropdownMenu slot="list">
                                <a v-if="serviceStatus == 1" href="javascript:void(0)" @click="getRedirect">
                                <DropdownItem style="background: #333;color: orange;">
                                <Icon type="ionic"></Icon> TRUY CẬP ỨNG DỤNG </DropdownItem></a>
                                <DropdownItem style="background: orange url('../assets/5.png');color: #FFF;">
                                <Icon type="arrow-right-b"></Icon> VÍ TIỀN : {{ moneysFormat(currentBalance) }} </DropdownItem></a>
                                <DropdownItem><Icon type="arrow-right-b"></Icon> Trang cá nhân</DropdownItem>
                                <router-link to="/nap-tien"><DropdownItem><Icon type="arrow-right-b"></Icon> Nạp tài khoản</DropdownItem></router-link>
                                <a href="javascript:void(0)" @click="logout" ><DropdownItem><Icon type="arrow-right-b"></Icon> Đăng xuất </DropdownItem></a>
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                </ul>
            </nav>
        </div>
            <div class="titleHeader"> 
             XIN CHÀO BẠN ĐÃ ĐẾN VỚI IBEE.VN
             <p style="font-family: sans-serif;
                 font-size: 20px;">IBEE.VN là nền tảng quản lý và hỗ trợ bán hàng qua LIVESTREAM của FACEBOOK</p>
                <br/>
                <div class="iconDesktop" style="max-width:900px;margin:0 auto;
                max-height: 365px;">
                <img style="display: table;margin: 0 auto;" src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg"/>
                <img style=" position: relative;
                top: -13rem;
                left: -12rem;
                width: 150px;
                transform: rotate(326deg);" :src="marketBG"/>
                <img style=" position: relative;
                top: -13rem;
                left: 11rem;
                width: 184px;
                transform: rotate(30deg);" :src="marketBG"/>
                <img style="position: relative;
                top: -28.5rem;
                width: 38px;
                left: -23.6rem;
                transform: rotate(0deg);" :src="liveBG"/>
                </div>
             </div>
    </div>
            <div  :style="{background:optionsBackground}">
                <slot></slot>
            </div>
    </div>
</template>
<script>

import axios from 'axios';  
import baseURL from '../services/baseURLClient';
import moneysFormatter from 'currency-formatter';
import { eventBus } from '../main';
    export default {
        name: 'parentLayout',
        props: ['title','titleHeader','optionsClass' , 'optionsBackground'],
        data(){
            return{
                auth: false,
                currentBalance: '0',
                imgAvatar: '',
                serviceStatus: '',
                logo: require('../assets/logoBee.png'),
                marketBG: require('../assets/if_facebook_live_1083834.png'),
                liveBG: require('../assets/if_facebook_live_icon_1083837.png')
            }
        },
        created(){
            var auth = this.$session.get('auth');
            if(auth){
                this.auth = true;
                this.imgAvatar = this.$session.get('auth').avatarPartner;
                this.serviceStatus = this.$session.get('auth').serviceStatus;
                var idPartner = this.$session.get('auth')._id;
                var tokenJWT = this.$session.get('jwt');
                axios.post(`${baseURL}/api/wallets/getBalance`, {idPartner} , {
                    headers: { Authorization: `Bearer ${tokenJWT}` } 
                }).then((response)=>{
                    if(response.status == 404){
                        this.currentBalance = 'Lỗi'
                    }else{
                        this.currentBalance = response.data.balance;
                        eventBus.$emit('thisBalance', this.currentBalance);
                    }

                }).catch((e) => {
                    console.log(e);
                })

                // Bắt lại sự kiện khi thay đổi số tiền

                eventBus.$on('updateBalance', (balanceNow) => {
                    this.currentBalance = balanceNow
                })
                 eventBus.$on('newBalance', (balanceNow) => {
                    this.currentBalance = balanceNow
                })
                eventBus.$on('newServiceStatus', (serviceStatusNow) => {
                    this.serviceStatus = serviceStatusNow
                })
            }
            
        },
        methods: {
            getRedirect(){
                var roleId = this.$session.get('auth').roleIdPartner;
                if(roleId == '1'){
                    this.$router.push('/channels/@me');
                }else if(roleId == '2'){
                    this.$router.push('/admin');
                }else if(roleId == '0'){
                    this.$router.push('/welcome');
                }
            },
             moneysFormat(value){
                return moneysFormatter.format(value, {
                        symbol: 'VND',
                        thousand: '.',
                        precision: 0,
                        format: '%v %s' // %s is the symbol and %v is the money
                    });
                
            },
            logout(){
                this.$session.destroy();
                this.$router.push('/');
            },
        }
    }
</script>
