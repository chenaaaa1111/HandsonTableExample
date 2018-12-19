<template>
    <div class="headtop">

        <div class="headtoprow2">
            <div class="left">
                <mu-button icon color="primary" @click="$router.go(-1)">
                    <mu-icon value="arrow_back"></mu-icon>
                </mu-button>
                <mu-breadcrumbs divider="—">
                    <mu-icon value="chevron_right" slot="divider"></mu-icon>
                    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>
                </mu-breadcrumbs>
            </div>
            <div class="right">
                <mu-button flat color="primary" @click="$router.push('BlankPart/getcode')">
                    <mu-icon left value="add_circle_outline"></mu-icon>创建图号
                </mu-button>
                <mu-button icon color="primary">
                    <mu-icon value="help_outline"></mu-icon>
                </mu-button>
            </div>
        </div>

    </div>

</template>
<script>
    export default {
        name: "Ptoolbar",
        data() {
            return {
                items: [{
                        text: '项目',
                        disabled: false
                    },
                    {
                        text: 'Link1',
                        disabled: false
                    },
                    {
                        text: 'Link2',
                        disabled: true
                    }
                ]

            };
        },

    };
</script>
<style scoped>
    .mu-menu {
        vertical-align: initial;
    }

    .mu-ripple-wrapper {
        position: inherit;
    }
</style>