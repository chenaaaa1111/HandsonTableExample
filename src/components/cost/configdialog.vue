<template>
    <mu-dialog title="配置成本核算方式" width="600" scrollable :open.sync="openselectcostwaydalog">

        <div class="pagecontent">
            <aside>
                <mu-select label="成本类型" v-model="costtype" full-width>
                    <mu-option v-for="(option,index) in costcate" :key="option" :label="option.name" :value="index"></mu-option>
                </mu-select>
                <mu-list>
                    <mu-list-item button :ripple="false" v-for="(option,index) in costtypes" :key="index">
                        <mu-list-item-title>{{option}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </aside>
            <div>
                <aside>
                    <mu-select label="成本子类型" v-model="costtype" full-width>
                        <mu-option v-for="(option,index) in costcate" :key="option" :label="option.name" :value="index"></mu-option>
                    </mu-select>
                    <mu-list>
                        <mu-list-item button :ripple="false" v-for="(option,index) in costtypes" :key="index">
                            <mu-list-item-title>{{option}}</mu-list-item-title>
                        </mu-list-item>
                    </mu-list>
                </aside>
            </div>
            <article>
                <mu-select label="计价方式" v-model="computetype" full-width>
                    <mu-option v-for="(option,index) in computetypes" :key="option" :label="option" :value="index"></mu-option>
                </mu-select>
                <table>
                    <tr>
                        <td> 这是文本框,输入内容</td>
                        条件+结果
                    </tr>
                </table>
            </article>
        </div>

        <p> 核价计算表达式:</p>
        名称1: dddd+dssfsd+aadadasd+ dddd+dssfsd+aadadasd+ dddd+dssfsd+aadadasd+ dddd+dssfsd+aadadasd
        名称2: dddd+dssfsd+aadadasd+ dddd+dssfsd+aadadasd+ dddd+dssfsd+aadadasd
        <mu-button flat>
            <mu-icon left value="add"></mu-icon>
            添加
        </mu-button>
        <mu-button slot="actions" flat color="primary" @click="closeselectcostwayDialog">选择</mu-button>
    </mu-dialog>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "",
        data() {
            return {
                openselectcostwaydalog: false,
                costway: 0,
                costtype: "",
                computetype: "",
                computetypes: ['固定', '公式', '表格'],
                costtypes: ['规格', '材质', '其他'],
            }
        },
        computed: { ...mapGetters(['costcate'])
        },
        methods: {

            closeselectcostwayDialog() {
                // this.rightsideshow = true;
                this.openselectcostwaydalog = false;
            },
        }
    };
</script>