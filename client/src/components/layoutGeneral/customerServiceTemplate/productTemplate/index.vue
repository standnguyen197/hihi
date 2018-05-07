<template>
    <div>
        <parentLayout title="QUẢN LÝ SẢN PHẨM">
            <productCSTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/customerServiceTemplate/parentLayoutTemplate';
    import productCSTemplate from '@/components/customerServiceTemplate/productTemplate'
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
            productCSTemplate
        },
    }
</script>