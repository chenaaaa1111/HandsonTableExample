<template>
    <div>
        <header>
            <ptoolbar />
        </header>

        <article>
            <mu-paper :z-depth="1">
                <Gantt style="height:600px;" />
                <!-- <mu-data-table :loading="false" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange"
                    :data="list.slice(0, 6)">

                    <template slot-scope="scope">
                        <mu-button icon color="primary">
                            <mu-icon value="navigate_next"></mu-icon>
                        </mu-button>
                        <td class="is-right">{{scope.row.iron}}</td>
                        <td class="is-right">{{scope.row.calories}}</td>
                        <td class="is-right">{{scope.row.fat}}</td>
                        <td>{{scope.row.name}}</td>


                        <td class="is-right">{{scope.row.carbs}}</td>
                        <td class="is-right">{{scope.row.protein}}</td>


                        <div>
                            <mu-button icon color="primary" @click="viewproject()">
                                <mu-icon value="info"></mu-icon>
                            </mu-button>
                            <mu-button icon color="primary" @click="viewatt()">
                                <mu-icon value="timeline"></mu-icon>
                            </mu-button>
                            <mu-menu placement="bottom-end" :open.sync="open">
                                <mu-button icon>
                                    <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                                </mu-button>
                                <mu-list slot="content">
                                    <mu-list-item button @click="this.$router.push({path:('/PartList')})">
                                        <mu-list-item-title>进入</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button>
                                        <mu-list-item-title>添加到</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button>
                                        <mu-list-item-title>上移</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button>
                                        <mu-list-item-title>下移</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button>
                                        <mu-list-item-title>拆分</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button>
                                        <mu-list-item-title>预留</mu-list-item-title>
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
                <mu-pagination :total="1000" :current.sync="current"></mu-pagination> -->

            </mu-paper>
        </article>
    </div>
</template>
<script>
    // import ptoolbar from "./Ptoolbar.vue";
    import Gantt from './Gantt.vue';
    export default {
        components: {
            // ptoolbar,
            Gantt,


        },
        data() {
            return {
                listtoolbar: true,
                layer: "1",
                value3: true,
                tasks: {
                    data: [{
                            id: 1,
                            text: 'Task #1',
                            start_date: '15-04-2017',
                            duration: 3,
                            progress: 0.6
                        },
                        {
                            id: 2,
                            text: 'Task #2',
                            start_date: '18-04-2017',
                            duration: 3,
                            progress: 0.4
                        }
                    ],
                    links: [{
                        id: 1,
                        source: 1,
                        target: 2,
                        type: '0'
                    }]
                },
                sort: {
                    name: "",
                    order: "asc"
                },
                columns: [{
                        title: "",
                        width: 30,
                        name: "name"
                    },
                    // {
                    //     title: "序号",
                    //     width: 50,
                    //     name: "name"
                    // },
                    {
                        title: "层级",
                        width: 20,
                        name: "calories"
                    },
                    {
                        title: "零件号",
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
                        title: "单套数量",
                        name: "carbs",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "总数量",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "单位",
                        name: "protein",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "计划开始时间",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "计划完成时间",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "工时",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "执行方",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "费用",
                        name: "iron",
                        width: 126,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "前置任务",
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
            viewatt() {
                this.$router.push({
                    path: 'pjtaction',
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });
            },
            viewproject() {
                this.$router.push({
                    path: 'pjtatt',
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });
            },
        }
    };
</script>
<style lang="less" scoped>
    .title-left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        align-content: center;
    }

    .title-right {
        flex: 1 1 100px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        /* margin-left: -50px; */
    }
</style>