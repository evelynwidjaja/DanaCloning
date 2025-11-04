const input = document.getElementById('gapura-input-amount');

    input.addEventListener('input', function(e) {
      // remove all non-digits
      let value = e.target.value.replace(/\D/g, '');

      // format with commas every 3 digits
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

      // set formatted value back
      e.target.value = value;
});