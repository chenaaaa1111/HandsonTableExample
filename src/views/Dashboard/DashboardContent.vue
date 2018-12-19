<template>
    <div>
        退出
    </div>
</template>
<script>
    export default {
        name: "",
        data() {
            return {}
        },
        methods: {
            logout() {
                this.$store.dispatch('Logout').then(() => {
                    this.$router.push({
                        path: '/login'
                    });
                }).catch(err => {
                    this.$message.error(err);
                });
            }
        }
    };
</script>