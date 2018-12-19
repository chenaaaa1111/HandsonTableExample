<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>
            </div>
            <div class="right">
                <mu-tooltip content="基于模板新建">
                    <mu-button icon @click="opentemplist">
                        <mu-icon value="library_add"></mu-icon>
                    </mu-button>
                </mu-tooltip>
                <mu-tooltip content="复制当前内容并新建">
                    <mu-button icon>
                        <mu-icon value="content_copy"></mu-icon>
                    </mu-button>
                </mu-tooltip>
                <mu-button icon style="margin-right:-10px;" color="primary" @click="addpart">
                    <mu-icon value="save"></mu-icon>
                </mu-button>
                <mu-menu placement="bottom-end" :open.sync="opensaveto">
                    <mu-button flat style="width:25px;font-size:10px;min-width: 10px;" color="primary">
                        <mu-icon left value="keyboard_arrow_down" style="width:15px;font-size:10px"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button @click="savetolib">
                            <mu-list-item-title>保存到库</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>
                <mu-button icon color="primary" @click="rightsideshow=!rightsideshow">
                    <mu-icon value="help_outline"></mu-icon>
                </mu-button>
                <saveto ref="savelocation" />
                <mu-button flat color="primary" @click="$router.push('BlankPart/archive')">档案</mu-button>
                <mu-button flat color="primary" @click="$router.push('BlankPart/maintain')">维保</mu-button>
            </div>

        </header>
        <article>
            <section class="list">
                <div>
                    <mu-text-field icon=":iconfont icon-xuhao" style="min-width:10px;width:100px" type='number' v-model="no"
                        placeholder="序号"></mu-text-field>
                    <mu-text-field icon=" " v-model="partno" prefix="*" placeholder="物料号，零件号..." :action-icon="'search'"
                        :action-click="searchcode"></mu-text-field>
                    <mu-text-field icon=" " style="min-width:10px;width:100px" v-model="version" placeholder="版本"></mu-text-field>
                </div>

                <div>
                    <mu-text-field icon=" " v-model="name" placeholder="名称，描述..."></mu-text-field>
                    <mu-text-field icon=" " type='number' v-model="setqty" label="数量" :suffix="unit" label-float
                        :action-icon="'arrow_drop_down'" :action-click="selectunit"></mu-text-field>

                </div>
                <mu-text-field icon=" " v-if="stand" v-model="gb" prefix="GB/T-" placeholder="国标/规格"></mu-text-field>
                <div>
                    <mu-auto-complete icon=" " :data="materials" placeholder="品牌/材质" :max-search-results="5" v-model="material"
                        open-on-focus :action-icon="'more_vert'" :action-click="getmaterial"></mu-auto-complete>

                    <mu-text-field icon=" " type='number' v-model="setweight" label="重量" suffix="kg" label-float></mu-text-field>
                </div>
                <div>
                    <mu-auto-complete icon=" " :data="raws" placeholder="材料" :max-search-results="5" v-model="raw"
                        open-on-focus :action-icon="'more_vert'" :action-click="getraw"></mu-auto-complete>
                </div>
                <div>
                    <mu-auto-complete icon=" " :data="relations" prefix="关系" placeholder="和该零件有关系的..."
                        :max-search-results="5" v-model="relation" :action-icon="'add'" :action-click="getrelation"></mu-auto-complete>
                </div>
                <mu-divider></mu-divider>
                <mu-sub-header>自定义属性</mu-sub-header>

                <mu-text-field icon=" " v-model="size" label="长" type='number' suffix="mm" label-float></mu-text-field>



                <div>
                    <mu-icon style="margin:15px" value="photo"> </mu-icon>
                    <mu-chip style="margin:8px" v-for="chip in projectpic" :key="chip" color="chip" @delete="remove(index)"
                        delete>{{chip}}</mu-chip>
                    <mu-button flat style="margin-top:20px;" @click="getdrawing">
                        <mu-icon left value="add"></mu-icon>
                        图纸
                    </mu-button>
                </div>

                <mu-expansion-panel :expand="true" @change="toggle('panel1')" style="-webkit-box-shadow:none;box-shadow:none;">
                    <div slot="header">选择类型</div>
                    <div class="mygrid">
                        <mu-select label="类型" v-model="type">
                            <mu-option v-for="item in productTypes" :key="item.type" :label="item.name" :value="item.type"></mu-option>
                        </mu-select>
                        <mu-select label="子类型" v-model="subtype">
                            <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                        </mu-select>

                        <!-- <mu-radio :value="1" v-model="othertype" :label="1"></mu-radio>
                <mu-radio :value="2" v-model="othertype" :label="2"></mu-radio>
                <mu-radio :value="3" v-model="othertype" :label="3"></mu-radio> -->
                        <mu-switch v-model="weldtrue" label="焊接件"></mu-switch>
                        <mu-switch v-model="maintaintrue" label="维保"></mu-switch>
                        <mu-switch v-model="backuptrue" label="备件"></mu-switch>
                        <mu-switch v-model="rawtrue" label="原材料"></mu-switch>

                    </div>
                </mu-expansion-panel>
            </section>
            <aside v-if="showtemplist">
                <mu-sub-header>模板</mu-sub-header>
                <mu-list>
                    <mu-list-item button :ripple="false" v-for="temp in parttemplates" :key="temp">
                        <mu-list-item-title>{{temp}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </aside>

            <aside v-if="showunit">
                <mu-button icon color="primary" @click="rightsideshow=!rightsideshow">
                    <mu-icon value="close"></mu-icon>
                </mu-button>
                <mu-list>
                    <mu-list-item :key="option" v-for="option in units">
                        <mu-list-item-content>
                            <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
                <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
            </aside>
            <aside v-if="showhelp">
                <mu-button icon color="red" @click="showhelp=false">
                    <mu-icon value="close"></mu-icon>
                </mu-button>

                该处显示帮助文件
                <mu-bottom-nav>
                    <mu-bottom-nav-item title="帮助" icon="help"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="模板" icon="library_books"></mu-bottom-nav-item>

                </mu-bottom-nav>
            </aside>
            <unitDialog ref="unit" />
            <!-- <mu-dialog title="选择单位" width="360" scrollable :open.sync="openunitdalog">
                <mu-list>
                    <mu-list-item :key="option" v-for="option in qtyunitList">
                        <mu-list-item-content>
                            <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
                <mu-button slot="actions" flat @click="closeunitDialog">管理</mu-button>
                <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
            </mu-dialog> -->

        </article>


    </main>
</template>

<script>
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from "vuex";
    import unitDialog from '@/components/unitDialog.vue'
    // import '@/assets/iconfont/iconfont.css'
    // import tree from "./tree"
    const subtypes = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const relations = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const materials = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const raws = ["材料 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    // const units = ['Option 1', 'Option 2', 'Option 3', 'Option 4',
    //     'Option 5'
    // ];
    export default {
        components: {
            // tree,
            unitDialog
        },
        props: {
            showhelp: true,
            showtemlist: true
        },
        data() {
            return {
                showtemplist: false,
                helpbutton: true,
                rightsideshow: true,
                showunit: false,
                no: 1,
                type: "",
                subtype: "",

                subtypes,
                othertype: "",
                partno: "",
                version: "",
                name: "",
                stand: true,
                gb: "",
                rule: "",
                setqty: 1,
                unit: "件",
                setweight: "",
                relation: [],
                relations,
                drawings: true,
                search: true,
                material: "",
                materials,
                raw: "",
                raws,
                code: true,
                maintaintrue: true,
                backuptrue: false,
                weldtrue: false,
                rawtrue: false,
                archive: true,
                size: "",
                opensaveto: false,
                rightsideshow: true,
                items: [{
                        text: "项目",
                        disabled: false
                    },
                    {
                        text: "...",
                        disabled: false
                    },
                    {
                        text: "Link2",
                        disabled: true
                    }
                ]
            };
        },
        computed: {
            ...mapGetters(['productTypes']),

        },
        methods: {
            selectunit() {
                this.$refs.unit.openunitdalog = true;
                this.unit = this.$refs.unit.unit

            },
            // ...mapMutations(["addpart", "modifypart"]),
            opentemplist() {
                this.$refs.att.showtemplist = !this.$refs.att.showtemplist;
            },

            savepaer({}) {},
            savetolib() {
                this.$refs.savelocation.showdialog = true;
            },

            searchcode(text) {
                this.$router.push("BlankPart/searchcode");
            },

            getmaterial(text) {
                this.$router.push("BlankPart/getmaterial");
            },
            getraw(text) {
                this.$router.push("BlankPart/getraw");
            },
            getrelation(text) {
                this.$router.push("BlankPart/getrelation");
            },
            getdcode(text) {
                this.$router.push("BlankPart/getdcode");
            },

            getdrawing(text) {
                this.$router.push("BlankPart/getdrawing");
            }
        }
    };
</script>

<style lang="less" scoped>
    .mu-menu {
        vertical-align: initial;
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

    .mu-raised-button,
    .mu-ripple-wrapper,
    .mu-button {
        // min-width: 10px;
        // width: 25px;
        // border-radius: 2px;
        line-height: 30px;
        // text-align: left;
    }
</style>