<template>
    <div class="channel-header">
        <leftChannel></leftChannel>
        <rightChannel></rightChannel>
    </div>
</template>

<script>
import leftChannel from './channel/leftChannel.vue';
import rightChannel from './channel/rightChannel.vue';


export default {
    name: 'homeChannel',
    components: {
        leftChannel,
        rightChannel
    }
}
</script>

<style scoped>
.channel-header {
    color: #18191C;
    font-size: 13px;
    display: flex;
    align-items: center;
    margin: 0 68px;
    height: 100px;
}
</style>