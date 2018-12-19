<template>
  <div class="centers">
    <ptoolbar class="centershead">
    </ptoolbar>
    <div class="centersmid">
      <!-- 初始列表是plist -->
      <plist> </plist>
    </div>
  </div>
</template>

<script>
  // import "./Project.css";
  // import ptoolbar from "./Ptoolbar.vue";
  import plist from "./ProjectList.vue";
  import myfoot from "@/components/Foot.vue";
  export default {
    components: {
      // ptoolbar,
      plist,
      myfoot
    },
    beforeCreate: {},
    mounted: {}
  };
</script>