<template>
    <aside>
        <mu-paper :z-depth="1">
            <mu-list>
                <mu-list-item button :ripple="true" @click="$router.push(navitem.routepath)">
                    <mu-list-item-action>
                        <mu-icon value="history"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>最近 </mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="true" @click="$router.push(navitem.routepath)">
                    <mu-list-item-action>
                        <mu-icon value="favorite_border"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>收藏 </mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>

            <mu-list>
                <mu-list-item v-for="navitem in navlists" :key="navitem.id" button :ripple="true" @click="$router.push(navitem.routepath)">

                    <mu-list-item-action>
                        <mu-icon :value="navitem.iconval"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>{{navitem.name}} </mu-list-item-title>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
            <!-- 列表 -->
            <mu-list toggle-nested>
                <mu-list-item nested :open="open === 'start'" @toggle-nested="open = arguments[0] ? 'stared' : ''"
                    button :ripple="true" @click="$router.push(navitem.routepath)">
                    <mu-list-item-action>
                        <mu-icon value="list"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>清单</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested" v-for="navitem in lists" :key="navitem.id">
                        <mu-list-item-title>{{navitem.name}} </mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false" slot="nested" @click="openlist=true">
                        <mu-list-item-action>
                            <mu-icon value="add"></mu-icon>
                        </mu-list-item-action>
                        <!-- <mu-list-item-title>创建清单</mu-list-item-title> -->
                    </mu-list-item>
                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>

            <!-- 标签 -->
            <mu-list toggle-nested>
                <mu-list-item v-if="labelid.type=='manufacture'" v-for="labelid in productLabels" :key="labelid" button
                    :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="label"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>标签</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested" v-for="label in labelid.subtype" :key="label">
                        <mu-list-item-title>{{label.text}}</mu-list-item-title>
                        <mu-list-item-action>
                            <!-- <mu-icon value="info"></mu-icon> -->
                            <mu-menu placement="bottom-end" :open.sync="moreopen">
                                <mu-button icon>
                                    <mu-icon value="more_vert"></mu-icon>
                                </mu-button>
                                <mu-list slot="content">
                                    <mu-list-item button @click="openAlertDialog">
                                        <mu-list-item-title>应用到选中内容</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button @click="isMBOM=true">
                                        <mu-list-item-title>应用到本页</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-list-item button @click="openAlertDialog">
                                        <mu-list-item-title>应用到本项目</mu-list-item-title>
                                    </mu-list-item>
                                    <mu-divider></mu-divider>
                                    <mu-list-item button @click="deletebtn">
                                        <mu-list-item-title>删除</mu-list-item-title>
                                    </mu-list-item>
                                </mu-list>
                            </mu-menu>
                        </mu-list-item-action>
                    </mu-list-item>
                    <mu-list-item button @click="openAlertDialog" slot="nested">
                        <mu-list-item-action>
                            <mu-icon value="add"></mu-icon>
                        </mu-list-item-action>
                        <!-- <mu-list-item-title>添加</mu-list-item-title> -->
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
        </mu-paper>
        <!-- 创建清单名 -->
        <mu-dialog title="创建清单" width="400" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openlist">
            <mu-text-field v-model="listname" placeholder="输入清单名称"></mu-text-field><br>
            <mu-select label="选择清单位置" v-model="listposition">
                <mu-option v-for="(option,index) in options" :key="index" :label="option" :value="option"></mu-option>
            </mu-select>
            <mu-button slot="actions" flat @click="openlist=false">取消</mu-button>
            <mu-button slot="actions" flat color="primary" @click="openlist=false">保存</mu-button>
        </mu-dialog>
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
                openlist: false,
                navlists: [{
                        iconval: "group",
                        name: "加工社区",
                        routepath: "/RecentList"
                    },
                    // {
                    //     iconval: "local_library",
                    //     name: "产品库",
                    //     routepath: "/FavouriteList"
                    // },

                ],
                lists: [{
                        iconval: "group",
                        name: "清单1",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "local_library",
                        name: "清单2",
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