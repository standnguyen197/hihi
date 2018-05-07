<template>
    <div>
        <parentLayout title="Chào mừng đến với iBee.vn">
            <indexCustomerServiceTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/customerServiceTemplate/parentLayoutTemplate';
    import indexCustomerServiceTemplate from '@/components/customerServiceTemplate/indexTemplate/'
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
            indexCustomerServiceTemplate
        },
    }
</script>