<template>
    <div class="navaside">
        <mu-paper :z-depth="1">
            <!-- <miniclan /> -->
            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="label"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>任务日历</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item v-for="labelid in labes" :key="labelid.id" button :ripple="false" slot="nested">
                        <mu-list-item-title>{{labelid.text}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
                <mu-list-item button :ripple="false" @click="videoSounds = !videoSounds">
                    <mu-list-item-action>
                        <mu-checkbox v-model="videoSounds" readonly></mu-checkbox>
                    </mu-list-item-action>
                    <mu-list-item-title>
                        视频的声音
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


            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="label"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>人员日历</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item v-for="labelid in labes" :key="labelid.id" button :ripple="false" slot="nested">
                        <mu-list-item-title>{{labelid.text}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
            <mu-list toggle-nested>
                <mu-list-item button :ripple="false" nested :open="open === 'label'" @toggle-nested="open = arguments[0] ? 'stared' : ''">
                    <mu-list-item-action>
                        <mu-icon value="label"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item-title>设备日历</mu-list-item-title>
                    <mu-list-item-action>
                        <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down"></mu-icon>
                    </mu-list-item-action>
                    <mu-list-item v-for="labelid in labes" :key="labelid.id" button :ripple="false" slot="nested">
                        <mu-list-item-title>{{labelid.text}}</mu-list-item-title>
                    </mu-list-item>
                </mu-list-item>
            </mu-list>
        </mu-paper>
    </div>
</template>
<script>
    // import miniclan from "./MiniCalendar.vue";

    export default {
        // components: {
        //     miniclan,
        // }

    }
</script>