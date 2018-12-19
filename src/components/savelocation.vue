<template>
    <mu-dialog title="选择保存位置" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="showloaction"
        scrollable>
        这是一个tree folder,可以展开,也可以新建,编辑,删除文件夹
        <tree />
        <mu-button slot="actions" flat @click="showloaction=false">取消</mu-button>
        <mu-button slot="actions" flat color="primary" @click="closelibDialog">保存</mu-button>
    </mu-dialog>
</template>
<script>
    import tree from './treelist';
    export default {
        components: {
            tree,
        },
        name: "",
        data() {
            return {
                showloaction: false,
            }
        },
        methods: {
            closelibDialog() {
                this.showloaction = false;
            }
        },
    };
</script>