<template>
    <main>

        <header class="headtoprow2" style="margin-top:5px;margin-bottom:5px;">

            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-button color="primary" to="Manufactory/CreateProcess">
                    <mu-icon left value="add"></mu-icon>创建
                </mu-button>
                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>

            </div>
            <div class="right ">
                <!-- <mu-button v-if="selectitem" icon color="primary" @click="isedit=true">
                    <mu-icon value="playlist_add"></mu-icon>
                </mu-button> -->
                <mu-menu v-if="selectitem" placement="bottom-end" :open.sync="createitem">
                    <mu-button flat style="width:60px;font-size:10px;min-width: 10px;" color="primary">
                        <mu-icon left value="playlist_add" style="width:15px;font-size:10px;margin-right:-10px"></mu-icon>
                        <mu-icon right value="arrow_drop_down" style="width:15px;font-size:10px"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button to="/listhub/assemblyhub">
                            <mu-list-item-title>焊接</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="/listhub/assemblyhub">
                            <mu-list-item-title>装配</mu-list-item-title>
                        </mu-list-item>
                        <mu-divider></mu-divider>
                        <mu-list-item button to="/listhub/rawhub">
                            <mu-list-item-title>材料单</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="/listhub/purchasehub">
                            <mu-list-item-title>采购单</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="/listhub/processhub">
                            <mu-list-item-title>生产单</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="/listhub/inspectionhub">
                            <mu-list-item-title>检验单</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="/listhub/inspectionhub">
                            <mu-list-item-title>更多...</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>

                <mu-menu v-if="selectitem" placement="bottom-end" :open.sync="edititems.editopen">
                    <mu-button flat color="primary">
                        编辑
                        <mu-icon right value="arrow_drop_down"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button v-for="(item,index) in edititems.columnlist" :key="index" @click="edititem(index)">
                            <mu-list-item-title>{{item}}</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>




                <!-- <mu-button v-if="selectitem" icon color="primary" @click="isedit=true">
                    <mu-icon value="edit"></mu-icon>
                </mu-button> -->
                <mu-button v-if="selectitem" icon color="primary" @click="openAlertDialog">
                    <mu-icon value="share"></mu-icon>
                </mu-button>
                <mu-button icon color="primary">
                    <mu-icon value="refresh"></mu-icon>
                </mu-button>

                <mu-button icon color="primary" @click="filtitems.isfilter=true">
                    <mu-icon value="filter_list"></mu-icon>
                </mu-button>

                <mu-button icon color="primary" @click="togglefullscreen">
                    <mu-icon v-show="fullscreen" value="fullscreen"></mu-icon>
                    <mu-icon v-show="!fullscreen" value="fullscreen_exit"></mu-icon>
                </mu-button>
                <!-- 视图v-if="$refs.list.selects.length>0" -->
                <mu-menu placement="bottom-end" :open.sync="viewopen">
                    <mu-button flat color="primary">
                        <mu-icon vertical-align=bottom :value="viewtype"></mu-icon>
                        {{viewname}}
                    </mu-button>
                    <mu-list slot="content">
                        <!-- <mu-list-item button :ripple="false" @click="layerview = !layerview">
                            <mu-list-item-title>
                                层级
                            </mu-list-item-title>
                            <mu-list-item-action>
                                <mu-switch v-model="layerview" readonly></mu-switch>
                            </mu-list-item-action>
                        </mu-list-item>
                        <mu-divider v-if="layerview"></mu-divider> 
                        <mu-list-item v-if="layerview" button :ripple="true" @click="toggleview('view_headline')">
                            <mu-list-item-action>
                                <mu-icon value="view_headline"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>全部展开</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item v-if="layerview" button :ripple="true" @click="toggleview('view_stream')">
                            <mu-list-item-action>
                                <mu-icon value="view_stream"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>全部折叠</mu-list-item-title>
                        </mu-list-item>
                        <mu-divider></mu-divider>-->


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
                        <!-- <mu-divider></mu-divider>
                        <mu-sub-header>左右边栏显示</mu-sub-header>
                        <mu-list-item button :ripple="false" @click="shownav">
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
                        </mu-list-item> -->
                        <!-- <mu-list-item :ripple="true" @click="toggleview('view_stream')">
                            <mu-list-item-action>
                                <mu-select placeholder="层级深度" v-model="layer">
                                    <mu-option v-for="option in 5" :key="option" :label="option" :value="option"></mu-option>
                                </mu-select>
                            </mu-list-item-action>
                            <mu-list-item-title></mu-list-item-title>
                        </mu-list-item> -->


                    </mu-list>
                </mu-menu>
                <mu-menu placement="bottom-end" :open.sync="moreopen">
                    <mu-button icon>
                        <mu-icon value="more_vert"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button @click="isMBOM=true">
                            <mu-list-item-title>创建分组</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button @click="isMBOM=true">
                            <mu-list-item-title>创建MBOM</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button v-if="selectitem" @click="openAlertDialog">
                            <mu-list-item-title>导出清单</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button v-if="selectitem" @click="openAlertDialog">
                            <mu-list-item-title>导出图纸</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button v-if="selectitem" @click="openAlertDialog">
                            <mu-list-item-title>分享</mu-list-item-title>
                        </mu-list-item>
                        <mu-divider></mu-divider>
                        <mu-list-item button v-if="selectitem" @click="deletebtn">
                            <mu-list-item-title>删除</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="Purchase/Partspurchase">
                            <mu-list-item-title>帮助</mu-list-item-title>
                        </mu-list-item>


                    </mu-list>
                </mu-menu>
            </div>

            <!-- 编辑列 -->
            <div v-if="selectitem" class="headtoprow1">
                <mu-auto-complete v-if="edititems.ID1.show" icon=" " :data="edititems.ID1.values" :label="edititems.ID1.name"
                    :max-search-results="5" v-model="edititems.ID1.value" open-on-focus></mu-auto-complete>
                <mu-text-field v-if="edititems.ID2.show" icon=" " :placeholder="edititems.ID2.name" v-model="edititems.ID2.value"></mu-text-field>
                <mu-text-field v-if="edititems.ID3.show" icon=" " :placeholder="edititems.ID3.name" v-model="edititems.ID3.value"></mu-text-field>
                <mu-text-field v-if="edititems.ID4.show" icon=" " :placeholder="edititems.ID4.name" v-model="edititems.ID4.value"
                    :action-icon="'more_vert'" :action-click="selectcate"></mu-text-field>
                <mu-button v-if="edititems.editsave" icon color="primary">
                    <mu-icon value="save"></mu-icon>
                </mu-button>
                <mu-button v-if="edititems.editsave" icon color="primary" @click="colseedit">
                    <mu-icon value="close"></mu-icon>
                </mu-button>
            </div>
            <!-- 过滤 -->
            <mu-paper :z-depth="1" v-if="filtitems.isfilter" class="headtoprow1">
                <mu-flex justify-content="center">
                    <mu-button flat color="primary" @click="filtitems.isfilter=!filtitems.isfilter">收起</mu-button>
                </mu-flex>
                <div>
                    <mu-text-field full-width v-model="keyword" placeholder="输入关键字" :action-icon="'content_paste'"
                        :action-click="pastedalog" style="padding-left:20px;margin-right:-60px;padding-right:60px"></mu-text-field>
                    <mu-button icon color="primary" @click="search">
                        <mu-icon value="search"></mu-icon>
                    </mu-button>
                </div>
                <div>
                    <mu-date-input icon="date_range" v-model="filtitems.starttime" label="创建起始时间" label-float landscape></mu-date-input>
                    <mu-date-input icon="keyboard_arrow_right" v-model="filtitems.endtime" label="创建终止时间" label-float
                        landscape></mu-date-input>
                    <mu-text-field icon=" " label="起始数量" type='number' v-model="filtitems.startqty" label-float></mu-text-field>
                    <mu-text-field icon="keyboard_arrow_right" label="终止数量" type='number' v-model="filtitems.endqty"
                        label-float></mu-text-field>
                </div>
                <mu-select label="类型" placeholder="类型" v-model="filtitems.parttype" multiple>
                    <mu-option v-for="option in filtitems.parttypes" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                <mu-select label="设计人" multiple v-model="filtitems.value1">
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                <mu-select label="品牌/材质" multiple v-model="filtitems.value2">
                    <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                <mu-select label="层级深度" v-model="filtitems.value3">
                    <mu-option v-for="option in 5" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                <mu-select label="标签" multiple v-model="filtitems.value4">
                    <div v-if="labelid.type=='manufacture'" v-for="labelid in productLabels" :key="labelid">
                        <mu-option v-for="option in labelid.subtype" :key="option" :label="option.text" :value="option"></mu-option>
                    </div>
                </mu-select>
                <div>
                    <mu-checkbox v-model="filtitems.checkbox1" value="eat" label="含图纸"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox2" value="sleep" label="已发布"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox3" value="eat" label="参考图"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox4" value="sleep" label="工作图"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox5" value="run" label="工艺图"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox6" value="movie" label="装配图"></mu-checkbox>
                </div>

                <mu-button full-width>展开</mu-button>

                <mu-dialog title="多条件搜索" width="360" scrollable :open.sync="filtitems.openpastedalog">
                    <mu-text-field v-model="filtitems.multikeyword" placeholder="只查询零件号,每行作为一个关键字" multi-line :rows="10"
                        :rows-max="10"></mu-text-field>
                    <mu-button slot="actions" flat color="primary" @click="closeunitDialog">剪切板</mu-button>
                    <mu-button slot="actions" color="primary" @click="closeunitDialog">搜索</mu-button>
                </mu-dialog>
            </mu-paper>

            <mu-paper :z-depth="1" v-if="isMBOM" class="headtoprow1">
                <mu-button flat color="primary">
                    创建中间件

                </mu-button>
                <mu-button flat color="primary">
                    标记为虚拟件
                </mu-button>
                <mu-switch v-model="layerview"></mu-switch> 断开项目
            </mu-paper>
        </header>
        <share ref="sharedialogs" />
        <drawingselectdialog ref="drawingselectdialog" />
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
        <tablecomponent :is="currenttable" ref="list"></tablecomponent>
    </main>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    import share from "@/components/Share";
    import drawingselectdialog from "@/components/drawingselectdialog.vue";
    import list from "./List.vue";
    // import multilayList from "./multilayList.vue";
    import ribbon from "./ribbon.vue";
    import thumb from "./thumb.vue";
    const suppliers = ['Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5',
    ];
    const option = ['Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5',
    ];
    export default {
        components: {
            share,
            list,
            // multilayList,
            ribbon,
            thumb,
            drawingselectdialog
        },
        data() {
            return {
                nav: true,
                fullscreen: true,
                layerview: true,
                selectitem: false,
                createitem: false,
                moreopen: false,
                viewopen: false,
                viewtype: "view_headline",
                viewname: "视图",
                currenttable: "list",
                // pastedalogopen: false,
                items: [{
                        text: "项目",
                        disabled: false
                    },
                    {
                        text: "Link 1",
                        disabled: false
                    },
                    {
                        text: "Link 2",
                        disabled: true
                    }
                ],
                options: [...option],
                filtitems: {
                    isfilter: false,
                    keyword: "",
                    multikeyword: [],
                    openpastedalog: false,
                    starttime: "",
                    endtime: "",
                    startqty: 1,
                    endqty: 1,

                    value3: 0,
                    value1: [],
                    value2: [],
                    value4: [],

                    checkbox1: false,
                    checkbox2: false,
                    checkbox3: false,
                    checkbox4: false,
                    checkbox5: false,
                    checkbox6: false,
                    parttype: [],
                    parttypes: ["设计件", "标准件", "通用件"],
                },
                edititems: {
                    editopen: false,
                    editsave: false,
                    columnlist: ["供应方", "负责人", "技术文件", "场地"],
                    ID1: {
                        name: "设备/供应方",
                        show: false,
                        value: "",
                        tip: "",
                        values: [...suppliers]
                    },
                    ID2: {
                        name: "负责人",
                        show: false,
                        value: "",
                        tip: "",
                        values: [...suppliers]
                    },
                    ID3: {
                        name: "技术文件",
                        show: false,
                        value: "",
                        tip: "",
                        values: [...suppliers]
                    },
                    ID4: {
                        name: "场地",
                        show: false,
                        value: "",
                        tip: "",
                        values: [...suppliers]
                    }
                },


                isMBOM: false
            };
        },
        computed: {
            ...mapGetters(['productLabels'])
        },
        methods: {

            edititem(index) {
                switch (index) {
                    case 0:
                        this.edititems.ID1.show = true;
                        this.edititems.editopen = false;
                        this.edititems.editsave = true;

                        break;
                    case 1:
                        this.edititems.ID2.show = true;
                        this.edititems.editopen = false;
                        this.edititems.editsave = true;

                        break;
                    case 2:
                        this.$refs.drawingselectdialog.opendrawingdalog = true;
                        // this.edititems.ID4.show = true;
                        this.edititems.editopen = false;
                        this.edititems.editsave = false;

                        break;
                    case 3:
                        this.edititems.ID4.show = true;
                        this.edititems.editopen = false;
                        this.edititems.editsave = true;

                        break;
                    default:
                        break;
                }
            },
            shownav() {
                this.$parent.show = !this.$parent.show;
                this.nav = !this.nav;
                this.fullscreen = !this.fullscreen;
            },
            togglefullscreen() {
                this.fullscreen = !this.fullscreen;
                this.$parent.show = !this.$parent.show;
                this.nav = !this.nav;
            },
            deletebtn() {
                this.$nextTick(() => {
                    if (this.$refs.list.selects.length > 0) this.selectitem = true;
                });
                // this.$nextTick(() => {           this.msg2 = this.$refs.list.selects.length                })
            },
            colseedit() {
                this.edititems.ID1.show = false;
                this.edititems.ID2.show = false;
                this.edititems.ID3.show = false;
                this.edititems.ID4.show = false;
                this.edititems.editopen = false;
                this.edititems.editsave = false;
            },
            openAlertDialog() {
                this.$refs.sharedialogs.openshare = true;
            },
            toggleview(pviewtype) {
                switch (pviewtype) {
                    case "view_headline":
                        this.currenttable = list;
                        this.viewopen = false;
                        this.viewname = "列表";
                        break;
                    case "view_stream":
                        this.currenttable = ribbon;
                        this.viewopen = false;
                        this.viewname = "带形";
                        break;
                    default:
                        this.currenttable = thumb;
                        this.viewopen = false;
                        this.viewname = "网格";
                }
            },
            pastedalog() {
                this.filtitems.pastedalogopen = true;
            },
        }
    };
</script>

<style scoped>
    .mu-menu {
        vertical-align: initial;
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