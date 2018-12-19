<template>
    <mu-dialog :title="dialogName" width="500" scrollable :open.sync="applydialog" :esc-press-close="escexit"
        :overlay-close="escexit">
        <component :is="currentCom"> </component>
        <mu-button v-if="currentCom=='apply'" slot="actions" flat @click="toconfig">管理</mu-button>
        <mu-button v-if="currentCom=='apply'" slot="actions" flat color="primary" @click="submit">提交</mu-button>
        <mu-button v-if="currentCom=='config'" slot="actions" flat @click="toapply">返回</mu-button>
        <mu-button v-if="currentCom=='config'" slot="actions" flat color="primary" @click="saveConfig">保存</mu-button>
    </mu-dialog>
</template>
<script>
    import apply from './apply.vue'
    import config from './config.vue'
    export default {
        components: {
            apply,
            config,
        },
        name: "",
        data() {
            return {
                applydialog: false,
                escexit: true,
                currentCom: "apply",
                dialogName: "审批",
                buttons: {
                    firstbtnName: "管理",
                    secbtnName: "管理",
                }
            }
        },
        methods: {
            toconfig() { //管理
                this.dialogName = "审批配置";
                this.currentCom = "config";
                this.escexit = false
            },
            toapply() { //返回
                this.dialogName = "审批";
                this.currentCom = "apply";
                this.escexit = true
            },
            saveConfig() {
                this.dialogName = "审批";
                this.currentCom = "apply";
                this.escexit = false
            },
            submit() {
                this.dialogName = "审批";
                this.currentCom = "apply";
                this.applydialog = false;
            },
        }
    };
</script>