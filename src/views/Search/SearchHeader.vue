<template>
    <header>
        <div class="left">
            <mu-button icon>
                <mu-icon value="apps"></mu-icon>
            </mu-button>
            <h3 style="margin-right:20px;">搜索</h3>
            <mu-menu cover>
                <mu-button color="primary">版本管理</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>变更</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>发布</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>审批</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>Help</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>Sign out</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
            <mu-menu cover>
                <mu-button color="primary">查看</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>使用位置</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>状态</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>分类</mu-list-item-title>
                    </mu-list-item>

                </mu-list>
            </mu-menu>
            <mu-menu cover>
                <mu-button color="primary">编辑</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>删除</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>属性</mu-list-item-title>
                    </mu-list-item>

                </mu-list>
            </mu-menu>
            <mu-menu cover>
                <mu-button color="primary">导出</mu-button>
                <mu-list slot="content">
                    <mu-list-item button>
                        <mu-list-item-title>生成清单</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                        <mu-list-item-title>打印</mu-list-item-title>
                    </mu-list-item>

                </mu-list>
            </mu-menu>
        </div>
        <div class="right">
            <mu-text-field v-model="value2" placeholder="Please input......"></mu-text-field>
            <mu-button color="primary">搜索</mu-button>
        </div>
    </header>
</template>