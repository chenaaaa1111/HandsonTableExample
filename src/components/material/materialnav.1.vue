<template>
    <mu-dialog title="选择材料类型或规格" width="500" scrollable :open.sync="openselectrawcatedalog">
        <!-- 风格一 -->
        <mu-sub-header> 最近</mu-sub-header>

        <mu-divider></mu-divider>
        <div v-for="item in materialcate" :key="item.id">

            <mu-sub-header> {{item.name}}</mu-sub-header>

            <mu-button v-for="subitem in item.subtype" :key="subitem.id" flat>
                <mu-icon left :value="subitem.icon"></mu-icon>
                {{subitem.name}}
            </mu-button>
            <mu-icon value="add"></mu-icon>
            <mu-divider></mu-divider>

        </div>
        <mu-icon value="add"></mu-icon>
        <mu-paper :z-depth="1" class="list-wrap">
            <mu-list>
                <mu-list-item button :ripple="false">
                    <mu-list-item-action>
                        <mu-icon value="history"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>最近</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="false">
                    <mu-list-item-action>
                        <mu-icon value="search"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>搜索</mu-list-item-title>
                </mu-list-item>
            </mu-list>
            <mu-divider></mu-divider>


        </mu-paper>
        <mu-button slot="actions" flat color="primary" @click="closeselectrawcateDialog">选择</mu-button>

    </mu-dialog>
</template>
<script>
    import {
        mapState,
        mapGetters
    } from 'vuex';
    export default {
        name: "",
        data() {
            return {
                state: false,
                openselectrawcatedalog: false,
            }
        },
        methods: {
            swit() {
                this.state = !state;
            },
            closeselectrawcateDialog() {
                this.openselectrawcatedalog = false
            }
        },
        computed: {

            ...mapGetters(['materialcate'])
        }
    };
</script>
<style>
    .list-wrap {
        width: 100%;
        max-width: 90px;
        overflow: auto;
    }
</style>