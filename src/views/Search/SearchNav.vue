<template>
    <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-list>
            <mu-sub-header>范围</mu-sub-header>
            <mu-list-item button :ripple="false" @click="notifications = !notifications">
                <mu-list-item-action>
                    <mu-checkbox v-model="notifications" readonly></mu-checkbox>
                </mu-list-item-action>
                <mu-list-item-title>
                    项目
                </mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" @click="sounds = !sounds">
                <mu-list-item-action>
                    <mu-checkbox v-model="sounds" readonly></mu-checkbox>
                </mu-list-item-action>
                <mu-list-item-title>
                    清单
                </mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" @click="videoSounds = !videoSounds">
                <mu-list-item-action>
                    <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
                </mu-list-item-action>
                <mu-list-item-title>
                    视频的声音
                </mu-list-item-title>
            </mu-list-item>
        </mu-list>
        <mu-list textline="two-line">
            <mu-list-item>
                <mu-select label="Multi Select" multiple v-model="multi.value1" full-width>
                    <mu-option v-for="(city) in citys" :key="city" :label="city" :value="city"></mu-option>
                </mu-select>
            </mu-list-item>
        </mu-list>
        <mu-divider></mu-divider>
        <mu-list>
            <mu-sub-header>声音开启设置</mu-sub-header>
            <mu-list-item button :ripple="false" @click="events = !events">
                <mu-list-item-title>
                    事件和提醒
                </mu-list-item-title>
                <mu-list-item-action>
                    <mu-switch v-model="events" readonly></mu-switch>
                </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="false" @click="calls = !calls">
                <mu-list-item-title>
                    电话
                </mu-list-item-title>
                <mu-list-item-action>
                    <mu-switch v-model="calls" readonly></mu-switch>
                </mu-list-item-action>
            </mu-list-item>
            <mu-list-item button :ripple="false" @click="messages = !messages">
                <mu-list-item-title>
                    信息
                </mu-list-item-title>
                <mu-list-item-action>
                    <mu-switch v-model="messages" readonly></mu-switch>
                </mu-list-item-action>
            </mu-list-item>
        </mu-list>

    </mu-paper>
</template>
<script>
    export default {
        data() {
            return {
                events: false,
                calls: false,
                messages: false,
                notifications: false,
                sounds: false,
                videoSounds: false
            }
        }
    }
</script>
<style>
    .demo-list-wrap {
        width: 100%;
        max-width: 360px;
        overflow: hidden;
    }
</style>