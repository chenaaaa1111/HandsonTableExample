<template>
    <main>
        <header class="headtoprow2" color="white">
            <div class="left">
                <!-- <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button> -->
                <mu-button color="primary" @click="$router.go(-1)">
                    <mu-icon left value="add"></mu-icon>添加
                </mu-button>
                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>
            </div>

            <div class="right">
                <mu-button icon color="primary">
                    <mu-icon value="refresh"></mu-icon>
                </mu-button>
                <mu-button icon color="primary" @click="isedit=true">
                    <mu-icon value="edit"></mu-icon>
                </mu-button>
                <mu-button flat color="primary" @click="isfilter=true">
                    <mu-icon value="filter_list"></mu-icon>筛选
                </mu-button>

                <mu-button icon color="primary" @click="togglefullscreen">
                    <mu-icon v-show="fullscreen" value="fullscreen"></mu-icon>
                    <mu-icon v-show="!fullscreen" value="fullscreen_exit"></mu-icon>

                </mu-button>
                <!-- 视图 -->
                <mu-menu placement="bottom-end" :viewopen.sync="viewopen">
                    <mu-button flat color="primary">
                        <mu-icon vertical-align=bottom :value="viewtype"></mu-icon>
                        视图
                    </mu-button>
                    <mu-list slot="content">

                        <mu-list-item button :ripple="true" @click="toggleview('view_headline')">
                            <mu-list-item-action>
                                <mu-icon value="view_headline"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>列表</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button :ripple="true" @click="toggleview('view_stream')">
                            <mu-list-item-action>
                                <mu-icon value="view_stream"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>带形</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button :ripple="true" @click="toggleview('view_module')">
                            <mu-list-item-action>
                                <mu-icon value="view_module"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>网格</mu-list-item-title>
                        </mu-list-item>

                        <mu-divider></mu-divider>
                        <mu-sub-header>左右边栏显示</mu-sub-header>
                        <mu-list-item button :ripple="false" @click="nav = !nav">
                            <mu-list-item-title>
                                左侧
                            </mu-list-item-title>
                            <mu-list-item-action>
                                <mu-switch v-model="nav" readonly></mu-switch>
                            </mu-list-item-action>
                        </mu-list-item>
                        <mu-list-item button :ripple="false" @click="ads = !ads">
                            <mu-list-item-title>
                                右侧
                            </mu-list-item-title>
                            <mu-list-item-action>
                                <mu-switch v-model="ads" readonly></mu-switch>
                            </mu-list-item-action>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>
                <mu-button flat color="primary" @click="$router.push('Contract')">
                    <mu-icon left value="add"></mu-icon>
                    创建合同
                </mu-button>
                <mu-menu placement="bottom-end" :moreopen.sync="moreopen">
                    <mu-button icon>
                        <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button>
                            <mu-list-item-title>删除</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="Partspurchase">
                            <mu-list-item-title>导出</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-title>打印</mu-list-item-title>
                        </mu-list-item>

                    </mu-list>
                </mu-menu>
            </div>


            <div v-if="isedit" class="headtoprow1">
                <mu-select placeholder="选择编辑列" v-model="edititem">
                    <mu-option v-for="option in columntitle" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                <mu-text-field placeholder="Please input......"></mu-text-field>

                <mu-button icon color="primary">
                    <mu-icon value="save"></mu-icon>
                </mu-button>
                <mu-button icon color="primary" @click="isedit=false">
                    <mu-icon value="close"></mu-icon>
                </mu-button>
            </div>
            <div v-if="isfilter" class="headtoprow1">

                <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                    <mu-tab v-for="item in suppliers" :key="item">{{item}}</mu-tab>

                    <mu-tab @click="openScrollDialog">
                        <mu-icon value="add"></mu-icon>
                    </mu-tab>
                    <mu-button icon @click="isfilter=false" color="secondary">
                        <mu-icon value="close"></mu-icon>
                    </mu-button>
                </mu-tabs>
                <mu-dialog title="供应商" width="360" scrollable :open.sync="openScroll">
                    <mu-list>
                        <mu-list-item :key="option" v-for="option in options">
                            <mu-list-item-content>
                                <mu-checkbox :label="option" :value="option" v-model="suppliers"></mu-checkbox>
                            </mu-list-item-content>
                        </mu-list-item>
                    </mu-list>
                    <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
                </mu-dialog>

            </div>

        </header>
        <tablecomponent :is="currenttable"></tablecomponent>
    </main>
</template>
<script>
    import list from "./partsList.vue";
    export default {
        components: {

            list,

        },
        data() {
            return {
                isedit: false,
                isfilter: true,
                nav: true,
                ads: false,
                viewopen: false,
                moreopen: false,
                fullscreen: true,
                viewtype: "view_headline",
                columntitle: ['材料类型', '材料规格', '长度', '宽度', '厚度', '数量', '价格'],
                suppliers: ['全部', '供应商1', '供应商2', '供应商3'],
                items: [{
                        text: '清单',
                        disabled: false
                    },
                    {
                        text: '项目',
                        disabled: false
                    },
                    {
                        text: '采购',
                        disabled: false
                    },
                    {
                        text: 'Link 2',
                        disabled: true
                    }
                ],
                openScroll: false,
                ringtone: 'None',
                options: [
                    '供应商1', '供应商2', '供应商3',
                    'Dione',
                    'Ganymede',
                    'Hangouts Call',
                    'Luna',
                    'Oberon',
                    'Phobos',
                    'Pyxis',
                    'Sedna',
                    'Titania',
                    'Triton',
                    'Umbriel'
                ],
                currenttable: "list",
            };
        },
        methods: {
            addbtn() {
                this.list = true;
                this.add = false;
                this.addtoolbar = true;
                this.listtoolbar = false;
                this.$router.push({
                    path: '/Design/CreatePart'
                });
            },
            listbtn() {
                this.listtoolbar = true;
                this.addtoolbar = false;
                this.adding = true;
                this.add = false;
                this.$router.push('/Design');
            },

            addingbtn() {
                this.listtoolbar = false;
                this.addtoolbar = true;
                this.list = true;
                this.adding = false;
                this.$router.push('/CreateProject');
            },
            closebtn() {
                this.add = true;
                this.listtoolbar = true;
                this.list = false;
                this.addtoolbar = false;
                this.adding = false;
                this.$router.push('/');
            },
            togglefullscreen() {
                this.fullscreen = !this.fullscreen;
            },
            toggleview(pviewtype) {
                this.viewtype = pviewtype;
                this.$emit('changetable', pviewtype)
            },
            openScrollDialog() {
                this.openScroll = true;
            },
            closeScrollDialog() {
                this.openScroll = false;
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
    };
</script>
<style scoped>
    .mu-menu {
        vertical-align: initial;
    }

    .mu-ripple-wrapper {
        position: inherit;
    }

    .mu-ripple-wrapper {
        position: inherit;
    }

    .mu-tab-link-highlight {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0px;
        background-color: transparent;
        /* background-color: #2196f3; */
    }

    .mu-tabs {
        /* 背景颜色background-color: transparent; */
        background-color: lightgray;
        /* 未激活字体颜色 */
        color: black;
        max-width: auto;
        height: 50px;
        width: auto;

    }

    .mu-tab-active {
        color: #2196f3;
    }

    .mu-tab {
        max-width: 200px;
        background: transparent;
        transition: ease-in-out;
        font-size: 14;
        min-width: 100px;
    }
</style>