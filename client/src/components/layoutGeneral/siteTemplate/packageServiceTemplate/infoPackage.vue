<template>
    <div>
        <parentLayout  title="Thông tin dịch vụ" title-header="THÔNG TIN DỊCH VỤ" options-class="colorOrangeHeader" options-background="#EEE">
            <infoPackageServiceTemplate/>
        </parentLayout>
    </div>
</template>
<script>
    import parentLayout from '@/components/layoutGeneral/siteTemplate/parentLayout';
    import infoPackageServiceTemplate from '@/components/siteTemplate/packageServiceTemplate/infoPackage'
    export default {
        data(){
            return {
                
            }
        },
        components: {
            parentLayout,
            infoPackageServiceTemplate
        },
    }
</script>