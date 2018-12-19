<template>

    <article>
        <mu-text-field class="mygridcol-0" style="height:20px;" type='number' v-model="no" placeholder="序号"></mu-text-field>
        <mu-select label="材质" v-model="type">
            <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
        </mu-select>
        <mu-expansion-panel :expand="true" @change="toggle('panel1')">
            <div slot="header">选择类型</div>
            <div>
                <mu-select label="类型" v-model="type">
                    <mu-option v-for="item in types" :key="item" :label="item" :value="item"></mu-option>
                </mu-select>
                <mu-select label="子类型" v-model="subtype">
                    <mu-option v-for="subtypeitem in subtypes" :key="subtypeitem" :label="subtypeitem" :value="subtypeitem"></mu-option>
                </mu-select>

            </div>
        </mu-expansion-panel>
        <mu-expansion-panel :expand="true" @change="toggle('panel1')">
            <div slot="header">下料方式</div>
            <div class="mygrid">

                选择机床(可选)

            </div>
            <mu-date-input v-model="value3" label="计划开始时间" label-float full-width no-display></mu-date-input>
            <mu-date-input v-model="value3" label="计划完成时间" label-float full-width no-display></mu-date-input>
            实际开始时间,时间完成时间
        </mu-expansion-panel>
        <mu-expansion-panel :expand="true" @change="toggle('panel1')">
            <div slot="header">下料尺寸</div>
            <div class="mygrid">
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="attach_file"></mu-icon>
                    库中图纸
                </mu-button>
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="attach_file"></mu-icon>
                    本地上传图纸
                </mu-button>
                <mu-text-field class="mygridcol-1" v-model="name" placeholder="长..."></mu-text-field>
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="attach_file"></mu-icon>
                    倒角样式
                </mu-button>
                <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>
                <mu-text-field class="mygridcol-1" v-model="name" placeholder="宽..."></mu-text-field>
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="attach_file"></mu-icon>
                    倒角样式
                </mu-button>
                <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>
                <mu-text-field class="mygridcol-1" v-model="name" placeholder="高..."></mu-text-field>
                <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">
                    <mu-icon left value="attach_file"></mu-icon>
                    倒角样式
                </mu-button>
                <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>
            </div>
            <mu-text-field class="mygridcol-1" v-model="name" placeholder="数量"></mu-text-field>
        </mu-expansion-panel>


    </article>

</template>