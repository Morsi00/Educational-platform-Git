document.addEventListener("DOMContentLoaded", () => {
  const createBtn = document.getElementById("create_account");
  const homeSection = document.querySelector(".page_home1_m");
  const studentSection = document.querySelector(".Student_registration_page_m");

  createBtn.addEventListener("click", () => {
    // إخفاء الصفحة الرئيسية
    homeSection.style.display = "none";
    // إظهار صفحة التسجيل
    studentSection.style.display = "block";
  });
});