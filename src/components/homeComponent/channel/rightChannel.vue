<template>
    <div class="right-channel">
        <channelItemsLeft></channelItemsLeft>
        <channelItemsRight></channelItemsRight>
    </div>
</template>

<script>
import channelItemsLeft from './channel-items_left.vue';
import channelItemsRight from './channel-items_right.vue';

export default {
    name: 'rightChannel',
    components: {
        channelItemsLeft,
        channelItemsRight
    }
}
</script>

<style scoped>
.right-channel {
    flex: 1;
    display: flex;
    justify-content: space-between;
    color: #61666d;
}

.right-channel svg {
    fill: #61666d;
}
</style>