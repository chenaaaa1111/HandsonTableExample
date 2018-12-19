<template>


    <section>
        <table border="1" cellspacing="0" cellpadding="0">
            <tr>
                <td>序号</td>

                <td>零件号.版本</td>
                <td>名称</td>
                <td>单套数量</td>
                <td>类型</td>
                <td>材质</td>
                <td>图纸名</td>
            </tr>
        </table>
    </section>

</template>
<script>
    export default {
        name: "",
        data() {
            return {
                listformatmore: false,
                showprocess: false,
            }
        }
    };
</script>