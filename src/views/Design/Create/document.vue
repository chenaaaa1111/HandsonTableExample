<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon @click="closebtn" color="primary">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-button color="primary"> 上传文件</mu-button>
                <!-- <mu-button flat style="background:#cfd8dc;" @click="$router.go(-2)" text-color="black">
            <mu-icon left value="list"></mu-icon>列表
          </mu-button> -->

                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>

                文件名xxxxxxx
                <mu-circular-progress class="demo-circular-progress" :size="36"></mu-circular-progress>

                <mu-button flat color="secondary"> 取消</mu-button>
            </div>
            <div class="right">

                <mu-tooltip content="复制当前内容并新建">
                    <mu-button icon>
                        <mu-icon value="content_copy"></mu-icon>
                    </mu-button>
                </mu-tooltip>
                <mu-button icon style="margin-right:-10px;" color="primary">
                    <mu-icon value="save"></mu-icon>
                </mu-button>
                <mu-menu placement="bottom-end" :open.sync="opensaveto">
                    <mu-button flat style="width:25px;font-size:10px;min-width: 10px;" color="primary">
                        <mu-icon left value="keyboard_arrow_down" style="width:15px;font-size:10px"></mu-icon>
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
                <saveto ref="savelocation" />
            </div>

        </header>
        <article>


            <section>
                <mu-tabs :value.sync="tab" inverse color="secondary" text-color="rgba(0, 0, 0, .54)">
                    <mu-tab @click="changetab('attrib')">基本属性</mu-tab>
                    <mu-tab @click="changetab('drawings')">高级属性</mu-tab>
                    <mu-tab @click="changetab('search')">备注</mu-tab>

                </mu-tabs>
                <div v-if="tab === 0" class="list">

                    <div>
                        <mu-text-field icon=":iconfont icon-xuhao" style="min-width:10px;width:100px" type='number'
                            v-model="no" placeholder="序号"></mu-text-field>
                        <mu-text-field icon=" " v-model="partno" prefix="*" placeholder="文档编号" :action-icon="'search'"
                            :action-click="codesearch"></mu-text-field>
                        <mu-text-field icon=" " style="min-width:10px;width:100px" v-model="version" placeholder="版本"></mu-text-field>
                    </div>
                    <mu-text-field icon=" " v-model="name" placeholder="文档名称，描述..."></mu-text-field>
                    <div>
                        <mu-text-field icon=" " v-model="value1" placeholder="标签(如:焊接,红色,木材,项目)" multi-line :rows="1"
                            :rows-max="3"></mu-text-field>

                    </div>
                </div>
                <div v-if="tab===1" class="list">
                    <div>
                        <mu-checkbox v-model="checkbox" value="eat" label="2d图纸"></mu-checkbox>
                        <mu-checkbox v-model="checkbox" value="sleep" label="3d图纸"></mu-checkbox>
                        <mu-checkbox v-model="checkbox" value="eat" label="参考图"></mu-checkbox>
                        <mu-checkbox v-model="checkbox" value="sleep" label="工作图"></mu-checkbox>
                        <mu-checkbox v-model="checkbox" value="run" label="工艺图"></mu-checkbox>
                        <mu-checkbox v-model="checkbox" value="movie" label="装配图"></mu-checkbox>
                    </div>
                    <mu-select label="图幅大小" v-model="normal.value1">
                        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                    <mu-select label="图纸比例" v-model="normal.value2">
                        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                    <mu-select label="文档来源" v-model="normal.value3">
                        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                    <mu-select label="图纸视图" v-model="normal.value4">
                        <mu-option v-for="option in options" :key="option" :label="option" :value="option"></mu-option>
                    </mu-select>
                </div>

                <div v-if="tab===2" class="list">
                    此处引用一个插件
                </div>


            </section>
        </article>
    </main>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                tab: 0,
                checkbox: [],
                items: [{
                        text: '项目',
                        disabled: false
                    },
                    {
                        text: '...',
                        disabled: false
                    },
                    {
                        text: 'Link2',
                        disabled: true
                    }
                ],
                normal: {
                    value1: '',
                    value2: '',
                    value3: '',
                    value4: 'Option 1',
                    value5: 'Option 2'
                },
                options: [
                    'Option 1', 'Option 2', 'Option 3', 'Option 4',
                    'Option 5', 'Option 6', 'Option 7', 'Option 8',
                    'Option 9', 'Option 10'
                ],
                chips: ['primary', 'secondary', 'success', 'warning', 'info', 'error']
            }
        },
        methods: {
            remove(index) {
                this.chips.splice(index, 1);
            },
            reset() {
                this.chips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
            }
        }

    };
</script>
<style lang="less" scoped>
    .list {
        display: flex;
        flex-direction: column;

    }
</style>