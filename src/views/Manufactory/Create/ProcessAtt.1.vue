<template>
    <div class="mygrid">
        <!-- <mu-paper :z-depth="1"> -->

        <mu-breadcrumbs divider="—">
            <mu-icon value="chevron_right" slot="divider"></mu-icon>
            <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
        </mu-breadcrumbs>
        <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
            <mu-tab @click="changetab('attrib')">属性</mu-tab>
            <mu-tab @click="changetab('drawings')">图纸</mu-tab>
            <mu-tab @click="changetab('search')">核价</mu-tab>
            <mu-tab @click="changetab('material')">工艺/设备</mu-tab>
        </mu-tabs>

        <div class="list" v-if="active === 0">
            <div>
                <mu-text-field v-model="name" placeholder="序号" icon="looks_one" style="min-width:10px;width:120px"></mu-text-field>
                <mu-tooltip content="自定义颜色">
                    <mu-button icon style="margin-left:50px">
                        <mu-icon value="color_lens" color="red"></mu-icon>
                    </mu-button>
                </mu-tooltip>
                <mu-text-field v-model="name" prefix="编码:" solo style="margin-left:50px"></mu-text-field>
            </div>
            <div>
                <mu-auto-complete :data="cutmethod" icon="tab" :action-icon="'keyboard_arrow_down'" :max-search-results="5"
                    v-model="name" open-on-focus style="min-width:10px;width:160px"></mu-auto-complete>
                <mu-text-field v-model="name" placeholder="工艺内容" :action-icon="'more_vert'" :action-click="selectcostway"></mu-text-field>
                <mu-text-field class="mygridcol-1" v-model="name" label="前置工序" :action-icon="'search'" style="min-width:10px;width:150px;margin-left:20px;"></mu-text-field>

                <!-- <mu-icon value="color_lens"> </mu-icon>材质:xxxxxxx -->
            </div>
            <div>
                <mu-icon style="margin-left:15px;" value="photo"></mu-icon>
                <mu-chip @delete="handleClose" delete style="margin-left:15px;">
                    delete chip
                </mu-chip>
                <mu-button icon @click="adddrawingbtn">
                    <mu-icon value="add"></mu-icon>
                </mu-button>


            </div>


            <mu-text-field v-model="name" label="单价" prefix="￥" icon="star" :action-icon="'more_vert'" :action-click="selectcostway"
                style="min-width:10px;width:200px" suffix="/kg" type='number'></mu-text-field>
            <div>
                <mu-date-input v-model="startdate" label="计划开始时间" label-float icon="date_range"></mu-date-input>
                <mu-date-input v-model="enddate" label="计划完成时间" label-float icon="keyboard_arrow_right"></mu-date-input>
            </div>





        </div>

        <div class="demo-text" v-if="active === 1">
            <div class="drawing">
                <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                    <mu-card-header title="Myron Avatar">
                    </mu-card-header>
                    <mu-card-media>
                        <img src="@/assets/logo.png">
                    </mu-card-media>
                    <mu-card-actions>
                        <mu-button flat>库中图纸</mu-button>
                        <mu-button flat>本地上传图纸</mu-button>
                    </mu-card-actions>
                </mu-card>
                <div class="drawingtext">
                    <div>
                        <mu-text-field v-model="name" placeholder="长..." style="min-width:10px;width:150px"></mu-text-field>
                        <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                            <mu-icon left value="attach_file"></mu-icon>
                            倒角样式
                        </mu-button>
                        <mu-text-field v-model="name" placeholder="余量"></mu-text-field>
                    </div>
                    <mu-text-field class="mygridcol-1" v-model="name" placeholder="宽..."></mu-text-field>
                    <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                        <mu-icon left value="attach_file"></mu-icon>
                        倒角样式
                    </mu-button>
                    <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>
                    <mu-text-field class="mygridcol-1" v-model="name" placeholder="高..."></mu-text-field>
                    <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                        <mu-icon left value="attach_file"></mu-icon>
                        倒角样式
                    </mu-button>
                    <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>

                    <mu-text-field class="mygridcol-1" v-model="name" placeholder="数量"></mu-text-field>
                </div>
            </div>
        </div>
        <div class="demo-text" v-if="active === 2">
            <mu-tabs :value.sync="costway" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
                <mu-tab>固定单价</mu-tab>
                <mu-tab>基于公式</mu-tab>
                <mu-tab>基于表格</mu-tab>
            </mu-tabs>
        </div>

        <div class="demo-text" v-if="active === 3">
            <mu-list textline="two-line">
                <mu-sub-header inset>选择工艺类型</mu-sub-header>
                <mu-list-item avatar button :ripple="false" v-for="item in rawtypes" :key="item.id" style="text-align:center;padding-left:40px;padding-right:40px;">
                    <mu-list-item-action>
                        <mu-avatar>
                            <mu-icon :value="item.icon"></mu-icon>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{item.name}}</mu-list-item-title>
                        <mu-list-item-sub-title>{{item.desc}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                            <mu-icon value="keyboard_arrow_right"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                </mu-list-item>
            </mu-list>
            <mu-flex justify-content="center">
                <mu-button flat @click="showdevicetable=!showdevicetable">
                    <mu-icon value="keyboard_arrow_down"></mu-icon>展开机床或设备(可选)
                </mu-button>
            </mu-flex>
            <mu-paper :z-depth="1" style="padding-left:40px;padding-right:40px;">
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
        </div>
    </div>
</template>

<script>
    // import './Design.css'
    export default {
        data() {
            return {
                active: 0,
                cutmethod: ["火焰切割机", "激光", "等离子", "锯床", "线切割", "水刀", ],
                rawtypes: [{
                        name: "铆焊",
                        icon: "toll",
                        desc: "下料,焊接,喷砂,抛丸,整形,失效处理",
                        path: "test"
                    },
                    {
                        name: "金工",
                        icon: "",
                        desc: "车,铣,磨,钻,CNC",
                        path: "ProcessPart"
                    },
                    {
                        name: "钣金",
                        icon: "",
                        desc: "折弯,冲孔,焊接",
                        path: "ProcessPart"
                    },
                    {
                        name: "检验",
                        icon: "",
                        desc: "",
                        path: "PurchaseAtt"
                    },
                    {
                        name: "装配",
                        icon: "",
                        desc: "打磨,冷却,加热,组装,配管,配线,点动,联动,单机调试,整机调试",
                        path: "CreatePart"
                    },
                    {
                        name: "购买",
                        icon: "",
                        desc: "整体购买",
                        path: "CreatePart"
                    }
                ],
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
                    }
                ],
                showdevicetable: false,
                selectdevices: [],
                sort: {
                    name: "",
                    order: "asc"
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
                        align: "center"
                    }
                ],
                devicelist: [{
                        name: "Frozen Yogurt",
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        iron: 1
                    },
                    {
                        name: "Ice cream sandwich",
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        iron: 1
                    },
                    {
                        name: "Eclair",
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        iron: 7
                    },
                    {
                        name: "Cupcake",
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        iron: 8
                    },
                    {
                        name: "Gingerbread",
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        iron: 16
                    },
                    {
                        name: "Jelly bean",
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        iron: 0
                    },
                    {
                        name: "Lollipop",
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        iron: 2
                    },
                    {
                        name: "Honeycomb",
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: 45
                    },
                    {
                        name: "Donut",
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: 22
                    },
                    {
                        name: "KitKat",
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
                purchaseyes: false
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
                this.list = this.list.sort(
                    (a, b) => (order === "asc" ? a[name] - b[name] : b[name] - a[name])
                );
            },
            removeSelect(selectIndex) {
                const index = this.selects.indexOf(selectIndex);
                this.selects.splice(index, 1);
            },
            selectcostway() {
                // this.rightsideshow = true;
                this.openselectcostwaydalog = true;
            },
            closeselectcostwayDialog() {
                // this.rightsideshow = true;
                this.openselectcostwaydalog = false;
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

    .drawing {
        display: flex;
        justify-content: space-between;
    }

    .drawingtext {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .list {
        display: flex;
        flex-direction: column;

    }
</style>