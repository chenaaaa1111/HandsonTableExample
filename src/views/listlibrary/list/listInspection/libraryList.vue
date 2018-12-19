<template>
    <article>
        <section>
            <mu-data-table :loading="false" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange"
                @select-change="handleSelectChange" :data="list.slice(0, 6)" selectable select-all :selects.sync="selects"
                checkbox>
                <!-- <template slot="expand" slot-scope="prop">
                        <div style="padding: 24px;">this is expand row, name {{prop.row.name}}</div>
                    </template> -->
                <template slot="th" slot-scope="column">


                    <mu-tooltip :content="column.title">
                        <mu-flex align-items="center" justify-content="center">
                            <span>{{column.title}}</span>
                            <!-- <mu-icon class="mu-table-sort-icon" value="arrow_drop_down"></mu-icon> -->
                        </mu-flex>
                    </mu-tooltip>
                </template>

                <template slot-scope="scope">
                    <td>

                    </td>
                    <td class="is-right">{{scope.row.iron}}
                        <!-- <mu-menu placement="top-start" open-on-hover>
                            <mu-button color="primary">显示层级</mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-title>Refresh</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>Send feedback</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu> -->
                    </td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">{{scope.row.fat}}</td>
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td class="is-right">{{scope.row.protein}}</td>
                    <td class="is-right">
                        <!-- <mu-auto-complete :data="suppliers" placeholder="供应商/工厂" v-model="supplier"></mu-auto-complete> -->
                        <!-- <mu-select label="Normal" v-model="normal.value1" full-width>
                            <mu-option v-for="(option,index) in options" :key="option" :label="option" :value="option"></mu-option>
                        </mu-select> -->
                    </td>

                    <div class="icongroup">
                        <mu-button icon color="primary" @click="createprocess()">
                            <mu-icon value="add"></mu-icon>
                        </mu-button>

                        <mu-menu placement="bottom-end" :moreopen.sync="moreopen">
                            <mu-button icon>
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button to="partsinspection">
                                    <mu-list-item-title>进入</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="viewdetail">
                                    <mu-list-item-title>预览</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button to="Manufactory/partstep">
                                    <mu-list-item-title>自制</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button to="Purchase/Partstep">
                                    <mu-list-item-title>采购</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>创建子件</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button @click="openAlertDialog">
                                    <mu-list-item-title>分享</mu-list-item-title>
                                </mu-list-item>
                                <mu-divider></mu-divider>
                                <mu-list-item button>
                                    <mu-list-item-title>删除</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </div>

                </template>
            </mu-data-table>
            <div class="fastaddgroup">
                <mu-button icon color="primary" @click="enablefastadd=true">
                    <mu-icon value="add_circle_outline"></mu-icon>
                </mu-button>
                <div class="fastadd" v-if="enablefastadd">
                    <mu-text-field></mu-text-field>
                    <mu-text-field></mu-text-field>
                    <mu-button icon color="primary">
                        <mu-icon value="save"></mu-icon>
                    </mu-button>
                    <mu-button icon color="primary" @click="enablefastadd=false">
                        <mu-icon value="close"></mu-icon>
                    </mu-button>
                </div>
            </div>
            <mu-flex justify-content="end">
                <mu-pagination :total="1000" :current.sync="current"></mu-pagination>
            </mu-flex>

            <share ref="sharedialog" />

        </section>
        <aside v-if="rightsideshow">
            <mu-button icon color="red" @click="rightsideshow=false">
                <mu-icon value="close"></mu-icon>
            </mu-button>

            this is asd
        </aside>


    </article>

</template>
<script>
    import share from "@/components/Share";

    export default {
        components: {
            share,

        },
        data() {
            return {
                selects: [],
                current: 1,
                supplier: "",
                suppliers: [],
                moreopen: false,
                sharetime: 1,
                sharepeoples: [],
                rightsideshow: false,
                enablefastadd: false,
                sort: {
                    name: "",
                    order: "asc"
                },
                columns: [{
                        title: "序号",
                        width: 50,
                        name: "name"
                    },
                    {
                        title: "",
                        width: 20,
                        name: "calories"
                    },
                    {
                        title: "项目",
                        name: "name",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "清单编号",
                        name: "name",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "名称",
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
                        title: "状态",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "创建人",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "创建时间",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },

                ],
                list: [{
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
                ]
            };
        },

        methods: {
            handleSortChange({
                name,
                order
            }) {
                this.list = this.list.sort(
                    (a, b) => (order === "asc" ? a[name] - b[name] : b[name] - a[name])
                );
            },
            handleSelectChange() {
                if (this.selects.length > 0)
                    this.$parent.selectitem = true;
                else
                    this.$parent.selectitem = false;
            },
            createprocess() {
                this.$router.push({
                    path: "Manufactory/CreateProcess"
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });
            },
            viewdetail() {
                this.rightsideshow = true;
            },

            reviewpart() {
                this.$router.push({
                    path: "Manufactory/ProcessPart"
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });
            },
            openAlertDialog() {
                this.$refs.sharedialog.openshare = true;
            },
            closeAlertDialog() {
                this.$refs.sharedialog.openshare = false;
            },
            togglelayview() {
                this.layview = false;
            }
        }
    };
</script>
<style lang="less" scoped>
    .icongroup {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: nowrap;
        width: 100%;
        align-content: center;
    }

    .fastaddgroup {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .fastaddgroup>.fastadd {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
</style>