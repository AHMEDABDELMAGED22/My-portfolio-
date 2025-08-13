const display = document.getElementById('display');
document.querySelectorAll('.btn').forEach(btn => {
  btn.onclick = function() {
    const val = btn.getAttribute('data-value');
    if (val === 'C') {
      display.value = '';
    } else if (val === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += val;
    }
  };
});
