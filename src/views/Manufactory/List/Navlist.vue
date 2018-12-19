<template>

    <nav>
        <mu-select label="Separator" multiple separator="/" v-model="multi.value2" full-width>
            <mu-option v-for="city in citys" :key="city" :label="city" :value="city"></mu-option>
        </mu-select>
        <!-- <mu-list>
            <mu-list-item v-for="navitem in navlists" :key="navitem.id" button :ripple="true" @click="$router.push(navitem.routepath)">
                <mu-list-item-action>
                    <mu-icon :value="navitem.iconval"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{navitem.name}} </mu-list-item-title>
            </mu-list-item>

            <mu-divider></mu-divider>
        </mu-list> -->

        <!-- 固定不变的地方 -->
        <mu-list toggle-nested>
            <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                <mu-list-item-action>
                    <mu-icon value="label"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>标签</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                </mu-list-item-action>
                <mu-list-item v-for="labelid in labes" :key="labelid.id" button :ripple="false" slot="nested">
                    <mu-list-item-title>{{labelid.text}}</mu-list-item-title>
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

    </nav>

</template>
<script>
    export default {

        data() {
            return {
                open: "label",
                citys: [
                    'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                    'Arkansas', 'California', 'Colorado', 'Connecticut',
                    'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                    'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                    'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                ],
                multi: {
                    value1: [],
                    value2: [],
                    value3: []
                },
                // navlists: [{
                //         iconval: "update",
                //         name: "项目",
                //         routepath: "/RecentList"
                //     },
                //     {
                //         iconval: "favorite_border",
                //         name: "采购",
                //         routepath: "/FavouriteList"
                //     },
                //     {
                //         iconval: "list",
                //         name: "下料",
                //         routepath: "/"
                //     },
                //     {
                //         iconval: "group",
                //         name: "检验",
                //         routepath: ""
                //     },
                //     {
                //         iconval: "group",
                //         name: "装配",
                //         routepath: ""
                //     },
                // ],
                labes: [{
                        text: "采购"
                    },
                    {
                        text: "生产"
                    },
                    {
                        text: "标签1"
                    },
                    {
                        text: "标签1"
                    },
                ]
            };
        }
    };
</script>
<style>
    .demo-list-wrap {
        width: 100%;
        max-width: 200px;
        overflow: hidden;
    }
</style>