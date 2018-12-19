<template>
    <div class="mygrid">
        <div class="depthshadow">
            <mu-text-field v-model="name" placeholder="自动生成工序编码" disabled solo style="margin-left:15px"></mu-text-field>
            <mu-text-field prefix="*" v-model="name" placeholder="工序名称" style="min-width:10px;width:240px;margin-left:15px"></mu-text-field>
            <mu-text-field v-model="name" placeholder="数量" prefix="*" style="min-width:10px;width:80px" type="number"></mu-text-field>
            <mu-select v-model="qtytype" style="min-width:10px;width:70px;">
                <mu-option v-for="option in qtytypes" :key="option" :label="option" :value="option"></mu-option>
            </mu-select>
            <div>
                <mu-text-field prefix="*" v-model="name" label="工种" :action-icon="'more_vert'" :action-click="selectprocesscate"
                    style="min-width:10px;width:90px;margin-left:15px;"></mu-text-field>
                <mu-auto-complete :data="cutmethod" label="设备" :action-icon="'more_vert'" :action-click="showdevices"
                    :max-search-results="5" v-model="deviceselected" open-on-focus style="min-width:10px;width:150px"></mu-auto-complete>
            </div>
        </div>
        <div class="depthshadow">

            <div>
                <mu-text-field v-model="name" label="成本" prefix="￥" icon="" :action-icon="'more_vert'" :action-click="selectcostway"
                    style="min-width:10px;width:110px;margin-left:15px;" type='number'></mu-text-field>
                <!-- <mu-text-field v-model="name" label="数量" prefix="X" style="min-width:10px;width:50px" type='number'></mu-text-field>
                <mu-select v-model="qtytype" style="min-width:10px;width:70px;">
                    <mu-option v-for="option in qtytypes" :key="option" :label="option" :value="option"></mu-option>
                </mu-select> -->
            </div>
            <div>
                <mu-text-field solo multi-line :rows="3" :rows-max="6" v-model="name" placeholder="工艺内容" :action-icon="'expand_more'"
                    :action-click="opendetail" style="min-width:10px;width:200px;margin-left:15px;"></mu-text-field>

            </div>

            <div v-if="showdetail">
                <!-- 展开的内容 -->
                <mu-text-field v-model="name" label="截面/规格" icon="" :action-icon="'more_vert'" :action-click="selectrawcate"
                    style="min-width:10px;width:150px;margin-left:15px;"></mu-text-field>
                <mu-text-field v-model="name" placeholder="长/宽" style="min-width:10px;width:160px;margin-left:15px"
                    suffix="mm"></mu-text-field>
                <mu-text-field v-model="name" placeholder="单边余量" style="min-width:10px;width:160px;margin-left:15px"
                    suffix="mm"></mu-text-field>
                <mu-button flat @click="adddrawing">
                    <mu-icon style="margin-left:15px;" value="attach_file"></mu-icon>图纸
                </mu-button>

            </div>
        </div>
        <!-- <mu-select label="生产批量" v-model="qtytype" style="min-width:10px;width:160px;margin-left:15px;">
            <mu-option v-for="option in qtytypes" :key="option" :label="option" :value="option"></mu-option>
        </mu-select>
                    <mu-text-field v-model="name" label="数量" style="min-width:10px;width:120px" type='number' suffix="小批"
                :action-icon="'arrow_drop_down'" :action-click="chooserqtytype"></mu-text-field> -->


        <div class="depthshadow">
            <div>
                <mu-select label="刀具" v-model="tool" style="min-width:10px;width:160px;margin-left:15px;">
                    <mu-option v-for="item in tools" :key="item" :label="item" :value="item"></mu-option>
                </mu-select>
                <mu-text-field v-model="name" label="数量" prefix="X" style="min-width:10px;width:80px" type='number'></mu-text-field>
            </div>
            <div>
                <mu-select label="辅料" v-model="auxtool" style="min-width:10px;width:160px;margin-left:15px;">
                    <mu-option v-for="option in auxtools" :key="option" :label="option" :value="option"></mu-option>
                </mu-select>
                <mu-text-field v-model="name" label="数量" prefix="X" style="min-width:10px;width:80px" type='number'></mu-text-field>
            </div>
        </div>

        <div class="depthshadow">
            <mu-text-field v-model="name" label="前置工序" :action-icon="'search'" style="min-width:10px;width:150px;margin-left:15px;"></mu-text-field>
            <mu-date-input v-model="startdate" label="计划开始时间" label-float style="min-width:10px;width:150px;margin-left:15px;"></mu-date-input>
            <mu-date-input v-model="enddate" label="计划完成时间" label-float icon="keyboard_arrow_right" style="min-width:10px;width:150px;margin-left:15px;"></mu-date-input>
        </div>
        <rawcate ref="rawcate" />
        <costcate ref="costcate" />
        <drawingselectdialog ref="drawingselectdialog" />
        <processnavTable ref="processnavTable" />

        <mu-bottom-sheet :open.sync="showdevice">
            <mu-paper :z-depth="1" style="padding-left:40px;padding-right:40px;">
                <mu-tabs :value.sync="costway" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
                    <mu-tab>自制</mu-tab>
                    <mu-tab>外协</mu-tab>
                    <mu-tab>周边</mu-tab>
                </mu-tabs>
                <mu-data-table selectable select-all :selects.sync="selectdevices" checkbox :columns="devicetitle"
                    :sort.sync="sort" @sort-change="handleSortChange" :data="devicelist.slice(0, 6)">
                    <template slot-scope="scope">
                        <td class="is-right">序号</td>
                        <td>类型</td>
                        <td class="is-right">名称</td>
                        <td class="is-right">型号</td>
                        <td class="is-right">加工费用</td>
                        <td class="is-right">加工范围</td>
                        <td class="is-right">位置</td>
                        <td class="is-right">负责人</td>
                        <td class="is-right">
                            <mu-date-input v-model="startdate" solo></mu-date-input>
                        </td>
                        <td class="is-right">
                            <mu-date-input v-model="enddate" solo></mu-date-input>
                        </td>
                        <td class="is-right">
                            <mu-button flat>
                                查看
                            </mu-button>
                        </td>
                    </template>
                </mu-data-table>
            </mu-paper>
        </mu-bottom-sheet>
    </div>

</template>

<script>
    import rawcate from './RAW/RAWDialog';
    import costcate from '@/components/cost/selectDialog';
    import processnavTable from '@/components/process/processelectdialog';
    import rawsize from '@/components/raw/rawcatetable';
    import drawingselectdialog from '@/components/drawingselectdialog';
    export default {
        components: {
            rawcate,
            costcate,
            rawsize,
            drawingselectdialog,
            processnavTable
        },
        data() {
            return {
                active: 0,
                qtytype: "单件",
                showdetail: false,
                qtytypes: ['单件', '小批', '大批'],
                tool: "",
                tools: ['激光', '高速钢', '成形刀', '合金刀'],
                auxtool: "",
                auxtools: ['焊条', '冷却液'],
                cutmethod: ["火焰切割机", "激光", "等离子", "锯床", "线切割", "水刀", ],
                showdevice: false,
                showdevicetable: false,
                selectdevices: [],
                deviceselected: "",
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
                        title: "类型",
                        width: 30,
                        name: "name"
                    },
                    {
                        title: "名称",
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
                        title: "加工费用 元/时",
                        name: "protein",
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
                        title: "计划开始时间",
                        name: "iron",
                        width: 126,
                        align: "center"
                    },
                    {
                        title: "计划完成时间",
                        name: "carbs",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "状态",
                        name: "carbs",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
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
            selectprocesscate() {
                this.$refs.processnavTable.openprocessgdialog = true
            },
            selectrawsize() {
                this.showrawsize = true
            },
            opendetail() {
                this.showdetail = true
            },
            adddrawing() {
                this.$refs.drawingselectdialog.opendrawingdalog = true
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

    .depthshadow {
        -webkit-box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 1px 3px 0 rgba(0, 0, 0, .12);
        margin-bottom: 10px;
    }
</style>