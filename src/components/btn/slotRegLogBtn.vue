<template>
    <button type="button" class="btn btn_primary">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'slotRegLogBtn',
}

</script>

<style scoped>
.btn_primary {
    width: 194px;
    height: 40px;
    border-radius: 8px;
    font-size: 14px;
    color: #fff;
    background-color: #00aeec;
}

.btn_primary:hover {
    background-color: #68b8ea;
}
</style>