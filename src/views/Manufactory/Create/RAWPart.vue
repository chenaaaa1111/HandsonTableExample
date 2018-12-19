<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-button flat @click="$router.go(-1)">
                    <mu-icon value=""></mu-icon>1-10
                </mu-button>
                <mu-pagination :total="100" :current.sync="currentpage"></mu-pagination>
                <mu-button flat @click="$router.go(1)">
                    <mu-icon value=""></mu-icon>20-30
                </mu-button>
            </div>
            <div class="right ">

                <!-- 工步 -->
                <mu-menu placement="bottom-end" :open.sync="processcateopen">
                    <mu-button flat color="primary">
                        <mu-icon vertical-align="bottom" :value="viewtype"></mu-icon>步骤类型
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button :ripple="true" @click="toggleview('view_headline')">
                            <mu-list-item-action>
                                <mu-icon value="view_headline"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>采购</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button :ripple="true" @click="toggleview('view_stream')">
                            <mu-list-item-action>
                                <mu-icon value="view_stream"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>工步</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button :ripple="true" @click="toggleview('view_module')">
                            <mu-list-item-action>
                                <mu-icon value="view_module"></mu-icon>
                            </mu-list-item-action>
                            <mu-list-item-title>档案</mu-list-item-title>
                        </mu-list-item>

                    </mu-list>
                </mu-menu>


                <mu-tooltip content="基于模板新建">
                    <mu-button icon @click="showdrawing=!showdrawing">
                        <mu-icon value="library_add"></mu-icon>
                    </mu-button>
                </mu-tooltip>
                <mu-tooltip content="复制当前内容并新建">
                    <mu-button icon>
                        <mu-icon value="content_copy"></mu-icon>
                    </mu-button>
                </mu-tooltip>
                <mu-button flat style="margin-right:-5px;min-width: 10px;width:35px;" color="primary">
                    <mu-icon right value="save"></mu-icon>
                </mu-button>
                <mu-menu placement="bottom-end" :open.sync="opensaveto">
                    <mu-button flat style="margin-right:0px;width:25px;font-size:10px;min-width: 10px;" color="primary">
                        <mu-icon left value="arrow_drop_down" style="width:15px;font-size:10px"></mu-icon>
                    </mu-button>
                    <mu-list slot="content">
                        <mu-list-item button @click="savetolib">
                            <mu-list-item-title>保存到库</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </mu-menu>

                <mu-button icon color="primary" @click="rightsideshow=!rightsideshow">
                    <mu-icon value="help_outline"></mu-icon>
                </mu-button>
            </div>
            <!-- <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white"> -->
            <!-- <mu-tab v-show="attrib" @click="attribTab('attrib')">属性</mu-tab> -->
            <!-- 采购,生产 -->
            <!-- 装配 ,也许需要-->
            <!-- <mu-tab v-show="attrib" @click="attribTab('attrib')">列表</mu-tab> -->
            <!-- <mu-tab v-show="material" @click="materialTab('material')">生命周期</mu-tab> -->
            <!-- 维保 -->
            <!-- <mu-tab v-show="mantan" @click="mantanTab('mantan')">维保</mu-tab>
                    <mu-tab v-show="archive" @click="archiveTab('archive')">活动</mu-tab> -->
            <!-- <mu-tab @click="changetab('process')">工序</mu-tab>
                        <mu-tab @click="changetab('purchase')">采购</mu-tab> -->
            <!-- <mu-tab @click="changetab('raw')">材料</mu-tab> -->
            <!-- <mu-tab @click="changetab('archive')">档案</mu-tab> -->

            <!-- </mu-tabs> -->



        </header>
        <article>
            <section v-if="showdrawing">
                <!-- <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
                    <mu-card-title title="零件号.版本" sub-title="零件名"></mu-card-title>
                    <mu-card-text>
                        <p>零件设计属性</p>
                        <p>零件设计属性</p>
                        <p>零件设计属性</p>
                        <p>零件设计属性</p>
                    </mu-card-text>
                </mu-card> -->
                <mu-carousel>
                    <mu-carousel-item>
                        <img :src="carouselImg1">
                    </mu-carousel-item>
                </mu-carousel>
            </section>
            <aside class="rightside">

                <component :is=" currentTab " keep-alive></component>
                <mu-bottom-nav>
                    <mu-bottom-nav-item title="步骤" icon="restore"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="属性" icon="favorite"></mu-bottom-nav-item>
                    <mu-bottom-nav-item title="档案" icon="location_on"></mu-bottom-nav-item>
                </mu-bottom-nav>
            </aside>
        </article>

    </main>
</template>
<script>
    import carouselImg1 from '@/assets/drawing.png';
    import rawatt from "./RAWAtt"; //原材料


    import archivepart from "./ArchivePart"; //历史生产档案

    export default {

        components: {


            archivepart,
            rawatt,

        },
        props: {

        },
        data() {
            return {
                currentTab: 'rawatt',
                active: 0,
                carouselImg1,
                showdrawing: true,
                viewtype: "view_headline",


            };

        },
        methods: {
            changetab(tab) {
                switch (tab) {
                    case 'purchase':
                        this.currentTab = purchaseatt; // tab 为当前触发标签页的组件名
                        this.active = 2;
                        break;
                    case 'process':
                        this.currentTab = manufactureatt; // tab 为当前触发标签页的组件名
                        this.active = 1;
                        break;
                    case 'raw':
                        this.currentTab = rawatt;
                        this.active = 0;
                        break;
                    case 'archive':
                        this.currentTab = archivepart;
                        this.active = 3;
                        break;
                    default:
                        break;
                }
            },
            rawTab: function () {
                this.currentTab = rawatt; // tab 为当前触发标签页的组件名
                this.active = 0;
            },
            manufactoryTab: function () {
                this.currentTab = manufactureatt; // tab 为当前触发标签页的组件名
                this.active = 1;
            },
            purchaseTab: function () {
                this.currentTab = purchaseatt; // tab 为当前触发标签页的组件名
                this.active = 2;
            },
            archiveTab: function () {
                this.currentTab = archivepart; // tab 为当前触发标签页的组件名
                this.active = 3;
            },
        },

    };
</script>

<style lang="less" scoped>
    .mu-tab-link-highlight {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0px;
        background-color: #2196f3;
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
        color: #2196f3;
    }

    .mu-tab {
        max-width: 200px;
        background: transparent;
        transition: ease-in-out;
        font-size: 14;
        min-width: 100px;
    }

    .mid {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

    }

    .mu-carousel-item>img {
        top: 50%;
        width: 1000px;
        height: 800px;

    }

    .mu-carousel {
        height: 800px;
    }
</style>