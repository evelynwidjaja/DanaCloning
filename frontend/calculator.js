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
  
  
  const input = document.getElementById('gapura-input-amount');
  const biaya = 2500;
  const ppnRate = 0.11;

  // Format input angka otomatis pakai titik
  input.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // hapus non-digit
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // tambah titik setiap 3 angka
    e.target.value = value;

    // Hitung ulang setiap kali input berubah
    const nominal = parseFloat(value.replace(/\./g, '')) || 0; // hapus titik sebelum dihitung
    const ppn = biaya * ppnRate;
    const totalDiterima = nominal - (biaya + ppn);

    // Update hasil
    document.getElementById("ppn").textContent = "Rp " + ppn.toLocaleString("id-ID");
    document.getElementById("hasil").textContent = "Rp " + totalDiterima.toLocaleString("id-ID");
  });

  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      q.classList.toggle('active');
      const answer = q.nextElementSibling;
      answer.classList.toggle('show');
    });
  });
