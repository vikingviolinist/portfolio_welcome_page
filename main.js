$(document).ready(function () {
  $('#container').fadeIn(3000, 'swing');

  // Add scroll to scroll button
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ 
 scrollTop: $($(this).attr('href')).offset().top
        -    }, 670, 'linear');
  -  });
-
  -  // Add scroll to violin buttons
  -  $('.buttons').on('click', () => {
    -    $('html, body').animate({
- scrollTop: $('#section-two').offset().top
      -    }, 3000, 'swing');
-  });
-
  -  // Add event listeners to buttons
  -  $('.buttons')
  -  .on('mouseenter', e => {
    -    $(e.currentTarget).animate({ 
- fillOpacity: 0.4,
      -      strokeWidth: 1,
      -    }, 300, 'linear');
-  })
-  .on('mouseleave', e => {
  -    $(e.currentTarget).animate({
- fillOpacity: 0,
    -      strokeWidth: 2
    -    }, 300, 'linear');
-  });
-
  -  $('#buttonNorwegian').on('click', () => {
    -    $('h1').text('Dette er en tekst på norsk.');
    -  });
-
  -  $('#buttonEnglish').on('click', () => {
    -    $('h1').text('This is a text in English.');
    -  });
-
  -  $('#buttonGerman').on('click', () => {
    -    $('h1').text('Dies ist ein Text auf Deutsch.');
    -  });
-
  -  $('#buttonSlovak').on('click', () => {
    -    $('h1').text('Toto je text v slovenčine.');
    -  });
-
  -});