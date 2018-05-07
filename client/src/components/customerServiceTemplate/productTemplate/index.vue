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
        border-bottom: 1px solid #CCC;
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
                <router-link to="/"><li style="background: orange;color:#FFF">Bảng sản phẩm</li></router-link>
                 <router-link to="/channels/settings/liveSettings"><li>Thêm sản phẩm</li></router-link>
            </ul>
        </div>
        <div class="submainRight">
            <div class="mainRight">
                <Col :xs="24" :md="{span: 16,offset: 4}" :lg="{span: 16,offset: 4}">
                   
                </Col>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'indexSettingTemplate',
        data(){
            return {
                
            }
        },
        created(){

        },
        mounted(){

        },
        methods: {
            checkApi(){
                
            }
        }
    }
</script>