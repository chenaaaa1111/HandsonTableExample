<template>
    <main>
        <header class="headtoprow2">

            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-button flat @click="$router.go(-1)">
                    <mu-icon value=""></mu-icon>上一个
                </mu-button>
                <mu-button flat @click="$router.go(1)">
                    <mu-icon value=""></mu-icon>下一个
                </mu-button>
            </div>
            <div class="right ">
                <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                    <mu-tab v-show="attrib" @click="attribTab('attrib')">属性</mu-tab>
                    <!-- 采购,生产 -->
                    <!-- 装配 ,也许需要-->
                    <mu-tab v-show="attrib" @click="attribTab('attrib')">列表</mu-tab>
                    <mu-tab v-show="material" @click="materialTab('material')">生命周期</mu-tab>
                    <!-- 维保 -->
                    <mu-tab v-show="mantan" @click="mantanTab('mantan')">维保</mu-tab>
                    <mu-tab v-show="archive" @click="archiveTab('archive')">活动</mu-tab>
                    <mu-tab @click="changetab('process')">工序</mu-tab>
                    <mu-tab @click="changetab('purchase')">采购</mu-tab>
                    <mu-tab @click="changetab('manufactureatt')">工步</mu-tab>
                    <mu-tab @click="changetab('archive')">档案</mu-tab>

                </mu-tabs>

            </div>

        </header>
        <article>
            <section>
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
            <aside>

                <component :is=" currentTab " keep-alive></component>

            </aside>
        </article>

    </main>
</template>
<script>
    import carouselImg1 from '@/assets/drawing.png';
    import rawatt from "./RAWAtt"; //原材料
    import manufactureatt from "./ProcessAtt"; //工序
    import purchaseatt from "../../Purchase/Create/PurchaseAtt"; //采购
    import archivepart from "./ArchivePart"; //历史生产档案

    export default {

        components: {

            manufactureatt,
            archivepart,
            rawatt,
            purchaseatt
        },
        props: {

        },
        data() {
            return {
                currentTab: 'manufactureatt',
                active: 0,
                carouselImg1,


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