<template>
    <div>
        <mu-paper :z-depth="1">
            <mu-data-table :loading="false" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
                <template v-if="extendopen" slot="expand" slot-scope="prop">
                    <div style="padding: 24px;">this is expand row, name {{prop.row.name}}</div>
                </template>
                <template slot-scope="scope">
                    <mu-button icon color="primary" @click="extendtable">
                        <mu-icon v-show="extendopen" value="navigate_next"></mu-icon>
                        <mu-icon v-show="!extendopen" value="keyboard_arrow_down"></mu-icon>
                    </mu-button>
                    <td class="is-right">{{scope.row.iron}}</td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">{{scope.row.fat}}</td>
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td class="is-right">{{scope.row.protein}}</td>
                    <div class="buttongroups">

                        <mu-button icon color="#e0e0e0" @click="reviewpart()">
                            <mu-icon value="info"></mu-icon>
                        </mu-button>

                        <mu-button icon color="#e0e0e0" @click="viewfulllist()">
                            <mu-icon value="group_work"></mu-icon>
                        </mu-button>

                        <mu-menu placement="bottom-end" :menuopen.sync="menuopen">
                            <mu-button icon color="#bdbdbd">
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button @click="createpart()">
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
                    <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">
                        <mu-appbar color="primary" title="Fullscreen Diaolog">
                            <mu-button slot="left" icon @click="closeFullscreenDialog">
                                <mu-icon value="close"></mu-icon>
                            </mu-button>
                            <mu-button slot="right" flat @click="closeFullscreenDialog">
                                Done
                            </mu-button>
                        </mu-appbar>
                        <div style="padding: 24px;">
                            this is a fullscreen dialog
                        </div>
                    </mu-dialog>
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
                <mu-pagination :total="300" :current.sync="current" style="margin-top:5px;"></mu-pagination>
            </mu-flex>
        </mu-paper>
    </div>
</template>
<script>
    export default {
        components: {
            toolbar,


        },
        props: {
            viewtype: {
                type: String
            },
        },

        data() {
            return {
                listtoolbar: true,
                layer: "1",
                value3: true,
                menuopen: false,
                current: 1,
                enablefastadd: false,
                extendopen: false,
                openFullscreen: false,
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
                        title: "序号",
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
                        width: 200,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "数量",
                        name: "carbs",
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
                        title: "材料类型",
                        name: "iron",
                        width: 200,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "材料规格",
                        name: "iron",
                        width: 200,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "材质",
                        name: "iron",
                        width: 200,
                        align: "center",
                        sortable: true
                    },
                    {
                        title: "下料方式",
                        name: "iron",
                        width: 200,
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
            reviewpart() {
                this.$router.push({
                    path: 'Design/ReviewPart',
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });

            },
            extendtable() {
                this.extendopen = !this.extendopen;

            },
            viewfulllist() {
                // this.$router.push({
                //     path: 'Manufactory',
                //     query: {
                //         id: thisId,
                //         option: ""
                //     }
                // });
                this.openFullscreen = true;
            },
            createpart() {
                this.$router.push({
                    path: 'Design/CreatePart',
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });

            },
            closeFullscreenDialog() {
                this.openFullscreen = false;
            }
        }
    };
</script>
<style lang="less" scoped>
    .buttongroups {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

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