<template>
    <aside class="mygrid">
        <!-- <mu-paper :z-depth="1"> -->
        <!-- <div style="text-align:center;padding-left:40px;padding-right:40px;"> -->
        <mu-paper :z-depth="1" class="list">
            <!-- <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                <mu-tab @click="changetab('attrib')">属性</mu-tab>
                <mu-tab @click="changetab('material')">材料</mu-tab>
                <mu-tab @click="changetab('drawings')">图纸</mu-tab>
                <mu-tab @click="changetab('search')">核价</mu-tab>
                <mu-tab @click="changetab('material')">工艺/设备</mu-tab>

            </mu-tabs> -->
            <div>
                <!-- <mu-text-field v-model="name" prefix="编码:" icon="color_lens" solo></mu-text-field> -->
                <!-- <mu-tooltip content="自定义颜色"></mu-tooltip> -->
            </div>
            <!-- <mu-text-field v-model="name" placeholder="序号" icon="looks_one" style="min-width:10px;width:120px"></mu-text-field> -->

            <!-- <mu-icon value="color_lens"> </mu-icon>材质:xxxxxxx -->
            <div>
                <mu-text-field v-model="name" placeholder="物料类型/规格" icon="star" :action-icon="'more_vert'"
                    :action-click="selectrawcate"></mu-text-field>
                <mu-text-field v-model="name" placeholder="尺寸" icon=" " suffix="m" help-text="格式:长/宽/厚(高)" :action-icon="'more_vert'"
                    :action-click="selectrawsize"></mu-text-field>
                <!-- <mu-icon value="photo"></mu-icon> -->
            </div>
            <mu-auto-complete :data="cutmethod" placeholder="下料方式" icon="tab" :max-search-results="8" v-model="name"
                open-on-focus :action-icon="'more_vert'" :action-click="showdevices"></mu-auto-complete>
            <!-- <mu-button flat @click="showdevice=!showdevice" color="gray">
                <mu-icon value="keyboard_arrow_down"></mu-icon>展开机床或设备
            </mu-button> -->
            <mu-text-field v-model="name" label="成本" prefix="￥" icon=":iconfont icon-chengben" :action-icon="'more_vert'"
                :action-click="selectcostway" style="min-width:10px;width:200px" type='number'></mu-text-field>

        </mu-paper>
        <!-- </div> -->
        <rawcate ref="rawcate" />
        <costcate ref="costcate" />

        <mu-bottom-sheet :open.sync="showrawsize">
            <rawsize ref="rawsize" />
        </mu-bottom-sheet>


        <mu-bottom-sheet :open.sync="showdevice">
            <mu-paper v-if="showdevice" :z-depth="1" style="padding-left:40px;padding-right:40px;">
                <mu-tabs :value.sync="costway" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
                    <mu-tab>自制</mu-tab>
                    <mu-tab>外协</mu-tab>
                    <mu-tab>周边</mu-tab>
                </mu-tabs>
                <mu-data-table selectable select-all :selects.sync="selectdevices" checkbox :columns="devicetitle"
                    :sort.sync="sort" @sort-change="handleSortChange" :data="devicelist.slice(0, 6)">
                    <template slot-scope="scope">
                        <td class="is-right">{{scope.row.fat}}</td>
                        <td>{{scope.row.name}}</td>
                        <td class="is-right">{{scope.row.calories}}</td>
                        <td class="is-right">{{scope.row.carbs}}</td>
                        <td class="is-right">{{scope.row.protein}}</td>
                        <td class="is-right">{{scope.row.iron}}%</td>
                        <mu-button icon color="primary" @click="reviewpart()">
                            <mu-icon value="view"></mu-icon>查看
                        </mu-button>
                    </template>
                </mu-data-table>
            </mu-paper>
        </mu-bottom-sheet>






    </aside>
</template>

<script>
    import rawcate from './RAW/RAWDialog';
    import costcate from '@/components/costcatedialog';
    import rawsize from '@/components/raw/rawcatetable'
    export default {
        components: {
            rawcate,
            costcate,
            rawsize,
        },

        data() {
            return {

                showrawsize: false,
                showdevice: false,
                cutmethod: ["火焰切割机", "激光", "等离子", "锯床", "线切割", "水刀", ],
                cutmethods: [{
                        name: "火焰切割机",
                        icon: "",
                        desc: "",
                        path: "test"
                    },
                    {
                        name: "激光",
                        icon: "",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "等离子",
                        icon: "",
                        desc: "",
                        path: "ProcessPart"
                    },
                    {
                        name: "锯床",
                        icon: "",
                        desc: "",
                        path: "PurchaseAtt"
                    },
                    {
                        name: "线切割",
                        icon: "",
                        desc: "",
                        path: "CreatePart"
                    },
                    {
                        name: "水刀",
                        icon: "",
                        desc: "",
                        path: "CreatePart"
                    },
                ],
                showdevicetable: false,
                selectdevices: [],
                sort: {
                    name: '',
                    order: 'asc'
                },
                devicetitle: [{
                        title: "序号",
                        width: 30,
                        name: "name"
                    },
                    {
                        title: "设备名称",
                        name: "name",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "型号",
                        name: "fat",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "类型",
                        name: "carbs",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "加工范围",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "位置",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },

                    {
                        title: "负责人",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "状态",
                        name: "iron",
                        width: 126,
                        align: "center",

                    },
                ],
                devicelist: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: 8
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: 16
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: 0
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: 2
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: 45
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: 22
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: 6
                    }
                ],
                startdate: "",
                enddate: "",
                actualstartdate: "",
                actualenddate: "",
                listaction: [{
                        title: '序号',
                        width: 60,
                        name: 'rawID'
                    },
                    // {
                    //     title: '零件号',
                    //     width: 120,
                    //     name: 'partcode',
                    //     align: 'center',
                    // },
                    {
                        title: '子件号',
                        width: 150,
                        name: 'rawcode'
                    },
                    // {
                    //     title: '零件名',
                    //     width: 200,
                    //     name: 'partname',
                    //     align: 'left',
                    // },
                    {
                        title: '物料类型',
                        name: 'rawtype',
                        width: 100,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '规格尺寸',
                        name: 'rawsize',
                        width: 120,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '长/宽/厚',
                        name: 'rawlength',
                        width: 100,
                        align: 'center',
                        sortable: true
                    },

                    {
                        title: '数量',
                        name: 'rawqty',
                        width: 80,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '单重',
                        name: 'setweight',
                        width: 80,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '总重',
                        name: 'setweight*rawqty',
                        width: 80,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作',
                        name: 'setweight*rawqty',
                        width: 200,
                        align: 'center',
                        sortable: true
                    },


                ],
                rawlist: [{
                        rawID: "", //（材料编号）
                        partcode: "42242524",
                        rawcode: "42242524-1",
                        partname: "Frozen Yogurt", //名称
                        rawtype: "型材", // 是板材
                        rawsubtype: "槽钢",
                        rawsize: "100*50", // 型号规格、截面积
                        rawlength: "2010",
                        rawwidth: "",
                        rawthickness: "",
                        rawqty: "2",
                        setweight: "2323",
                        setprofile: "",
                        cost: "21",
                    },
                    {
                        rawID: "", //（材料编号）
                        partcode: "42242524",
                        rawcode: "42242524-1",
                        partname: "Ice cream sandwich", //名称
                        rawtype: "型材", // 是板材
                        rawsubtype: "矩形管",
                        rawsize: "100*50*10", // 型号规格、截面积
                        rawlength: "2000",
                        rawwidth: "",
                        rawthickness: "",
                        rawqty: "2",
                        setweight: "2323",
                        setprofile: "",
                        cost: "21",
                    },
                    {
                        rawID: "", //（材料编号）
                        partcode: "42242524",
                        rawcode: "42242524-1",
                        partname: "Eclair", //名称
                        rawtype: "型材", // 是板材
                        rawsubtype: "方钢",
                        rawsize: "50*10", // 型号规格、截面积
                        rawlength: 200,
                        rawwidth: 0,
                        rawthickness: 0,
                        rawqty: 2,
                        setweight: 2323,
                        setprofile: "",
                        cost: "21",
                    },

                ],

                purchaseyes: false,
            };
        },

        // methods: {
        //     btnclik: function () {
        //         this.$route.push({});
        //     }
        // }
        methods: {
            handleSortChange({
                name,
                order
            }) {
                this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
            },
            removeSelect(selectIndex) {
                const index = this.selects.indexOf(selectIndex);
                this.selects.splice(index, 1);
            },
            selectcostway() {
                // this.rightsideshow = true;
                this.$refs.costcate.openselectcostwaydalog = true;
            },
            showdevices() {
                this.showdevice = true;
            },
            selectrawcate() {
                this.$refs.rawcate.openrawcatedialog = true
            },
            selectrawsize() {
                this.showrawsize = true
            }

        }
    };
</script>
<style scoped>
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
        display: flex;
        justify-content: space-between;
    }

    .mygridcol-3 {
        flex: 1 1 33.33%;
    }

    .mygridcol-4 {
        margin: 10px;
        flex: 0 1 10%;
    }

    .list {
        display: flex;
        flex-direction: column;

    }
</style>