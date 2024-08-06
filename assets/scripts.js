let input = document.querySelector('.search__bar');

// RED

function getRedComponent(hex) {
  // Rimuovi il simbolo '#' se presente. quindi prende # e lo sostituisce con una stringa vuota
  hex = hex.replace('#', '');
  if (hex.length < 2) {
    return (""); // non restituisce nulla se ci sono meno di due caratteri, quindi non esce NaN. gli apici dentro le () servono per lo spazio vuoto
  }
  // Prende le prime due cifre
  let firstChar = hex.charAt(0);
  let secondChar = hex.charAt(1);
  // Converte i caratteri esadecimali in numeri decimali
  let firstDecimal = parseInt(firstChar, 16);
  let secondDecimal = parseInt(secondChar, 16);
  // Calcola il valore finale
  let redValue = (firstDecimal * 16) + secondDecimal;
  return redValue;
}

// Aggiunge un evento per aggiornare il risultato ogni volta che l'input cambia
input.addEventListener('input', function() {
    // Ottiene il componente rosso dall'input
    let redComponent = getRedComponent(input.value);
    // Mostra il componente rosso nell'elemento con classe .r__result
    document.querySelector('.r__result').textContent = redComponent;
  });

  //GREEN
  
  
  function getGreenComponent(hex) {
  // Rimuovi il simbolo '#' se presente. quindi prende # e lo sostituisce con una stringa vuota
  hex = hex.replace('#', '');
  if (hex.length < 4) {
    return (""); // non restituisce nulla se ci sono meno di due caratteri, quindi non esce NaN. gli apici dentro le () servono per lo spazio vuoto
  }
  // Prende le prime due cifre
  let firstChar = hex.charAt(2);
  let secondChar = hex.charAt(3);
  // Converte i caratteri esadecimali in numeri decimali
  let firstDecimal = parseInt(firstChar, 16);
  let secondDecimal = parseInt(secondChar, 16);
  // Calcola il valore finale
  let redValue = (firstDecimal * 16) + secondDecimal;
  return redValue;
}

// Aggiunge un evento per aggiornare il risultato ogni volta che l'input cambia
input.addEventListener('input', function() {
    // Ottiene il componente rosso dall'input
    let redComponent = getGreenComponent(input.value);
    // Mostra il componente rosso nell'elemento con classe .r__result
    document.querySelector('.g__result').textContent = redComponent;
  });

  //BLUE
  
  
  function getBlueComponent(hex) {
    // Rimuovi il simbolo '#' se presente. quindi prende # e lo sostituisce con una stringa vuota
    hex = hex.replace('#', '');
    if (hex.length < 6) {
        return (""); // non restituisce nulla se ci sono meno di due caratteri, quindi non esce NaN. gli apici dentro le () servono per lo spazio vuoto
      }
    // Prende le prime due cifre
    let firstChar = hex.charAt(4);
    let secondChar = hex.charAt(5);
    // Converte i caratteri esadecimali in numeri decimali
    let firstDecimal = parseInt(firstChar, 16);
    let secondDecimal = parseInt(secondChar, 16);
    // Calcola il valore finale
    let redValue = (firstDecimal * 16) + secondDecimal;
    return redValue;
  }
  
  // Aggiunge un evento per aggiornare il risultato ogni volta che l'input cambia
  input.addEventListener('input', function() {
      // Ottiene il componente rosso dall'input
      let redComponent = getBlueComponent(input.value);
      // Mostra il componente rosso nell'elemento con classe .r__result
      document.querySelector('.b__result').textContent = redComponent;
    });
