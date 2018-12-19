<template>
    <main>
        <header class="headtoprow2" style="margin-bottom:10px;">
            <div class="left">
                <mu-button color="primary" @click="addbtn">
                    <mu-icon value="add"></mu-icon>
                    新建
                </mu-button>
            </div>
            <!-- add toolbar -->
            <div class="right">
                <mu-button icon color="primary">
                    <mu-icon value="refresh"></mu-icon>
                </mu-button>
                <mu-button flat color="primary" @click="filtitems.isfilter=true">
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
                        </mu-list-item>
                        <mu-divider></mu-divider>
                        <mu-sub-header>类型分组显示</mu-sub-header>
                        <mu-list-item button :ripple="false" @click="ads = !ads">
                            <mu-list-item-title>
                                合并
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
                        <mu-list-item button>
                            <mu-list-item-title>创建分组</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-title>删除</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-title>导出</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-title>打印</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button>
                            <mu-list-item-title>帮助</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>
            </div>

            <!-- 过滤 -->
            <mu-paper :z-depth="1" v-if="filtitems.isfilter" class="headtoprow1">
                <div>
                    <!-- <mu-text-field full-width v-model="keyword" placeholder="输入关键字" :action-icon="'search'"
                        :action-click="search" style="padding-left:20px;margin-right:-60px;padding-right:60px"></mu-text-field>
                    <mu-button icon color="primary" @click="filtitems.openpastedalog=!filtitems.openpastedalog">
                        <mu-icon value="content_paste"></mu-icon>
                    </mu-button> -->
                    <mu-text-field full-width v-model="filtitems.keyword" placeholder="输入关键字" :action-icon="'content_paste'"
                        :action-click="pastedalog" style="padding-left:20px;margin-right:-60px;padding-right:60px"></mu-text-field>
                    <mu-button icon color="primary" @click="searchword">
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
                <mu-select label="标签" multiple v-model="filtitems.value4">
                    <div v-if="labelid.type=='design'" v-for="labelid in productLabels" :key="labelid">
                        <mu-option v-for="option in labelid.subtype" :key="option" :label="option.text" :value="option"></mu-option>
                    </div>
                </mu-select>
                <!-- <div>
                    <mu-checkbox v-model="filtitems.checkbox1" value="eat" label="含图纸"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox2" value="sleep" label="已发布"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox3" value="eat" label="参考图"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox4" value="sleep" label="工作图"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox5" value="run" label="工艺图"></mu-checkbox>
                    <mu-checkbox v-model="filtitems.checkbox6" value="movie" label="装配图"></mu-checkbox>
                </div> -->
                <mu-button full-width @click="filtitems.isfilter=!filtitems.isfilter">隐藏</mu-button>
                <mu-button full-width>展开</mu-button>

                <mu-dialog title="多条件搜索" width="360" scrollable :open.sync="filtitems.openpastedalog">
                    <mu-text-field v-model="filtitems.multikeyword" placeholder="只查询零件号,每行作为一个关键字" multi-line :rows="10"
                        :rows-max="10"></mu-text-field>
                    <mu-button slot="actions" flat color="primary" @click="closeunitDialog">剪切板</mu-button>
                    <mu-button slot="actions" color="primary" @click="closeunitDialog">搜索</mu-button>
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
    import list from "./ProjectList.vue";
    export default {
        components: {

            list,

        },

        data() {
            return {
                currenttable: "list",
                isfilter: false,
                nav: true,
                ads: false,
                viewopen: false,
                moreopen: false,
                fullscreen: true,
                viewtype: "view_headline",
                items: [{
                        text: 'Dashboard',
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
                    parttypes: ["设计件", "标准件", "通用件"]
                },
            };
        },
        methods: {
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
            shownav() {
                this.$parent.show = !this.$parent.show;
                this.nav = !this.nav;
            },

            addbtn() {
                this.list = true;
                this.add = false;
                this.addtoolbar = true;
                this.listtoolbar = false;
                this.$router.push({
                    path: '/CreateProject'
                });
            },
            listbtn() {
                this.listtoolbar = true;
                this.addtoolbar = false;
                this.adding = true;
                this.add = false;
                this.$router.push('/');
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