<template>
    <div>
        <div v-for="(tile, index) in materialcatelist" :key="index">
            <!-- <mu-sub-header>{{tile.type}}</mu-sub-header> -->
            <mu-sub-header>{{tile}}</mu-sub-header>
            <!-- <mu-button flat style="width:100px">
                <mu-icon left :value="tile.subtype.icon"></mu-icon>
                {{tile.subtype.name}}
            </mu-button> -->
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters
    } from 'vuex';
    export default {

        data() {
            return {};
        },
        computed: {
            // ...mapState({
            //     materialcatelist: state => state.material.materialcatelist
            // }),
            ...mapGetters(['materialcate']),
            ...mapGetters(['materialcatelist']),
            ...mapGetters(['getmaterialcatelist']),

        },
    };
</script>