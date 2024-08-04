<template>
    <div class="avatar-popover">
        <div class="big-avatar"></div>
        <a class="nickname-item" :href="homeUrl" target="_blank">{{ nickname }}</a>
        <div class="counts-item">
            <a class="single-count-item" :href="homeUrl" target="_blank">
                <div class="count-num change-color">{{ follows }}</div>
                <div class="count-text change-color">关注</div>
            </a>
            <a class="single-count-item" :href="homeUrl" target="_blank">
                <div class="count-num change-color">{{ fans }}</div>
                <div class="count-text change-color">粉丝</div>
            </a>
            <a class="single-count-item" :href="homeUrl" target="_blank">
                <div class="count-num change-color">0</div>
                <div class="count-text change-color">动态</div>
            </a>
        </div>
        <div class="links-item">
            <a :href="baseUrl + 'personal_center'" class="single-link-item change-color" target="_blank">
                <div class="link-title icon-horizontal">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="link-icon">
                        <rect opacity="0.01" width="18" height="18" fill="white"></rect>
                        <path
                            d="M12.1146 9.48983C13.2763 8.63331 14.0299 7.2548 14.0299 5.7035C14.0299 3.11005 11.9198 1 9.32636 1C6.73291 1 4.62286 3.11005 4.62286 5.7035C4.62286 7.2548 5.37829 8.63331 6.53808 9.48983C3.87662 10.589 2 13.2118 2 16.2648C2 16.671 2.32901 17 2.73521 17C3.14141 17 3.47042 16.671 3.47042 16.2648C3.47042 13.0335 6.09879 10.407 9.3282 10.407C12.5576 10.407 15.186 13.0354 15.186 16.2648C15.186 16.671 15.515 17 15.9212 17C16.3274 17 16.6564 16.671 16.6564 16.2648C16.6546 13.2118 14.7761 10.589 12.1146 9.48983ZM6.09144 5.7035C6.09144 3.91878 7.54348 2.46858 9.32636 2.46858C11.1092 2.46858 12.5613 3.92062 12.5613 5.7035C12.5613 7.48639 11.1092 8.93843 9.32636 8.93843C7.54348 8.93843 6.09144 7.48639 6.09144 5.7035Z"
                            fill="var(--text2)"></path>
                    </svg><span>个人中心</span>
                </div>
            </a>
            <a :href="baseUrl + 'submission_management'" class="single-link-item change-color" target="_blank">
                <div class="link-title icon-horizontal">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.01" width="18" height="18" fill="#C4C4C4"></rect>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M3.375 1.875H10.875C12.739 1.875 14.25 3.38604 14.25 5.25V7.875V8.625C14.25 9.03921 14.5858 9.375 15 9.375C15.4142 9.375 15.75 9.03921 15.75 8.625V7.875V5.25C15.75 2.55761 13.5674 0.375 10.875 0.375H3.375C2.33947 0.375 1.5 1.21447 1.5 2.25V15C1.5 16.0355 2.33947 16.875 3.375 16.875H6.75H7.5C7.91421 16.875 8.25 16.5392 8.25 16.125C8.25 15.7108 7.91421 15.375 7.5 15.375H6.75H3.375C3.16789 15.375 3 15.2071 3 15V2.25C3 2.04289 3.16789 1.875 3.375 1.875ZM10.4 8.51962C10.8 8.28868 10.8 7.71132 10.4 7.48038L7.7 5.92154C7.3 5.6906 6.8 5.97927 6.8 6.44115V9.55885C6.8 10.0207 7.3 10.3094 7.7 10.0785L10.4 8.51962ZM15.518 14.2511L14.3215 16.3234H11.9285L10.7321 14.2511L11.9285 12.1787H14.3215L15.518 14.2511ZM16.817 13.5011C17.0849 13.9652 17.0849 14.537 16.817 15.0011L15.6205 17.0734C15.3526 17.5375 14.8574 17.8234 14.3215 17.8234H11.9285C11.3926 17.8234 10.8974 17.5375 10.6295 17.0734L9.43302 15.0011C9.16507 14.537 9.16507 13.9652 9.43302 13.5011L10.6295 11.4287C10.8974 10.9646 11.3926 10.6787 11.9285 10.6787H14.3215C14.8574 10.6787 15.3526 10.9646 15.6205 11.4287L16.817 13.5011ZM13.125 13.3125C12.6072 13.3125 12.1875 13.7322 12.1875 14.25C12.1875 14.7678 12.6072 15.1875 13.125 15.1875C13.6428 15.1875 14.0625 14.7678 14.0625 14.25C14.0625 13.7322 13.6428 13.3125 13.125 13.3125Z"
                            fill="var(--text2)"></path>
                    </svg><span>投稿管理</span>
                </div>
            </a>
            <div class="v-popover-wrap">
                <a :href="baseUrl + 'recommended_service'" class="single-link-item" target="_blank">
                    <div class="link-title icon-horizontal">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.76269 1.80538C8.3585 0.936022 9.6415 0.936021 10.2373 1.80538L11.8725 4.19132C12.0675 4.47592 12.3547 4.68457 12.6857 4.78213L15.4601 5.59999C16.4711 5.89799 16.8675 7.11819 16.2248 7.95349L14.461 10.2459C14.2506 10.5194 14.1409 10.857 14.1504 11.2019L14.2299 14.0933C14.2589 15.1468 13.2209 15.901 12.2279 15.5478L9.50257 14.5787C9.1775 14.4631 8.82251 14.4631 8.49743 14.5787L5.77211 15.5478C4.7791 15.901 3.74113 15.1468 3.77011 14.0933L3.84963 11.2019C3.85912 10.857 3.74942 10.5194 3.53902 10.2459L1.77516 7.95349C1.13247 7.11819 1.52893 5.89799 2.53986 5.59999L5.31432 4.78213C5.64526 4.68457 5.93246 4.47592 6.1275 4.19132L7.76269 1.80538Z"
                                stroke="var(--text2)" stroke-width="1.6"></path>
                            <path
                                d="M8.64131 6.72679C8.78803 6.4295 9.21197 6.4295 9.35869 6.72679L9.78861 7.5979C9.84687 7.71595 9.9595 7.79778 10.0898 7.81671L11.0511 7.9564C11.3792 8.00408 11.5102 8.40726 11.2728 8.63868L10.5772 9.31674C10.4829 9.40863 10.4399 9.54103 10.4621 9.67079L10.6263 10.6282C10.6824 10.955 10.3394 11.2042 10.046 11.0499L9.18614 10.5979C9.06961 10.5366 8.93039 10.5366 8.81386 10.5979L7.95403 11.0499C7.66058 11.2042 7.31761 10.955 7.37365 10.6282L7.53787 9.67079C7.56012 9.54103 7.5171 9.40863 7.42283 9.31674L6.72721 8.63868C6.4898 8.40727 6.62081 8.00408 6.9489 7.9564L7.91022 7.81671C8.0405 7.79778 8.15313 7.71596 8.21139 7.5979L8.64131 6.72679Z"
                                fill="var(--text2)"></path>
                        </svg><span>推荐服务</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="split-line"></div>
        <div class="logout-item" @click="$store.commit('logout')">
            <div class="single-link-item change-color">
                <div class="link-title icon-horizontal">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="link-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.6137 9.30115C17.6932 9.10837 17.6932 8.89282 17.6137 8.70004C17.5743 8.60393 17.5165 8.51726 17.4443 8.44504L15.2221 6.22282C14.9148 5.9156 14.4176 5.91615 14.111 6.22282C13.8043 6.52948 13.8037 7.02671 14.111 7.33393L14.9921 8.21504L7.99985 8.21504C7.56596 8.21448 7.21429 8.56615 7.21429 9.00059C7.21429 9.21726 7.30207 9.41393 7.44429 9.55615C7.58651 9.69837 7.78318 9.78615 7.99985 9.78615L14.9921 9.78615L14.111 10.6673C13.8043 10.9739 13.8037 11.4712 14.111 11.7784C14.4182 12.0856 14.9154 12.085 15.2221 11.7784L17.4443 9.55615C17.5165 9.48393 17.5743 9.39726 17.6137 9.30115"
                            fill="var(--text2)"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.8889 5.11111C9.74127 2.96349 6.25873 2.96349 4.11111 5.11111C1.96349 7.25873 1.96349 10.7413 4.11111 12.8889C6.25873 15.0365 9.74127 15.0365 11.8889 12.8889C12.1957 12.5821 12.6932 12.5821 13 12.8889C13.3068 13.1957 13.3068 13.6932 13 14C10.2387 16.7613 5.76127 16.7613 3 14C0.238731 11.2387 0.23873 6.76127 3 4C5.76127 1.23873 10.2387 1.23873 13 4C13.3068 4.30683 13.3068 4.80429 13 5.11111C12.6932 5.41794 12.1957 5.41794 11.8889 5.11111Z"
                            fill="var(--text2)"></path>
                    </svg><span>退出登录</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'avatarPopover',
    props: [
        'nickname',
        "follows",
        "fans",
        "id",
        "logout"
    ],
    data() {
        return {
            homeUrl: '/user/' + this.id,
            baseUrl: '/blank/',
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.avatar-popover {
    position: relative;
    transform: translateX(-50%);
    top: 100%;
    left: 50%;
    box-shadow: 0 0 30px rgba(0, 0, 0, .1);
    border-radius: 8px;
    border: 1px solid #E3E5E7;
    padding: 0 24px 18px;
    width: 300px;
    background-color: #fff;
    padding-top: 12px;
    margin-left: -12px;
    color: #18191c;
}

.big-avatar {
    margin-bottom: 4px;
    width: 80px;
    height: 80px;
}

.nickname-item {
    display: flex;
    justify-content: center;
    margin-top: -45px;
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: 500;
}

.counts-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 0 20px;
}

.single-count-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.count-num {
    font-weight: 500;
    font-size: 18px;
}

.count-text {
    color: #9499a0;
    font-size: 12px;
}

.single-count-item:hover .count-num,
.single-count-item:hover .count-text {
    color: #4daae4;
}

.single-link-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
    padding: 0 14px;
    height: 38px;
    color: #61666D;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    border-radius: 8px;
}

.single-link-item:hover {
    background-color: #e3e5e7;
}

.single-link-item svg {
    fill: #61666D;
    margin-right: 16px;
}

.split-line {
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background: #E3E5E7;
}
</style>