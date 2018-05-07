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
        background: blue;
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
</style>
<template>
    <div class="submain">
        <div class="submainLeft">
            <ul>
                <router-link to="/"><li style="background: orange;color:#FFF">Bảng cài đặt</li></router-link>
                 <router-link to="/channels/settings/liveSettings"><li>Cài đặt Live</li></router-link>
            </ul>
        </div>
        <div class="submainRight">1</div>
    </div>
</template>
<script>
    export default {
        name: 'indexSettingTemplate',
        data(){
            return {
                
            }
        }
    }
</script>