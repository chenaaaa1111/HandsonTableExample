<template>
  <aside>
    <mu-paper>
      <mu-list>
        <mu-list-item v-for="navitem in navlists" :key="navitem.id" button :ripple="true" @click="$router.push(navitem.routepath)">
          <mu-list-item-action>
            <mu-icon :value="navitem.iconval"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>{{navitem.name}} </mu-list-item-title>
        </mu-list-item>

        <mu-divider></mu-divider>
      </mu-list>

      <!-- 固定不变的地方 -->
      <mu-list toggle-nested>
        <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'label' : ''">
          <mu-list-item-action>
            <mu-icon value="label"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>标签</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
          </mu-list-item-action>
          <mu-list-item v-for="labelid in labes" :key="labelid.id" button :ripple="false" slot="nested">
            <mu-list-item-title>{{labelid.text}}</mu-list-item-title>
          </mu-list-item>

        </mu-list-item>
      </mu-list>
    </mu-paper>
  </aside>
</template>
<script>
  export default {
    name: "NavLeft",
    data() {
      return {
        open: "label",
        navlists: [{
            iconval: "update",
            name: "最近",
            routepath: "/RecentList"
          },
          {
            iconval: "favorite_border",
            name: "收藏",
            routepath: "/FavouriteList"
          },
          {
            iconval: "list",
            name: "列表",
            routepath: "/"
          },
          {
            iconval: "group",
            name: "社区",
            routepath: ""
          }
        ],
        labes: [{
            text: "标签一"
          },
          {
            text: "标签二"
          },
          {
            text: "标签三"
          }
        ]
      };
    }
  };
</script>
<style>

</style>