function rollDice() {
  var dice = Math.round(Math.random() * (6 - 1) + 1);
  document.getElementById("result").innerHTML = '';
  var results = {
      1: '1 <br> Você tomou uma poção e foi envenenado!',
      2: '2 <br> Você encontrou um baú cheio de tesouros!',
      3: '3 <br> Você encontrou um dragão muito acima do seu nível e foi morto por ele...',
      4: '4 <br> Você encontrou um homem encapuzado, deseja falar com ele?',
      5: '5 <br> Você encontrou a saída da caverna e retornou para casa',
      6: '6 <br> Você encontrou uma aranha gigante que reside na caverna e foi morto por ela...'
  }

  document.getElementById("result").innerHTML = results[dice]
}
