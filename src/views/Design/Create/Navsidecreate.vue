<template v-if="extendnav">

    <mu-button flat @click="togglemini('extend')"> 展开</mu-button>

</template>
<template v-if="collaspenav">
    <mu-paper :z-depth="1">
        <mu-button flat @click="togglemini('collapse')"> 收缩</mu-button>
        <mu-list>
            <mu-list-item v-for="navitem in navlists" :key="navitem.id" button :ripple="true" @click="$router.push(navitem.routepath)">
                <mu-list-item-action>
                    <mu-icon :value="navitem.iconval"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>{{navitem.name}} </mu-list-item-title>
            </mu-list-item>

            <mu-divider></mu-divider>
        </mu-list>

        <!-- 固定不变的地方 -->
        <mu-list toggle-nested>
            <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                <mu-list-item-action>
                    <mu-icon value="label"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>仓库</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                </mu-list-item-action>
                <mu-list-item v-for="labelid in labes" :key="labelid.id" button :ripple="false" slot="nested">
                    <mu-list-item-title>{{labelid.text}}</mu-list-item-title>
                </mu-list-item>

            </mu-list-item>
        </mu-list>
    </mu-paper>

</template>
<script>
    export default {

        data() {
            return {
                extendnav: true,
                collaspenav: false,
                open: "label",
                navlists: [{
                        iconval: "update",
                        name: "共宴赏",
                        routepath: "/RecentList"
                    },
                    {
                        iconval: "favorite_border",
                        name: "采购",
                        routepath: "/FavouriteList"
                    },
                    {
                        iconval: "list",
                        name: "下料",
                        routepath: "/"
                    },
                    {
                        iconval: "group",
                        name: "检验",
                        routepath: ""
                    },
                    {
                        iconval: "group",
                        name: "装配",
                        routepath: ""
                    },
                ],
                labes: [{
                        text: "入库"
                    },
                    {
                        text: "出库"
                    },
                    {
                        text: "发货"
                    },
                    {
                        text: "退货"
                    },
                ]
            };
        },
        methods: {
            togglemini(view) {
                switch (view) {
                    case "extend":
                        {
                            this.extendnav = false;
                            this.collaspenav = true;
                            break;
                        }
                    case "collapse":
                        {
                            this.extendnav = true;
                            this.collaspenav = false;
                            break;
                        }
                    default:
                        {}
                }

            }
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