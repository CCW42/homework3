function refreshCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('captcha-image').textContent = code;
}

document.getElementById('query-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const plate = document.getElementById('plate').value;
    const captchaInput = document.getElementById('captcha').value;
    const captchaCode = document.getElementById('captcha-image').textContent;

    if (captchaInput.toUpperCase() !== captchaCode.toUpperCase()) {
        alert("驗證碼錯誤，請重新輸入！");
        refreshCaptcha();
        return;
    }

    // 模擬查詢成功後跳轉
    window.location.href = "result.html";
});
