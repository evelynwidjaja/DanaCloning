/* ======================= HAMBURGER BUTTON ======================= */
const drawer = document.getElementById("mobileDrawer");
const hamburger = document.getElementById("hamburger");
const closeDrawer = document.getElementById("closeDrawer");

hamburger.addEventListener("click", () => {
    drawer.classList.toggle("open");
    hamburger.classList.toggle("active");
});

closeDrawer.addEventListener("click", () => {
    drawer.classList.remove("open");
    hamburger.classList.remove("active");
});

document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle("open");
    });
});

document.querySelectorAll(".drawer-tab").forEach(tab => {
    tab.addEventListener("click", () => {

        document.querySelectorAll(".drawer-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const target = tab.getAttribute("data-target");
        document.querySelectorAll(".drawer-content").forEach(c => c.classList.remove("show"));

        document.getElementById(target).classList.add("show");
    });
});


const tabs = document.querySelectorAll('.tab-payment .tab');
const infoWrapper = document.querySelector('.info-wrapper');
const infos = document.querySelectorAll('.info-wrapper .info');

tabs.forEach((tab, index) => {
tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    infoWrapper.scrollTo({
    left: infos[index].offsetLeft,
    behavior: 'smooth'
    });
});
});

const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    q.classList.toggle('active');
    const answer = q.nextElementSibling;
    answer.classList.toggle('show');
  });
});

