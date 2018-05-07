<template>
    <div class="layout">
    <Spin size="large" fix v-if="showLoading"></Spin>
        <Layout style="height:100vh">
            <Sider  :width="300" style="overflow-y: scroll;" ref="side1" hide-trigger collapsible :collapsed-width="84" v-model="isCollapsed">
                <Menu active-name="1" theme="dark" width="auto" :open-names="['1','2','3']" :class="menuitemClasses">
                <MenuItem name="0" :style="{background: '#000', color: '#FFF'}">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{cursor:'pointer',marginLeft:'-3px',borderRight: '0px'}" style="font-size:30px !important;" color="orange"  type="nuclear" size="24"></Icon>
                      <span :class="sidebarCss">
                      <Col span="11" style="font-size: 20px;
                        font-weight: 660;font-family: 'Denk One', sans-serif;"><router-link :to="{ path: '/admin' }">IBEE.VN </router-link></Col>
                     
                    </span>
                    </MenuItem>
                    <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-pulse-strong"></Icon>
                                <span :class="sidebarCss"> Thống kê truy cập (Realtime) </span>
                            </template>
                            <MenuItem name="1-1" style="background: #000">
                            <span>
                                <trend
                                    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                                    :gradient="['#FFF']"
                                    :auto-draw="true"
                                    smooth>
                                </trend>
                            </span>
                            </MenuItem>
                        </Submenu>
                     <Submenu name="2">
                            <template slot="title">
                                <Icon type="ionic"></Icon>
                                <span :class="sidebarCss"> CÔNG CỤ QUẢN LÝ </span>
                            </template>
                            <MenuItem name="2-1">
                            <router-link :to="{ path: '/admin/manageUser' }">
                            <span>
                               <Icon type="android-arrow-dropright"></Icon> Quản lý nhân viên 
                            </span>
                            </router-link>
                            </MenuItem>
                             <MenuItem name="2-2" >
                             <router-link :to="{ path: '/admin/managePackageService' }">
                            <span>
                               <Icon type="android-arrow-dropright"></Icon> Quản lý dịch vụ 
                            </span>
                            </router-link>
                            </MenuItem>
                             <MenuItem name="2-3">
                            <span>
                               <Icon type="android-arrow-dropright"></Icon> Quản lý sản phẩm
                            </span>
                            </MenuItem>
                             <MenuItem name="2-4" >
                            <span>
                              <Icon type="android-arrow-dropright"></Icon> Quản lý thông tin
                            </span>
                            </MenuItem>
                        </Submenu>
                    <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-pie-outline"></Icon>
                                <span :class="sidebarCss"> TỔNG THỐNG KÊ </span>
                            </template>
                             <MenuItem name="3-0">
                            <span>
                               <Icon type="android-arrow-dropright"></Icon> Thống kê khách hàng
                            </span>
                            </MenuItem>
                            <MenuItem name="3-1">
                            <span>
                               <Icon type="android-arrow-dropright"></Icon> Thống kê dịch vụ
                            </span>
                            </MenuItem>
                             <MenuItem name="3-2" >
                            <span>
                               <Icon type="android-arrow-dropright"></Icon> Thống kê đơn hàng
                            </span>
                            </MenuItem>
                             <MenuItem name="3-3" >
                            <span>
                              <Icon type="android-arrow-dropright"></Icon> Thống kê truy cập
                            </span>
                            </MenuItem>
                             <MenuItem name="3-4" >
                            <span>
                              <Icon type="android-arrow-dropright"></Icon> Thống kê doanh thu
                            </span>
                            </MenuItem>
                             <MenuItem name="3-5" >
                            <span>
                              <Icon type="android-arrow-dropright"></Icon> Thống kê feedback
                            </span>
                            </MenuItem>
                        </Submenu>
                </Menu>
            </Sider>
            <Layout style="border-left: 9px solid rgb(26, 26, 27);">
                <Header class="layout-header-bar" >
                <Row style="border-bottom: 1px solid #2d2d2d;">
                    <Col span="12">
                        <Dropdown>
                                <a href="javascript:void(0)" style="color: orange;">
                                        <Badge dot>
                                            <Avatar :src="avatarPartner" />
                                        </Badge>
                                    <span style="margin-left:2px;font-size: 13px;"> {{ namePartner }} </span>
                                </a>
                                <DropdownMenu slot="list" style="">
                                        <DropdownItem>Thay đổi trạng thái</DropdownItem>
                                        <DropdownItem>Trang cá nhân</DropdownItem>
                                        <DropdownItem>Công cụ nâng cao</DropdownItem>
                                        <DropdownItem divided><center><Button @click="logout" size="small" type="primary">Đăng xuất</Button></center></DropdownItem>
                                </DropdownMenu>
                        </Dropdown>
                    </Col>
                    <Col span="12">
                        <span style="float:right;">
                            <Button type="warning">Warning</Button> <Button type="warning">Warning</Button> <Button type="warning" @click="logout"><Icon type="power"></Icon></Button>
                        </span>
                    </Col>
                </Row>
                <Row :gutter="16">
                    <Col span="6">
                        <div class="simpleCardHeader">
                            <h3 class="titleCardHeader">Tổng Khách Hàng</h3>
                            <h1 style="color:orange"> 2,321 </h1>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="simpleCardHeader">
                            <h3 class="titleCardHeader">Tổng Sản Phẩm</h3>
                            <h1 style="color:orange"> 321 </h1>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="simpleCardHeader">
                            <h3 class="titleCardHeader">Tổng Doanh Thu</h3>
                            <h1 style="color:orange"> 111,230,129 VND </h1>
                        </div>
                    </Col>
                    <Col span="6">
                        <div class="simpleCardHeader">
                            <h3 class="titleCardHeader">Tổng Feedback</h3>
                            <h1 style="color:orange"> 321 </h1>
                        </div>
                    </Col>
                </Row>
                </Header>
                <Content :style="{ paddingRight: '10px'}">
                    <slot></slot>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import ContentDashboard from '@/components/layoutGeneral/adminTemplate/indexTemplate/'
    export default {

        data () {
            return {
                showLoading: true,
                isCollapsed: false,
                avatarPartner: '',
                namePartner: ''
            }
        },
        components: {
            ContentDashboard
        },
        created(){
            var _this = this;
            var checkLogin = this.$session.get('auth');
            if(!checkLogin){
                _this.$router.push('/dang-nhap');
            }else{
                _this.avatarPartner = _this.$session.get('auth').avatarPartner;
                _this.namePartner = _this.$session.get('auth').namePartner;
                var roleId = _this.$session.get('auth').roleIdPartner;
                if(roleId == 1){
                    _this.$router.push('/support');
                }
            }
           setTimeout(()=>{ _this.showLoading = false }, 500);
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            sidebarCss(){
                return [
                    '',
                    this.isCollapsed ? 'sidebarCss': 'FixCss'
                ]
            }

        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            logout() {
                this.$session.destroy()
                this.$router.push('/')
            }
        }
    }
</script>

<style> 
.ivu-spin-fix {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1111111;
    width: 100%;
    height: 100%;
    background-color: #0e0e0ef0;
}
.ivu-table-border th, .ivu-table-border td {
    border-right: 1px solid #505050;
}
.ivu-table-wrapper {
    border: 1px solid #4c4c4c;
}
.ivu-table th, .ivu-table td {
    border-bottom: 1px solid #5c5c5d;
}

body{
     font-family: 'Quicksand', sans-serif;
}
 html{
     font-family: 'Quicksand', sans-serif;
}
 .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 225px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    -webkit-transition: width .2s ease .2s;
    transition: width .2s ease .2s;
    font-weight: 600;
    color: #FFF;
}
.ivu-menu-submenu-title > i, .ivu-menu-submenu-title span > i {
    margin-right: 8px;
    margin-top: -5px;
    font-weight: 600;
    color: #FFF;
}
 .FixCss {
     width: 190px !important;
}
 .sidebarCss {
     display: none !important;
}
 .layout{
     background: #f5f7f9;
     position: relative;
     border-radius: 0px;
     overflow: hidden;
}
 .ivu-layout {
     display: flex;
     flex-direction: column;
     flex: auto;
     background: #1a1a1b;
}
 .layout-header-bar{
     background: #232323;
     padding: 0px 10px 10px;
     height: auto;
     border-radius: 5px;
     margin-right: 10px;
     margin-top: 10px;
}
 .layout-logo-left{
     width: 90%;
     height: 30px;
     background: #5b6270;
     border-radius: 3px;
     margin: 15px auto;
}
 .menu-icon{
     transition: all .3s;
}
 .rotate-icon{
     transform: rotate(-90deg);
}
 .menu-item i{
     transform: translateX(0px);
     transition: font-size .2s ease, transform .2s ease;
     vertical-align: middle;
     font-size: 16px;
}
 .ivu-menu-submenu-title > i, .ivu-menu-submenu-title span > i {
     margin-right: 8px;
     margin-top: -5px;
}
 .collapsed-menu span{
     width: 0px;
     transition: width .2s ease;
}
 .collapsed-menu i{
     transform: translateX(5px);
     transition: font-size .2s ease .2s, transform .2s ease .2s;
     vertical-align: middle;
     font-size: 22px;
}
 .box-list{
     margin-top: 3px;
     border: 0px;
     border-radius: 0px;
    /* -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
     */
    /* box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
     */
     color: #4a4a4a;
     display: block;
     padding: 8px;
}
 .box {
     margin-top: 3px;
     border: 1px solid #333;
     border-radius: 0px;
    /* -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
     */
    /* box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
     */
     color: #4a4a4a;
     display: block;
     padding: 8px;
}
 .media {
     align-items: flex-start;
     display: flex;
     text-align: left;
}
 .media-left {
     margin-right: 1rem;
}
 .media-left, .media-right {
     flex-basis: auto;
     flex-grow: 0;
     flex-shrink: 0;
}
 .image.is-45x45 {
     height: 45px;
     width: 45px;
}
 .image.is-45x45 img{
     width: 100%;
     border-radius: 50%;
}
 .media-content {
     flex-basis: auto;
     flex-grow: 1;
     flex-shrink: 1;
     text-align: left;
}
 .ivu-badge-dot {
     position: absolute;
     -webkit-transform: translateX(-50%);
     transform: translateX(-50%);
     -webkit-transform-origin: 0 center;
     transform-origin: 0 center;
     top: 1px;
     right: -3px !important;
     height: 8px;
     width: 8px;
     border-radius: 100%;
     background: #19be6b;
     z-index: 10;
     -webkit-box-shadow: 0 0 0 1px #fff;
     box-shadow: 0 0 0 1px #fff;
}
 .ivu-menu-submenu{
     border-bottom: 1px solid #353535;
}
 .simpleCardHeader{
     padding: 0 8px;
}
 .titleCardHeader{
     margin-bottom: -35px;
     font-size: 17px;
     color: #999;
}
 .titleCardContent{
     color: #888;
}
 .CardBox{
     background: #232323;
     padding: 10px;
     margin-top: 10px;
     border-radius: 5px;
}
 .ivu-menu-vertical .ivu-menu-submenu-title-icon {
     float: right;
     position: relative;
     top: 4px;
     display: none !important;
}
 .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item:hover {
     color: #fff;
}
 .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
     background: #ffa500;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    border-right: none;
    color: #fff;
    background: #1a1a1b !important;
}
 .ivu-layout ::-webkit-scrollbar {
     width: 5px;
}
/* Track */
 .ivu-layout ::-webkit-scrollbar-track {
     background: rgb(26, 26, 27);
}
/* Handle */
 .ivu-layout ::-webkit-scrollbar-thumb {
     background: rgb(26, 26, 27);
}
/* Handle on hover */
 .ivu-layout ::-webkit-scrollbar-thumb:hover {
     background: orange;
}
 .ivu-menu ul li{
     display: block;
     margin: 0;
     padding: 0;
     background: #000;
     outline: none;
     list-style: none;
     color: #495060;
     font-size: 14px;
     position: relative;
     z-index: 900;
}
 .ivu-menu ul li a{
     color: #FFF 
}

.ivu-menu-item a {
    color: #FFF
}
 </style>