const signupForm = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const togglePasswordButton = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const toggleConfirmPasswordButton = document.getElementById('toggleConfirmPassword');
const confirmPasswordInput = document.getElementById('confirm-password');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    // อ่านข้อมูล users จากไฟล์ JSON
    const response = await fetch('/JS/users.json');
    const users = await response.json();

    // ตรวจสอบว่าชื่อผู้ใช้ซ้ำหรือไม่
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      alert('ชื่อผู้ใช้นี้มีอยู่แล้ว');
      return;
    }

    // เพิ่ม user ใหม่
    users.push({ username, password });

    // เขียนข้อมูล users กลับไปยังไฟล์ JSON
    const newUserData = JSON.stringify(users);
    const writeResponse = await fetch('/JS/users.json', {
      method: 'POST', // หรือ 'POST' ถ้าต้องการเพิ่มข้อมูลแทนการแทนที่
      headers: {
        'Content-Type': 'application/json'
      },
      body: newUserData
    });


    // แสดงข้อความสำเร็จ
    errorMessage.textContent = '';
    alert('สมัครสมาชิกสำเร็จ!');
    window.location.href = '/HTML/Login.html';

  } catch (error) {
    console.error('เกิดข้อผิดพลาด:', error);
    alert('เกิดข้อผิดพลาดในการสมัครสมาชิก')
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
  toggleConfirmPasswordButton.addEventListener('click', () => {
      if (confirmPasswordInput.type === 'password') {
        confirmPasswordInput.type = 'text';
        toggleConfirmPasswordButton.innerHTML = '<i class="fa fa-eye"></i>';
      } else {
        confirmPasswordInput.type = 'password';
        toggleConfirmPasswordButton.innerHTML = '<i class="fa fa-eye-slash"></i>';
      }
  });