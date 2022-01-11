let formatCoin = (valor) => {
    return valor.toLocaleString('es-ES',{style:'currency', currency:'Eur', minimumFractionDigits:2});
   
   //You can change the value of country and the currency, ejm: 
  // return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
  
}


/*
Con esta función puede transformar cualquier cifra a un formato de moneda específico.
With this function you can transform any figure to a specific currency format.
*/

