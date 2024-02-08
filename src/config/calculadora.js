document.addEventListener('keydown', function (event) {
    var key = event.key;

    if (/[0-9+\-*/.=]|Enter|Escape/.test(key)) {
      calcular(/[0-9]/.test(key) ? 'valor' : 'acao', key);
    }
  });
  function calcular(tipo, valor) {
    if (tipo === 'acao') {
      if (valor === 'c' || valor === 'Escape') {
        document.getElementById('resultado').value = ''
      }
      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor
      }
      if (valor === '=' || valor === "Enter") {
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo
      }
    } else if (tipo === 'valor') {
      document.getElementById('resultado').value += valor
    }
  }