<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon @click="$router.go(-1)" color="primary">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <!-- <mu-button flat style="background:#cfd8dc;" @click="$router.go(-2)" text-color="black">
            <mu-icon left value="list"></mu-icon>列表
          </mu-button> -->
                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>
                <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                    <mu-tab @click="changetab('attrib')">设备参数</mu-tab>
                    <mu-tab @click="changetab('drawings')">维保要求</mu-tab>
                </mu-tabs>
            </div>
            <div class="right">
                <mu-button icon color="primary" v-if="active == 0" @click="isfilter=true">
                    <mu-icon value="add_circle"></mu-icon>
                </mu-button>
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="delete"></mu-icon>
                </mu-button>
            </div>
        </header>
        <article>
            <section class="list">
            </section>
        </article>
    </main>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: 0,
            }
        }
    };
</script>
<style scoped>
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
        width: 700px;

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
</style>