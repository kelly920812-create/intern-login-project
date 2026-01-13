document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('account').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // 1. 驗證 Email 格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 2. 驗證密碼格式 (英數大小寫+特殊字元)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+-=])[A-Za-z\d@$!%*?&+-=]{8,}$/;

    if (!email || !password) {
        showMessage("帳號與密碼皆為必填！", "error"); [cite, 5, 8]
        return;
    }

    if (!emailRegex.test(email)) {
        showMessage("帳號格式不符合 Email！", "error"); [cite, 6, 11]
        return;
    }

    if (!passwordRegex.test(password)) {
        showMessage("密碼必須包含英數大小寫與特殊字元！", "error"); [cite, 9, 11]
        return;
    }

    // 成功訊息
    showMessage("登入驗證成功！", "success"); [cite, 12]
});

function showMessage(msg, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = msg;
    messageDiv.style.color = type === "success" ? "green" : "red";
}