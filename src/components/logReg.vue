<template>
    <div class="mini-mask">
        <Transition name="mask">
            <div class="toast-mask" v-show="isShowError">{{ errorMsg }}</div>
        </Transition>
        <div class="mini-content-wp">
            <div class="mini-close-icon" @click="$store.commit('changeLogView')"></div>
            <div class="scan-wp">
                <div class="scan-title">扫码下载APP</div>
                <div class="scan-box">
                    <img alt="Scan me!"
                        src="data:image/png;base64,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">
                    <div class="login-icon"></div>
                </div>
                <div class="scan-desc">
                    <p> 请使用 <a :href="baseUrl + 'download'" target="_blank" style="color: #00aeec;">哔哩哔哩客户端</a></p>
                    <p>或扫描上方二维码下载APP</p>
                </div>
                <!-- <div class="scan-tips-icon"></div> -->
            </div>
            <div class="mini-line"></div>
            <div class="login-right-wp">
                <div class="login-tab-wp">
                    <div class="login-tab-item" :class="isLogView ? 'active-tab' : ''" @click="isLogView = true"> 登录 </div>
                    <div class="login-tab-line"></div>
                    <div class="login-tab-item" :class="isLogView ? '' : 'active-tab'" @click="regView"> 注册 </div>
                </div>
                <div v-if="isLogView">
                    <div class="tab-form form-log">
                        <div class="form-item">
                            <span>账号</span>
                            <input autocomplete="on" maxlength="20" oninput="value=value.replace(/\s+/g, '')"
                                v-model="userInfo.username" @change="changeLogBtnAble" placeholder="请输入账号" type="text">
                        </div>
                        <div class="separator-line"></div>
                        <div class="form-item">
                            <span>密码</span>
                            <input autocomplete="on" maxlength="40" oninput="value=value.replace(/\s+/g, '')"
                                v-model="userInfo.password" @change="changeLogBtnAble" placeholder="请输入密码" type="password">
                        </div>
                    </div>
                    <div class="btn-wp">
                        <slotRegLogBtn :class="btnLogAbled ? '' : 'disabled'" @click="login">登录</slotRegLogBtn>
                    </div>
                    <div class="login-sns-wp">
                        <span>其他方式登录</span>
                        <div class="login-sns-content">
                            <div class="login-sns-item"><img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAgVBMVEUAAABXu0BYt0BQt0BXu0BWu0BXu0BXu0BXu0BWukBWukBXvEBXu0BXvEBXvEBYukBVukBXu0BWt0BXukBXuEBXu0D////1+/Pq9+fV7s/A5rer3aBsw1jg89uBzHBiwEy14auL0Xug2ZOW1YeBzG93yGSW1YjL6sO14azL6cN2yGP3XpzOAAAAFXRSTlMA3yAQ78+/r5+AUI9w74BgYEBAkHDBb56KAAACF0lEQVRIx52W6XKDIBRGwT3GZmsRUXFP0vb9H7AKGS8aiCXnR0TCmU/gOoh0uJck8jEZwUGYXND/cOPggyz4CE//0HZgKeDIsdSA3Qs1Bk2XejLF7ckGe1fnOT7ZBDsaDxNiZ4Jna4Jnb7rgbeKrK7QnFuzBOxIrYrsJAth9iIdl/9CwLE0pv/elqfoegWpfXdAUYINW9GRkRIBWakBemiOVGRbpE1lpijwaPDANCxvCc8qBbcVF47vq5EQ1YjCK3nyXiXE3QqrpSseeu+jptc96XgWmHSGDEGtCmDHygpK5nUuRdr2MvvfNdMvzXCN+KVNk6RO0qOpr37fXJzFCwdzmT9532THZovmqFHxlF3/WcdWQGUsBI2g3K/G3WG3o4oEVsVqOK4RHaTpfaKkXCVsWzPTL65pPN7X4kxnEX6qIXS4mJqfOH5tVKSJWzJsiXqlcklxe5AI0yuL4RDUpiKkGphRrRFRK+lLk88AQSg4KXVC9TvwSRQ4MU5m1xZ2xlmnEm1LkrqeKTVbU5rcaNtJDCAWqCOutq90CpjiKMTFQZuuah/9Oo+h6ZtPkYTSxI0YKReWLtxFBpJ5bzjOasWYsoBp6HQSRW5R5tz4C4HS0PltjO/H05sH6iQDXtz0d3/94ANPes/9Asjd9572PwE8X6Tm+DPViZMQ5mLUDxGnVCFtqwDH0VlYQS22bcxIGIhn7UXLWWn+10s6FZo+4YQAAAABJRU5ErkJggg=="
                                    class="login-sns-item-icon"><span class="login-sns-name">微信登录</span></div>
                            <div class="login-sns-item"><img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAh1BMVEUAAADXQDjTQDzaQzfcRTfbRDfcRDbcQzbbRDbbRDfcQzbaQzbbRDbbRDbaRDfcQzbbRDfaQjjaQjXcQzfYRDfbRDTbRDf////gW1D99PPtoZvyubT76Ob20M3pioLdT0Tvrajkc2n20c3rlo7mfnb0xcD43NrrlY7kcmniZ1343driZ1z0xMEgvW1iAAAAFnRSTlMAIBDf34Dv78+/n1BAj7CvcGBgkHBwDUc+aAAAAmpJREFUSMeVlueCqjAQRgOI0qy7m0YVsN297/98OwEdCUQ05w8WDt/MkIjEhJv8RIFHAS/c/CTkM9w4XFKN5ebwgeaDNWURObYa4s+oMWrG1MOruDV9w9o1eU5A37JwDN6CUksTPWsTPXvTRe89wXBCa2rB+ukd6By3K6ca8WcNVoyxLB26i0ex/mxgzRTiMlx990A6C09PZ6XKwXbpIyP6Fn4C8zKONHVYFrJ4tJWfoUMJ5k2PPBi0igHZrX8j4HVLITPXB7udeK1gHem9ziJjouTwQYmnhCCuxh5UhSJO9qKmWwxrTcZeyh5UpcyFyOH0Bi5SaYNNyG7qYeK95CttWUWlJn6PW5RsSgVtlyqxoEhEQs1rNEPrldf5cI8Qb+hxYRKlaVsSY4NZKqU81aynpQY0kTNF3pS4fsDFvTESx4Gi0b4vMqWKdl4UcHWukmSeZXnRV9Gb5VgcDucIJ3B11JbckSmKyXAC7V7I52hxI2WmyYYk0m7+Dbd8JR7boTYlbshOE9WBsYb+MglBZ6r4p8TxXL+Hi7zov2dCnY1N8v7ViIS4z21V9q3U7Ap9YkzOulnrLAkZLtYTA4f+CpYLHEjFgCMdtwhiTBGedT+D/NwtIHU2V3li4tE9iO5qaILQwvF4LNUtTLsr8InnTX6Pebfq8qopmup/V29W0CkRIaNISDmxJwLqNeEYHwG8repzltVpA/Ua8UmP61ErPHy2xnbiniBflg9WxA0sCnXJAMezadDSRM/aRM/eDMCb4n7Z/glE9rOhq5i8xPFfaz7GmdXIs9aw4O1qZIUxam9IdtuwS/aCaJcYrT+uh9kYccQkXQAAAABJRU5ErkJggg=="
                                    class="login-sns-item-icon"><span class="login-sns-name">微博登录</span></div>
                            <div class="login-sns-item"><img
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAb1BMVEUAAABMouVIn+NEn99MouVMouVMo+ZMouVKouRKouJMn+NMouZLouRLo+VMoeNMouZLoeVLoeVNn+RMouX///+83Pal0PL0+v6x1vRireiay/FXqOfS6Pl5uevH4vePxe+Ev+1utOrp9Pzp8/yEv+7XzqLPAAAAE3RSTlMA3yAQ74C/n2BQQK9wz5CPz7BwJ8NfpgAAAbNJREFUSMe1lutygjAQhTeEOyi2AQIC3t//GcvYqk3OYsh0+v1yMN+czc4mQBwyL5ONUDMiLsqc1iGzOFQGYZGu0KLZQkQSrNSQ6I2aGRqkpktxlXJQSc4LNsqJCBhPOCQwwXOa6PmbErxlNpJeVMqD6uWliqOfprPiyN5tcOp0PaObntnmo9hIAV39pFNA9BOogKb+RQN/h9+RCfzR1gbtQqSArtQmemAjUy4QI7GxBTy92qKGJfEshlgp0DO15srmhuIRFuX0Cc/2KO5hUUkF1xt3dxKKuUS3uCPBjA0w4rySwqYyDLCM+EqxVrd45UTtFm81ywlEuzkHXhyhOfY1DArfntg+jRMY/PB80CeODaLhHigpt7fYNSgeuvpgD7k0j9V4Gfbc6RjN7oRE1rCeejVo27vMD4/WFokynB33qUpnUYb+t5zg7+OhNYrVxx5PIzGRJ9ijniwxIC7y3DV3urZ9/DrDfQxvR793a+YnpvRk6+Nt6YXceRQq//rxgKb/h87/fVrtAmKQW2c/JfGkb0PDjBYJomUtMuJQTcRKDUmL0LLiDDWevCzie7LYJGXOWl/BnLhvbq/sWgAAAABJRU5ErkJggg=="
                                    class="login-sns-item-icon"><span class="login-sns-name">QQ登录</span></div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="tab-form form-reg">
                        <div class="form-item">
                            <span>账号</span>
                            <input autocomplete="on" maxlength="20" oninput="value=value.replace(/\s+/g, '')"
                                v-model="userInfo.username" @change="valUsername" placeholder="请输入账号" type="text">
                        </div>
                        <div class="separator-line"></div>
                        <div class="form-item">
                            <span>密码</span>
                            <input autocomplete="on" maxlength="40" oninput="value=value.replace(/\s+/g, '')"
                                v-model="userInfo.password" @change="valPsd" placeholder="至少6位密码，区分大小写" type="password">
                        </div>
                        <div class="separator-line"></div>
                        <div class="form-item">
                            <span>密码</span>
                            <input autocomplete="on" maxlength="40" oninput="value=value.replace(/\s+/g, '')"
                                v-model="userInfo.passwordAgain" @change="valPsdAgain" placeholder="再次输入密码" type="password">
                        </div>
                        <div class="separator-line"></div>
                        <div class="form-item">
                            <span>验证</span>
                            <input v-model="userInfo.captcha" @change="valCaptcha" placeholder="输入右侧图片的计算结果" type="text">
                            <span class="captcha-change link-word" @click="getCaptcha">换一张</span>
                            <div class="captcha-svg" v-html="captchaSvg"></div>
                        </div>
                    </div>
                    <div class="btn-wp">
                        <slotRegLogBtn :class="btnRegAbled ? '' : 'disabled'" @click="register">注册</slotRegLogBtn>
                    </div>
                </div>
            </div>
            <div class="login-agreement-wp">
                <p> 首次使用请先注册</p>
                <p> 登录或完成注册即代表你同意 <span class="link-word">用户协议</span> 和 <span class="link-word">隐私政策</span></p>
            </div>

        </div>
    </div>
</template>

<script>
import slotRegLogBtn from './btn/slotRegLogBtn.vue';

export default {
    name: 'logReg',
    components: {
        slotRegLogBtn
    },
    data() {
        return {
            baseUrl: '/blank/',
            isLogView: true,
            userInfo: {
                username: '',
                password: '',
                passwordAgain: '',
                captcha: ''
            },
            isShowError: false,
            errorMsg: '',
            btnLogAbled: false,
            btnRegAbled: false,
            flag1: false,
            flag2: false,
            flag3: false,
            flag4: false,
            captchaSvg: `<svg width="100" height="40"><rect width="100%" height="100%" fill="#ccc" /></svg>`
        }
    },
    methods: {
        async getCaptcha() {
            let res = await this.$util.get('users/getCaptcha')
            if (res.status.code != 10000) {
                this.showErrorMsg('验证码获取失败，请重试')
                return
            }
            this.captchaSvg = res.data
        },
        regView() {
            this.isLogView = false
            this.getCaptcha()
        },
        showErrorMsg(msg) {
            this.errorMsg = msg
            this.isShowError = true
            setTimeout(() => {
                this.isShowError = false
            }, 2000)
        },
        changeLogBtnAble() {
            if (this.userInfo.username.length > 0 && this.userInfo.password.length > 0) {
                this.btnLogAbled = true
            } else {
                this.btnLogAbled = false
            }
        },
        changeRegBtnAble() {
            if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                this.btnRegAbled = true
            } else {
                this.btnRegAbled = false
            }
        },
        valUsername() {
            if (this.userInfo.username.length < 6 || this.userInfo.username.length > 20) {
                this.showErrorMsg('用户名长度应位于6-20位之间')
                this.flag1 = false
            } else {
                this.flag1 = true
            }
            this.changeRegBtnAble()
        },
        valPsd() {
            if (this.userInfo.password.length < 6 || this.userInfo.password.length > 40) {
                this.showErrorMsg('密码长度应位于6-40位之间')
                this.flag2 = false
            } else {
                this.flag2 = true
            }
            this.changeRegBtnAble()
        },
        valPsdAgain() {
            if (this.userInfo.password != this.userInfo.passwordAgain) {
                this.showErrorMsg('两次输入的密码不一致')
                this.flag3 = false
                return
            } else {
                this.flag3 = true
            }
            this.valPsd()
        },
        valCaptcha() {
            if (!this.userInfo.captcha) {
                this.showErrorMsg('验证码不能为空')
                this.flag4 = false
                return
            } else {
                this.flag4 = true
            }
            this.changeRegBtnAble()
        },
        loginSuccess(res) {
            console.log('loginSuccess');
            // 写入用户信息
            this.$store.commit('setUser', res.data)
            // 存储用户信息
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            // 关闭窗口
            this.$store.commit('changeLogView')
        },
        async login() {
            let res = await this.$util.post('users/login', { username: this.userInfo.username, password: this.userInfo.password })
            if (res.code == 10000) {
                // 登录成功
                this.loginSuccess(res)
            } else {
                // 登录失败
                this.showErrorMsg('用户名或密码错误')
            }
        },
        async register() {
            let res = await this.$util.post('users/register', {
                username: this.userInfo.username,
                password: this.userInfo.password,
                captcha: this.userInfo.captcha
            })
            if (res.code == 10000) {
                // 注册成功
                this.showErrorMsg('注册成功')
                setTimeout(() => {
                    this.isLogView = true
                }, 2000)
                this.changeLogBtnAble()
            } else if (res.code == 102) {
                // 登录失败
                this.showErrorMsg('该用户名已被注册')
            } else if (res.code == 104) {
                this.showErrorMsg('验证码输入错误')
            } else {
                this.showErrorMsg('用户名只能包含字母或数字')
            }
        }
    }
}

</script>

<style scoped>
.mini-mask {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 10010;
    align-items: center;
    justify-content: center;
}

.toast-mask {
    position: fixed;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 8px 12px;
    transform: translate(-50%, -50%);
    background: rgba(51, 51, 51, .8);
    border-radius: 4px;
    z-index: 3000;
    font-size: 14px;
    color: #fff;
}

.mini-content-wp {
    width: 820px;
    height: 430px;
    background: #fff;
    border-radius: 8px;
    padding: 52px 65px 29px 10px;
    background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/22_open.4ea5f239.png), url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/33_open.f7d7f655.png);
    background-position: 0 100%, 100% 100%;
    background-repeat: no-repeat, no-repeat;
    background-size: 14%;
    position: relative;
    display: flex;
    justify-content: center;
}

.mini-close-icon {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 20px;
    right: 20px;
    background: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/close.a35a1809.svg) no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    z-index: 2;
}

.scan-wp {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.mini-line {
    position: relative;
    width: 1px;
    flex: none;
    height: 228px;
    background-color: #e3e5e7;
    margin: 43px 44px 0 45px;
    z-index: 1;
    border-radius: 8px;
}

/* .scan-tips-icon {
    height: 173px;
    width: 100%;
    background: #fff url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login-v2/img/qr-tips.74063ae1.png) no-repeat;
    background-size: 100% 100%;
} */

.scan-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    color: #505050;
    margin-bottom: 26px;
}

.scan-box {
    position: relative;
    width: 173px;
    height: 173px;
    border: 1px solid #e3e5e7;
    border-radius: 8px;
}

.scan-desc {
    margin-top: 18px;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #505050;
}

.login-icon {
    position: absolute;
    width: 34px;
    height: 34px;
    background: #fff url(data:image/png;base64,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) no-repeat;
    background-size: 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid #fff;
    border-radius: 8px;
}

.login-right-wp {
    width: 400px;
    margin-bottom: 74px;
    display: flex;
    flex-direction: column;
}


.login-tab-wp {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
}

.login-tab-item {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: #505050;
    cursor: pointer;
}

.active-tab {
    color: #4fa5d9;
    cursor: not-allowed;
}

.login-tab-line {
    width: 1px;
    height: 20px;
    background: #e3e5e7;
    margin: 0 21px;
}

.tab-form {
    width: 400px;
    border: 1px solid #e3e5e7;
    border-radius: 8px;
    font-size: 14px;
    line-height: 20px;
    color: #212121;
}

.from-log {
    height: 90px;
}

.from-reg {
    height: 180px;
}

.form-item {
    position: relative;
    display: flex;
    width: 100%;
    height: 44px;
    padding: 12px 20px;
}

.captcha-change {
    margin-right: 90px;
    font-size: 12px;
}

.captcha-svg {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.form-item input {
    flex: 1;
    margin-left: 20px;
}

.separator-line {
    width: 100%;
    height: 0;
    border-bottom: 1px solid #e3e5e7;
}

.btn-wp {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 400px;
    text-align: center;
}

.login-sns-wp {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9499a0;
    font-size: 13px;
}

.login-sns-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
}

.login-sns-item {
    margin-right: 30px;
    cursor: pointer;
}

.login-sns-item-icon {
    width: 28px;
    height: 28px;
    margin-right: 8px;
}

.login-agreement-wp {
    width: 351px;
    position: absolute;
    bottom: 29px;
    left: 50%;
    transform: translate(-50%);
    color: #999;
    font-size: 13px;
    text-align: center;
}

.link-word {
    color: #00a1d6;
    cursor: pointer;
}

.mask-enter-from,
.mask-leave-to {
    opacity: 0;
}

.mask-enter-to,
.mask-leave-from {
    opacity: 1;
}

.mask-enter-active,
.mask-leave-active {
    transition: all 0.3s;
}
</style>