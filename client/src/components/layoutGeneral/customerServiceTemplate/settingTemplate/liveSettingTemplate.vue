<template>
    <div>
        <parentLayout title="Cài đặt Live">
            <liveSettingCustomerServiceTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/customerServiceTemplate/parentLayoutTemplate';
    import liveSettingCustomerServiceTemplate from '@/components/customerServiceTemplate/settingTemplate/liveSettingTemplate'
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
            liveSettingCustomerServiceTemplate
        },
    }
</script>