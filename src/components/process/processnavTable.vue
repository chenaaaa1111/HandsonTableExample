<template>
    <div>
        <!-- 风格一 -->
        <mu-sub-header> 最近</mu-sub-header>
        <div class="gridlayout" style="margin-top:10px;margin-bottom:20px">
            <div class="griditem" v-for="item in 5" :key="item">
                <mu-avatar text-color="primary" color="white">
                    <mu-icon value="insert_drive_file"></mu-icon>{{item}}
                </mu-avatar>
            </div>
        </div>
        <mu-divider></mu-divider>
        <div v-for="item in processcate" :key="item.id">

            <mu-sub-header> {{item.name}}</mu-sub-header>

            <mu-button v-for="subitem in item.subtype" :key="subitem.id" flat @click="show">
                <!-- <mu-icon left :value="subitem.icon"></mu-icon> -->
                {{subitem.name}}
            </mu-button>
            <mu-button icon color="primary">
                <mu-icon value="add_circle_outline"></mu-icon>
            </mu-button>
            <mu-divider></mu-divider>

        </div>
        <mu-button flat color="primary">
            <mu-icon value="add"></mu-icon>
        </mu-button>
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
            show() {
                this.$router.push('getraw/list')
            }
        },
        computed: {

            ...mapGetters(['processcate'])
        }
    };
</script>
<style>

</style>