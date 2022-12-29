/*
Author       : Dreamguys
Template Name: POS - Bootstrap Admin Template
*/

$(document).ready(function () {
  // Variables declarations
  var $wrapper = $(".main-wrapper");
  var $pageWrapper = $(".page-wrapper");
  feather.replace();

  // Page Content Height Resize
  $(window).resize(function () {
    if ($(".page-wrapper").length > 0) {
      var height = $(window).height();
      $(".page-wrapper").css("min-height", height);
    }
  });

  // Mobile menu sidebar overlay
  $("body").append('<div class="sidebar-overlay"></div>');
  $(document).on("click", "#mobile_btn", function () {
    $wrapper.toggleClass("slide-nav");
    $(".sidebar-overlay").toggleClass("opened");
    $("html").addClass("menu-opened");
    $("#task_window").removeClass("opened");
    return false;
  });

  $(".sidebar-overlay").on("click", function () {
    $("html").removeClass("menu-opened");
    $(this).removeClass("opened");
    $wrapper.removeClass("slide-nav");
    $(".sidebar-overlay").removeClass("opened");
    $("#task_window").removeClass("opened");
  });

  // Logo Hide Btn

  $(document).on("click", ".hideset", function () {
    $(this).parent().parent().parent().hide();
  });

  $(document).on("click", ".delete-set", function () {
    $(this).parent().parent().hide();
  });

  // image file upload image
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $("#blah").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imgInp").change(function () {
    readURL(this);
  });

  // Loader
  setTimeout(function () {
    $("#global-loader");
    setTimeout(function () {
      $("#global-loader").fadeOut("slow");
    }, 100);
  }, 500);

  // Datetimepicker
  if ($(".datetimepicker").length > 0) {
    $(".datetimepicker").datetimepicker({
      format: "DD-MM-YYYY",
      icons: {
        up: "fas fa-angle-up",
        down: "fas fa-angle-down",
        next: "fas fa-angle-right",
        previous: "fas fa-angle-left",
      },
    });
  }

  // toggle-password
  if ($(".toggle-password").length > 0) {
    $(document).on("click", ".toggle-password", function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(".pass-input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
  if ($(".toggle-passwords").length > 0) {
    $(document).on("click", ".toggle-passwords", function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(".pass-inputs");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
  if ($(".toggle-passworda").length > 0) {
    $(document).on("click", ".toggle-passworda", function () {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(".pass-inputs");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  // Counter
  if ($(".counter").length > 0) {
    $(".counter").counterUp({
      delay: 20,
      time: 2000,
    });
  }
  if ($("#timer-countdown").length > 0) {
    $("#timer-countdown").countdown({
      from: 180, // 3 minutes (3*60)
      to: 0, // stop at zero
      movingUnit: 1000, // 1000 for 1 second increment/decrements
      timerEnd: undefined,
      outputPattern: "$day Day $hour : $minute : $second",
      autostart: true,
    });
  }

  if ($("#timer-countup").length > 0) {
    $("#timer-countup").countdown({
      from: 0,
      to: 180,
    });
  }

  if ($("#timer-countinbetween").length > 0) {
    $("#timer-countinbetween").countdown({
      from: 30,
      to: 20,
    });
  }

  if ($("#timer-countercallback").length > 0) {
    $("#timer-countercallback").countdown({
      from: 10,
      to: 0,
      timerEnd: function () {
        this.css({ "text-decoration": "line-through" }).animate(
          { opacity: 0.5 },
          500
        );
      },
    });
  }

  if ($("#timer-outputpattern").length > 0) {
    $("#timer-outputpattern").countdown({
      outputPattern: "$day Days $hour Hour $minute Min $second Sec..",
      from: 60 * 60 * 24 * 3,
    });
  }

  // Summernote

  if ($("#summernote").length > 0) {
    $("#summernote").summernote({
      height: 300, // set editor height
      minHeight: null, // set minimum height of editor
      maxHeight: null, // set maximum height of editor
      focus: true, // set focus to editable area after initializing summernote
    });
  }

  //Increment Decrement value
  $(".inc.button").click(function () {
    var $this = $(this),
      $input = $this.prev("input"),
      $parent = $input.closest("div"),
      newValue = parseInt($input.val()) + 1;
    $parent.find(".inc").addClass("a" + newValue);
    $input.val(newValue);
    newValue += newValue;
  });
  $(".dec.button").click(function () {
    var $this = $(this),
      $input = $this.next("input"),
      $parent = $input.closest("div"),
      newValue = parseInt($input.val()) - 1;
    console.log($parent);
    $parent.find(".inc").addClass("a" + newValue);
    $input.val(newValue);
    newValue += newValue;
  });

  if ($(".custom-file-container").length > 0) {
    //First upload
    var firstUpload = new FileUploadWithPreview("myFirstImage");
    //Second upload
    var secondUpload = new FileUploadWithPreview("mySecondImage");
  }

  $(".counters").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 2000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });

  // toggle-password
  if ($(".toggle-password").length > 0) {
    $(document).on("click", ".toggle-password", function () {
      $(this).toggleClass("fa-eye fa-eye");
      var input = $(".pass-input");
      if (input.attr("type") == "text") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }

  if ($(".win-maximize").length > 0) {
    $(".win-maximize").on("click", function (e) {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  $(document).on("click", "#check_all", function () {
    $(".checkmail").click();
    return false;
  });
  if ($(".checkmail").length > 0) {
    $(".checkmail").each(function () {
      $(this).on("click", function () {
        if ($(this).closest("tr").hasClass("checked")) {
          $(this).closest("tr").removeClass("checked");
        } else {
          $(this).closest("tr").addClass("checked");
        }
      });
    });
  }

  // Chat
  var chatAppTarget = $(".chat-window");
  (function () {
    if ($(window).width() > 991) chatAppTarget.removeClass("chat-slide");

    $(document).on(
      "click",
      ".chat-window .chat-users-list a.media",
      function () {
        if ($(window).width() <= 991) {
          chatAppTarget.addClass("chat-slide");
        }
        return false;
      }
    );
    $(document).on("click", "#back_user_list", function () {
      if ($(window).width() <= 991) {
        chatAppTarget.removeClass("chat-slide");
      }
      return false;
    });
  })();

  // Mail important

  $(document).on("click", ".mail-important", function () {
    $(this).find("i.fa").toggleClass("fa-star").toggleClass("fa-star-o");
  });

  var selectAllItems = "#select-all";
  var checkboxItem = ":checkbox";
  $(selectAllItems).click(function () {
    if (this.checked) {
      $(checkboxItem).each(function () {
        this.checked = true;
      });
    } else {
      $(checkboxItem).each(function () {
        this.checked = false;
      });
    }
  });

  var right_side_views =
    '<div class="right-side-views d-none">' +
    '<ul class="sticky-sidebar siderbar-view">' +
    '<li class="sidebar-icons">' +
    '<a class="toggle tipinfo open-layout open-siderbar" href="javascript:void(0);" data-toggle="tooltip" data-placement="left" data-bs-original-title="Tooltip on left">' +
    '<div class="tooltip-five ">' +
    '<img src="assets/img/icons/siderbar-icon2.svg" class="feather-five" alt="">' +
    '<span class="tooltiptext">Check Layout</span>' +
    "</div>" +
    "</a>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    '<div class="sidebar-layout">' +
    '<div class="sidebar-content">' +
    '<div class="sidebar-top">' +
    '<div class="container-fluid">' +
    '<div class="row align-items-center">' +
    '<div class="col-xl-6 col-sm-6 col-12">' +
    '<div class="sidebar-logo">' +
    '<a href="index.html" class="logo">' +
    '<img src="assets/img/logo.png" alt="Logo" class="img-flex">' +
    "</a>" +
    "</div>" +
    "</div>" +
    '<div class="col-xl-6 col-sm-6 col-12">' +
    '<a class="btn-closed" href="javascript:void(0);"><img class="img-fliud" src="assets/img/icons/sidebar-delete-icon.svg" alt="demo"></a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<div class="container-fluid">' +
    '<div class="row align-items-center">' +
    '<h5 class="sidebar-title">Choose layout</h5>' +
    '<div class="col-xl-12 col-sm-6 col-12">' +
    '<div class="sidebar-image align-center">' +
    '<img class="img-fliud" src="assets/img/demo-one.png" alt="demo">' +
    "</div>" +
    '<div class="row">' +
    '<div class="col-lg-6 layout">' +
    '<h5 class="layout-title">Dark Mode</h5>' +
    "</div>" +
    '<div class="col-lg-6 layout dark-mode">' +
    '<label class="toggle-switch" for="notification_switch3">' +
    "<span>" +
    '<input type="checkbox" class="toggle-switch-input" id="notification_switch3">' +
    '<span class="toggle-switch-label ms-auto">' +
    '	<span class="toggle-switch-indicator"></span>' +
    "</span>" +
    "</span>" +
    " </label>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    $("body").append(right_side_views);

  // Sidebar Visible

  $(".open-layout").on("click", function (s) {
    s.preventDefault();
    $(".sidebar-layout").addClass("show-layout");
    $(".sidebar-settings").removeClass("show-settings");
  });
  $(".btn-closed").on("click", function (s) {
    s.preventDefault();
    $(".sidebar-layout").removeClass("show-layout");
  });
  $(".open-settings").on("click", function (s) {
    s.preventDefault();
    $(".sidebar-settings").addClass("stoggle_btnhow-settings");
    $(".sidebar-layout").removeClass("show-layout");
  });

  $(".btn-closed").on("click", function (s) {
    s.preventDefault();
    $(".sidebar-settings").removeClass("show-settings");
  });

  $(".open-siderbar").on("click", function (s) {
    s.preventDefault();
    $(".siderbar-view").addClass("show-sidebar");
  });

  $(".btn-closed").on("click", function (s) {
    s.preventDefault();
    $(".siderbar-view").removeClass("show-sidebar");
  });

  if ($(".toggle-switch").length > 0) {
    const toggleSwitch = document.querySelector(
      '.toggle-switch input[type="checkbox"]'
    );
    const currentTheme = localStorage.getItem("theme");
    var app = document.getElementsByTagName("BODY")[0];

    if (currentTheme) {
      app.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }

    function switchTheme(e) {
      if (e.target.checked) {
        app.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        app.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }

    toggleSwitch.addEventListener("change", switchTheme, false);
  }

  if (window.location.hash == "#LightMode") {
    localStorage.setItem("theme", "dark");
  } else {
    if (window.location.hash == "#DarkMode") {
      localStorage.setItem("theme", "light");
    }
  }
});
