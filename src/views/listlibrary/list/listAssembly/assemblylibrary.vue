<template>
    <main>
        <header>
            <mu-paper class="headtop" color="white">
                <div class="headtoprow2">
                    <div class="left">
                        <mu-button color="primary" @click="$router.push('/listlibrary/createlist')">
                            <mu-icon left value="add"></mu-icon>创建
                        </mu-button>
                        <!-- <mu-button color="primary" @click="israw=true">
                    <mu-icon value="add"></mu-icon>
                    创建原材料
                </mu-button> -->
                        <mu-breadcrumbs divider="—">
                            <mu-icon value="chevron_right" slot="divider"></mu-icon>
                            <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                        </mu-breadcrumbs>
                    </div>
                    <!-- add toolbar -->
                    <div class="right">
                        <mu-button icon color="primary">
                            <mu-icon value="refresh"></mu-icon>
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
                                <mu-list-item button :ripple="false" @click="togglefullscreen">
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
                        <mu-menu placement="bottom-end" :moreopen.sync="moreopen">
                            <mu-button icon>
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button @click="toview('subtype')">
                                    <mu-list-item-title>创建分组</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button v-if="selectitem">
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button v-if="selectitem">
                                    <mu-list-item-title>导出</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button v-if="selectitem">
                                    <mu-list-item-title>打印</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>帮助</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </div>
                </div>



                <div v-if="isprocess" class="headtoprow1">


                    <mu-button icon @click="openfullprocess" color="secondary">
                        <mu-icon value="launch"></mu-icon>
                    </mu-button>
                    <mu-select placeholder="创建工步" multiple filterable v-model="edititem" full-width>
                        <mu-option v-for="option in prccesseslist" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                    <mu-button icon @click="isprocess=false" color="secondary">
                        <mu-icon value="save"></mu-icon>
                    </mu-button>
                    <mu-button icon @click="isprocess=false" color="secondary">
                        <mu-icon value="close"></mu-icon>
                    </mu-button>
                </div>
                <div v-if="isfilter" class="headtoprow1">

                    <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                        <mu-tab v-for="item in filterprocess" :key="item">{{item}}</mu-tab>

                        <mu-tab @click="openScrollDialog">
                            <mu-icon value="add"></mu-icon>
                        </mu-tab>
                        <mu-button icon @click="isfilter=false" color="secondary">
                            <mu-icon value="close"></mu-icon>
                        </mu-button>
                    </mu-tabs>
                    <mu-dialog title="工序" width="360" scrollable :open.sync="openScroll">
                        <mu-list>
                            <mu-list-item :key="option" v-for="option in prccesseslist">
                                <mu-list-item-content>
                                    <mu-checkbox :label="option" :value="option" v-model="filterprocess"></mu-checkbox>
                                </mu-list-item-content>
                            </mu-list-item>
                        </mu-list>
                        <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
                    </mu-dialog>
                </div>
                <mu-dialog title="选择工艺" width="360" scrollable :open.sync="fullprocess">
                    <processtypes />
                    <mu-button slot="actions" flat color="primary" @click="closefullprocess">ok</mu-button>
                </mu-dialog>
            </mu-paper>
        </header>
        <mu-paper :z-depth="1" class="mygrid">
            <div class="mygridcol-4" v-for="item in 4" :key="item.temID">
                <mu-button flat color="gray" @click="enterProject">
                    <!-- @click.native="$router.push(item.path)" -->
                    <mu-icon left color="gray" value="folder"></mu-icon>组{{item}}
                </mu-button>
            </div>
            <mu-button flat color="primary" @click="enterProject">
                <!-- @click.native="$router.push(item.path)" -->
                <mu-icon left color="primary" value="create_new_folder"></mu-icon>新建
            </mu-button>
        </mu-paper>
        <tablecomponent :is="currenttable"></tablecomponent>
    </main>
</template>
<script>
    import list from "./libraryList.vue";
    import processtypes from "@/components/process/processcate.vue";
    export default {
        components: {
            list,
            processtypes

        },
        data() {
            return {
                isfilter: false,
                israw: false,
                isprocess: false,
                prccesseslist: ["下料", "焊接", "打砂", "回火", "装配"],
                filterprocess: ["全部"],
                nav: true,
                ads: false,
                viewopen: false,
                moreopen: false,
                fullscreen: true,
                viewtype: "view_headline",
                edititem: [],
                selectitem: false,
                editcolumntitle: ['数量', '材料', '工序', '图纸'],
                fullprocess: false,
                items: [{
                        text: '清单',
                        disabled: false
                    },
                    {
                        text: 'Link 1',
                        disabled: false
                    },
                    {
                        text: 'Link 2',
                        disabled: true
                    }
                ],
                openScroll: false,
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
                this.$parent.show = !this.$parent.show;
                this.nav = !this.nav;
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
            openfullprocess() {
                this.fullprocess = true;
            },
            closefullprocess() {
                this.fullprocess = false;
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
            },
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
        background-color: #2196f3;
    }

    .mu-tabs {
        /* 背景颜色 */
        background-color: transparent;
        /* 未激活字体颜色 */
        color: black;
        max-width: auto;
        height: 50px;
        width: 700px;

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

    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;

    }

    .mygridcol-1 {
        flex: 1 1 100%;
    }

    .mygridcol-2 {
        flex: 1 1 50%;
    }

    .mygridcol-3 {
        flex: 1 1 33.33%;
    }

    .mygridcol-4 {

        flex: 0 1 15%;
    }
</style>