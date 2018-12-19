<template>
    <mu-dialog title="您正在离开此页面,请保存" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
        :open.sync="leavealert">
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
                leavealert: false,
            }
        }
    };
</script>