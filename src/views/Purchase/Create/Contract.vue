<template>
    <div>
        <mu-sub-header>左右边栏显示</mu-sub-header>
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">甲乙双方信息</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.

            <mu-button slot="action" flat color="primary">管理</mu-button>
        </mu-expansion-panel>
        <!-- <mu-sub-header>左右边栏显示</mu-sub-header> -->
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">收发货地址</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <mu-button slot="action" flat color="primary" @click="openScrollDialog">管理</mu-button>
        </mu-expansion-panel>
        <mu-dialog title="收发货地址" width="360" scrollable :open.sync="openScroll">
            <mu-list>
                <mu-list-item :key="option" v-for="option in options">
                    <mu-list-item-content>
                        <mu-radio :label="option" :value="option" v-model="ringtone"></mu-radio>
                    </mu-list-item-content>
                </mu-list-item>
            </mu-list>
            <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>
        </mu-dialog>
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">付款方式</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <mu-button slot="action" flat color="primary">管理</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">合同模板</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <mu-button slot="action" flat color="primary">管理</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">技术协议</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <mu-button slot="action" flat color="primary">管理</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">保密协议</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <mu-button slot="action" flat color="primary">管理</mu-button>
        </mu-expansion-panel>
        <mu-expansion-panel style="margin-top:5px;">
            <div slot="header">采购清单</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <mu-button slot="action" flat color="primary">编辑</mu-button>
        </mu-expansion-panel>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                openScroll: false,
                ringtone: 'None',
                options: [
                    'None',
                    'Atria',
                    'Callisto',
                    'Dione',
                    'Ganymede',
                    'Hangouts Call',
                    'Luna',
                    'Oberon',
                    'Phobos',
                    'Pyxis',
                    'Sedna',
                    'Titania',
                    'Triton',
                    'Umbriel'
                ]
            };
        },
        methods: {
            openScrollDialog() {
                this.openScroll = true;
            },
            closeScrollDialog() {
                this.openScroll = false;
            }
        }
    };
</script>