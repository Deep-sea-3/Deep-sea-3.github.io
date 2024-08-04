<template>
    <li v-for="item in navLeftList" :key="item.id">
        <a :href="baseUrl + item.id" target="_blank" class="bounce"><span>{{ item.name }}</span></a>
    </li>
    <li class="loc-li d-none d-xl-block" @click="$util.goBlank('love')">
        <div class="loc-mc-box">
            <p class="loc-mc-box__text loc-mc-box__txt-top">说爱你</p>
            <img class="loc-mc-box__pic"
                :src="$util.url.load + '//i0.hdslb.com/bfs/banner/c20870ab364a0a695df28fad6888a3914a7362e7.png'" alt="图片">
            <p class="loc-mc-box__text loc-mc-box__txt-down">说爱你</p>
        </div>
    </li>
    <li>
        <a class="icon-horizontal" :href="baseUrl + 'download'" target="_blank">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="download-client-trigger__icon">
                <path
                    d="M7.23181 8.65895V1.75796C7.23181 1.33935 7.57582 1 8.00018 1C8.42453 1 8.76854 1.33935 8.76854 1.75796V8.67097L9.98589 7.47009C10.286 7.17409 10.7725 7.17409 11.0725 7.47009C11.3726 7.7661 11.3726 8.24601 11.0725 8.54201L8.54958 11.0308C8.24952 11.3268 7.76302 11.3268 7.46295 11.0308L4.94002 8.54201C4.63995 8.24601 4.63995 7.7661 4.94002 7.47009C5.24008 7.17409 5.72658 7.17409 6.02665 7.47009L7.23181 8.65895Z"
                    fill="currentColor"></path>
                <path
                    d="M3.48023 4.29936C2.40686 4.29936 1.53672 5.15772 1.53672 6.21656V11.5669C1.53672 12.6257 2.40686 13.4841 3.48023 13.4841H12.5198C13.5931 13.4841 14.4633 12.6257 14.4633 11.5669V6.21656C14.4633 5.15772 13.5931 4.29936 12.5198 4.29936H11.6158C11.1915 4.29936 10.8475 3.96001 10.8475 3.5414C10.8475 3.12279 11.1915 2.78344 11.6158 2.78344H12.5198C14.4418 2.78344 16 4.3205 16 6.21656V11.5669C16 13.4629 14.4418 15 12.5198 15H3.48023C1.55815 15 0 13.4629 0 11.5669V6.21656C0 4.3205 1.55815 2.78344 3.48023 2.78344H4.38418C4.80853 2.78344 5.15254 3.12279 5.15254 3.5414C5.15254 3.96001 4.80853 4.29936 4.38418 4.29936H3.48023Z"
                    fill="currentColor"></path>
            </svg>
            <span>下载客户端</span>
        </a>
    </li>
</template>

<script>
export default {
    name: 'LeftNav',
    data() {
        return {
            baseUrl: '/blank/',
            navLeftList: [
                {
                    id: 'anime',
                    name: '番剧',
                },
                {
                    id: 'live',
                    name: '直播',
                },
                {
                    id: 'game',
                    name: '游戏中心',
                },
                {
                    id: 'vipShop',
                    name: '会员购',
                },
                {
                    id: 'comic',
                    name: '漫画',
                },
                {
                    id: 'competition',
                    name: '赛事',
                },
            ],
        }
    }
}
</script>

<style scoped>
.loc-li {
    height: 64px;
    line-height: 64px;
    overflow: hidden;
}

.loc-mc-box {
    width: 42px;
    height: 64px;
    position: relative;
    margin-top: 14px;
    width: 54px;
    height: 160px;
    animation: move 10s infinite ease-out;
    animation-delay: 4.5s;
    cursor: pointer;
}

.loc-mc-box__pic {
    position: absolute;
    top: 36px;
    left: 0;
    margin: 20px 0;
    width: 54px;
    height: 36px;
}

.loc-mc-box__text {
    position: absolute;
    width: 100%;
    height: 36px;
    text-align: center;
    line-height: 36px;
}

.loc-mc-box__txt-top {
    top: 0;
    left: 0;
}


.loc-mc-box__txt-down {
    top: 110px;
    left: 0;
}

@keyframes move {
    0% {
        transform: translateY(0);
    }

    5% {
        transform: translateY(-57px);
    }

    50% {
        transform: translateY(-57px);
    }

    55% {
        transform: translateY(-110px);
    }

    100% {
        transform: translateY(-110px);
    }
}
</style>