<template>
    <article>
        <section class="list">
            <div>
                <mu-text-field icon=":iconfont icon-xuhao" style="min-width:10px;width:100px" type='number' v-model="no"
                    placeholder="序号"></mu-text-field>
                <mu-text-field icon=" " v-model="partno" prefix="*" placeholder="物料号，零件号..." :action-icon="'search'"
                    :action-click="codesearch"></mu-text-field>
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
                    open-on-focus :action-icon="'more_vert'" :action-click="selectmaterial"></mu-auto-complete>
                <mu-auto-complete icon=" " :data="materials" placeholder="材料" :max-search-results="5" v-model="material"
                    open-on-focus :action-icon="'more_vert'" :action-click="selectcate"></mu-auto-complete>
                <mu-text-field icon=" " type='number' v-model="setweight" label="重量" suffix="kg" label-float></mu-text-field>
            </div>

            <mu-auto-complete icon=" " :data="relations" prefix="关系" placeholder="和该零件有关系的..." :max-search-results="5"
                v-model="relation" :action-icon="'add'" :action-click="addrelation"></mu-auto-complete>

            <mu-divider></mu-divider>
            <mu-sub-header>自定义属性</mu-sub-header>

            <mu-text-field icon=" " v-model="size" placeholder="长..." type='number'></mu-text-field>



            <div>
                <mu-icon style="margin:15px" value="photo"> </mu-icon>
                <mu-chip style="margin:8px" v-for="chip in projectpic" :key="chip" color="chip" @delete="remove(index)"
                    delete>{{chip}}</mu-chip>
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="add"></mu-icon>
                    图纸
                </mu-button>
            </div>
            <mu-expansion-panel :expand="true" @change="toggle('panel1')">
                <div slot="header">选择类型</div>
                <div class="mygrid">
                    <mu-select label="类型" v-model="type">
                        <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
                    </mu-select>
                    <mu-select label="子类型" v-model="subtype">
                        <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                    </mu-select>

                    <!-- <mu-radio :value="1" v-model="othertype" :label="1"></mu-radio>
                <mu-radio :value="2" v-model="othertype" :label="2"></mu-radio>
                <mu-radio :value="3" v-model="othertype" :label="3"></mu-radio> -->
                    <mu-switch v-model="mantan" label="焊接件"></mu-switch>
                    <mu-switch v-model="mantan" label="维保"></mu-switch>
                    <mu-switch v-model="backup" label="备件"></mu-switch>
                    <mu-switch v-model="backup" label="原材料"></mu-switch>

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
        <mu-dialog title="选择单位" width="360" scrollable :open.sync="openunitdalog">
            <mu-list>
                <mu-list-item :key="option" v-for="option in units">
                    <mu-list-item-content>
                        <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
                    </mu-list-item-content>
                </mu-list-item>
            </mu-list>
            <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
        </mu-dialog>

    </article>
</template>

<script>
    // import '@/assets/iconfont/iconfont.css'
    // import tree from "./tree"
    const types = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const subtypes = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const relations = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    const materials = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
    // const units = ['Option 1', 'Option 2', 'Option 3', 'Option 4',
    //     'Option 5'
    // ];
    import {
        mapGetters
    } from 'vuex'
    export default {
        components: {
            // tree,
        },
        props: {
            showhelp: true,
            showtemlist: true,
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
                types,
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
                units: ["个", "套", "张", "盒", "袋", "米", "根", "打", "桶", "箱"],
                openunitdalog: false,
                setweight: "",
                relation: [],
                relations,
                drawings: true,
                search: true,
                material: "",
                materials,
                code: true,
                mantan: true,
                backup: false,
                archive: true,
                size: ""

                // normal: {
                //     value1: '',
                //     value2: '',
                //     value3: '',
                //     value4: 'Option 1',
                //     value5: 'Option 2'
                // }
            };
        },
        //   created: {},
        //   mounted: {

        //   },
        // this.attrib = '/CreateProd/' + '/CreateProdattrib';
        // beforeRouteUpdate(to, from, next) {
        //   this.detail = this.getPlayer(to.params.uid);
        //   this.profile = "/CreateProd/" + to.params.uid + "/profile";
        //   this.stats = "/CreateProd/" + to.params.uid + "/stats";
        //   next();
        // },
        methods: {
            attribbtn: function () {
                this.$router.push({
                    name: "CreateProdattrib"
                });
            },
            showhelp() {
                this.helpbutton = false;
                this.helppage = true;
            },
            closehelp() {
                this.helpbutton = true;
                this.helppage = false;
            },
            codesearch() {
                this.$emit("showpartcodelist");
            },
            addrelation() {
                this.$emit("showrelationpartlist");
            },
            selectunit() {
                // this.showunit = true;

                this.openunitdalog = true;
            },

            selectmaterial() {
                this.$emit("showmaterial");
            },
            selectcate() {
                this.$emit("showraw");
            },
            // addcodebtn() {
            //     this.$emit('addcode');
            // },
            // attribbtn: function(pname) {
            //   // this.$router.push();
            //   // this.$router.push({ path: `/player/${uid}/stats` });
            //   // this.$router.push({ name: 'CreateProdattrib', params: { uid: uid } });
            //   this.$router.push({ name: "CreateProdattrib" });
            // }
            adddrawingbtn() {
                this.$emit("adddrawing");
            },
            closeunitDialog() {
                this.openunitdalog = false;
                this.rightsideshow = false;
            }
        },
        computed: {
            units: state => state.unit.qtyList
        }
    };
</script>
<style lang="less" scoped>
    .list {
        display: flex;
        flex-direction: column;

    }
</style>