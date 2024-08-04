<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="item, index in carouselList" :key="item.id" :class="index == 0 ? ' active' : ''" type="button"
                data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index"
                :aria-current="index == 0 ? 'true' : ''"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item" v-for="item, index in carouselList" :key="item.id"
                :class="index == 0 ? ' active' : ''">
                <div class="carousel-container" @click="$util.goBlank('carousel' + item.id)">
                    <div class="carousel-transform">
                        <img style="height: 100%;width: 100%;" :src="$util.url.load + item.img" :alt="item.title">
                    </div>
                    <div class="carousel-footer">
                        <div class="carousel-mask" :style="{ 'background-color': item.backgroundColor }"></div>
                        <div class="carousel-tool">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>

export default {
    name: 'homeSwipe',
    data() {
        return {
            carouselList: [],
            recommendList: [],

        }
    },
    methods: {
        async getCarousel() {
            try {
                let res = await this.$util.get('getCarousel')
                if (res.code != 10000) return
                this.carouselList = res.data.list
            } catch (err) {
                console.log(err);
            }
        },
    },
    created() {
        this.getCarousel()
    },
}
</script>

<style scoped>
.carousel,
.carousel-inner,
.carousel-item,
.carousel-container {
    width: 100%;
    height: 100%;
    /* transform: translate3d(0, 0, 0);
    overflow: hidden; */
}


.carousel-container {
    cursor: pointer;
}

.carousel-transform {
    width: 100%;
    height: 80%;
}


.carousel-mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-mask-image: linear-gradient(0, #2f3238 11%, transparent 20%);
    height: 810px;
}

.carousel-tool {
    position: absolute;
    bottom: 40px;
    left: 15px;
    color: white;
    font-size: 18px;
    z-index: 2;
}
</style>
