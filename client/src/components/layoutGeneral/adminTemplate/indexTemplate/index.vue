<template>
    <div>
        <parentLayout><ContentDashboard/></parentLayout>
    </div>
</template>
<script>
import parentLayout from '@/components/layoutGeneral/adminTemplate/parentLayout/'
import ContentDashboard from '@/components/adminTemplate/indexTemplate'
    export default {
        components: {
            parentLayout,
            ContentDashboard
        },
    }
</script>