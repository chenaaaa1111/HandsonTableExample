<template>

  <body>
    <pheader />
    <div class="pagecontent">
      <router-view v-if="show" name="navside"></router-view>
      <router-view name="content"></router-view>
    </div>
  </body>
</template>
<script>
  import pheader from "@/components/topheader.vue";
  // import NavLeft from "./NavLeft.vue";

  export default {
    data() {
      return {
        // pagecontentclass: 'pagecontentnorm',
        show: true,
      }

    },
    components: {
      pheader,


    },
  };
</script>