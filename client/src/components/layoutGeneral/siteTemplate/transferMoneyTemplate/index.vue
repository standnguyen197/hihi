<template>
    <div>
        <parentLayout  title="Nạp tiền" title-header="NẠP TIỀN" options-class="colorOrangeHeader" options-background="#EEE">
            <transferMoneyTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/siteTemplate/parentLayout';
    import transferMoneyTemplate from '@/components/siteTemplate/transferMoneyTemplate'
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
            transferMoneyTemplate
        },
    }
</script>