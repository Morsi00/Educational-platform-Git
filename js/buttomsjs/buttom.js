
const toggle = document.getElementById("darkToggle");
const body = document.body;
const circleIcon = toggle.querySelector(".toggle-circle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    circleIcon.innerHTML = `<i class="fas fa-moon"></i>`;
    toggle.classList.add("dark-btn");   // يخلي الزرار رمادي
  } else {
    circleIcon.innerHTML = `<i class="fas fa-sun"></i>`;
    toggle.classList.remove("dark-btn"); // يرجعه عادي
  }
});


// menu


const menu = document.querySelector('.buttomsmallscreen');
const iconMenu = document.querySelector('.iconmenu'); // أيقونة bars
const closeBtn = document.querySelector('.close-btn');

// فتح القائمة
iconMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

// إغلاق القائمة
closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

//search

const btnSearch = document.querySelector('.btnsearch');
const searchBox = document.querySelector('.search-box');
const closeSearch = document.querySelector('.close-search');

// عند الضغط على زر البحث
btnSearch.addEventListener('click', () => {
  searchBox.style.display = 'flex';
});

// عند الضغط على X
closeSearch.addEventListener('click', () => {
  searchBox.style.display = 'none';
});



document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-courses");
  const button = document.getElementById("toggleCards");
  let showingAll = false;

  // اخفي الكروت بعد أول 3
  cards.forEach((card, index) => {
    if (index > 2) card.classList.add("hidden");
  });

  button.addEventListener("click", function () {
    showingAll = !showingAll;
    if (showingAll) {
      cards.forEach(card => card.classList.remove("hidden"));
      button.textContent = "عرض أقل";
    } else {
      cards.forEach((card, index) => {
        if (index > 2) card.classList.add("hidden");
      });
      button.textContent = "عرض المزيد";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  // ===== تحديد العناصر =====
  const createBtn = document.getElementById("create_account");
  const createLink = document.getElementById("create_account_link");

  const loginBtns = document.querySelectorAll(".buttomloginhome.loginbtn, .login-link");
  const parentBtn = document.querySelector(".loginparnt");
  const parentLink = document.querySelector(".parant_page");

  const closeBtn = document.querySelector(".close-btn"); // زر الإغلاق

  // الصفحات
  const homeSection = document.querySelector(".page_home1_m");
  const studentSection = document.querySelector(".Student_registration_page_m");
  const loginSection = document.querySelector(".Login_page");
  const parentSection = document.querySelector(".loginaspartient_page");

  // ===== دالة لإخفاء كل الصفحات =====
  function hideAllSections() {
    [homeSection, studentSection, loginSection, parentSection].forEach(sec => {
      if (sec) sec.style.display = "none";
    });
  }

  // ===== دوال العرض لكل صفحة =====
  function showStudentSection() {
    hideAllSections();
    if (studentSection) studentSection.style.display = "block";
  }

  function showLoginSection() {
    hideAllSections();
    if (loginSection) loginSection.style.display = "block";
  }

  function showParentSection() {
    hideAllSections();
    if (parentSection) parentSection.style.display = "block";
  }

  // ===== إضافة الأحداث =====
  // إنشاء حساب
  [createBtn, createLink].forEach(el => {
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        showStudentSection();
        if (closeBtn) closeBtn.click();
      });
    }
  });

  // تسجيل دخول
  loginBtns.forEach(el => {
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        showLoginSection();
        if (closeBtn) closeBtn.click();
      });
    }
  });

  // تسجيل كـ ولي أمر
  [parentBtn, parentLink].forEach(el => {
    if (el) {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        showParentSection();
        if (closeBtn) closeBtn.click();
      });
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const goHomeBtn = document.getElementById("goHomeBtn");

  const homeSection = document.querySelector(".page_home1_m");
  const studentSection = document.querySelector(".Student_registration_page_m");
  const loginSection = document.querySelector(".Login_page");
  const parentSection = document.querySelector(".loginaspartient_page");

  goHomeBtn.addEventListener("click", () => {
    // اظهار الصفحة الرئيسية
    if (homeSection) homeSection.style.display = "block";

    // اخفاء باقي الصفحات
    [studentSection, loginSection, parentSection].forEach(sec => {
      if (sec) sec.style.display = "none";
    });

    // العودة لبداية الصفحة
    window.scrollTo({
      top: 0,
      behavior: "smooth" // تحريك سلس
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const goHomeBtn = document.getElementById("goHomeBtn");

  const homeSection = document.querySelector(".page_home1_m");
  const studentSection = document.querySelector(".Student_registration_page_m");
  const loginSection = document.querySelector(".Login_page");
  const parentSection = document.querySelector(".loginaspartient_page");
  const teacherSection = document.querySelector(".Teacher_registration_page_m");

  // زرار "انضم الآن"
  const joinNowBtn = document.querySelector(".cta-btn");

  if (joinNowBtn) {
    joinNowBtn.addEventListener("click", (e) => {
      e.preventDefault(); // علشان ما يعملش reload للصفحة

      // اخفاء باقي الصفحات
      if (homeSection) homeSection.style.display = "none";
      if (studentSection) studentSection.style.display = "none";
      if (loginSection) loginSection.style.display = "none";
      if (parentSection) parentSection.style.display = "none";

      // اظهار صفحة المعلم
      if (teacherSection) teacherSection.style.display = "block";
    });
  }
});
