<template>
    <mu-dialog title="您确认删除该文件吗?" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
        :open.sync="deletealert">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when
        no
        apps are running.
        <mu-button slot="actions" flat @click="closeAlertDialog">取消</mu-button>
        <mu-button slot="actions" flat color="primary" @click="saveAlertDialog">保存</mu-button>
    </mu-dialog>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                deletealert: false,
            }
        }
    };
</script>