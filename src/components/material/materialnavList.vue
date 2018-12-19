<template>
    <div>
        <!-- 另外一种方式 -->
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

            <mu-list toggle-nested :nested-indent="false">
                <mu-list-item button v-for="item in materialcate" :key="item.id" :ripple="false" nested :open="open === item.typeID"
                    @toggle-nested="open = arguments[0] ? item.typeID : ''">

                    <!-- <mu-list-item-action>
                    <mu-icon value="send"></mu-icon>
                </mu-list-item-action> -->
                    <mu-list-item-title>{{item.name}}</mu-list-item-title>
                    <!-- <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                </mu-list-item-action> -->
                    <mu-list-item button v-for="subitem in item.subtype" :key="subitem.id" :ripple="false" slot="nested">
                        <mu-list-item-title>{{subitem.name}}</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false" slot="nested">
                        <mu-list-item-title>
                            <mu-icon value="add"></mu-icon>
                        </mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
                <mu-button flat>
                    <mu-icon value="add"></mu-icon>
                </mu-button>
            </mu-list>
        </mu-paper>
        <mu-button slot="actions" flat color="primary" @click="closeselectrawcateDialog">选择</mu-button>

    </div>
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

            }
        },
        methods: {

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