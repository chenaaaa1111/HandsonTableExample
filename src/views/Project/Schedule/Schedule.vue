<template>

    <body>
        <div class="topheader">
            <pheader />
        </div>

        <div class="navaside">
            <NavLeft />
        </div>


        <router-view></router-view>


    </body>
</template>
<script>
    // import pheader from "./Header.vue";
    // import Nav from "./Nav.vue";

    export default {
        // components: {
        //     pheader,
        //     Nav

        // },
    };
</script>