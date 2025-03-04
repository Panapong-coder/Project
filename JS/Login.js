const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // อ่านข้อมูล users จากไฟล์ JSON
    const response = await fetch('/JS/users.json');
    const users = await response.json();

    // ตรวจสอบการล็อกอิน
    const user = users.find(user => 
      (user.username === username || user.email === username) && user.password === password);
      if (user) {
      errorMessage.textContent = '';
      window.location.href = '/HTML/Homepage2.html';
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
    }

  } catch (error) {
    console.error('เกิดข้อผิดพลาด:', error);
    alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ')
  }
});
togglePasswordButton.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.innerHTML = '<i class="fa fa-eye"></i>';
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } 
});