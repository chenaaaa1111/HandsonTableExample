<template>
    <main>
        <header>
            <div class="headtoprow2">
                <div class="left">
                    <mu-button icon @click="$router.go(-1)" color="primary">
                        <mu-icon value="arrow_back"></mu-icon>
                    </mu-button>

                    <mu-button color="primary" @click="showprocess=true">
                        <mu-icon left value="add"></mu-icon>上传
                    </mu-button>
                    <mu-menu placement="bottom-end" :open.sync="listformatmore">
                        <mu-button style="width:25px;font-size:10px;min-width: 10px;margin-left:1px" color="primary">
                            <mu-icon left value="keyboard_arrow_down" style="width:15px;font-size:10px"></mu-icon>
                        </mu-button>
                        <mu-list slot="content">
                            <mu-list-item button>
                                <mu-list-item-title>文件</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button to="Setting">
                                <mu-list-item-title>文件夹</mu-list-item-title>
                            </mu-list-item>

                        </mu-list>
                    </mu-menu>


                    <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                        <mu-tab @click="changetab('attrib')">已完成</mu-tab>
                        <mu-tab @click="changetab('drawings')">处理中</mu-tab>
                    </mu-tabs>
                    <!-- <mu-breadcrumbs divider="—">
                        <mu-icon value="chevron_right" slot="divider"></mu-icon>
                        <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                    </mu-breadcrumbs> -->

                </div>
                <div class="right ">
                    <mu-button flat @click="$router.go(-1)">
                        隐藏到后台
                    </mu-button>
                    <mu-button flat color="primary" @click="$router.go(-1)">
                        全部覆盖
                    </mu-button>
                    <mu-button flat color="primary" @click="$router.go(-1)">
                        全部更新
                    </mu-button>
                    <mu-button icon color="primary" @click="$router.go(-1)">
                        <mu-icon value="help_outline"></mu-icon>
                    </mu-button>

                </div>
            </div>
        </header>
        <article>
            <section>

                <uploadlist />


            </section>
        </article>
    </main>
</template>
<script>
    import uploadlist from '@/components/uploadfiles/uploaddrawing.vue';
    export default {
        components: {
            uploadlist,
        },
        name: "",
        data() {
            return {

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