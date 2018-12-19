<template>
    <main>
        <header>
            <div class="headtoprow2">
                <div class="left">
                    <mu-button icon color="primary" @click="$router.go(-1)">
                        <mu-icon value="arrow_back"></mu-icon>
                    </mu-button>
                    <!-- <mu-breadcrumbs divider="—">
                        <mu-icon value="chevron_right" slot="divider"></mu-icon>
                        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                    </mu-breadcrumbs> -->
                    <mu-text-field v-model="listname" placeholder="类型"></mu-text-field>
                    <mu-text-field v-model="listname" placeholder="输入清单名称"></mu-text-field>
                </div>
                <div class="right ">

                    <mu-button icon color="primary" @click="$router.go(-1)">
                        <mu-icon value="help_outline"></mu-icon>
                    </mu-button>
                </div>
            </div>
        </header>
        <article>
            <div class="mygrid">
                <div class="mygridcol-1">
                    <!-- <h2 style="text-align:left">新建</h2> -->

                </div>
                <div class="mygridcol-4" v-for="item in listTypes" :key="item.id" style="text-align:center">
                    <mu-button flat color="primary" :href="item.path" style=" height:50px;line-height: 50px;min-width: 10px;width:50px;">
                        <!-- @click.native="$router.push(item.path)" -->
                        <mu-icon color="gray" size=50 :value="item.icon"></mu-icon>
                    </mu-button>
                    <p>{{item.name}}</p>
                </div>
                <mu-divider style="margin-top:10px"></mu-divider>

                <div class="mygridcol-1">
                    <mu-menu placement="bottom-end" :viewopen.sync="viewopen">
                        <mu-button flat color="primary">范围
                            <mu-icon vertical-align=bottom value="arrow_drop_down"></mu-icon>
                        </mu-button>
                        <mu-list slot="content">

                            <mu-list-item button :ripple="true" @click="toggleview('view_headline')">
                                <mu-list-item-action>
                                    <mu-icon value="view_headline"></mu-icon>
                                </mu-list-item-action>
                                <mu-list-item-title>项目</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button :ripple="true" @click="toggleview('view_stream')">
                                <mu-list-item-action>
                                    <mu-icon value="view_stream"></mu-icon>
                                </mu-list-item-action>
                                <mu-list-item-title>清单</mu-list-item-title>
                            </mu-list-item>
                        </mu-list>
                    </mu-menu>
                    <mu-text-field class="mygridcol-3" v-model="partno" placeholder="选择项目,零部件,清单号" :action-icon="'search'"
                        @click="codesearch()" full-width></mu-text-field>

                    <!-- <h2 style="text-align:left">模板</h2> -->
                </div>

                <mu-subheader>模板 </mu-subheader>

                <router-view />

            </div>
        </article>
    </main>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        data() {
            return {
                items: [{
                        text: "清单",
                        disabled: false
                    },
                    {
                        text: "Link 1",
                        disabled: false
                    },
                ],
            };
        },
        computed: {
            ...mapGetters(['listTypes'])

        }
        // methods: {
        //     btnclik: function () {
        //         this.$route.push({});
        //     }
        // }
    };
</script>
<style scoped>
    /* .mu-flat-button {
        height: 120px;
        line-height: 120px;
        min-width: 120px;
        font-size: 14px;
    } */


    .mygrid {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
    }

    .mygridcol-1 {
        flex: 1 1 100%;
        justify-content: center;
    }

    .mygridcol-2 {
        flex: 1 1 50%;
    }

    .mygridcol-3 {
        flex: 1 1 33.33%;
    }

    .mygridcol-4 {
        flex: 0 1 15%;
    }
</style>