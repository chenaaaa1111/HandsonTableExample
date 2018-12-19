<template>
    <div class="gridview">
        <mu-list class="gridview-nav">
            <mu-list-item button :ripple="false">
                <mu-list-item-title>搜索</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>最近</mu-list-item-title>
            </mu-list-item>
            <mu-divider></mu-divider>
            <mu-list-item button :ripple="false" v-for="item in materialcate" :key="item.id">
                <mu-list-item-title>{{item.name}}</mu-list-item-title>
            </mu-list-item>

            <mu-divider></mu-divider>
        </mu-list>
        <mu-text-field class="gridview-title" v-model="value7" :action-icon="'search' " :action-click="() => (visibility = !visibility)"></mu-text-field>

        <mu-data-table class="gridview-table" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange"
            :data="list">
            <template slot-scope="scope">
                <td>{{scope.row.name}}</td>
                <td class="is-right">{{scope.row.calories}}</td>
                <td class="is-right">{{scope.row.protein}}</td>
                <td class="is-right">{{scope.row.fat}}</td>
                <td class="is-right">{{scope.row.carbs}}</td>
                <td class="is-right">{{scope.row.iron}}%</td>
            </template>
        </mu-data-table>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    export default {
        name: "",
        data() {
            return {
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


                ],
                list: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,

                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,

                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,

                    },
                ]
            }
        },
        computed: {
            ...mapState({
                materialcate: state => state.material.materialcate
            })
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

    .buttonmenu {
        display: flex;
        justify-content: space-between;
        width: 80px;
        align-items: center;
        margin-right: 10px;
    }

    .mu-icon-button {
        height: 20px;
        width: 20px;
        font-size: 14px;
        padding: 0px;
    }

    .mu-flat-button {
        padding: 0px;
        height: 20px; // width: 50px;
        text-align: right; // 
        min-width: 10px;

    }

    .mu-ripple-wrapper {
        text-align: right;
        min-width: 10px;
    }

    .mu-button-wrapper {
        justify-content: flex-end;
        padding: 0px;
        min-width: 10px;
        text-align: right; // 
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