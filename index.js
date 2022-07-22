



function jugabilidad(espacios,player) {
  $('.desactivar').prop( "disabled", true);
  $('#playerO').click(function(){
    player = 'Círculo';
    $('.desactivar').prop( "disabled", false);
    $(this).prop( "disabled", true);
    $(this).text(`Jugador 1 será O`);
    $('#playerX').prop( "disabled", true);
    $('#playerX').text('Jugador 2 será X');
    $('#tutorial').text(`Haz click en los números para jugar`);
  });
  $('#playerX').click(function(){
    player = 'Equis';
    $('.desactivar').prop( "disabled", false);
    $(this).prop( "disabled", true);
    $(this).text(`Jugador 1 será X`);
    $('#playerO').prop( "disabled", true);
    $('#playerO').text('Jugador 2 será O');
    $('#tutorial').text(`Haz click en los números para jugar`);
  });
  function cambioDeTurno() {
    if (player == 'Equis') {
     return player = 'Círculo'
   } else {
     return player = 'Equis'
   }
  }
  $('#reset').click(function() {
    location.reload();
  });

  $('#1').click(function() {
    jugada('#1',player);
    victoria(player);
    
    cambioDeTurno();
  });
  $('#2').click(function() {
    jugada('#2',player);
    victoria(player);

    cambioDeTurno(player);
  });
  $('#3').click(function() {
    jugada('#3',player);
    victoria(player);

    cambioDeTurno(player);
  });
  $('#4').click(function() {
    jugada('#4',player);
    victoria(player);
    cambioDeTurno(player);
  });
  $('#5').click(function() {
    jugada('#5',player);
    victoria(player);
    cambioDeTurno(player);
  });
  $('#6').click(function() {
    jugada('#6',player);
    victoria(player);
    cambioDeTurno(player);
  });
  $('#7').click(function() {
    jugada('#7',player);
    victoria(player);
    cambioDeTurno(player);
  });
  $('#8').click(function() {
    jugada('#8',player);
    victoria(player);
    cambioDeTurno(player);
  });
  $('#9').click(function() {
    jugada('#9',player);
    victoria(player);
    cambioDeTurno(player);
  });

}
function jugada(id,player){
  $(id).html(`<img src="svg/${player}.svg" alt="${player}">`);
  $(id).addClass(player);
  $(id).prop( "disabled", true);
};
function victoria(player){

  if (
      //Horizontal
          $("#1").hasClass(player)
          && $("#2").hasClass(player)
          && $("#3").hasClass(player))
        {
          $("#tutorial").text(`¡${player} ha ganado!`)
          $('.desactivar').prop( "disabled", true);
          $(".raya").addClass('raya-hor-1');
        }
        else if (
          $("#4").hasClass(player) &&
          $("#5").hasClass(player) &&
          $("#6").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $('.desactivar').prop( "disabled", true);
            $(".raya").addClass('raya-hor-2');

        }
        else if (
          $("#7").hasClass(player)
          && $("#8").hasClass(player)
          && $("#9").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $('.desactivar').prop( "disabled", true);
            $(".raya").addClass('raya-hor-3');

        }
        //Vertical
        else if (
          $("#1").hasClass(player) &&
          $("#4").hasClass(player) &&
          $("#7").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $('.desactivar').prop( "disabled", true);
            $(".raya").addClass('raya-ver-1');
        }
        else if (
          $("#2").hasClass(player) &&
          $("#5").hasClass(player) &&
          $("#8").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $('.desactivar').prop( "disabled", true);
            $(".raya").addClass('raya-ver-2');

        }
        else if (
          $("#3").hasClass(player) &&
          $("#6").hasClass(player) &&
          $("#9").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $('.desactivar').prop( "disabled", true);
            $(".raya").addClass('raya-ver-3');

        }
        //Diagonal
        else if (
          $("#1").hasClass(player) &&
          $("#5").hasClass(player) &&
          $("#9").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $('.desactivar').prop( "disabled", true);
            $(".raya").addClass('raya-dia-1');

        }
        else if (
          $("#3").hasClass(player) &&
          $("#5").hasClass(player) &&
          $("#7").hasClass(player)
          )
        {
            $("#tutorial").text(`¡${player} ha ganado!`)
            $(".raya").addClass('raya-dia-2');
            $('.desactivar').prop( "disabled", true);

        }
        else if (
            //Si todos los botones están deshabilitados, y no se ha elegido ganador, se declara empate
        $("#1").is(':disabled') &&
        $("#2").is(':disabled') &&
        $("#3").is(':disabled') &&
        $("#4").is(':disabled') &&
        $("#5").is(':disabled') &&
        $("#6").is(':disabled') &&
        $("#7").is(':disabled') &&
        $("#8").is(':disabled') &&
        $("#9").is(':disabled')) {
          $("#tutorial").text(`¡Empate!`)
        } else {}
};
