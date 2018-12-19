<template>


    <body>
        <topheader />

        <div class="pagecontent">
            <div class="pagecontent">
                <router-view v-if="show" name="navside"></router-view>
                <router-view name="content"></router-view>
            </div>

        </div>

    </body>
</template>


<script>
    import topheader from "@/components/topheader.vue";
    export default {
        data() {
            return {
                show: true,
            }

        },
        components: {
            topheader,
        },
    };
</script>