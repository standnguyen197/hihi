<template>
<div>
<vue-headful
    title="BẢNG QUẢN LÝ CẤP CAO | IBEE.VN"
    />
 <Row :gutter="16">
    <Col span="16">
        <Row :gutter="16">
            <Col span="12">
                <div class="CardBox">
                    <h3 class="titleCardContent">Khách Hàng Mới+ (Hôm nay)</h3>
                    <h1 style="color:orange;font-size: 21px;"> 321 </h1>
                    <bars
                        :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0]"
                        :gradient="['#6fa8dc', '#42b983']">
                    </bars>
                </div>
            </Col>
            <Col span="12">
                <div class="CardBox">
                <h3 class="titleCardContent">Khách hàng đăng ký dịch vụ (Hôm nay)</h3>
                    <h1 style="color:orange;font-size: 21px;"> 321 </h1>
                    <bars
                        :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0]"
                        :gradient="['#6fa8dc', '#42b983']">
                    </bars>
                </div>
            </Col>
            <Col span="24">
                <div class="CardBox">
                        <h3 class="titleCardContent"> Danh sách vị trí khách hàng</h3>
                        <pie-chart :colors="['orange', '#42b983']" :data="[['Hà nội', 44], ['HCM', 23]]"></pie-chart>
                </div>
            </Col>
        </Row>
    </Col>
    <Col span="8">
        <div class="CardBox">
            <h3 class="titleCardContent"> Truy cập Online (Ngay bây giờ) </h3>
            <br/>
                <center>
                    <Circle
                        :size="250"
                        :trail-width="4"
                        :stroke-width="5"
                        :percent="100"
                        stroke-linecap="square"
                        stroke-color="orange">
                        <div class="demo-Circle-custom">
                            <h1  style="color:orange;font-size: 45px;font-weight:600">431</h1>
                        </div>
                    </Circle>
                </center>
        </div>
    </Col>    
    <Col span="8">
        <div class="CardBox">
            <h3 class="titleCardContent"> Lượng truy cập (hôm nay) </h3>
            <h1 style="color:orange;font-size: 21px;"> 321 </h1>
            <br/>
                <bars
                    :data="[1, 2, 5, 9, 5, 10, 3, 5, 2, 5, 1, 8, 2, 9, 0]"
                    :gradient="['#6fa8dc', '#42b983']">
                </bars>
        </div>
    </Col>
</Row>
    <Row :gutter="16">
        <Col span="12">
            <div class="CardBox">
                <h3 class="titleCardContent"> Thiết bị khách hàng sử dụng</h3>
                    <pie-chart :colors="['red', '#42b983', '#0099FF', 'orange']" :data="[['Laptop', 44], ['PC', 23], ['Tablelet', 44], ['Mobile', 144]]"></pie-chart>
            </div>
        </Col>
        <Col span="12">
            <div class="CardBox">
                <h3 class="titleCardContent"> Thể loại mặt hàng khách hàng bán </h3>
                    <pie-chart :colors="['red', '#42b983', '#0099FF', '#CC66FF']" :data="[['Đồ gia dụng', 44], ['Quần áo nữ', 23], ['Quần áo nam', 44], ['Mỹ phẩm', 144], ['Kính làm đẹp', 144]]"></pie-chart>
            </div>
        </Col>
    </Row>
    </div>
</template>
<script>
    export default {

        data () {
            return {
            }
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
        },
        methods: {

        }
    }
</script>