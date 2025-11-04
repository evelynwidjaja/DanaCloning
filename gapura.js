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
