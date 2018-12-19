<template>
    <mu-paper :z-depth="1">

        <mu-list>
            <mu-list-item button :ripple="false" to="cuscode">
                <mu-list-item-action>
                    <mu-icon value="inbox"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>编码</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" to="Setting/device">
                <mu-list-item-action>
                    <mu-icon value="grade"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>设备</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" to="Setting/users">
                <mu-list-item-action>
                    <mu-icon value="send"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>人员</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false">
                <mu-list-item-action>
                    <mu-icon value="drafts"></mu-icon>
                </mu-list-item-action>
                <mu-list-item-title>Drafts</mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>All mail</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>Trash</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>Spam</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="false">
                <mu-list-item-title>Follow up</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon value="info"></mu-icon>
                </mu-list-item-action>
            </mu-list-item>
        </mu-list>
    </mu-paper>

</template>
<script>
    export default {

        data() {}
    };
</script>