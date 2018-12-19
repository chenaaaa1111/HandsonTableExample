<template>
    <mu-dialog title="选择单位" width="360" scrollable :open.sync="openunitdalog">
        <mu-list>
            <mu-list-item :key="option" v-for="option in qtyunitList">
                <mu-list-item-content>
                    <mu-radio :label="option" :value="option" v-model="unit"></mu-radio>
                </mu-list-item-content>
            </mu-list-item>
        </mu-list>
        <mu-button slot="actions" flat @click="manageunit">管理</mu-button>
        <mu-button slot="actions" flat color="primary" @click="closeunitDialog">选择</mu-button>
    </mu-dialog>
</template>
<script>
    import {
        mapGetters,
        mapMutations,
        mapActions
    } from "vuex";
    export default {
        data() {
            return {
                openunitdalog: false,
                unit: "件",
            }
        },
        computed: {
            ...mapGetters(['qtyunitList'])
        },
        methods: {
            closeunitDialog() {
                this.openunitdalog = false
            },
            manageunit() {}
        }
    };
</script>