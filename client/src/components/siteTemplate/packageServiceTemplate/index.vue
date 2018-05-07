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
    * {
    box-sizing: border-box;
}

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
    background-color: #333;
    color: white;
    font-size: 25px;
}

.price li {
    border-bottom: 1px solid #eee;
    padding: 20px;
    text-align: center;
}

.price .grey {
    background-color: #eee;
    font-size: 20px;
}

.button {
    background-color: orange;
    border: none;
    color: white;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    border-radius: 0px !important;
}


</style>
<template>
    <div>
        <Row>
            <Col  v-for="item in dataPackages" :key="item._id"  class="mt-5" :xs="{span:24}" :sm="{span:6}" :md="{span:6}" :lg="{span:6}">
                    <div class="columns">
                        <ul class="price">
                            <li v-if="item.typePackage == 'basic'" class="header" style="background: orange;">{{ item.namePackage }}</li>
                            <li v-else class="header">{{ item.namePackage }}</li>
                            <li class="grey">{{ item.xSubPackage }}</li>
                            <li v-for="items in item.subPackage">
                                {{ items.value }}
                            </li>
                            <li class="grey"><Button class="button" @click="packages(item._id)"> Đăng ký </Button></li>
                        </ul>
                    </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import axios from 'axios';
import baseURL from '../../../services/baseURLClient';
    export default {
        name:'packageServiceTemplate',
        data(){
            return {
                dataPackages: []
            }
        },
        created(){
            axios.post(`${baseURL}/api/packages/getInfoPackages`).then((response)=>{
                this.dataPackages = response.data.result;
            }).catch((e)=>{
                console.log(e);
            });
        },
        methods:{
            packages(val){
                this.$router.push(`/dich-vu/${val}`);
            }
        }
    }
</script>