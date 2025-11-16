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

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".grid-scroll");

  sections.forEach(section => {
    const scrollContainer = section.querySelector(".scroll-container");
    const leftBtn = section.querySelector(".scroll-btn.left");
    const rightBtn = section.querySelector(".scroll-btn.right");

    if (!scrollContainer || !leftBtn || !rightBtn) return;

    rightBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: scrollContainer.clientWidth * 0.8,
        behavior: "smooth"
      });
    });

    leftBtn.addEventListener("click", () => {
      scrollContainer.scrollBy({
        left: -scrollContainer.clientWidth * 0.8,
        behavior: "smooth"
      });
    });
  });
});

/* ======================= TESTIMONIAL ======================= */

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      quote: `"Bisa membeli pulsa, token, jajan di KFC, belanja di Ramayana dengan potongan harga 50%"`,
      name: "Siti Nurjannah",
      role: "Ibu Rumah Tangga | 32 tahun",
      photo: "../Assets/SitiNurjannah.jpg",
    },
    {
      quote: `"Pengalaman yang paling buat saya happy, ketika saya dapet voucher makan 25K plus cashback 50%, pokoknya seneng banget. Terima kasih DANA. Love you."`,
      name: "Asep Saepul Anwar",
      role: "Mahasiswa | 24 tahun",
      photo: "../Assets/AsepSaepulAnwar.jpg",
    },
    {
      quote: `"Simpel, praktis, nggak ribet, mudah dan nyaman."`,
      name: "Mudjiantono S.Sos.",
      role: "Karyawan Swasta | 50 tahun",
      photo: "../Assets/Mudjiantono.jpg",
    },
    {
      quote: `"Ada pembayaran BPJS, Cashout mudah, Cashback sangat bermanfaat karena untuk bayar tagihan, bisa pesan TIX.id"`,
      name: "Triani Dewi",
      role: "Karyawan Swasta | 24 tahun",
      photo: "../Assets/TrianiDewi.jpg",
    },
    {
      quote: `"Fitur yang paling sering saya gunakan adalah Transaksi produk virtual seperti pembelian pulsa, token listrik dan kirim saldo DANA antar teman."`,
      name: "Mohamad Dendik",
      role: "Karyawan Swasta | 31 tahun",
      photo: "../Assets/MohamadDendik.jpg",
    }
  ];

  let index = 0;
  const quote = document.getElementById("quoteM");
  const name = document.getElementById("nameM");
  const role = document.getElementById("roleM");
  const photo = document.getElementById("photoM");

  const quoteD = document.getElementById("quote");
  const nameD = document.getElementById("name");
  const roleD = document.getElementById("role");
  const photoD = document.getElementById("photo");

  const prevBtn = document.getElementById("prevBtnM");
  const nextBtn = document.getElementById("nextBtnM");
  const prevBtnD = document.getElementById("prevBtn");
  const nextBtnD = document.getElementById("nextBtn");

  function updateTestimonial() {
    quote.classList.add("fade-out");
    name.classList.add("fade-out");
    role.classList.add("fade-out");
    photo.classList.add("fade-out");

    quoteD.classList.add("fade-out");
    nameD.classList.add("fade-out");
    roleD.classList.add("fade-out");
    photoD.classList.add("fade-out");
    
    setTimeout(() => {
      quote.textContent = testimonials[index].quote;
      name.textContent = testimonials[index].name;
      role.textContent = testimonials[index].role;
      photo.src = testimonials[index].photo;

      quoteD.textContent = testimonials[index].quote;
      nameD.textContent = testimonials[index].name;
      roleD.textContent = testimonials[index].role;
      photoD.src = testimonials[index].photo;


      quote.classList.remove("fade-out");
      name.classList.remove("fade-out");
      role.classList.remove("fade-out");
      photo.classList.remove("fade-out");

      quoteD.classList.remove("fade-out");
      nameD.classList.remove("fade-out");
      roleD.classList.remove("fade-out");
      photoD.classList.remove("fade-out");
    }, 300);
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    updateTestimonial();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });

  nextBtnD.addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  updateTestimonial();
});

  prevBtnD.addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
  });
});

/* ======================= MOBILE CARD ======================= */

document.getElementById('loadMoreMobile').addEventListener('click', function() {
  const cards = document.querySelectorAll('.mobile-card');
  cards.forEach(card => {
      card.style.display = 'block'; 
  });
  this.style.display = 'none'; 
});

document.getElementById('loadMoreMobile1').addEventListener('click', function() {
  const cards = document.querySelectorAll('.mobile-card1');
  cards.forEach(card => {
      card.style.display = 'block'; 
  });
  this.style.display = 'none'; 
});

document.getElementById('loadMoreMobile2').addEventListener('click', function() {
  const cards = document.querySelectorAll('.mobile-card2');
  cards.forEach(card => {
      card.style.display = 'block'; 
  });
  this.style.display = 'none'; 
});

document.getElementById('loadMoreMobile3').addEventListener('click', function() {
  const cards = document.querySelectorAll('.mobile-card3');
  cards.forEach(card => {
      card.style.display = 'block'; 
  });
  this.style.display = 'none'; 
});
