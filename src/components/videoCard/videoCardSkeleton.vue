<template>
    <div class="video-card_skeleton">
        <div class="video-card-cover animation-loading"></div>
        <div class="video-card-info">
            <div class="video-card-info--right">
                <p class="video-card-info--text animation-loading"></p>
                <p class="video-card-info--text short animation-loading"></p>
                <p class="video-card-info--light animation-loading"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'videoCardSkeleton',
    components: {

    }
}
</script>

<style scoped>
.video-card_skeleton {
    position: relative;
    z-index: 2;
    background-color: white;
}

@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0 50%;
    }
}

.animation-loading {
    background: linear-gradient(-45deg, #F1F2F3 25%, #FFFFFF 45%, #F1F2F3 65%);
    background-size: 400% 100%;
    animation: skeleton-loading 1.2s ease-in-out infinite;
}

.video-card-cover {
    padding-top: 56.25%;
    border-radius: 6px;
    background-color: #F1F2F3;
}

.video-card-info {
    margin-top: 8px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.video-card-info--right {
    flex: 1
}

.video-card-info--text {
    margin-bottom: 4px;
    width: 94%;
    height: 18px;
    border-radius: 4px;
    background-color: #F1F2F3;
}

.short {
    width: 72%;
}

.video-card-info--light {
    margin-top: 8px;
    height: 17px;
    width: 50%;
    border-radius: 4px;
    background-color: #F1F2F3;
}
</style>