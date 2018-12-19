<template>
    <div class="topheader">
        <div class="left">
            <mu-button icon ref="button" @click="open = !open">
                <mu-icon value="apps"></mu-icon>
            </mu-button>
            <mu-popover :open.sync="open" :trigger="trigger" placement="bottom-end">
                <mu-grid-list class="gridlist-demo">
                    <mu-sub-header>December</mu-sub-header>
                    <mu-grid-tile v-for="(tile, index) in list" :key="index">
                        <img :src="tile.image">
                        <span slot="title">{{tile.title}}</span>
                        <span slot="subTitle">by <b>{{tile.author}}</b></span>
                        <mu-button slot="action" icon>
                            <mu-icon value="star_border"></mu-icon>
                        </mu-button>
                    </mu-grid-tile>
                </mu-grid-list>
            </mu-popover>
            <h3 style="margin-right:40px;">标题头</h3>
            <mu-tabs :value.sync="active">
                <mu-tab>项目任务</mu-tab>
                <mu-tab>项目资源</mu-tab>
                <mu-tab>报表</mu-tab>
            </mu-tabs>
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
                    <mu-list-item button>
                        <mu-list-item-title>设置</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>帮助</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
            <mu-avatar size=40 slot="right">
                <img src="../../../../public/avatar.jpg">
            </mu-avatar>
        </div>

    </div>

</template>
<script>
    export default {
        name: "HeadMaster",
        data() {
            return {
                open: false,
                setopen: false,
                active: 0,
                showsea: false,
                searchkeyword: "",
                trigger: null
            };
        }
    };
</script>
<style scoped>
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
</style>