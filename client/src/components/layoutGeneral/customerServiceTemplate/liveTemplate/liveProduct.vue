<template>
    <div>
        <parentLayout title="BẮT ĐẦU LIVE">
            <liveTwoCSTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/customerServiceTemplate/parentLayoutTemplate';
    import liveTwoCSTemplate from '@/components/customerServiceTemplate/liveTemplate/liveProduct'
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
            liveTwoCSTemplate
        },
    }
</script>