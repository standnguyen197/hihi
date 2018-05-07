<template>
    <div>
        <parentLayout title="BẮT ĐẦU LIVE">
            <liveOneCSTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/customerServiceTemplate/parentLayoutTemplate';
    import liveOneCSTemplate from '@/components/customerServiceTemplate/liveTemplate'
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
            liveOneCSTemplate
        },
    }
</script>