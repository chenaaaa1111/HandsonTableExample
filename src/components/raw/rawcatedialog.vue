<template>
    <mu-dialog title="选择材料类型或规格" width="500" scrollable :open.sync="openselectrawcatedalog">
        <!-- 风格一 -->
        <mu-sub-header> 最近</mu-sub-header>

        <mu-divider></mu-divider>

        <div v-for="item in rawcate" :key="item.id">

            <mu-sub-header> {{item.name}}</mu-sub-header>

            <mu-button v-for="subitem in item.subtype" :key="subitem.id" flat>
                <mu-icon left :value="subitem.icon"></mu-icon>
                {{subitem.name}}
            </mu-button>
            <mu-icon value="add"></mu-icon>
            <mu-divider></mu-divider>

        </div>

        <mu-icon value="add"></mu-icon>

        <mu-button slot="actions" flat color="primary" @click="closeselectrawcateDialog">选择</mu-button>

    </mu-dialog>
</template>
<script>
    import {
        mapState
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
            ...mapState(['rawcate'])
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