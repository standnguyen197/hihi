<style scoped>
.liveComment h1{
    background: #FFF;
    text-align: center;
    border-bottom: 1px solid #EEE;
    border-left: 1px solid #EEE;
    border-right: 1px solid #EEE;
}
.liveComment .boxComment{
    min-height: 250px;
    overflow-y: scroll;
    border-bottom: 0px;
    border-left: 1px solid #d8d8d8;
    border-right: 1px solid #d8d8d8;
}

.box {
    border-radius: 5px;
    color: #4a4a4a;
    display: block;
    padding: 8px;
    margin-bottom: 5px;
}
.box img{
    width: 40px;
    border-radius: 50%;
}
.media-content{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -1 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    color: #4a4a4a;
    display: block;
    padding: 8px;
}
.media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
}
.media-left {
    margin-right: 1rem;
}
.media-left, .media-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}
.media-now {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left;
    padding: 0px 10px;
    min-height: 159px;
    max-height: 159px;
}
.media-now img{
   border: 2px solid #f1caa3;
    width: 60px;
    border-radius: 50%;
}
.media-left-now {
    margin-right: 1rem;
}
.media-left-now, .media-right-now {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
}
.media-content-now {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left;
}

.liveCodeProduct h1{
    background: #ffa500;
    text-align: center;
    color: #FFF;
    text-align: center;
    border-bottom: 1px solid #dedede;
    border-left: none;
    border-right: none;
}
.liveCodeProduct .priceH1 {
    font-size: 20px;
    text-align: left;
    padding: 4px 10px;
    background: #ffa500;
    color: #FFF;
}
.liveCodeProduct .avatarH1 {
    font-size: 20px;
    text-align: left;
    padding: 4px 10px;
    background: #ffa500;
    color: #FFF;
}
.liveCodeProduct .codeProduct {
    font-size: 80px;
    font-weight: 700;
    text-align: center;
    padding: 20px 0px;
    border-bottom: 1px solid #dedede;
    background: #FFF;
}
.liveCodeProduct .priceProduct{
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid #dedede;
    background: #FFF;
}
.liveCodeProduct .avatarProduct{
    font-weight: 700;
    text-align: center;
    padding: 0px 0px;
    border-bottom: 1px solid #dedede;
    background: #FFF;
}

.liveCodeProduct .avatarProduct img{
    width: 100%;
    height: 300px;
    margin: -4px -101px -94px -100px;
    transition: 1s;
    
}

.subBar {
    background:#1a1a1b;border-left: 1px solid rgb(101, 100, 100);
}
.subBar div{
    display: table;
    margin: 5px auto;
}
.normalButton {
    background: #333;
    color: orange;
    border: 1px solid #5e5e5f;
    transition: 0.3s;
}


.normalButton:hover {
    border-radius: 13px;
    background: #333;
    color: orange;
    border: 1px solid orange;
    transition: 0.3s;
}


</style>
<style>
.ivu-modal-content {
    position: relative;
    background-color: #fff;
    border: 0;
    border-radius: 0px;
    background-clip: padding-box;
}
.content .ivu-modal-header {
    border-bottom: 1px solid #e9eaec;
    padding: 8px 16px;
    line-height: 1;
}
.content .ivu-modal-header p, .ivu-modal-header-inner {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 31px;
    font-size: 25px;
    color: #1c2438;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ivu-modal-wrap-camera {
    position: fixed;
    overflow: auto;
    top: 0;
    background: #000000db;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    -webkit-overflow-scrolling: touch;
    outline: 0;
}
.ivu-modal-footer button + button {
    margin-left: 8px;
    margin-bottom: 0;
    border-radius: 0px;
}
.fix-model .ivu-modal-footer {
    border-top: 1px solid #e9eaec;
    padding: 0px;
    text-align: right;
}
.normalButton .ivu-avatar-string {
    left: 0px !important;
    top: 0px !important;
    position: relative !important;
    display: table !important;
    margin: 3px auto;
}
</style>
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
<div>
    <div style="display:flex">
        <div style="flex:6;height:90vh">
            <iframe :src="linkLive" style="width:100%;border:0px;height:92.4vh"/>
        </div>
        <div style="flex:8">
            <div class="liveComment">
                <h1><Icon type="radio-waves" ></Icon> LIVE BÌNH LUẬN</h1>
               
                <Scroll :height="300" class="boxComment">
                    
                        <div v-for="item in imes" class="box" v-if="isActiveComment">
                            <article class="media">
                                <div class="media-left">
                                <figure class="image is-64x64">
                                    <img :src="item.avatarFB" alt="Ảnh đại diện">
                                </figure>
                                </div>
                                <div class="media-content">
                                <div class="content">
                                    <p>
                                    <a :href="item.idFB" target="_blank"><strong style="font-size: 17px;
                                color: #365899;">{{item.nameFB}}</strong></a>
                                    <br><span style="font-size: 15px;">
                                    {{item.messageFB}}
                                    </span></p>
                                </div>
                             </div>
                            </article>
                        </div>

                        <div class="box" v-if="!isActiveComment">
                            <vue-content-loading  :height="100">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" width="90%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" width="90%" height="60" />
                            </vue-content-loading>
                        <vue-content-loading  :height="100">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" width="90%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" width="90%" height="60" />
                            </vue-content-loading>
                     </div>

                    </Scroll>
               <div style="background: #FFF;border:1px solid #dddee1;">
                    <Tabs>
                        <TabPane label="COMMENT HIỆN TẠI" icon="radio-waves">
                        
                        <article class="media-now" v-if="isActiveNowComment">
                                <figure class="media-left-now">
                                    <p class="image is-64x64">
                                    <img :src="avatarFBNow">
                                    </p>
                                </figure>
                                <div class="media-content-now">
                                    <div class="content-now">
                                    <p>
                                    <strong style="font-size: 17px;
                                        border-radius: 21px;">{{ nameFBNow }}</strong>
                                       <p  style="    font-size: 19px;
                                        background: orange;
                                        font-weight: 500;
                                        color: #000;
                                        padding: 5px;
                                        border-radius: 3px;"> {{ messageFBNow }} </p>
                                    </p>
                                    </div>
                                   
                                </div>

                            </article>
                        <article class="media-now" style="padding-left: 30px;" v-else>
                            <vue-content-loading  :height="120" style="width:100%">
                                    <circle cx="30" cy="30" r="30" />
                                    <rect x="80" y="10" rx="4" ry="4" style="width:80%" height="20" />
                                    <rect x="80" y="40" rx="3" ry="3" style="width:80%" height="80" />
                            </vue-content-loading>
                        </article>
                        
                        </TabPane>
                        
                        <TabPane label="SẢN PHẨM TIẾP" icon="cube" disabled>标签二的内容</TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
        <div style="flex:8;">
            <div class="liveCodeProduct">
                <h1><Icon type="at"></Icon> MÃ SẢN PHẨM <a href="javascript:void(0)" 
                style="background: rgb(73, 80, 96);
                padding: 0px 5px;
                border-radius: 4px;
                color: #fff;"
                @click="reloadCodeLive"><Icon type="archive"></Icon></a></h1>
                <div class="codeProduct">
                    {{ codeLiveNow }}
                </div>
            </div>
            <div class="liveCodeProduct">
                <h1 class="priceH1"> GIÁ SẢN PHẨM (Nhớ nói thêm ĐỒNG)</h1>
                <div class="priceProduct">
                <span v-if="theVoice == ''">
                    0 VND
                </span>
                <span v-else>
                    {{ moneysFormat(theVoice) }}
                </span>
                </div>
            </div>
             <div class="liveCodeProduct">
                <h1 class="avatarH1"> 
                    <CountDown v-if="turnOnCamera" ref="countdown"
                                :time="5"
                                @onProgress="countDownProgress"
                                @onFinish="countDownFinished">
                            ẢNH ĐẠI DIỆN SP (Chụp sau {{countDownSeconds}}  giây)
                    </CountDown>
                    <span v-else> ẢNH ĐẠI DIỆN SP (Chụp sau x giây) </span>
                </h1>
                <div class="avatarProduct" style="overflow: hidden;">
                    <a href="javascript:void(0)" v-if="photoCamera != null" @click="previewImage = true"><img :src="photoCamera"/></a>
                    <span v-else><Icon style="font-size: 100px;
                    margin: 52px;" type="images"></Icon></span>
                </div>
            </div>
        </div>
         <div style="flex:1" class="subBar">
         
            <div style="margin-top:10px">
                <Tooltip content="ĐƠN HÀNG CỦA BẠN" placement="left">
                 <Badge :count="badgeOrder" overflow-count="999">
                    <Button @click="modalOrder = true" type="text" style="padding:0px">
                    <Avatar class="normalButton" icon="clipboard" size="large"/>
                    </Button>
                </Badge>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="ĐƠN HÀNG DỰ BỊ" placement="left">
                    <Button @click="modalSubOrder = true" type="text" style="padding:0px">
                    <Avatar class="normalButton" icon="document-text" size="large"/>
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="MIC THU ÂM" placement="left">
                    <Button v-if="!isActiveVoice" @click="getVoice" type="text" style="padding:0px">
                     <Avatar class="normalButton" icon="ios-mic-off" size="large"/>
                    </Button>
                    <Button v-if="isActiveVoice" @click="getVoice" type="text" style="padding:0px">
                     <Avatar class="normalButton" style="background: black;
                        color: red;" icon="ios-mic" size="large"/>
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="CAMERA CHỤP ẢNH" placement="left">
                    <Button @click="getCamera" type="text" style="padding:0px">
                     <Avatar class="normalButton" icon="ios-camera" size="large"/>
                    </Button>
                </Tooltip>
            </div>
            <div>
                <Tooltip content="TÙY CHỈNH CÀI ĐẶT" placement="left">
                    <Button @click="getTime" type="text" style="padding:0px">
                     <Avatar class="normalButton" icon="ios-settings-strong" size="large"/>
                    </Button>
                </Tooltip>
            </div>
        </div>

        <!-- ============= HIỆN ÂM THANH ================= -->
        <div v-if="nowVoice" 
        style="color: rgb(255, 255, 255);
        background: rgba(60, 59, 59, 0.74);
        position: absolute;
        top: 30%;
        max-width: 300px;
        z-index: 10000;
        right: 6%;
        padding: 3px 20px;
        font-size: 18px;
        border-radius: 5px;"><Icon type="social-rss"></Icon> {{ textVoice }} </div>
        <!-- ====================== MODEL ===================== -->
        <Modal width="800"
                v-model="modalOrder" :transition-names="['none']"
                class-name="vertical-center-modal">
                <div slot="header">
                        <h1><Icon type="clipboard" class="icon-cicle"></Icon> ĐƠN HÀNG CỦA BẠN</h1>
                </div>
                <Table height="220" border :columns="columns1" :data="data1"></Table>
        </Modal>
         <Modal width="800" v-model="modalSubOrder" :transition-names="['none']" cancel-text="" ok-text="OK" >
                    <div slot="header">
                        <h1><Icon type="clipboard" class="icon-cicle"></Icon> ĐƠN DỰ BỊ CỦA BẠN</h1>
                    </div>
                    <Table height="220" border :columns="columns2" :data="data2"></Table>
            </Modal>
            <!-- =========== MODEL POPUP INFO CUSTOMER ORDER =========== -->
             <Modal class="fix-model custom-modal-order" v-show="isActivePopupOrder" v-model="popupOrder" :styles="{top: '10%', right: '6%' , position: 'absolute'}" :closable="false"  :transition-names="['none']" 
               >
               <div slot="header">
                <h2><Icon type="ios-checkmark" color="#19be6b"></Icon> KHÁCH HÀNG VỪA ĐẶT THÀNH CÔNG!</h2> 
                </div>
                <div style="padding: 0px 20px;">
                <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                            <img :src="avatarOrder" 
                            style="border-radius: 50%;
                            border: 2px solid orange;width: 100px;">
                            <p v-if="closeCustomers == 'Khách quen'"><span style="
                                background: #ff6000;
                                color: rgb(255, 255, 255);
                                border-top-right-radius: 9px;
                                border-top-left-radius: 9px;
                                padding: 7px 10px;
                                font-size: 15px;
                                position: relative;
                                top: -19px;
                                left: -6px;
                            "><Icon type="ribbon-b"></Icon> {{ closeCustomers }} </span></p>
                            <p v-else><span style="
                                background: orange;
                                color: rgb(255, 255, 255);
                                border-top-right-radius: 9px;
                                border-top-left-radius: 9px;
                                padding: 7px 10px;
                                font-size: 15px;
                                position: relative;
                                top: -19px;
                                left: -6px;
                            "> {{ closeCustomers }} <Icon type="android-hand"></Icon> </span></p>
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                            <p>
                                <a :href="'https://facebook.com/'+linkOrder" target="_blank" style="color:#ffae2a;font-size: 28px;"> <strong >{{ nameOrder }} <Icon type="ios-checkmark"></Icon></strong></a>
                                <br>
 
                                <p style="font-size:25px"><b> MÃ SẢN PHẨM :  {{ codeProductOrder }} </b></p>
                            </p>
                            </div>
                           
                        </div>
                      
                        </article>
                </div>
                <div slot="footer">
                </div>
            </Modal>
        <!-- =================== CAMERA ===================== -->
        <Modal width="800"  :mask-closable="false"
            v-model="modalCamera" :transition-names="['none']" class-name="ivu-modal-wrap-camera vertical-center-modal"
            title="ẢNH ĐẠI DIỆN SẢN PHẨM"
         >
         <div style="display:flex">
                <div style="background:#333;flex:1;height: 300px;text-align: center;">
                    <vue-webcam ref='webcam' v-if="isActiveCamera " :width="400" :height="300"></vue-webcam>
                </div>
                <div style="flex:1;height: 300px;">
                <center>
                    <h1>THỜI GIAN CÒN LẠI ĐỂ CHỤP</h1>
                    <br/>
                     <Circle :size="210" :percent="100" stroke-color="orange">
                        <span style="font-size: 41px;
                            font-weight: 600;
                            font-family: sans-serif;">
                             <CountDown v-if="countDownTakeCamera" ref="countdownTakeCameraHi"
                                :time="5"
                                @onProgress="countDownTakeCameraProgress"
                                @onFinish="countDownTakeCameraFinished">
                                {{countDownTakeCameraSeconds}} 
                         </CountDown>
                           </span>
                    </Circle>
                </center>
                </div>
         </div>
         <div slot="footer">
            
        </div>
        </Modal>
        <!-- =================== CAMERA ===================== -->
        <Modal
                v-model="previewImage" :transition-names="['none']"
                class-name="ivu-modal-wrap-camera vertical-center-modal">
                <p slot="header">ẢNH XEM TRƯỚC</p>
                <img style=" width: 100%;" :src="photoCamera"/>
        </Modal>

        <!-- ==================== CHECK LIVE ====================== -->

       <Modal v-model="modalCheckTimeLive"  class-name="ivu-modal-wrap-camera vertical-center-modal" :closable="false" :mask-closable="false" :transition-names="['none']"  @on-ok="continueLive"
                @on-cancel="cancelLive" >
                    <div style="padding: 20px">
                    <h1 style="font-size: 18px;text-align:center">BẠN CÓ MUỐN TIẾP TỤC BẢN <span style="color:#ed3f14">LIVE</span> VỪA RỒI?</h1>
                 
                    <p style="font-size: 13px;margin-top:10px;text-align:center">(Chọn "Đồng ý" để tiếp tục bản LIVE. Chọn "Hủy bỏ" để dùng bản LIVE mới. )</p>
                    </div>
        </Modal>

    </div>
</div>

</div>
</template>
<script>
import { VclFacebook, VclInstagram } from 'vue-content-loading';
import VueContentLoading from 'vue-content-loading';
import VueWebcam from 'vue-webcam'; 
import moneysFormatter from 'currency-formatter'; 
import CountDown from 'vuejs-count-down';
export default {
    name: 'liveCSTemplate',
    data(){
        return {
            codeLive: '',
            linkLive: '',
            isActiveNowComment: false,
            isActiveComment: false,
            imes: [],
            
            modalOrder: false,
            modalSubOrder: false,
            modalCamera:false,
            previewImage:false,

            avatarFBNow:'',
            nameFBNow:'',
            messageFBNow:'',

            theVoice: '',
            nowVoice: null,
            textVoice: '',
            isActiveVoice: false,

            photoCamera: null,
            isActiveCamera:false,
            countDownTakeCameraSeconds:'',
            isActiveCountTime:false,
            countDownSeconds:'',
            turnOnCamera: false,
            countDownTakeCamera: false,

            socketConnected:false,
            codeLiveNow: 0,

            badgeOrder: 0,
            popupOrder: false,
            isActivePopupOrder: false,
            avatarOrder: '',
            linkOrder: '',
            nameOrder: '',
            codeProductOrder: '',
            closeCustomers: '',
            modalCheckTimeLive: false,
            columns1: [
                    {
                        title: 'Ảnh',
                        key: 'avatarFB',
                        width: 70 ,
                         render: (h, params) => {
                            return h('img', {
                                attrs: {
                                    src : params.row.avatarFB
                                    },
                                    style: {
                                    borderRadius: '50%',
                                    display:'inline-block',
                                    width: '30px',
                                    marginLeft: '-4px'
                                },
                               
                            });
                        }
                    },
                    {
                        title: 'Tên khách hàng',
                        key: 'nameFB',
                        render: (h, params) => {
                            return h('a', {
                                attrs: {
                                    href : `https://facebook.com/${params.row.idFB}`,
                                    target : `_blank`,
                                    },
                                    style: {
                                   color: 'rgb(54, 88, 153)',
                                   fontSize: '15px'
                                },
                               
                            }, params.row.nameFB);
                        }
                    },
                    {
                        title: 'Mã sản phẩm',
                        key: 'codeProduct',
                        render: (h, params) => {
                            return h('b', {
                                
                                  style: {
                                   fontSize: '15px'
                                },
                               
                            }, params.row.codeProduct);
                        }
                    },
                    {
                        title: 'Mã đơn hàng',
                        key: '_id',
                        render: (h, params) => {
                            return h('b', {
                                
                                  style: {
                                   fontSize: '15px'
                                },
                               
                            }, params.row._id);
                        }
                    }
                ],
            data1: [],
            columns2: [
                    {
                        title: 'Ảnh',
                        key: 'avatarFB',
                        width: 70 ,
                         render: (h, params) => {
                            return h('img', {
                                attrs: {
                                    src : params.row.avatarFB
                                    },
                                    style: {
                                    borderRadius: '50%',
                                    display:'inline-block',
                                    width: '30px',
                                    marginLeft: '-4px'
                                },
                               
                            });
                        }
                    },
                    {
                        title: 'Tên khách hàng',
                        key: 'nameFB',
                        render: (h, params) => {
                            return h('a', {
                                attrs: {
                                    href : `https://facebook.com/${params.row.idFB}`,
                                    target : `_blank`,
                                    },
                                    style: {
                                   color: 'rgb(54, 88, 153)',
                                   fontSize: '15px'
                                },
                               
                            }, params.row.nameFB);
                        }
                    },
                    {
                        title: 'Dự bị cho mã',
                        key: 'codeProduct',
                        render: (h, params) => {
                            return h('b', {
                                
                                  style: {
                                   fontSize: '15px'
                                },
                               
                            }, params.row.codeProduct);
                        }
                    },
                    {
                        title: 'Mã đơn hàng dự bị',
                        key: '_id',
                        render: (h, params) => {
                            return h('b', {
                                
                                  style: {
                                   fontSize: '15px'
                                },
                               
                            }, params.row._id);
                        }
                    }
                ],
            data2: []
        }
    },
    components: {
            VueContentLoading,
            VclFacebook,
            VueWebcam,
            CountDown
        },
    sockets:{
        connect(){
            this.socketConnected = true;
            console.log('Client Connected!');
        },
        disconnect() {
            console.log('Dis Connected!');
        },
        codeLiveFromServer(value){
            console.log(value);
            this.codeLiveNow = value;
        },
        newCodeLiveFromServer(value){
            console.log(value);
            this.codeLiveNow = value;
            this.photoCamera = null;
            this.turnOnCamera = false;
            this.theVoice = '';
        },
        totalNumberOrdersFromServer(value){
            this.badgeOrder = value;
        },
        getListOrderFromServer(value){
            this.data1 = value
        },
        getSubListOrderFromServer(value){
            this.data2 = value
        },
        infoOrderFromServer(value){
                this.popupOrder = true;
                this.isActivePopupOrder = true;
                this.avatarOrder = value.avatarFB;
                this.linkOrder = value.idFB;
                this.nameOrder = value.nameFB;
                this.codeProductOrder = value.codeProduct;
                this.closeCustomers = value.closeCustomers;
               
        },
        
    },
    created(){
        var _this = this;
        this.linkLive = this.$session.get('linkVideoLive');
    },
    watch: {
        modalOrder: function(value){
             if(value == true){
                var idPartner = this.$session.get('auth')._id;
                this.$socket.emit('getListOrderFromClient',idPartner);
            } 
        },
        modalSubOrder: function(value){
           if(value == true){
                var idPartner = this.$session.get('auth')._id;
                this.$socket.emit('getSubListOrderFromClient',idPartner);
            }  
        },
        popupOrder: function(value) {
                if(value == true){
                    this.closeOrder();
                }  

            },
    },
    methods: {
        getLive(){
                    var _this = this;
                    var idPartner = this.$session.get('auth')._id;
                    var tokenJWT = this.$session.get('jwt');
                    var accountLive = this.$route.params.accountLive;
                    var idVideoLive = this.$route.params.idVideoLive;
                  
                    var accessTokenUser = this.$session.get('longAccessToken');

                    if(accountLive == 'f'){
                        axios.post(`${baseURL}/api/lives/getInfoLive`, {idPartner:idPartner}, {
                            headers: { Authorization: `Bearer ${tokenJWT}` } 
                        }).then((response) => {
                            var accessToken = response.data.accessTokenPage;
                        }).catch((e) => {
                            console.log(e);
                        })
                        
                    }else{
                        var accessToken = accessTokenUser;
                    }

                //============================= GET COMMENT SSE TỪ FB ===============================//
                var LiveComments = new EventSource(`https://streaming-graph.facebook.com/${idVideoLive}/live_comments?access_token=${accessToken}&comment_rate=one_hundred_per_second&fields=from{name,id},message`);
                
                //============================= NHẬN DATA LIVE ===============================//
               
                LiveComments.addEventListener('open', function(event) {
                    

                    console.log('Connected SSE');

                    //============================= NHẬN DATA BÌNH LUẬN ===============================//
                        LiveComments.addEventListener('message', function(event) {

                        var data = JSON.parse(event.data); // NHẬN DATA
                        var messageFB = data.message; // GÁN TIN NHẮN
                        var nameFB = data.from.name; // GÁN TÊN
                        var idFB = `https://facebook.com/${data.from.id}`; // GÁN ID
                        var idFBSys = data.from.id; // GÁN ID
                        var avatarFB = `https://graph.facebook.com/${data.from.id}/picture?type=large`;// GÁN ID LẤY ẢNH

                        // GỬI BÌNH LUẬN HIỂN THỊ CLIENT //
                        _this.imes.push({messageFB,nameFB,avatarFB,idFB,idFBSys});

                        // Lấy Comment Hiện tại
                        var totalComment = _this.imes;
                        var nowComment = totalComment[totalComment.length - 1];

                        if(nowComment){
                            _this.isActiveComment = true;
                            _this.isActiveNowComment = true;
                            _this.avatarFBNow = nowComment.avatarFB;
                            _this.nameFBNow = nowComment.nameFB;
                            _this.messageFBNow = nowComment.messageFB;
                        }
                        // THÔNG TIN SẢN PHẨM
                        var codeProduct = _this.codeLiveNow;
                        var priceProduct = _this.theVoice;
                        var avatarProduct = _this.photoCamera;
                        // Gửi comment về xử lý
                        _this.$socket.emit('nowCommentFromClient', {messageFB,nameFB,avatarFB,idFBSys,idPartner,codeProduct,priceProduct,avatarProduct})
                    });
                   
                });
                
                LiveComments.onerror = function() {
                    console.log("EventSource 404.");
                    _this.$router.push('/channels/@me');
                        
                };  
              //============================= KIỂM TRA KẾT NỐI OPENLIVE ===============================//
        },
       async getVoice(){
            
            var _this = this;
            var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            var recognition = new SpeechRecognition();
            var noteContent = ''; // nhận giọng nói!
            recognition.lang = 'vi';
            recognition.continuous = true;
            recognition.interimResults = true;

          await  recognition.addEventListener('start' , hi => {
                this.isActiveVoice = true;
                console.log('Bật âm thanh!');
            });
          recognition.addEventListener('result', e => {
                    _this.nowVoice = true;
                    var textVoiceNow = "";
                    for (var i = 0; i < e.results.length; ++i) {
                        if (!e.results[i].final) {
                                textVoiceNow = e.results[i][0].transcript;
                            }else{
                                textVoiceNow = e.results[i][0].transcript;
                            }
                        }
                    _this.textVoice = textVoiceNow;
                    var regExpVoice = /\d+₫/g.exec(textVoiceNow);
                    if(regExpVoice !== null){
                        var perfectVoice = regExpVoice[0].split('₫')[0];
                        _this.theVoice = perfectVoice;
                        _this.turnOnCamera = true;
                    }
                 
                });
            recognition.addEventListener('soundend' , hi =>{
                console.log('Tắt âm thanh!');
                this.nowVoice = false;
            })
            
            recognition.addEventListener('end' , recognition.start);
            recognition.start(); 
        },
        // ==================== XỬ LÝ THƯỜI GIAN CHỤP ẢNH =============== //

        countDownProgress(time) {
            this.countDownSeconds = time
        },
        countDownFinished() {
            var _this = this;
            _this.modalCamera = true;
            _this.getCamera();
            
        },

        getCamera(){
            var _this = this;
            _this.modalCamera = true;
            _this.isActiveCamera = true;
            _this.countDownTakeCamera = true;
            _this.$refs.countdownTakeCameraHi.$emit('restart');
            
        },

        countDownTakeCameraProgress(time){
            this.countDownTakeCameraSeconds = time;
        },

        countDownTakeCameraFinished() {
            var _this = this;
            _this.modalCamera = false;
            _this.getPictureCamera();
        },

        getPictureCamera(){
            var _this = this;
            _this.photoCamera = _this.$refs.webcam.getPhoto();
        },
        reloadCodeLive(){
            this.$socket.emit('reloadCodeLive');
        },
        // ================== THÀNH PHẦN PHỤ ===================//
        closeOrder(){
                    setTimeout(() => {
                        this.isActivePopupOrder = false;
                        this.popupOrder = false;
                    }, 4000);
                
            },
        getTime(){
            console.log(Date.now());
        },
        continueLive(){
                this.modalCheckTimeLive = false;
            },
        cancelLive(){
                this.$socket.emit('clearStartTimeLiveFromClient');
                this.$session.remove('startTimeLive');
                this.$router.push('/channels/@me');
        },
        moneysFormat(value){
            return moneysFormatter.format(value, {
                    symbol: 'VND',
                    thousand: '.',
                    precision: 0,
                    format: '%v %s' 
            });
        },
        scrollToEnd() {    	
            var container = document.querySelector(".ivu-scroll-container");
            var scrollHeight = container.scrollHeight;
            container.scrollTop = scrollHeight;
        },
    },
    updated(){ 
        this.scrollToEnd();
    },
    mounted(){
        var _this = this;
        var startTimeLive = _this.$session.get('startTimeLive');

        setTimeout(function(){ 
                if(_this.socketConnected == false){
                    location.reload();
                    
                }else{
        
                    var idPartner = _this.$session.get('auth')._id;
                    var codeLive = 'random';
                    _this.$socket.emit('formatCodeLive', {codeLive,idPartner});
                    if(startTimeLive == undefined){
                        _this.$session.set('startTimeLive', Date.now());
                        _this.$socket.emit('startTimeFromClient');
                    }else{
                        _this.modalCheckTimeLive = true;
                        _this.$socket.emit('getNumberOrdersFromClient', idPartner);

                    }
                }
            },1500);
        this.getLive();
        this.scrollToEnd();
        
    },
}
</script>
