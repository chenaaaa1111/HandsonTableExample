<template>
<!-- table行的折叠和展开
https://blog.csdn.net/u014715787/article/details/83186572 -->
<table class="tab-left table tab-zn">
                                    <thead>
                                    <tr>
                                        <th>在线状态</th>
                                        <th>名称</th>
                                        <th>管理地址</th>
                                        <th>显示</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <template v-for="(item) in bfData">
                                        <tr class="pointer"
                                            @click="selectCj(item)">
                                            <td><span class="status sta-green"
                                                      :class="[item.status?'sta-green':'sta-gray']"></span></td>
                                            <td v-html="item.task_cycle"></td>
                                            <td v-html="item.task_detial"></td>
                                            <td>
                                                <button @click="item.task_detial=!item.task_detial">bbb</button>
                                            </td>
                                        </tr>
                                        <tr v-if="item.task_detial">
                                            <td colspan="4">
                                                <div>123</div>
                                            </td>
                                        </tr>
                                    </template>
                                    </tbody>
                                </table>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>
