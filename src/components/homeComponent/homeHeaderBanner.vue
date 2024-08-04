<template>
    <div class="bili-header_banner">
        <div class="taper-line"></div>
        <slot></slot>
        <div class="layer"><img class="banner-img" :src="img_url + '1.png'" data-height="250" data-width="3000" height="290"
                width="3483" style="filter: blur(4px); transform: translate(0px, 0px) rotate(0deg);"></div>
        <div class="layer"><img class="banner-img" ref="eye" :src="img_url + '2.png'" data-height="275" data-width="3000"
                height="191" width="2090" style="transform: translate(0px, 0px) rotate(0deg); filter: blur(0px);"></div>
        <div class="layer"><img class="banner-img" :src="img_url + '3.png'" data-height="250" data-width="3000" height="290"
                width="3483" style="transform: translate(-58.0645px, 0px) rotate(0deg); filter: blur(1px);">
        </div>
        <div class="layer"><img class="banner-img" :src="img_url + '4.png'" data-height="250" data-width="3000" height="174"
                width="2090" style="transform: translate(0px, 4.87742px) rotate(0deg); filter: blur(4px);">
        </div>
        <div class="layer"><img class="banner-img" :src="img_url + '5.png'" data-height="275" data-width="3000" height="191"
                width="2090" style="transform: translate(0px, -2.09032px) rotate(0deg); filter: blur(5px);">
        </div>
        <div class="layer"><img class="banner-img" :src="img_url + '6.png'" data-height="275" data-width="3000" height="207"
                width="2264" style="filter: blur(6px); transform: translate(0px, 0px) rotate(0deg);"></div>
    </div>
</template>

<script>

export default {
    name: 'homeHeaderBanner',
    data() {
        return {
            img_url: 'http://localhost:3001/tinified/',
            eyeImgs: [
                '2.png',
                '2-zha.png',
                '2-bi.png',
            ]
        }
    },
    methods: {
        eyeChange() {
            setInterval(() => {
                setTimeout(() => {
                    this.$refs.eye.src = this.eyeImgs[1].src
                });

                setTimeout(() => {
                    this.$refs.eye.src = this.eyeImgs[2].src
                }, 100);

                setTimeout(() => {
                    this.$refs.eye.src = this.eyeImgs[1].src
                }, 200);

                setTimeout(() => {
                    this.$refs.eye.src = this.eyeImgs[0].src
                }, 300);
            }, 3000);
        },
        // eyeChange() {
        //     let lastTime = 0
        //     let lastTime2 = 0
        //     let index = 0
        //     const animate = (time) => {
        //         if (time - lastTime2 > 300) {
        //             lastTime2 = time;
        //             if (time - lastTime > 100) {
        //                 lastTime = time;
        //                 index = index % 4;
        //                 let value;
        //                 if (index === 1) {
        //                     value = 2;
        //                 } else if (index === 3) {
        //                     value = 0;
        //                 } else {
        //                     value = 1;
        //                 }
        //                 this.$refs.eye.src = this.eyeImgs[value].src;
        //                 index++;
        //             }
        //         }
        //         requestAnimationFrame(animate);
        //     };
        //     animate()
        // },
        mouseEvent() {
            //获取元素
            const container = document.querySelector('.bili-header_banner');
            const imgs = container.querySelectorAll('.banner-img');
            //绑定鼠标移入事件 
            container.addEventListener('mouseenter', function (e) {
                //获取鼠标在移入时的偏移
                this.x = e.clientX;
                //移除过渡效果
                imgs.forEach(item => {
                    item.style.transition = 'none';
                });
            });
            //绑定鼠标移动事件
            container.addEventListener('mousemove', function (e) {
                //获取鼠标移动时的偏移
                this._x = e.clientX;
                //计算鼠标移动的向量
                let disX = this._x - this.x;

                //第一张图的初始值以及变化
                //filter  blur(4px)
                //transform: translate(0px, 0px)
                //变化
                //x       0    1920    1920    disX
                //filter  4     8       4       ???
                const blur_0 = Math.abs(4 + 4 * disX / 1920);
                imgs[0].style.filter = `blur(${blur_0}px)`;

                //第二张图的初始值以及变化
                //filter  blur(0px)
                //transform: translate(0px, 0px)
                //变化
                //x             0    1920        disX
                //filter        0     10          ???
                //translate     0     10
                const blur_1 = Math.abs(10 * disX / 1920);
                const translateX_1 = 10 * disX / 1920;
                imgs[1].style.filter = `blur(${blur_1}px)`;
                imgs[1].style.transform = `translate(${translateX_1}px, 0px) rotate(0deg)`;

                //第三张图的初始值以及变化
                //filter  blur(1px)
                //transform: translate(-58px, 0px)
                //变化
                //x             0       1920        disX
                //filter        1       -5          ???
                //translate     -58     10          ???
                const blur_2 = Math.abs(1 - 5 * disX / 1920);
                const translateX_2 = -58 + 10 * disX / 1920;
                imgs[2].style.filter = `blur(${blur_2}px)`;
                imgs[2].style.transform = `translate(${translateX_2}px, 0px) rotate(0deg)`;

                //第四张图的初始值以及变化
                //filter  blur(4px)
                //transform: translate(0px, 4.87742px)
                //变化
                //x             0       1920        disX
                //filter        4       -10          ???
                //translate     0        42          ???
                const blur_3 = Math.abs(4 - 10 * disX / 1920);
                const translateX_3 = 42 * disX / 1920;
                imgs[3].style.filter = `blur(${blur_3}px)`;
                imgs[3].style.transform = `translate(${translateX_3}px, 4.87742px) rotate(0deg)`;

                //第五张图的初始值以及变化
                //filter  blur(5px)
                //transform: translate(0px, -2.09032px)
                //变化
                //x             0       1920        disX
                //filter        5       -10          ???
                //translate     0        91          ???
                const blur_4 = Math.abs(5 - 10 * disX / 1920);
                const translateX_4 = 91 * disX / 1920;
                imgs[4].style.filter = `blur(${blur_4}px)`;
                imgs[4].style.transform = `translate(${translateX_4}px, -2.09032px) rotate(0deg)`;

                //第六张图的初始值以及变化
                //filter  blur(5px)
                //transform: translate(0px, 0px)
                //变化
                //x             0       1920        disX
                //filter        6       -6          ???
                //translate     0        114        ???
                const blur_5 = Math.abs(6 - 6 * disX / 1920);
                const translateX_5 = 114 * disX / 1920;
                imgs[5].style.filter = `blur(${blur_5}px)`;
                imgs[5].style.transform = `translate(${translateX_5}px, 0px) rotate(0deg)`;
            })
            //绑定鼠标离开事件
            container.addEventListener('mouseleave', function () {
                //增加过渡效果
                imgs.forEach(item => {
                    item.style.transition = 'all 0.5s';
                });
                //样式清空
                imgs[0].style.filter = 'blur(4px)';
                imgs[0].style.transform = 'translate(0px, 0px) rotate(0deg)';

                imgs[1].style.filter = 'blur(0px)';
                imgs[1].style.transform = 'translate(0px, 0px) rotate(0deg)';

                imgs[2].style.filter = 'blur(1px)';
                imgs[2].style.transform = 'translate(-58.0645px, 0px) rotate(0deg)';

                imgs[3].style.filter = 'blur(4px)';
                imgs[3].style.transform = 'translate(0px, 4.87742px) rotate(0deg)';

                imgs[4].style.filter = 'blur(5px)';
                imgs[4].style.transform = 'translate(0px, -2.09032px) rotate(0deg)';

                imgs[5].style.filter = 'blur(6px)';
                imgs[5].style.transform = 'translate(0px, 0px) rotate(0deg)';
            });
        },
        createEyeImgs() {
            this.eyeImgs = this.eyeImgs.map(img => {
                const image = new Image();
                image.src = this.img_url + img;
                return image;
            });
        }
    },
    created() {
        this.createEyeImgs()
    },
    mounted() {
        this.eyeChange()
        this.mouseEvent()
    }
}
</script>

<style scoped>
.bili-header_banner {
    height: 155px;
    width: 100%;
    position: relative;
    z-index: 2;
}

.bili-header_banner .layer {
    position: absolute;
    overflow: hidden;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
}

.taper-line {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100px;
    background: linear-gradient(rgba(0, 0, 0, .4), transparent);
}
</style>