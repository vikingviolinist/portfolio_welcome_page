$(document).ready(function () {
  $('#welcome-page').fadeIn(3500);

  // Add scroll to anchor tags
  $('a[href*=#]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ 
      scrollTop: $($(this).attr('href')).offset().top
    }, 1300, 'swing');
  });

  // Add scroll to violin language buttons
  $('.language-buttons').on('click', () => {
    $('html, body').animate({
      scrollTop: $('#intro').offset().top
      }, 2000, 'swing');
    $('.navbar-signature').delay(2200).show(0);
  });

  // Change language 
  $('#button-norwegian').on('click', () => {
    $('h1').text('Velkommen til min webside!');
    $('h3').show().text('Jeg heter Michal og jeg liker å bygge ting.');
    $('.navbar-link a:nth(0)').text('om meg');
    $('.navbar-link a:nth(2)').text('utdanning');
    $('button').text('litt om meg');
  });

  $('#button-english').on('click', () => {
    $('h1').text('Welcome to my webpage!');
    $('h3').show().text('My name is Michal and I like to build stuff.');
    $('.navbar-link a:nth(0)').text('about me');
    $('.navbar-link a:nth(2)').text('education');
    $('button').text('more about me');
  });

  $('#button-german').on('click', () => {
    $('h1').text('Willkommen auf meiner Webseite!');
    $('h3').show().text('Ich heiße Michal und mag Dinge zu bauen.');
    $('.navbar-link a:nth(0)').text('über mich');
    $('.navbar-link a:nth(2)').text('ausbildung');
    $('button').text('mehr Info');
  });

  $('#button-slovak').on('click', () => {
    $('h1').text('Vitajte na mojich webových stránkach!');
    $('h3').hide();
    $('.navbar-link a:nth(0)').text('o mne');
    $('.navbar-link a:nth(2)').text('vzdelanie');
    $('button').text('viac info');
  });

});