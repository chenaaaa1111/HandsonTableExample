<template>
    <main>
        <header class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
            </div>
            <div class="right">
                <mu-select v-model="type">
                    <mu-option v-for="item in rawcate" :key="item.type" :label="item.name" :value="item.type"></mu-option>
                </mu-select>
                <mu-select v-model="subtype">
                    <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem.name" :value="subtypeitem"></mu-option>
                </mu-select>
                <mu-text-field v-model="searchword" :action-icon="'search' " :action-click="searchmat"></mu-text-field>
                <mu-button icon color="primary">
                    <mu-icon value="playlist_add"></mu-icon>
                </mu-button>
            </div>
        </header>
        <mu-container>

            <!-- <rawnav /> -->


            <router-view />
        </mu-container>
        <!-- <div class="gridview">
            <rawnav class="gridview-nav" />
            <div class="gridview-table">

                <router-view />
            </div>
        </div> -->
    </main>
</template>
<script>
    import {
        mapState,
        mapGetters
    } from 'vuex';
    import rawnav from '@/components/raw/rawnavTable.vue'
    export default {
        components: {
            rawnav
        },
        name: "",
        data() {
            return {
                type: "选择类型",
                subtype: "选择子类型",
                searchword: ""
            }
        },
        methods: {
            searchmat() {
                this.$router.push('')

            }
        },

        computed: {
            // ...mapState({
            //     materialcate: state => state.material.materialcate
            // }),
            ...mapGetters(['rawcate', 'type', 'subtype']),
        },

    };
</script>

<style lang="less" scoped>
    // .buttongroup {
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    // }

    // .buttonmenu {
    //     display: flex;
    //     justify-content: space-between;
    //     width: 80px;
    //     align-items: center;
    //     margin-right: 10px;
    // }

    // .mu-icon-button {
    //     height: 20px;
    //     width: 20px;
    //     font-size: 14px;
    //     padding: 0px;
    // }

    // .mu-flat-button {
    //     padding: 0px;
    //     height: 20px; // width: 50px;
    //     text-align: right; // 
    //     min-width: 10px;

    // }

    // .mu-ripple-wrapper {
    //     text-align: right;
    //     min-width: 10px;
    // }

    // .mu-button-wrapper {
    //     justify-content: flex-end;
    //     padding: 0px;
    //     min-width: 10px;
    //     text-align: right; // 
    // }

    .gridview {
        display: grid;
        /* grid-template-columns: 100px 100px 100px; */
        grid-template-rows: 50px auto;
        grid-template-columns: 70px auto; // grid-gap: 10px;
        max-width: 100%;
        grid-auto-flow: row;
    }

    .gridview-title {
        grid-row: 1;
        grid-column: 2 / span 2;
        justify-self: center;
    }

    .gridview-nav {
        grid-row: 1 /span 2;
        grid-column: 1/2;
    }

    .gridview-table {
        grid-row: 2/3;
        grid-column: 2/3;
        background-color: transparent;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: column;

    }
</style>