document.querySelector('.surprise-btn').addEventListener('click', function() {
  let effectBox = document.querySelector('.effect-box');
  effectBox.style.width = '200px';
  effectBox.style.height = '200px';
  effectBox.style.animation = 'none';

  // เพิ่มข้อความเซอร์ไพรส์
  setTimeout(function() {
    alert('Happy Valentine\'s Day! 💖');
    effectBox.style.width = '0';
    effectBox.style.height = '0';
    effectBox.style.animation = 'pulse 2s infinite';
  }, 2000);
});
