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

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      quote: `"Bisa membeli pulsa, token, jajan di KFC, belanja di Ramayana dengan potongan harga 50%"`,
      name: "Siti Nurjannah",
      role: "Ibu Rumah Tangga | 32 tahun",
      photo: "Assets/SitiNurjannah.jpg",
    },
    {
      quote: `"Pengalaman yang paling buat saya happy, ketika saya dapet voucher makan 25K plus cashback 50%, pokoknya seneng banget. Terima kasih DANA. Love you."`,
      name: "Asep Saepul Anwar",
      role: "Mahasiswa | 24 tahun",
      photo: "Assets/AsepSaepulAnwar.jpg",
    },
    {
      quote: `"Simpel, praktis, nggak ribet, mudah dan nyaman."`,
      name: "Mudjiantono S.Sos.",
      role: "Karyawan Swasta | 50 tahun",
      photo: "Assets/Mudjiantono.jpg",
    },
    {
      quote: `"Ada pembayaran BPJS, Cashout mudah, Cashback sangat bermanfaat karena untuk bayar tagihan, bisa pesan TIX.id"`,
      name: "Triani Dewi",
      role: "Karyawan Swasta | 24 tahun",
      photo: "Assets/TrianiDewi.jpg",
    },
    {
      quote: `"Fitur yang paling sering saya gunakan adalah Transaksi produk virtual seperti pembelian pulsa, token listrik dan kirim saldo DANA antar teman."`,
      name: "Mohamad Dendik",
      role: "Karyawan Swasta | 31 tahun",
      photo: "Assets/MohamadDendik.jpg",
    }
  ];

  let index = 0;
  const quote = document.getElementById("quote");
  const name = document.getElementById("name");
  const role = document.getElementById("role");
  const photo = document.getElementById("photo");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function updateTestimonial() {
    quote.classList.add("fade-out");
    name.classList.add("fade-out");
    role.classList.add("fade-out");
    photo.classList.add("fade-out");

    setTimeout(() => {
      quote.textContent = testimonials[index].quote;
      name.textContent = testimonials[index].name;
      role.textContent = testimonials[index].role;
      photo.src = testimonials[index].photo;

      quote.classList.remove("fade-out");
      name.classList.remove("fade-out");
      role.classList.remove("fade-out");
      photo.classList.remove("fade-out");
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
});

