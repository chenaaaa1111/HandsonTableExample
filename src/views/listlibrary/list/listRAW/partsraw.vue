<template>
    <main>
        <header class="headtoprow2">

            <div class="left">
                <!-- <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button> -->

                <mu-button color="primary" @click="$router.push('RAWPart')">
                    <mu-icon left value="add"></mu-icon>
                    创建材料
                </mu-button>

                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>

            </div>
            <div class="right ">
                <!-- <div v-if="addtoolbar"> -->
                <mu-button icon color="primary" @click="isedit=true">
                    <mu-icon value="edit"></mu-icon>
                </mu-button>
                <mu-button icon color="primary" @click="isfilter=true">
                    <mu-icon value="filter_list"></mu-icon>
                </mu-button>
                <mu-button icon color="primary" @click="openAlertDialog">
                    <mu-icon value="share"></mu-icon>
                </mu-button>
                <!-- <mu-button icon color="secondary">
                    <mu-icon value="delete"></mu-icon>
                </mu-button> -->
                <mu-menu placement="bottom-end" :open.sync="moreopen">
                    <mu-button icon>
                        <mu-icon value="more_vert"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button to="partsprocess">
                            <mu-list-item-title>创建工序</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button @click="deletebtn">
                            <mu-list-item-title>删除</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button @click="showhelp">
                            <mu-list-item-title>帮助</mu-list-item-title>
                        </mu-list-item>

                    </mu-list>
                </mu-menu>

            </div>


            <div v-if="isfilter" class="headtoprow1">

                <mu-button icon @click="isfilter=false" color="secondary">
                    <mu-icon value="close"></mu-icon>
                </mu-button>
                <mu-text-field placeholder="Please input......"></mu-text-field>

            </div>
            <div v-if="isedit" class="headtoprow2">
                <div class="left">
                    <mu-select placeholder="选择编辑列" v-model="edititem">
                        <mu-option v-for="option in columntitle" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                    <mu-text-field :type="number" placeholder="Please input......"></mu-text-field>
                </div>
                <div class="right">
                    <mu-button icon color="primary">
                        <mu-icon value="save"></mu-icon>
                    </mu-button>
                    <mu-button icon color="primary" @click="isedit=false">
                        <mu-icon value="arrow_upward"></mu-icon>
                    </mu-button>
                </div>
            </div>

            <mu-dialog title="分享" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false"
                :open.sync="openAlert">
                <share />
                <mu-button slot="actions" flat @click="closeAlertDialog">取消</mu-button>
                <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">分享</mu-button>
            </mu-dialog>

        </header>
        <tablecomponent :is="currenttable"></tablecomponent>
    </main>
</template>
<script>
    import share from "@/components/Share";
    import list from "./rawHublist.vue";
    export default {
        components: {
            list,
            share
        },
        data() {
            return {
                openAlert: false,
                outputopen: false,
                moreopen: false,
                isfilter: false,
                isedit: false,
                edititem: "",
                columntitle: ['材料类型/规格', '尺寸', '数量', '价格'],
                items: [{
                        text: '清单',
                        disabled: false
                    },
                    {
                        text: '项目',
                        disabled: false
                    },
                    {
                        text: '材料',
                        disabled: false
                    },
                    {
                        text: 'Link 2',
                        disabled: true
                    }
                ],
                currenttable: "list",
            }
        },
        methods: {
            deletebtn() {},
            helpbutton() {},
            showhelp() {},
            openAlertDialog() {
                this.openAlert = true;
            },
            closeAlertDialog() {
                this.openAlert = false;
            },
            dochangetable(pviewtype) {

                switch (pviewtype) {
                    case "view_headline":
                        this.currenttable = list;
                        break;
                    case "view_stream":
                        this.currenttable = ribbon;
                        break;
                    default:
                        this.currenttable = thumb;
                }
            }
        }


    }
</script>