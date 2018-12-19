<template>
    <mu-dialog title="成本核算方式" width="600" scrollable :open.sync="openselectcostwaydalog">

        <mu-paper :z-depth="1" style="padding-left:40px;padding-right:40px;">
            <mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
                <mu-tab>经验模式</mu-tab>
                <mu-tab>计算模式</mu-tab>
                <mu-tab>设备费用</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active === 0">
                <ul>
                    <li>1.车基本价:20-40,具体的有根据实际情况而定,象小件,很简单的工时就小于20元;
                    </li>
                    <li>2.磨基本价:25-45</li>
                    <li>3.铣基本价:25-45</li>
                    <li> 4.钻基本价:15-35</li>
                    <li>5.刨基本价:15-35 </li>
                    <li> 6.线割基本价:3-4/900平方毫米</li>
                    <li> 7.电火花基本价:10-40</li>
                    <li> 8.NC基本价:比普通的贵它个2-4倍</li>
                    <li> 9.雕刻:一般都是单件的.50-500/件</li>
                </ul>
            </div>
            <div class="demo-text" v-if="active === 1">
                <p>需要计算公式</p>
                <p>敬请期待</p>

            </div>
            <div class="demo-text" v-if="active === 2">
                <p>使用设备的工时费用</p>
                <mu-switch v-model="getdevicecost" label="启用"></mu-switch>
            </div>
        </mu-paper>
        <mu-button v-show="computemode" slot="actions" flat color="primary" @click="closeselectcostwayDialog">管理</mu-button>

        <mu-button slot="actions" flat color="primary" @click="closeselectcostwayDialog">选择</mu-button>
    </mu-dialog>
</template>
<script>
    export default {
        name: "",
        data() {
            return {
                active: 0,
                openselectcostwaydalog: false,
                getdevicecost: false,
                computemode: true,
            }
        },
        methods: {

            closeselectcostwayDialog() {
                // this.rightsideshow = true;
                this.openselectcostwaydalog = false;
            },
        }
    };
</script>