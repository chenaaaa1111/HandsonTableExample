<template>
    <mu-dialog title="选择材料类型或规格" width="500" scrollable :open.sync="openrawcatedialog">
        <!-- 风格一 -->
        <rawcate />
        <mu-button slot="actions" flat color="primary" @click="closeselectrawcateDialog">选择</mu-button>


    </mu-dialog>
</template>
<script>
    import rawcate from '@/components/raw/rawnavTable.vue';
    export default {
        components: {
            rawcate,
        },
        name: "",
        data() {
            return {
                openrawcatedialog: false,
            }
        }
    };
</script>