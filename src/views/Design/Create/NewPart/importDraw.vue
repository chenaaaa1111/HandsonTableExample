<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                    <mu-tab>图纸库</mu-tab>
                    <mu-tab>创建图纸</mu-tab>
                    <mu-tab>上传图纸</mu-tab>

                </mu-tabs>
            </div>
            <div class="right">
                <mu-button icon color="primary" v-if="active == 0" @click="isfilter=true">
                    <mu-icon value="filter_list"></mu-icon>
                </mu-button>
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="save"></mu-icon>
                </mu-button>
            </div>
            <mu-paper :z-depth="1" v-if="isfilter" class="headtoprow1">
                <div>
                    <mu-text-field icon="" v-model="partno" placeholder="物料号，零件号..." :action-icon="'search'"
                        :action-click="codesearch"></mu-text-field>
                    <mu-select label="类型" v-model="type">
                        <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
                    </mu-select>
                    <mu-select label="子类型" v-model="subtype">
                        <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                    </mu-select>
                </div>
                <div>
                    <mu-checkbox v-model="checkbox" value="eat" label="2d图纸"></mu-checkbox>
                    <mu-checkbox v-model="checkbox" value="sleep" label="3d图纸"></mu-checkbox>
                    <mu-checkbox v-model="checkbox" value="eat" label="参考图"></mu-checkbox>
                    <mu-checkbox v-model="checkbox" value="sleep" label="工作图"></mu-checkbox>
                    <mu-checkbox v-model="checkbox" value="run" label="工艺图"></mu-checkbox>
                    <mu-checkbox v-model="checkbox" value="movie" label="装配图"></mu-checkbox>
                </div>
                <mu-select label="页面大小" v-model="subtype">
                    <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                </mu-select>
                <mu-select label="图纸比例" v-model="subtype">
                    <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                </mu-select>
                <mu-select label="图纸来源" v-model="subtype">
                    <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                </mu-select>
                <mu-flex justify-content="center">
                    <mu-button @click="isfilter=!isfilter" color="red">隐藏</mu-button>
                    <mu-button color="primary">展开</mu-button>
                </mu-flex>
            </mu-paper>
        </header>
        <article>
            <section>

                <div v-if="active === 0">
                    <mu-subheader>最近</mu-subheader>
                    <div class="gridlayout" style="margin-top:10px;margin-bottom:20px">
                        <div class="griditem" v-for="item in 5" :key="item">
                            <mu-avatar text-color="orange200" color="pink400">
                                <mu-icon value="folder"></mu-icon>{{item}}
                            </mu-avatar>
                        </div>
                    </div>

                    <mu-divider />
                    <mu-subheader>图纸库</mu-subheader>
                    <div class="gridlayout" style="margin-top:10px;margin-bottom:20px">
                        <div class="griditem" v-for="item in 5" :key="item">
                            <mu-avatar text-color="primary" color="white">
                                <mu-icon value="insert_drive_file"></mu-icon>{{item}}
                            </mu-avatar>
                        </div>
                    </div>
                </div>
                <div v-if="active === 1">

                    <createdrawing />
                </div>
                <div v-if="active === 2">
                    本地上传图纸
                    <uploaddrawing />
                </div>
            </section>
            <aside v-if="active == 0">
                预览图纸
            </aside>
        </article>
    </main>
</template>
<script>
    import createdrawing from '@/components/createdrawing.vue';
    import uploaddrawing from '@/components/uploadfiles/uploaddrawing.vue';
    export default {
        components: {
            uploaddrawing,
            createdrawing,
        },
        name: "",
        data() {
            return {
                checkbox: [],
                active: 0,
                isfilter: false,
            }
        },
        methods: {

        }
    };
</script>
<style lang="less" scoped>
    .drawing {
        display: flex;
        justify-content: space-between;
    }

    .drawingtext {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }

    .list {
        display: flex;
        flex-direction: column;

    }

    .mu-menu {
        vertical-align: initial;
    }

    .mu-ripple-wrapper {
        position: inherit;
    }

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

    .mu-raised-button,
    .mu-ripple-wrapper,
    .mu-button {
        // min-width: 10px;
        // width: 25px;
        // border-radius: 2px;
        line-height: 30px;
        // text-align: left;
    }
</style>