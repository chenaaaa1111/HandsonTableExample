<template>
    <nav>
        <!-- 新建后的零件 -->
        <mu-list toggle-nested textline="two-line">
            <mu-list-item button :ripple="false" nested :open="opennewed === true" @toggle-nested="open = arguments[0] ? true : false">
                <!-- <mu-list-item-action>
                    <mu-icon value="history"></mu-icon>
                </mu-list-item-action> -->
                <mu-list-item-title>已创建零件</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                </mu-list-item-action>
                <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-content>
                        <mu-list-item-title>List Item 1</mu-list-item-title>
                        <mu-list-item-sub-title>Jan 20, 2014</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-button icon>
                            <mu-icon value="edit"></mu-icon>
                        </mu-button>
                    </mu-list-item-action>
                </mu-list-item>

            </mu-list-item>
        </mu-list>
        <!-- 相似的零件 -->
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
            <mu-list toggle-nested textline="two-line">
                <mu-list-item button :ripple="false" nested :open="opensimilar === true" @toggle-nested="open = arguments[0] ? true : false">

                    <mu-list-item-title>相关零件</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested">
                        <!-- <mu-list-item-action>
                            <mu-icon value="history"></mu-icon>
                        </mu-list-item-action> -->
                        <mu-list-item-content>
                            <mu-list-item-title>List Item 1</mu-list-item-title>
                            <mu-list-item-sub-title>Jan 20, 2014</mu-list-item-sub-title>
                        </mu-list-item-content>
                        <mu-list-item-action>
                            <mu-button icon>
                                <mu-icon value="launch"></mu-icon>
                            </mu-button>
                        </mu-list-item-action>
                    </mu-list-item>

                </mu-list-item>
            </mu-list>
        </mu-load-more>
        查看更多
        <!-- <mu-tooltip content="申请零件编号">
            <mu-button fab normal color="red" @click="addcodebtn">
                <mu-icon value="add"></mu-icon>
            </mu-button>
        </mu-tooltip> -->

        <!-- <mu-sub-header>最近的材质</mu-sub-header>
        <mu-list>
            <mu-list-item v-for="navitem in recentmaterial" :key="navitem.id" button :ripple="true" @click="$router.push(navitem.routepath)">

                <mu-list-item-title>{{navitem}} </mu-list-item-title>
            </mu-list-item>

        </mu-list> -->






    </nav>

</template>
<script>
    export default {
        name: "",
        data() {
            return {
                opennewed: false,
                opensimilar: false,
                navshow: true,
                recentmaterial: ['Q235', '45#', '25#', 'Q345', '不锈钢304', '6065T5', ],
                refreshing: false,
                loading: false,

            }
        },
        methods: {
            addcodebtn() {},
            refresh() {
                this.refreshing = true;
                this.$refs.container.scrollTop = 0;
                setTimeout(() => {
                    this.refreshing = false;
                    // this.text = this.text === 'List' ? 'Menu' : 'List';
                    // this.num = 10;
                }, 2000)
            },
            load() {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    // this.num += 10;
                }, 2000)
            },
            hidden() {
                this.$parent.$parent.show = false
            }

        }
    };
</script>
<style lang="less" scoped>
    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        justify-content: space-between;
        padding-left: 20px;
    }

    .mygridcol-1 {
        flex: 1;
    }

    // .mu-flat-button {
    //     height: 120px;
    //     line-height: 120px;
    //     min-width: 120px;
    //     font-size: 14px;
    // }
</style>