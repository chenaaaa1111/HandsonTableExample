<template>
    <div class="topheader">
        <div class="left">
            <mu-button icon @click="appopen = !appopen">
                <mu-icon value="apps"></mu-icon>
            </mu-button>
            <mu-drawer :open.sync="appopen" :docked="docked" :right="position">
                <mu-button flat @click="appopen = !appopen">
                    <mu-icon left value="apps"></mu-icon>功能
                </mu-button>
                <mu-sub-header></mu-sub-header>

                <mu-button v-for="(tile, index) in list" :key="index" flat style="width:100px" :href="tile.path">
                    <mu-icon left :value="tile.icon"></mu-icon>
                    {{tile.title}}
                </mu-button>
                <mu-sub-header>常用</mu-sub-header>
                <mu-list>
                    <mu-list-item button :ripple="true">
                        <mu-list-item-action>
                            <mu-icon value="history"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>最近</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                        <mu-list-item-action>
                            <mu-icon value="grade"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>收藏夹</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="true">
                        <mu-list-item-action>
                            <mu-icon value="delete"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>回收站</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-drawer>

            <h3 style="margin-right:40px;">标题头</h3>
        </div>

        <div class="right">

            <!-- <mu-text-field v-if="showserchbox" solo :action-icon="'search'" style="border:1px solid;border-radius:2px;width:120px;height:25px"></mu-text-field> -->
            <mu-button style="margin-left:80px" icon @click="$router.push('/search')">
                <mu-icon value="search"></mu-icon>
            </mu-button>

            <mu-menu placement="bottom-end" :open.sync="setopen">
                <mu-button icon>
                    <mu-icon vertical-align=bottom value="settings"></mu-icon>
                </mu-button>
                <mu-list slot="content">
                    <mu-list-item button to="/dashboard">
                        <mu-list-item-title>主题</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button to="/Setting">
                        <mu-list-item-title>设置</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>帮助</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu>

            <!-- <mu-avatar size=40 slot="right" @click="open = !open"> -->
            <mu-button icon style="height:50px;width:50px" @click="$router.push('/dashboard')">
                <img style="height:60px;width:60px" src="../../public/avatar.jpg">
            </mu-button>
            <!-- </mu-avatar> -->



        </div>

    </div>

</template>
<script>
    export default {

        data() {
            return {
                docked: false,
                appopen: false,
                position: false,
                setopen: false,
                open: false,


                searchkeyword: "",
                trigger: null,
                showserchbox: false,
                list: [{

                        title: '设计',
                        icon: 'grade',
                        path: '/Design',
                    }, {

                        title: '采购',
                        icon: 'grade'
                    }, {

                        title: '生产',
                        icon: 'grade',
                        path: '/Manufactory',
                    }, {

                        title: '仓库',
                        icon: 'grade'
                    }, {

                        title: '检验',
                        icon: 'grade'
                    }, {

                        title: '项目',
                        icon: 'grade',
                        path: '/',

                    }, {

                        title: '清单',
                        icon: 'list',
                        path: '/listlibrary'
                    },
                    {

                        title: '报表',
                        icon: 'insert_chart',
                        path: '/listlibrary'
                    },
                ]
            };
        },
        methods: {
            godashboard() {
                this.router.push('/dashboard')
            },
            mounted() {
                this.trigger = this.$refs.button.$el;
            }

        }
    };
</script>