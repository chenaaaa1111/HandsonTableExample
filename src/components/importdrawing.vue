<template>
    <mu-dialog class="layout" title="添加图纸" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
        :open.sync="importdrawing">
        <mu-text-field class="title" v-model="searchword" :action-icon="search" :action-click="search"></mu-text-field><br />
        <mu-divider></mu-divider>
        <div class="listview">
            <mu-button flat color="primary" @click="uploaddrawing">上传</mu-button>
            this is a 最近 list网格状或列表分布
        </div>
        <mu-button slot="actions" flat @click="importdrawing=false">取消</mu-button>
        <mu-button slot="actions" flat color="primary" @click="closeimportdrawingDialog">添加</mu-button>
    </mu-dialog>
</template>
<script>
    export default {
        data() {
            return {
                importdrawing: false,
                searchword: "",

            };
        },
        methods: {
            closeAlertDialog() {
                this.importdrawing = false;
            },
            search(searchword) {},
            uploaddrawing() {
                //打开本地单个文件
                //批量导入或拖入
            }
        }
    };
</script>
<style lang="less" scoped>
    .layout {
        display: flex;
        flex-direction: column;
    }

    .title {
        flex: 0 0 50px;
    }

    .listview {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: auto;
    }
</style>