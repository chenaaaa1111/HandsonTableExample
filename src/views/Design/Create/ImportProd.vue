<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
            </div>

            <div class="right">
                <!-- <mu-select v-model="type">
                    <mu-option v-for="item in productTypes" :key="item.type" :label="item.name" :value="item.type"></mu-option>
                </mu-select> -->
                <mu-text-field v-model="searchword" :action-icon="'search' " :action-click="search"></mu-text-field>

            </div>
        </header>

        <mu-subheader>最近</mu-subheader>
        <div class="gridlayout" style="margin-top:10px;margin-bottom:20px">
            <div class="griditem" v-for="item in 5" :key="item">
                <mu-avatar text-color="orange200" color="pink400">
                    <mu-icon value="folder"></mu-icon>{{item}}
                </mu-avatar>
            </div>
        </div>



        <mu-divider></mu-divider>
        <mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
            <mu-tab @click="changetab('attrib')">产品库</mu-tab>
            <mu-tab @click="changetab('drawings')">通用机械零部件</mu-tab>
            <mu-tab @click="changetab('attrib')">行业设备</mu-tab>

        </mu-tabs>
        <mu-container v-if="active===0">
            产品库
            <div v-for="type in productTypes" :key="type.type">

                <mu-sub-header>{{type.name}}</mu-sub-header>
                <mu-button flat v-for="type in type.subtype" :key="type.type">
                    {{type.name}}</mu-button>
            </div>
        </mu-container>
        <mu-container v-if="active===1">
            <div v-for="type in productTypes" :key="type.type">

                <mu-sub-header>{{type.name}}</mu-sub-header>
                <mu-button flat v-for="type in type.subtype" :key="type.type">
                    {{type.name}}</mu-button>
            </div>
        </mu-container>
        <mu-container v-if="active===2">
            行业设备

        </mu-container>
        <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
            <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
                <td class="is-right">{{scope.row.protein}}</td>
                <td class="is-right">{{scope.row.fat}}</td>
                <td class="is-right">{{scope.row.carbs}}</td>
                <td class="is-right">{{scope.row.iron}}%</td>
                <div class="buttongroup">

                    <mu-button flat>引用
                        <mu-menu cover placement="bottom-end" :referopen.sync="referopen">
                            <mu-button right icon>
                                <mu-icon value="keyboard_arrow_down"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-title>仅自身</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>包含全部</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </mu-button>

                    <mu-button flat>复制
                        <mu-menu cover placement="bottom-end" :copyopen.sync="copyopen">
                            <mu-button icon>
                                <mu-icon right value="keyboard_arrow_down"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-title>仅自身</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-title>包含全部</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </mu-button>
                </div>
            </template>
        </mu-data-table>

    </main>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "",
        data() {
            return {
                refopen: false,
                copyopen: false,
                type: "选择类型",
                searchword: "",
                active: 0,
                sort: {
                    name: '',
                    order: 'asc'
                },
                columns: [{
                        title: '项目',
                        width: 200,
                        name: 'name'
                    },
                    {
                        title: '零件号',
                        name: 'calories',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '版本',
                        name: 'protein',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '名称',
                        name: 'fat',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作',
                        name: 'carbs',
                        width: 126,
                        align: 'center',
                        sortable: true
                    },

                    {
                        title: 'Iron (%)',
                        name: 'iron',
                        width: 126,
                        align: 'center',
                        sortable: true
                    }
                ],
                list: [{
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
                ]
            }
        },
        computed: {
            ...mapGetters(['productTypes'])
        },
        methods: {
            handleSortChange({
                name,
                order
            }) {
                this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
            }
        }
    };
</script>
<style lang="less" scoped>
    .buttongroup {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .gridview {
        display: grid;
        /* grid-template-columns: 100px 100px 100px; */
        grid-template-rows: 50px auto;
        grid-template-columns: 70px auto; // grid-gap: 10px;
        max-width: 100%;
        grid-auto-flow: row;
    }

    .gridview-title {
        grid-row: 1;
        grid-column: 2 / span 2;
        justify-self: center;
    }

    .gridview-nav {
        grid-row: 1 /span 2;
        grid-column: 1/2;
    }

    .gridview-table {
        grid-row: 2/3;
        grid-column: 2/3;
        background-color: transparent;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;

    }
</style>