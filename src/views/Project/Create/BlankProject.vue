<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="closebtn">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
            </div>

            <div class="right">
                <mu-button flat @click="opentemplist=!opentemplist">
                    <mu-icon left value="library_add"></mu-icon>基于模板
                </mu-button>
                <mu-button flat>
                    <mu-icon left value="content_copy"></mu-icon>
                    复制并新建
                </mu-button>
                <mu-button flat color="primary">保存 </mu-button>
                <mu-menu placement="bottom-end" :open.sync="savemore">
                    <mu-button flat style="width:25px;font-size:10px;min-width: 10px;margin-left:-25px" color="primary">
                        <mu-icon left value="arrow_drop_down" style="width:15px;font-size:10px"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button @click="savetolib">
                            <mu-list-item-title>保存为模板</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>

                <mu-button icon color="primary" @click="openhelp=!openhelp">
                    <mu-icon value="help_outline"></mu-icon>
                </mu-button>
            </div>

            <mu-dialog title="您正在离开此页面,请保存" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
                :open.sync="colsealert">
                Let Google help apps determine location. This means sending anonymous location data to Google, even
                when
                no
                apps are running.
                <mu-button slot="actions" flat @click="closeAlertDialog">取消</mu-button>
                <mu-button slot="actions" flat color="primary" @click="saveAlertDialog">保存</mu-button>
            </mu-dialog>

            <mu-dialog title="您正在离开此页面,请保存" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
                :open.sync="colsealert">
                Let Google help apps determine location. This means sending anonymous location data to Google, even
                when
                no
                apps are running.
                <mu-button slot="actions" flat @click="closeAlertDialog">取消</mu-button>
                <mu-button slot="actions" flat color="primary" @click="saveAlertDialog">保存</mu-button>
            </mu-dialog>

        </header>

        <list :showtemplist="opentemplist" :showhelp="openhelp" />

    </main>
</template>
<script>
    import list from "./BlankProjectAtt.vue";

    // import ribbon from "./Ribbon.vue";
    // import thumb from "./Thumb.vue";
    export default {
        components: {
            list,

        },
        data() {
            return {
                savemore: false,
                openhelp: false,
                opentemplist: false,
                currenttable: "list",
                colsealert: false,
            }
        },
        methods: {

            closebtn() {
                // this.colsealert = true;
                this.$router.go(-1);
            },
            closeAlertDialog() {
                this.colsealert = false;
            },
            saveAlertDialog() {
                this.colsealert = false;
                this.$router.go(-1);
            },
            rightsideshow() {},
            savetolib() {},
        }
    }
</script>