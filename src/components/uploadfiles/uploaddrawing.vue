<template>
    <div>
        <mu-button @click="upload">上传</mu-button>
        <p>图纸可以创建新的版本， 也可以覆盖原来的文件</p>
        <p>图纸按文件名的命名自动分文件夹（当文件数量大于100时），比如都以3561开头的文件，比如都以3561-2301 开头的文件，在3561下再创建文件夹</p>
        <br>
        <global-uploader></global-uploader>
        <p>
            use a compoent:
            强大的 Vue 上传组件 vue-simple-uploader
            https://www.v2ex.com/t/385555
            其主要特点就是：
            支持文件、多文件、文件夹上传
            支持拖拽文件、文件夹上传
            统一对待文件和文件夹，方便操作管理
            可暂停、继续上传
            错误处理
            支持“快传”，通过文件判断服务端是否已存在从而实现“快传”
            上传队列管理，支持最大并发上传
            分块上传
            支持进度、预估剩余时间、出错自动重试、重传等操作
            安装
            通过npm安装：npm install vue-simple-uploader --save即可。
            使用\

            https://www.w3xue.com/exp/article/201812/11827.html
        </p>
        <!-- <uploader :options="options" :file-status-text="statusText" class="uploader-example" ref="uploader"
            @file-complete="fileComplete" @complete="complete"></uploader> -->
        <uploader :options="options" :file-status-text="statusText" class="uploader-example">
            <uploader-unsupport></uploader-unsupport>
            <uploader-drop>
                <p>Drop files here to upload or</p>
                <uploader-btn>select files</uploader-btn>
                <uploader-btn :attrs="attrs">select images</uploader-btn>
                <uploader-btn :directory="true">select folder</uploader-btn>
            </uploader-drop>
            <uploader-list></uploader-list>
        </uploader>
    </div>
</template>
<script>
    // import uploader from 'vue-simple-uploader'
    import globalUploader from './globalUploader.vue'
    import Bus from './js/bus';
    export default {
        components: {
            globalUploader
        },
        data() {
            return {
                options: {
                    // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
                    target: "//localhost:8080/upload",
                    testChunks: false
                },
                attrs: {
                    accept: "image/*"
                },
                statusText: {
                    success: '成功了',
                    error: '出错了',
                    uploading: '上传中',
                    paused: '暂停中',
                    waiting: '等待中'
                }
            };
        },
        methods: {
            complete() {
                console.log('complete', arguments)
            },
            fileComplete() {
                console.log('file complete', arguments)
            },
            upload() {
                // 打开文件选择框
                Bus.$emit('openUploader', {
                    id: '1111' // 传入的参数
                })
            }
        },
        mounted() {
            // 文化上传成功的回调
            Bus.$on('fileSuccess', data => {
                console.log(data)
            });
        },
        // mounted() {
        //     this.$nextTick(() => {
        //         window.uploader = this.$refs.uploader.uploader
        //     })
        // }

    };
</script>

<style lang="less" scoped>
    .uploader-example {
        width: 880px;
        padding: 15px;
        margin: 40px auto 0;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }

    .uploader-example .uploader-btn {
        margin-right: 4px;
    }

    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>