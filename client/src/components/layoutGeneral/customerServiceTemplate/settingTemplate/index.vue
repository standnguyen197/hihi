<template>
    <div>
        <parentLayout title="Cài đặt">
            <indexSettingCustomerServiceTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/customerServiceTemplate/parentLayoutTemplate';
    import indexSettingCustomerServiceTemplate from '@/components/customerServiceTemplate/settingTemplate'
    export default {
        data(){
            return {
                
            }
        },
        created(){
            var auth = this.$session.get('auth');
            if(!auth){
                this.$router.push('/');
            }
        },
        components: {
            parentLayout,
            indexSettingCustomerServiceTemplate
        },
    }
</script>