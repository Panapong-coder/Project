function checkLoginStatus() {
    // ตรวจสอบสถานะการล็อกอิน (สมมติว่าใช้ users จาก SignUp.js)
    if (typeof users === 'undefined' || users.length === 0) {
        // ยังไม่ได้ล็อกอิน
        window.location.href = '/HTML/errorpage.html';
    }
    // ถ้าล็อกอินแล้ว ไม่ต้องทำอะไร
}