<template>
    <aside>
        <mu-paper :z-depth="1">
            <mu-list>
                <mu-list-item button :ripple="true" @click="$router.push(navitem.routepath)">
                    <mu-list-item-action>
                        <mu-icon value="history"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>消息通知</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="true" @click="$router.push(navitem.routepath)">
                    <mu-list-item-action>
                        <mu-icon value="favorite_border"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>个人权限</mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>

            <!-- 固定不变的地方 -->
            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'label' : ''">
                    <mu-list-item-action>
                        <mu-icon value="label"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>个人中心</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested" v-for="label in subtypes" :key="label">
                        <mu-list-item-title>{{label.name}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>
            <!-- 固定不变的地方 -->
            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'start'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="label"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>我的活动</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested" v-for="label in subtype" :key="label">
                        <mu-list-item-title>{{label.name}}</mu-list-item-title>
                    </mu-list-item>

                </mu-list-item>
            </mu-list>
        </mu-paper>
    </aside>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "NavLeft",
        data() {
            return {
                open: "label",
                navlists: [{
                        iconval: "group",
                        name: "积分",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "local_library",
                        name: "金额",
                        routepath: "/FavouriteList"
                    },

                ],
                subtype: [{
                        iconval: "group",
                        name: "我的分享",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "local_library",
                        name: "我的审批",
                        routepath: "/FavouriteList"
                    },
                    {
                        iconval: "local_library",
                        name: "我参与的组织",
                        routepath: "/FavouriteList"
                    },
                    {
                        iconval: "local_library",
                        name: "我参与的项目",
                        routepath: "/FavouriteList"
                    },
                    {
                        iconval: "local_library",
                        name: "我的足迹",
                        routepath: "/FavouriteList"
                    },
                    {
                        iconval: "local_library",
                        name: "我的收藏",
                        routepath: "/FavouriteList"
                    },


                ],
                subtypes: [{
                        iconval: "group",
                        name: "积分",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "group",
                        name: "权限",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "group",
                        name: "个人资料",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "local_library",
                        name: "金额",
                        routepath: "/FavouriteList"
                    },

                ],
            };
        },
        computed: {
            ...mapGetters(['productLabels'])
        },
        methods: {},
    };
</script>
<style>

</style>