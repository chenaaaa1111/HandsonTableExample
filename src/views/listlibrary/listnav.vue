<template>
    <nav>
        <mu-paper :z-depth="1">
            <!-- 清单 -->
            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'list'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="list"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>清单</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested" v-for="label in listTypes" :key="label" :to='label.routepath'>
                        <mu-list-item-title>{{label.name}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>
            <!-- 报表 -->
            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'report'" @toggle-nested="open = arguments[0] ? 'label' : ''">
                    <mu-list-item-action>
                        <mu-icon value="insert_chart"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>报表</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item button :ripple="false" slot="nested" v-for="label in reportTypes" :key="label">
                        <mu-list-item-title>{{label.name}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
        </mu-paper>

        <!-- <el-menu :default-active="$route.path" mode="horizontal" class="nav_box" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
          	<template v-for="item in newrouter[0].children" v-if="!item.hidden">
          		<router-link v-if="!item.hidden&&!item.children" :to="item.path">
          	       <el-menu-item :index="item.path" >
                    {{ item.name}}
                   </el-menu-item> -->
    </nav>
</template>
<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        name: "NavLeft",
        data() {
            return {
                open: "list",
            };
        },
        computed: {
            ...mapGetters(['listTypes', 'reportTypes']),
            ...mapGetters(['newrouter'])
        },
        methods: {},
    };
</script>
<style>

</style>