<style scoped>
    .appmain{
        width: 100%;
        display: flex
    }
    .appmain ::-webkit-scrollbar {
     width: 0px;
    }
    /* Track */
    .appmain ::-webkit-scrollbar-track {
        background: rgb(26, 26, 27);
    }
    /* Handle */
    .appmain ::-webkit-scrollbar-thumb {
        background: rgb(26, 26, 27);
    }
    /* Handle on hover */
    .appmain ::-webkit-scrollbar-thumb:hover {
        background: orange;
    }
    .appmain .sidebarLeft {
        background: #1a1a1b;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100vh;
        overflow: scroll;

    }
    .appmain .sidebarLeft div {
        display: table;
        margin: 5px auto;

    }

    .appmain .sidebarRight {
        -webkit-flex: 22;
        -ms-flex: 22;
        flex: 22;
    }

    .appmain .sidebarRight .navbar {
        background: white;
        border-bottom: 1px solid #e6e4e4;
        padding: 5px 20px;
        display: flex;
    }

    .appmain .sidebarRight .navbar .navbarLeft {
            -ms-flex: 4;
            -webkit-box-flex: 4;
            flex: 4;
    }

    .appmain .sidebarRight .navbar .navbarRight{
            -ms-flex: 1;
            -webkit-box-flex: 1;
            flex: 1;
    }
    .appmain .sidebarRight .navbar .navbarLeft div {
        align-items: flex-start;
        text-align: left;
        font-size: 21px;
    }
    .whileNavbar{
         background: #EEE !important;
    }
    .whileNavbar .navbar {
        background: #FFF !important;
        border-bottom: 1px solid #CCC !important;
    }
    .whileNavbar .navbar .navbarLeft a {
        color: #222;
    }
     .whileNavbar .navbar .navbarRight a {
        color: #222;
    }
    
    .blackNavbar {
        background: #333 !important;
    }
    .blackNavbar .navbar {
        background: #272626 !important;
        border-bottom: 1px solid #504e4e !important;
    }
    .blackNavbar .navbar .ivu-dropdown .ivu-select-dropdown {
            background: rgb(51, 51, 51) !important;
    }
    .blackNavbar .navbar .navbarLeft a {
        color: #EEE;
    }
     .blackNavbar .navbar .navbarRight a {
        color: #EEE;
    }
    .blackNavbar .content {
        color: #FFF;
    }
    
    
    .appmain .sidebarRight .navbar .navbarRight ul {
            list-style: none;
    }

    .liveButton {
        background: #333;
        color: orange;
        border: 1px solid orange;
        font-size:20px;
        transition: 0.3s
    }
     .liveButton:hover {
        background: orange;
        color: #FFF;
        border: 1px solid #FFF;
        font-size:20px;
        transition: 0.3s;
    }
    .normalButton {
        background: #333;
        color: orange;
        border: 1px solid #5e5e5f;
        transition: 0.3s
    }

   
    .normalButton:hover {
        border-radius: 13px;
        background: #333;
        color: orange;
        border: 1px solid orange;
        transition: 0.3s
    }
    .ivu-tooltip-popper {
        -webkit-transition: 0s; /* For Safari 3.1 to 6.0 */
        transition: 0s;
        transition-delay: 0;
        transition-duration: 0;
    }
    .ivu-switch-large {
        width: 60px;
        margin-top: 4px;
    }
</style>
<style>
   
    .appmain .sidebarLeft sup {
        position: absolute;
        transform: translateX(-50%);
        transform-origin: 0 center;
        top: 1px !important;
        right: -2px !important;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        z-index: 10;
        box-shadow: 0 0 0 1px #fff;
    }
    .activeStatus sup {
        background: #19be6b !important;
    },
    .redStatus sup {
        background: #ed3f14 !important;
    }
    .normalButton .ivu-avatar-string {
        left: 0px !important;
        top: 0px !important;
        position: relative !important;
        display: table !important;
        margin: 3px auto;
    }
    .ivu-notice-notice {
        line-height: 20px !important;
    }
    .blackNavbar .content .submainLeft {
        background: #444 !important;
        border-right: 1px solid #555;
    }

    .blackNavbar .content .submainLeft ul li {
        border-bottom: 1px solid #555;
    }
    .blackNavbar .content .submainRight .mainRight {
        background: #555 !important;
    }
    .blackNavbar .content .liveComment h1{
        background: #272626;
        text-align: center;
        border-bottom: 1px solid #656464;
        border-left: 1px solid #656464;
        border-right: 1px solid #656464;
    }
    .blackNavbar .content .liveCodeProduct h1{
        background: #ffa500;
        text-align: center;
        border-bottom: 1px solid #656464;
        border-left: none;
        border-right: none;
    }
    .blackNavbar .content .liveComment .boxComment{
        min-height: 250px;
        overflow-y: scroll;
        border-bottom: 0px;
        border-left: 1px solid #656464;
        border-right: 1px solid #656464;
    }
    .blackNavbar .content .liveCodeProduct .codeProduct {
        font-size: 80px;
        font-weight: 700;
        text-align: center;
        color: #FFF;
        padding: 20px 0px;
        border-bottom: 1px solid #616060;
        background: #272626;
    }
    .blackNavbar .content .liveCodeProduct .priceH1 {
        font-size: 20px;
        text-align: left;
        padding: 4px 10px;
        background: #ffa500;
        color: #FFF;
    }
    .blackNavbar .content .liveCodeProduct .avatarH1 {
        font-size: 20px;
        text-align: left;
        padding: 4px 10px;
        background: #ffa500;
        color: #FFF;
    }
    .blackNavbar .content .liveCodeProduct .priceProduct {
        border-bottom: 1px solid #616060;
        background: #272626;
    }
    .blackNavbar .content .liveCodeProduct .avatarProduct {
        border-bottom: 1px solid #616060;
        background: #272626;
    }
    .submainLeft ul {
        list-style: none;
        min-height: 90vh;
    }
    .content .ivu-badge-count {
        position: absolute;
        transform: translateX(50%);
        top: -6px;
        left: auto !important;
        right: 42px;
        height: 20px;
        border-radius: 10px;
        min-width: 20px;
        background: #ed3f14;
        border: 1px solid transparent;
        color: #fff;
        line-height: 18px;
        text-align: center;
        padding: 0 6px;
        font-size: 12px;
        white-space: nowrap;
        transform-origin: -10% center;
        z-index: 10;
        box-shadow: 0 0 0 1px #fff;
    }
</style>
<template>
    <div>
    <vue-headful
            :title="title+' - iBee.vn'"
        />
        <div class="appmain">
        <div class="sidebarLeft">
               <div>
               <router-link to="/channels/@me">
                    <Avatar :src="imgLogo" size="large" />
                </router-link>
               </div>
            
               <div>
               <a href="javascript:void(0)" @click="getLive">
                    <Tooltip :delay="1" placement="right">
                        <div slot="content">
                            BẮT ĐẦU LIVE
                        </div>
                    <Badge dot :class="statusLive">
                        <Avatar class="liveButton" icon="radio-waves" size="large" />
                    </Badge>
                    </Tooltip>
                </a>
               </div>
               <div>
                    <Tooltip  placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ KHO HÀNG</p>
                    </div>
                    <router-link to="/channels/manageProducts">
                    <Avatar class="normalButton" size="large"><Icon type="cube" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ ĐƠN HÀNG</p>
                    </div>
                    <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="ios-list" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip style="transition: 0s !important;" placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ CHUYỂN HÀNG</p>
                    </div>
                   <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="model-s" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ KHÁCH HÀNG</p>
                    </div>
                    <router-link to="/channels/manageCustomers">
                        <Avatar class="normalButton" size="large"><Icon type="android-contacts" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ THỐNG KÊ</p>
                    </div>
                    <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="ios-pulse-strong" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ TÀI KHOẢN</p>
                    </div>
                    <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="android-contact" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ CÀI ĐẶT</p>
                    </div>
                    <router-link to="/channels/settings">
                        <Avatar class="normalButton" size="large"><Icon type="ios-cog" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>QUẢN LÝ TIỆN ÍCH</p>
                    </div>
                    <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="card" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
              
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>PHẢN HỒI CHÚNG TÔI</p>
                    </div>
                    <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="chatbubbles" style="font-size:21px"></Icon></Avatar>
                    </router-link>
                    </Tooltip>
               </div>
               <div>
                    <Tooltip placement="right">
                    <div slot="content">
                        <p>LIVE SUPPORT</p>
                    </div>
                    <router-link to="/channels/quan-ly-kho-hang">
                        <Avatar class="normalButton" size="large"><Icon type="android-hangout" style="font-size:21px"></Icon> </Avatar>
                    </router-link>
                    </Tooltip>
               </div>
        </div>
        
        <div class="sidebarRight" :class="layoutTheme">
           <Row>
                <Col>
                    <nav class="navbar">
                        <div class="navbarLeft">
                                <div> 
                                            <Dropdown placement="bottom-start" trigger="click" style="margin-left: 20px;">
                                                <a href="javascript:void(0)">
                                                <Icon type="ios-bell"></Icon>
                                                </a>
                                                <DropdownMenu slot="list">
                                                   <small>常用于各种自定义下拉</small>
                                                    <div style="text-align: right;margin:10px;">
                                                        <Button type="primary" >关闭</Button>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                             <Dropdown placement="bottom-start" trigger="click" style="margin-left: 20px;">
                                                <a href="javascript:void(0)">
                                                <Icon type="ios-clock"></Icon>
                                                </a>
                                                <DropdownMenu slot="list">
                                                   <small>常用于各种自定义下拉</small>
                                                    <div style="text-align: right;margin:10px;">
                                                        <Button type="primary" >关闭</Button>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                             <Dropdown placement="bottom-start" trigger="click" style="margin-left: 20px;">
                                                <a href="javascript:void(0)">
                                                <Icon type="android-star"></Icon>
                                                </a>
                                                <DropdownMenu slot="list">
                                                   <small>常用于各种自定义下拉</small>
                                                    <div style="text-align: right;margin:10px;">
                                                        <Button type="primary" >关闭</Button>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                           
                                </div>
                        </div>
                        <div class="navbarRight">
                               <ul>
                                    <li style="display: flex;
                                        -webkit-flex-flow: row wrap;
                                        justify-content: flex-end;">
                                       <Switch size="large" v-model="chooseTheme">
                                            <span slot="open"><Icon style="font-size: 26px !important" size="26px" type="ios-partlysunny"></Icon></span>
                                            <span slot="close"><Icon style="font-size: 26px !important" size="26px" type="ios-cloudy-night"></Icon></span>
                                        </Switch>
                                        <Dropdown trigger="click" placement="bottom-end" style="margin-left: 20px;margin-top: 5px;">
                                        <a href="javascript:void(0)" >
                                            Tài khoản
                                            <Icon type="ios-arrow-down"></Icon>
                                        </a>
                                        <DropdownMenu slot="list">
                                            <DropdownItem style="background: #333;color: orange;">
                                            <Icon type="ionic"></Icon> TRUY CẬP ỨNG DỤNG </DropdownItem></a>
                                            <DropdownItem style="background: orange url('https://sv1.uphinhnhanh.com/images/2018/04/07/5.png');color: #FFF;">
                                            <Icon type="arrow-right-b"></Icon> VÍ TIỀN : {{ moneysFormat(currentBalance) }} </DropdownItem></a>
                                            <DropdownItem><Icon type="arrow-right-b"></Icon> Trang cá nhân</DropdownItem>
                                            <router-link to="/nap-tien"><DropdownItem><Icon type="arrow-right-b"></Icon> Nạp tài khoản</DropdownItem></router-link>
                                            <a href="javascript:void(0)" @click="logout" ><DropdownItem><Icon type="arrow-right-b"></Icon> Đăng xuất </DropdownItem></a>
                                                    </DropdownMenu>
                                            </Dropdown>
                                    </li>
                               </ul>
                        </div>
                    </nav>
                </Col>
                <Col>
                    <div class="content">
                        <slot></slot>
                    </div>
                </Col>
           </Row>
        </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';  
import baseURL from '../../../services/baseURLClient';
import moneysFormatter from 'currency-formatter';
    export default {
        name: 'parenLayoutTemplate',
        props: ['title'],
        data(){
            return {
               loading: false,
               imgLogo:'',
               chooseTheme: true,
               layoutTheme: 'whileNavbar',
               currentBalance: '0',
               statusLive: '',
               Lives: false
            }
        },
        watch: {
            chooseTheme(status){
                if(status == undefined || status == true){
                    this.chooseTheme = true;
                    this.layoutTheme = 'whileNavbar'
                }else{
                    this.chooseTheme = false;
                    this.layoutTheme = 'blackNavbar'
                }
                this.$session.set('chooseTheme' , this.chooseTheme);
                this.$session.set('layoutTheme' , this.layoutTheme);
            }
        },
        created(){
            var auth = this.$session.get('auth');
            var _this = this;
            if(auth){
                // ================================== //
                _this.chooseTheme = this.$session.get('chooseTheme');
                _this.layoutTheme = this.$session.get('layoutTheme');
                // ================================== //
                this.imgLogo = auth.avatarPartner;
                var idPartner = this.$session.get('auth')._id;
                var tokenJWT = this.$session.get('jwt');
                axios.post(`${baseURL}/api/wallets/getBalance`, {idPartner} , {
                    headers: { Authorization: `Bearer ${tokenJWT}` } 
                }).then((response)=>{
                    if(response.status == 404){
                        this.currentBalance = 'Lỗi'
                    }else{
                        this.currentBalance = response.data.balance;
                    }

                }).catch((e) => {
                    console.log(e);
                })

                axios.post(`${baseURL}/api/lives/getLiveSetting`, {idPartner} , {
                    headers: { Authorization: `Bearer ${tokenJWT}` } 
                    }).then((response)=>{
                           if(response.data !== 0){
                               _this.Lives = true;
                              _this.statusLive = 'activeStatus'
                           }else{
                              _this.statusLive = 'redStatus'
                              _this.Lives = false;
                           }
                    }).catch((e) => {
                         console.log(e);
                    })

            }
        }, 
        methods: {
            async getLive(){
                var idPartner = this.$session.get('auth')._id;
                var tokenJWT = this.$session.get('jwt');
                var statusLive = this.Lives;
                if(statusLive == true){
                   await this.getLiveStream();
                }else{
                    this.$Notice.warning({
                        title: 'THÔNG BÁO',
                        desc: '',
                        render: h => {
                            return h('p', [
                                'Bạn chưa thể dùng chức năng này!',
                                h('p', ['Để sử dụng hãy vào ', h('b' , 'QUẢN LÝ CÀI ĐẶT -> CÀI ĐẶT LIVE' )])
                            ])
                        }
                    });
                }
            },
            getLiveStream(){
                var _this = this;
                var idPartner = this.$session.get('auth')._id;
                var tokenJWT = this.$session.get('jwt');
                axios.post(`${baseURL}/api/lives/getInfoLive`,{idPartner:idPartner} , {
                    headers: { Authorization: `Bearer ${tokenJWT}` } 
                }).then((response) => {

                    var accountLive = response.data.accountLive;
                    var idFanpage = response.data.idFanpageLive;
                    var accessTokenPage = response.data.accessTokenPage;
                    var codeLive = response.data.codeLive;

                    if(accountLive == 'profile'){
                        var idAccess = 'me'
                        var accessToken = this.$session.get('longAccessToken');
                    }else{
                        var idAccess = idFanpage;
                        var accessToken = accessTokenPage;
                    }
                    if(codeLive == 'random'){
                            var urlTypeCodeLive = 'random';
                        }else{
                            var urlTypeCodeLive = 'product';
                    }
                    // ================== GET LIVE FROM FACEBOOK ================= //
                    FB.api( `/${idAccess}/live_videos?access_token=${accessToken}`, 'GET', {},
                     (response) => {
                        var items = response.data;
                        if(items == undefined){
                            this.$Notice.warning({
                                title: 'THÔNG BÁO',
                                desc: '',
                                render: h => {
                                    return h('p', [
                                        'Bạn chưa thể dùng chức năng này!',
                                        h('p', 'Do FACEBOOK đang chỉnh sửa 1 số chức năng nên tạm thời Fanpage sẽ không xử dụng được!')
                                    ])
                                }
                            });
                        }else{

                             if(items.length == 0){
                                    var newItems = [];
                                }else{
                                    var newItems = response.data;
                                }

                                // Tìm những giá trị đang là VIDEO LIVE
                                var itemsVideo = newItems.filter((item) => {
                                        return item.status === "LIVE";
                                    });
                                var itemsVideoClient = itemsVideo;

                                if(itemsVideoClient.length >= 1){
                                // Tách lấy giá trị embedHTML
                                const htmlLiveVideo = itemsVideoClient[0].embed_html;
                                const getLiveVideo = htmlLiveVideo.split('src="')[1].split('&width=')[0];
                                const getLinkVideo = getLiveVideo+"&width=360";
                                
                                _this.$session.set('linkVideoLive' , getLinkVideo);
                                var idVideoLiveFB = itemsVideoClient[0].id;

                                    if(accountLive == 'fanpage'){
                                        _this.$router.push(`/Live/${urlTypeCodeLive}-f/${idVideoLiveFB}/`);
                                    }else{
                                        _this.$router.push(`/Live/${urlTypeCodeLive}-p/${idVideoLiveFB}/`);
                                    }
                                }else{

                                     this.$Notice.warning({
                                                    title: 'THÔNG BÁO',
                                                    desc: 'Xin lỗi không tìm thấy được video LIVE của bạn!',
                                    });
                                    
                                }
                        }
                     });

                     // =============== END GET LIVE FROM FACEBOOK ============== //

                }).catch((e) => {
                    console.log(e);
                });
        
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
            }
        }

    }
</script>