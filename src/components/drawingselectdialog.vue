<template>
    <mu-dialog width="800" scrollable :open.sync="opendrawingdalog">
        <mu-appbar style="width:106%;margin-top:-25px;margin-left:-25px">
            <!-- <mu-button icon slot="left">
                <mu-icon value="menu"></mu-icon>
            </mu-button> -->
            选择图纸

            <mu-button flat slot="right">视图</mu-button>
            <mu-button icon slot="right">
                <mu-icon value="close"></mu-icon>
            </mu-button>
        </mu-appbar>

        <div class="pagecontent">
            <aside>
                <mu-list>
                    <mu-list-item button :ripple="false" v-for="item in list" :key="item" @click="show(item.id)">
                        <mu-list-item-action>
                            <mu-icon :value="item.icon"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>{{item.name}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list>

            </aside>
            <mu-paper :z-depth="0" style="margin-top:10px;margin-left:10px;">
                <div class="gridlayout" v-if="active == 1">
                    <!-- <mu-subheader>最近</mu-subheader> -->
                    <div class="griditem" v-for="item in 20" :key="item">
                        <mu-icon value="image"></mu-icon><span>{{item}}</span>
                    </div>
                </div>
                <div class="demo-text" v-if="active == 2">
                    <mu-breadcrumbs divider="—">
                        <mu-icon value="chevron_right" slot="divider"></mu-icon>
                        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                    </mu-breadcrumbs>
                    <h2>这是图库列表,</h2>
                    <h3>嘿嘿 ,矫情二下</h3>
                    <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
                    <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
                    <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
                    <p>“也许吧，未来……给你了。”</p>
                </div>
            </mu-paper>
        </div>
        <mu-button slot="actions" flat color="primary" @click="closedrawingDialog">选择</mu-button>

    </mu-dialog>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: 1,
                opendrawingdalog: false,
                list: [{
                        id: 1,
                        name: "最近",
                        icon: "history"
                    },
                    {
                        id: 2,
                        name: "图库",
                        icon: "local_library"
                    },
                    {
                        id: 3,
                        name: "电脑",
                        icon: "computer"
                    },
                    {
                        id: 4,
                        name: "FTP",
                        icon: "public"
                    },
                ],
                items: [{
                        text: "项目",
                        disabled: false
                    },
                    {
                        text: "Link 1",
                        disabled: false
                    },
                    {
                        text: "Link 2",
                        disabled: true
                    }
                ],
            }
        },
        methods: {
            closedrawingDialog() {
                // this.showunit = true;

                this.opendrawingdalog = false;
            },
            show(index) {
                switch (index) {
                    case 1:
                        this.active = 1;


                        break;
                    case 2:
                        this.active = 2;
                        break;
                    case 3:
                        // this.$refs.drawingselectdialog.opendrawingdalog = true;
                        this.active = 3;
                        break;
                    default:
                        break;
                }

            }
        }
    };
</script>
<style scoped>
    .mu-dialog-body {
        padding: 0px 2px 2px;

    }

    .mu-appbar {
        height: 40px;
    }
</style>