new Vue({
    el: '#app', // 綁定到 HTML 中 id 為 app 的元素

    data: {
        account: '',     // 帳號（Email）
        password: '',    // 密碼
        message: '',     // 提示訊息
        isSuccess: false // 訊息狀態（成功 / 失敗）
    },

    methods: {
        // 驗證邏輯
        validate() {
            // Email 格式驗證
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // 密碼需包含：大小寫英文、數字、特殊字元，且至少 8 碼
            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-=])[A-Za-z\d@$!%*?&+-=]{8,}$/;

            // 必填檢查
            if (!this.account || !this.password) {
                this.showMsg('帳號與密碼均為必填！', false);
                return false;
            }

            // Email 驗證
            if (!emailRegex.test(this.account)) {
                this.showMsg('帳號格式錯誤，必須符合 Email 格式！', false);
                return false;
            }

            // 密碼強度驗證
            if (!passwordRegex.test(this.password)) {
                this.showMsg('密碼強度不足！需含英數大小寫及特殊字元。', false);
                return false;
            }

            return true;
        },

        // 登入按鈕
        handleLogin() {
            if (this.validate()) {
                this.showMsg('驗證通過，登入成功！', true);
            }
        },

        // 註冊按鈕
        handleRegister() {
            this.showMsg('功能開發中，敬請期待！', true);
        },

        // 顯示訊息工具方法
        showMsg(text, success) {
            this.message = text;
            this.isSuccess = success;
        }
    }
});
