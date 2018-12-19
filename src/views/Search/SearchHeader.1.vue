<template>
    <header>
        <div class="left">
            <mu-button icon>
                <mu-icon value="apps"></mu-icon>
            </mu-button>
            <h3 style="margin-right:20px;">搜索</h3>

        </div>
        <div class="right">
            <mu-text-field v-model="value2" placeholder="Please input......"></mu-text-field>
            <mu-button color="primary">搜索</mu-button>
        </div>
    </header>
</template>