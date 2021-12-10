//general
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#myBtn').fadeIn();
      } else {
        $('#myBtn').fadeOut();
      }
    });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#section_scroll_1_about').fadeOut();
      } else {
        $('#section_scroll_1_about').fadeIn();
      }
    });

  //   $('a[href*=#]').on('click', function(e) {
  //   e.preventDefault();
  //   $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  // });

    // $('.ATC').click(function() {
    //   $("html, body").animate({
    //   scrollTop: 0
    //   }, 1000);
    //   return false;
    // });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('.wrapper').fadeIn();
      } else {
        $('.wrapper').fadeOut();
      }
    });

    $('#myBtn').click(function() {
      $("html, body").animate({
      scrollTop: 0
      }, 1000);
      return false;
    });

    $('a[href="#sect_1"]').click(function(e){
      console.log('I got triggered');
      e.preventDefault();
      var targetOffset = $('a[name="sect_1"]');
      $('html, body').animate({scrollTop: targetOffset.offset().top}, 1000);
    });

    $('a[href="#sect_2"]').click(function(e){
      console.log('I got triggered');
      e.preventDefault();
      var targetOffset = $('a[name="sect_2"]');
      $('html, body').animate({scrollTop: targetOffset.offset().top}, 1000);
    });

    $('a[href="#sect_3"]').click(function(e){
      console.log('I got triggered');
      e.preventDefault();
      var targetOffset = $('a[name="sect_3"]');
      $('html, body').animate({scrollTop: targetOffset.offset().top}, 1000);
    });

    $('a[href="#sect_4"]').click(function(e){
      console.log('I got triggered');
      e.preventDefault();
      var targetOffset = $('a[name="sect_4"]');
      $('html, body').animate({scrollTop: targetOffset.offset().top}, 1000);
    });

    $('a[href="#sect_5"]').click(function(e){
      console.log('I got triggered');
      e.preventDefault();
      var targetOffset = $('a[name="sect_5"]');
      $('html, body').animate({scrollTop: targetOffset.offset().top}, 1000);
    });

    $('a[href="#sect_6"]').click(function(e){
      console.log('I got triggered');
      e.preventDefault();
      var targetOffset = $('a[name="sect_6"]');
      $('html, body').animate({scrollTop: targetOffset.offset().top}, 1000);
    });
});

// section_2
// Creating the observer
const observer_sec2_header = new IntersectionObserver(entries => {
  // Looping over the entries
  entries.forEach(entry => {

    const section_2_heading = entry.target.querySelector('.section_2_heading-main');

    // If the element is visible
    if (entry.isIntersecting) {
      // Adding the animation class
      entry.target.classList.add('section_2_heading-main-animate');
      return;
    }

    // We're not intersecting, so remove the class!
    // section_2_heading.classList.remove('section_2_heading-main-animate');
  });
});

// Telling the observer which elements to track
observer_sec2_header.observe(document.querySelector('.section_2_heading-main'));


// section_3
// Creating the observer
const observer_sec3_header = new IntersectionObserver(entries => {
  // Looping over the entries
  entries.forEach(entry => {

    const section_3_heading = entry.target.querySelector('.section_3_heading-primary');

    // If the element is visible
    if (entry.isIntersecting) {
      // Adding the animation class
      entry.target.classList.add('section_3_heading-primary-animate');
      return;
    }

    // We're not intersecting, so remove the class!
    // section_3_heading.classList.remove('section_3_heading-primary-animate');
  });
});

// Telling the observer which elements to track
observer_sec3_header.observe(document.querySelector('.section_3_heading-primary'));
