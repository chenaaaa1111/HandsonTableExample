<template>
    <main>
        <header class="headtoprow2">
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
                            <mu-list-item-title>设备</mu-list-item-title>
                        </mu-list-item>
                        <mu-list-item button to="Setting">
                            <mu-list-item-title>标准件</mu-list-item-title>
                        </mu-list-item>

                    </mu-list>
                </mu-menu>


                <mu-tabs :value.sync="active" color="primary" text-color="rgba(0, 0, 0, .54)" indicator-color="white">
                    <mu-tab @click="changetab('attrib')">新增</mu-tab>
                    <mu-tab @click="changetab('drawings')">覆盖</mu-tab>
                    <mu-tab @click="changetab('drawings')">更新</mu-tab>
                    <mu-tab @click="changetab('drawings')">待处理</mu-tab>
                </mu-tabs>
            </div>
            <div class="right">
                <mu-button flat color="primary" @click="$router.go(-1)">
                    全部覆盖
                </mu-button>
                <mu-button flat color="primary" @click="$router.go(-1)">
                    全部更新
                </mu-button>
                <mu-button flat color="primary">
                    <mu-icon left value="settings"></mu-icon>定义编码
                </mu-button>
                <mu-button icon color="primary">
                    <mu-icon value="help_outline"></mu-icon>
                </mu-button>
            </div>
            <div class="headtoprow1">

                <mu-circular-progress class="demo-circular-progress" color="secondary" :stroke-width="5" :size="48"></mu-circular-progress>
                上传的文件大小,格式,文件名等信息
            </div>
        </header>
        <article>
            <uploadlist />
            <aside>
                <mu-sub-header>配置属性</mu-sub-header>
                <div class="mygrid">
                    <mu-select label="类型" v-model="type">
                        <mu-option v-for="item in productTypes" :key="item.type" :label="item.name" :value="item.type"></mu-option>
                    </mu-select>
                    <mu-select label="子类型" v-model="subtype">
                        <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                    </mu-select>

                    <!-- <mu-radio :value="1" v-model="othertype" :label="1"></mu-radio>
                <mu-radio :value="2" v-model="othertype" :label="2"></mu-radio>
                <mu-radio :value="3" v-model="othertype" :label="3"></mu-radio> -->
                    <mu-switch v-model="weldtrue" label="焊接件"></mu-switch>
                    <mu-switch v-model="maintaintrue" label="维保"></mu-switch>
                    <mu-switch v-model="backuptrue" label="备件"></mu-switch>
                    <mu-switch v-model="rawtrue" label="原材料"></mu-switch>

                </div>

                <mu-button flat color="primary">
                    应用
                </mu-button>
            </aside>
        </article>
    </main>

</template>
<script>
    import uploadlist from '@/components/uploadlist.vue';
    export default {
        components: {
            uploadlist,
        },
        name: "",
        data() {
            return {
                showprocess: false,
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