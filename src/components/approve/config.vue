<template>
    <div class="pagecontent">
        <aside>
            <mu-list>
                <mu-list-item button :ripple="false" v-for="item in list" :key="item" @click="show(item.id)">
                    <mu-list-item-action>
                        <mu-icon :value="item.icon"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>{{item.name}}</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="false">
                    <mu-list-item-action>
                        <mu-icon color="primary" value="add"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>添加</mu-list-item-title>
                </mu-list-item>
            </mu-list>

        </aside>
        <mu-paper :z-depth="1" style="margin-top:10px;margin-left:10px;">
            <mu-text-field class="mygridcol-1" v-model="applyTemplName" placeholder="创建模板名"></mu-text-field>
            <div v-if="active === 1">
                <mu-subheader>模板使用规则</mu-subheader>
                <table border="1" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>序号</td>
                        <td>判断项目</td>
                        <td>判断条件</td>
                        <td>目标</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>采购金额</td>
                        <td>0-2w</td>

                        <td>张经理</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>采购金额</td>
                        <td>2w-5w</td>
                        <td>王总</td>
                    </tr>
                </table>
                不设定条件
                <mu-switch v-model="applyfilter"></mu-switch>


            </div>
            <div class="demo-text" v-if="active === 2">

                <h2>这是图库列表,</h2>
                <h3>嘿嘿 ,矫情二下</h3>
                <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
                <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
                <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
                <p>“也许吧，未来……给你了。”</p>
            </div>
        </mu-paper>
    </div>

</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: 1,
                opendrawingdalog: false,
                applyfilter: true,
                list: [{
                        id: 1,
                        name: "设计",
                        icon: "history"
                    },
                    {
                        id: 2,
                        name: "采购",
                        icon: "local_library"
                    },

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