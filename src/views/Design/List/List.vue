<template>
    <article>
        <section>
            <mu-data-table :loading="false" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)"
                @select-change="handleSelectChange" selectable select-all :selects.sync="selects" checkbox>

                <template slot-scope="scope">

                    <td class="is-right">{{scope.row.iron}}</td>
                    <td class="is-right">{{scope.row.calories}}</td>
                    <td class="is-right">{{scope.row.fat}}</td>
                    <td>{{scope.row.name}}</td>
                    <td class="is-right">{{scope.row.carbs}}</td>
                    <td class="is-right">{{scope.row.protein}}</td>

                    <td class="icongroup">

                        <mu-button icon color="#e0e0e0" @click="reviewpart()">
                            <mu-icon value="info"></mu-icon>
                        </mu-button>

                        <mu-button icon color="#e0e0e0" @click="viewfulllist()">
                            <mu-icon value="group_work"></mu-icon>
                        </mu-button>
                        <mu-button icon color="#e0e0e0" @click="reviewpart()">
                            <mu-icon vertical-align=bottom value="photo"></mu-icon>
                        </mu-button>
                        <mu-menu placement="bottom-end" :menuopen.sync="menuopen">
                            <mu-button icon color="#bdbdbd">
                                <mu-icon vertical-align=bottom value="more_vert"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button @click="viewdetail">
                                    <mu-list-item-title>预览</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button to="/Manufactory/raw">
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

                    </td>

                </template>
            </mu-data-table>
            <div class="fastaddgroup">
                <mu-button icon color="primary" @click="enablefastadd=true">
                    <mu-icon value="add_circle_outline"></mu-icon>
                </mu-button>
                <div class="fastadd" v-if="enablefastadd">
                    <mu-text-field action-icon="search"></mu-text-field>
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
            <fulllist ref="fulllist" />
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
    import fulllist from '@/components/fullscreen';
    export default {
        components: {
            toolbar,
            fulllist,

        },
        props: {
            viewtype: {
                type: String
            }
        },

        data() {
            return {
                selects: [],
                rightsideshow: false,
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
                        width: 80,
                        name: "calories"
                    },
                    {
                        title: "零件号",
                        name: "name",

                        align: "center",
                        sortable: true
                    },
                    {
                        title: "名称",
                        name: "fat",

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
                        title: "材质/品牌",
                        name: "iron",

                        align: "center",
                        sortable: true
                    },
                    {
                        title: "操作",
                        name: "iron",
                        width: 200,
                        align: "center",

                    }
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
            reviewpart() {
                this.$router.push({
                    path: "Design/ReviewPart"
                    // query: {
                    //     id: thisId,
                    //     option: ""
                    // }
                });
            },
            viewdetail() {
                this.rightsideshow = !this.rightsideshow;
            },
            viewfulllist() {
                // this.$router.push({
                //     path: 'Manufactory',
                //     query: {
                //         id: thisId,
                //         option: ""
                //     }
                // });
                this.$refs.fulllist.openFullscreen = true;
            },
            createpart() {
                this.$router.push({
                    path: "Design/CreatePart"
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
    .mu-table {
        width: 1000px;
    }

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