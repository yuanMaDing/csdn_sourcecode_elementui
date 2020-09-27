<template>
    <div class="ElPro-Button">
        <el-Button :type="type" :native-type="nativeType" :size="size">
            <slot></slot>
        </el-Button>
    </div>
</template>
<script>
export default {
    name: "elproButton",
    props: {
        type: {
            type: String,
            default: "default",
        },
        nativeType: {
            type: String,
            default: "button",
        },
        size: {
            type: String,
            default: "medium",
        },
    },
};
</script>
<style lang="scss" scoped>
.ElPro-Button {
    @include flex(none, center, center);
    // 自定义large的样式
    .el-button--large {
        font-size: 30px;
    }
}
</style>