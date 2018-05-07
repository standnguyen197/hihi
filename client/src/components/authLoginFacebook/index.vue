<template>
    <div>
     <vue-headful
            title="Đăng nhập - Dịch vụ của iBee"
            description="Dịch vụ của iBee.vn - Chúng tôi luôn Cố gắng vì nụ cười và sự hài lòng của bạn!"
        />
      <center>
        <fb-signin-button
        :params="fbSignInParams"
        @success="onSignInSuccess"
        @error="onSignInError">
        Đăng nhập Facebook
    </fb-signin-button>
        </center>
    </div>
</template>

<script>
    import axios from 'axios';
    import currencyFormatter from 'currency-formatter';
    import baseURLClient from '../../services/baseURLClient';
    export default {
        name: 'authLoginFacebook',
        data(){
            return {
                fbSignInParams: {
                    scope: 'email,user_videos',
                    return_scopes: true
                }
            }
        },
        methods: {
            async onSignInSuccess(response){
                var _this = this;
                var shortLivedToken = response.authResponse.accessToken;
                _this.$session.start();
                await _this.getAccessToken(shortLivedToken);
                // Lấy thông tin đăng ký hoặc đăng nhập
                
            },
            onSignInError(error){
                console.log(error);
            },
            getAccessToken(shortLivedToken){
                var _this = this;
                FB.api(
                    '/oauth/access_token',
                    'GET',
                    {"grant_type":"fb_exchange_token","client_id":"126856184657575","client_secret":"f69f3f7d510fc2a421208e8e276e5b76","fb_exchange_token":`${shortLivedToken}`},
                    async (responseToken) => {
                        var longAccessToken = responseToken.access_token;
                        _this.$session.set('longAccessToken' , longAccessToken);
                        var accessToken = _this.$session.get('longAccessToken');
                       await _this.getAuthUser(accessToken);
                    }
                );   // Lấy longToken 60days
            },
            getAuthUser(accessToken){
                var _this = this;
                FB.api(`/me?access_token=${accessToken}` , 'GET' , {} , (res) => {
                    var idPartnerFB = res.id; // ID CTV with iBee.vn
                    var namePartner = res.name;
                    var avatarPartner = `https://graph.facebook.com/${idPartnerFB}/picture?type=large&access_token=${accessToken}`;
                    var roleIdPartner = '';
                    
                    if(idPartnerFB == '374440739664862' || idPartnerFB == '1937990823133798'){
                        roleIdPartner += 2;
                    }else{
                        roleIdPartner += 0;
                    }
                    var userData = {
                        idPartnerFB,
                        namePartner,
                        avatarPartner,
                        roleIdPartner
                    }
                    axios.post(`${baseURLClient}/api/auth` , userData)
                    .then((result) => {
                        var roleIdPartner = result.data.userData.roleIdPartner;
                        var userData = result.data.userData;
                        var wallets = result.data.balanceUsers;
                        var jwt = result.data.token;
                        _this.$session.set('jwt' , jwt);
                        _this.$session.set('auth' , userData);
                        _this.$session.set('walletId', wallets.idWallet);

                        if(roleIdPartner == 0){
                            _this.$router.push('/welcome');
                        }else if(roleIdPartner == 2){
                            _this.$router.push('/admin');
                        }else{
                            _this.$router.push('/channels/@me');
                        }
                        
                    })
                    .catch((error) => {
                        console.log(error);
                    })

                    
                });
            },
            customCss(){
                return `text-align:center;font-size:17px;color:#FFF;`
            } 
        }
    }
</script>

<style>
.fb-signin-button {
    display: inline-block;
    padding: 10px 19px;
    border-radius: 3px;
    background-color: #4267b2;
    color: #fff;
    cursor: pointer;
    margin-top: 30px;
    font-size: 19px;
}
</style>
<style>
.vue-typer .custom.char.typed {
  color: #FFF !important
}
.vue-typer .custom.caret {
  width: 1px;
  background-color: orange;
}
</style>
<style scoped>


.columns {
    float: left;
    width: 100%;
    padding: 8px;
}

.price {
    list-style-type: none;
    border: 1px solid #eee;
    margin: 0;
    padding: 0;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.price:hover {
    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2)
}

.price .header {
    background-color: #303030;
    color: white;
    font-size: 25px;
}

.price li {
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
    font-size: 14px;
}

.price .grey {
    background-color: #eee;
    font-size: 20px;
}

.button {
    background-color: rgb(255, 174, 42);
    border: none;
    color: white;
    padding: 8px 25px;
    text-align: center;
    cursor:pointer;
    text-decoration: none;
    font-size: 18px;
}

.linkLogin{
    border: 1px solid #FFF;
    padding: 5px 10px;
    border-radius: 25px;
    transition: color 0.2s ease;
}
.linkLogin:hover{
    border: 1px solid #FFF;
    padding: 5px 10px;
    border-radius: 25px;
    transition: color 0.2s ease;
}
.ivu-menu-item a{
    color: #ffffff;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease;
}
.ivu-menu-item a:hover{
    color: #fff;
    background: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease;
}
.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-horizontal .ivu-menu-submenu {
    float: left;
    padding: 0px 7px;
    position: relative;
    cursor: pointer;
    z-index: 3;
    transition: all 0.2s ease-in-out;
}
.serviceBg{
        background: #ffae2a;
}
.bannerHead{
    height: 250px;
}
.layout{
    background: #303030 url('https://sv1.uphinhnhanh.com/images/2018/04/07/5.png');
    position: relative;
    overflow: hidden;
}
.ivu-menu-horizontal {
    height: 45px;
    line-height: 45px;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 6px;
    left: 20px;
}
.ivu-avatar {
    border: 2px solid #d5d5d5;
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
}
.layout-nav{
    width: 410px;
    margin: 0 auto;
    margin-right: 10px;
}
.layout-nav-mobile{
    width: 290px;
    margin: 0 auto;
    margin-right: 10px;
}
.ivu-layout-header {
    background: #495060;
    padding: 0 0px;
    height: 44px;
    line-height: 44px;
}

.layout-footer-center{
    text-align: center;
}
</style>