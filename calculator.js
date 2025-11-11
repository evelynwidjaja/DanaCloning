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
