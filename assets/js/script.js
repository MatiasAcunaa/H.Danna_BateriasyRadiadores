// $(function() {

//  var $body = $(document);
//  $body.bind('scroll', function() {
      // "Desactivar" el scroll horizontal
//      if ($body.scrollLeft() !== 0) {
//          $body.scrollLeft(0);
//      }
//  });

//}); 

window.sr = ScrollReveal ();

  sr.reveal ('.navParaJs', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
  });
  sr.reveal ('.cardPostSlider', {
    duration: 2700,
    origin: 'bottom',
    distance: '200px'
  });
  sr.reveal ('.carousel', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
  });
  sr.reveal ('.contenedorSeccionesLaterales', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
  });
  sr.reveal ('.contenedorProductosDestacados', {
    duration: 2000,
    origin: 'bottom',
    distance: '150px'
  });
  sr.reveal ('.contenedorMapa', {
    duration: 2000,
    origin: 'left',
    distance: '200px'
  });

