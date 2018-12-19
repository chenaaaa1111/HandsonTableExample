<template>
    <mu-dialog title="分享" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openshare">
        <mu-sub-header>有效期限</mu-sub-header>
        <mu-flex>
            <mu-radio :value="1" v-model="sharetime" label="1天"></mu-radio>
            <mu-radio :value="7" v-model="sharetime" label="7天"></mu-radio>
            <mu-radio :value="30" v-model="sharetime" label="30天"></mu-radio>
            <mu-radio :value="0" v-model="sharetime" label="永久"></mu-radio>
        </mu-flex>
        <mu-divider style="margin-top:10px"></mu-divider>
        <mu-sub-header>分享范围</mu-sub-header>
        <mu-text-field v-model="addpeople" placeholder="输入联系人" :action-icon="'search'"></mu-text-field>
        <mu-button flat color="primary">添加</mu-button>
        <table>
            <tr>
                <td>所有人</td>
                <td>xx工作组</td>
                <td>xxxx人</td>
                <td>
                    <mu-menu placement="bottom-end" :open.sync="rightmore">
                        <mu-button flat>权限
                            <mu-icon right vertical-align=bottom value="keyboard_arrow_down"></mu-icon>

                        </mu-button>
                        <mu-list slot="content">
                            <mu-list-item button>
                                <mu-list-item-title>只读</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button to="Setting">
                                <mu-list-item-title>编辑</mu-list-item-title>
                            </mu-list-item>
                            <mu-list-item button>
                                <mu-list-item-title>下载</mu-list-item-title>
                            </mu-list-item>
                        </mu-list>
                    </mu-menu>
                </td>
            </tr>
        </table>
        <mu-divider></mu-divider>
        <mu-sub-header>通知方式</mu-sub-header>
        <mu-flex>
            <mu-checkbox uncheck-icon="favorite_border" checked-icon="mail" label="邮件"></mu-checkbox>
        </mu-flex>

        <mu-button slot="actions" flat @click="closeAlertDialog">取消</mu-button>
        <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">分享</mu-button>
    </mu-dialog>
</template>
<script>
    export default {
        data() {
            return {
                sharetime: 1,
                openshare: false,
                value: "sharelife",
                addpeople: "",
                sharepeople: [],
                rightmore: false,
            };
        },
        methods: {
            closeAlertDialog() {
                this.openshare = false;
            }
        }
    };
</script>