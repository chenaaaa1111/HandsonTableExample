<template>
    <mu-container class="list">
        <div>
            <mu-text-field v-model="name" placeholder="长..."></mu-text-field>
            <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">倒角样式
                <mu-icon right value="arrow_drop_down"></mu-icon>

            </mu-button>
            <mu-text-field v-model="name" placeholder="余量"></mu-text-field>
        </div>
        <div>
            <mu-text-field class="mygridcol-1" v-model="name" placeholder="宽..."></mu-text-field>
            <mu-button flat style="margin-top:20px;" @click="adddrawingbtn"> 倒角样式
                <mu-icon right value="arrow_drop_down"></mu-icon>

            </mu-button>
            <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>
        </div>
        <div>
            <mu-text-field class="mygridcol-1" v-model="name" placeholder="高..."></mu-text-field>
            <mu-button flat style="margin-top:20px;" @click="adddrawingbtn">倒角样式
                <mu-icon right value="arrow_drop_down"></mu-icon>

            </mu-button>
            <mu-text-field class="mygridcol-1" v-model="name" placeholder="余量"></mu-text-field>
        </div>
        <!-- <mu-text-field class="mygridcol-1" v-model="name" placeholder="数量"></mu-text-field> -->
        <mu-text-field style="min-width:10px;width:100px" v-model="comment"></mu-text-field>

        <div>
            <mu-button icon color="primary" @click="$router.go(-1)">
                <mu-icon value="save"></mu-icon>
            </mu-button>
            <mu-button icon color="primary" @click="$router.go(-1)">
                <mu-icon value="close"></mu-icon>
            </mu-button>
        </div>
    </mu-container>
</template>
<script>
    export default {
        name: "",
        data() {
            return {}
        }
    };
</script>