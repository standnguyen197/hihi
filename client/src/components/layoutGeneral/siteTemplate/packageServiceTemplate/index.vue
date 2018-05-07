<template>
    <div>
        <parentLayout  title="Dịch vụ" title-header="DỊCH VỤ" options-class="colorOrangeHeader" options-background="">
            <packageServiceTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/siteTemplate/parentLayout';
    import packageServiceTemplate from '@/components/siteTemplate/packageServiceTemplate'
    export default {
        data(){
            return {
                
            }
        },
        components: {
            parentLayout,
            packageServiceTemplate
        },
    }
</script>