<template>
    <div class="topheader">
        <div class="left">

            <mu-button icon @click="appopen = !appopen">
                <mu-icon value="apps"></mu-icon>
            </mu-button>
            <mu-drawer :open.sync="appopen" :docked="docked" :right="position">
                <mu-button icon @click="appopen = !appopen">
                    <mu-icon value="apps"></mu-icon>
                </mu-button>
                <mu-sub-header>功能列表</mu-sub-header>

                <mu-button v-for="(tile, index) in list" :key="index" flat style="width:100px">
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
            <!-- <mu-text-field></mu-text-field> -->
            <mu-button icon @click="showsearch('true')">
                <mu-icon value="search"></mu-icon>
            </mu-button>
            <!-- <mu-text-field v-model="searchkeyword" :action-icon="'search'" :action-click="() => (visibility = !visibility)"></mu-text-field> -->
            <mu-menu placement="bottom-end" :setopen.sync="open">
                <mu-button icon>
                    <mu-icon vertical-align=bottom value="settings"></mu-icon>
                </mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>主题</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button to="Setting">
                        <mu-list-item-title>设置</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>帮助</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
            <mu-avatar size=40 slot="right">
                <img src="../../../public/avatar.jpg">
            </mu-avatar>
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
                active: 0,
                showsea: false,
                searchkeyword: "",
                trigger: null,
                list: [{

                    title: '设计',
                    icon: 'grade'
                }, {

                    title: '采购',
                    icon: 'grade'
                }, {

                    title: '生产',
                    icon: 'grade'
                }, {

                    title: '仓库',
                    icon: 'grade'
                }, {

                    title: '检验',
                    icon: 'grade'
                }, {

                    title: '项目',
                    icon: 'grade'
                }, {

                    title: '报表',
                    icon: 'list'
                }, ]
            };
        }
    };
</script>
<style scoped>
    .topheader {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        flex: 0 0 500px;
    }

    .right {
        flex: 0 0 300px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .mu-appbar .mu-flat-button,
    .mu-appbar .mu-menu {
        height: auto;
        line-height: normal;
    }

    /* .mu-input-line .mu-input-focus-line {
        bottom: -10px;
    } */

    .mu-input {
        margin-bottom: -10px;
        width: 100px;
        font-size: 20;
    }

    .mu-tab-link-highlight {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0px;
        background-color: blue;
    }

    .mu-tabs {
        /* 背景颜色 */
        background-color: transparent;
        /* 未激活字体颜色 */
        color: black;
        max-width: auto;
        height: 50px;
        width: auto;

    }

    .mu-tab-active {
        color: white;
    }

    .mu-tab {
        max-width: 200px;
        background: transparent;
        transition: ease-in-out;
        font-size: 14;
        min-width: 100px;
    }

    .gridlist-demo {
        width: auto;
        height: 450px;
        overflow-y: auto;
    }
</style>