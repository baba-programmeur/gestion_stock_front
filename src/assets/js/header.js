$(document).on('mouseover', function(e) {
    e.stopPropagation();
    if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
      var targ = $(e.target).closest('.sidebar, .header-left').length;
      if (targ) {
        $('body').addClass('expand-menu');
        $('.subdrop + ul').slideDown();
      } else {
        $('body').removeClass('expand-menu');
        $('.subdrop + ul').slideUp();
      }
      return false;
    }
    return false;
  });
  
  //toggle_btn
  $(document).on('click', '#toggle_btn', function() {
    if ($('body').hasClass('mini-sidebar')) {
      $('body').removeClass('mini-sidebar');
      $(this).addClass('active');
      $('.subdrop + ul').slideDown();
      localStorage.setItem('screenModeNightTokenState', 'night');
      setTimeout(function() {
        $("body").removeClass("mini-sidebar");
        $(".header-left").addClass("active");
      }, 100);
    } else {
      $('body').addClass('mini-sidebar');
      $(this).removeClass('active');
      $('.subdrop + ul').slideUp();
      localStorage.removeItem('screenModeNightTokenState');
      setTimeout(function() {
        $("body").addClass("mini-sidebar");
        $(".header-left").removeClass("active");
      }, 100);
    }
    return false;
  });