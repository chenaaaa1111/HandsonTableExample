<template>
    <mu-dialog title="选择材质" width="500" scrollable :open.sync="openselectmaerialcatedalog">
        <!-- 风格一 -->
        <mu-sub-header> 最近</mu-sub-header>

        <mu-divider></mu-divider>
        <div v-for="item in materialcate" :key="item.id">

            <mu-sub-header> {{item.name}}</mu-sub-header>

            <mu-button v-for="subitem in item.subtype" :key="subitem.id" flat @click="show">
                <!-- <mu-icon left :value="subitem.icon"></mu-icon> -->
                {{subitem.name}}
            </mu-button>
            <mu-button flat>
                <mu-icon value="add"></mu-icon>
            </mu-button>
            <mu-divider></mu-divider>

        </div>
        <mu-icon value="add"></mu-icon>


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
                openselectmaerialcatedalog: false,
            }
        },
        methods: {
            show() {
                this.$router.push('getmaterial/list')
            }
        },
        computed: {

            ...mapGetters(['materialcate'])
        }
    };
</script>
<style>

</style>