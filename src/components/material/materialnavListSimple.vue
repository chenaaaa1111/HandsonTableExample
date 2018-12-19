<template>

    <mu-list>
        <mu-list-item button :ripple="false" v-for="item in materialcate" :key="item.id" @click="show">
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
        </mu-list-item>
    </mu-list>

</template>
<script>
    import {
        mapState,
        mapGetters
    } from 'vuex';
    export default {
        name: "",
        data() {
            return {}
        },
        computed: {
            // ...mapState({
            //     materialcate: state => state.material.materialcate
            // }),
            ...mapGetters(['materialcate']),
        },
        methods: {

            show() {
                this.$router.push('getmaterial/list')
            }
        }
    };
</script>

<style lang="less" scoped>
    .gridview-nav {
        grid-row: 1 /span 2;
        grid-column: 1/2;
    }
</style>