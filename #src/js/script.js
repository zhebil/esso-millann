var $burger = $(".menu__burger-wrapper");
var $menu = $(".menu__lists-wrapper");
var $selectBtn = $(".select__current");
var $selectItems = $(".select__btn");

$(document).ready(function () {
  // menu burger
  $burger.on("click", function () {
    $(this).find(".menu__burger").toggleClass("active")
    $menu.slideToggle(200);
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".menu").length) {
      $menu.slideUp(200);
    }
  });

  // select
  $selectBtn.on("click", function () {
    var $this = $(this);
    $this.next().slideToggle(200);
    $this.find(".select__arrow").toggleClass("select__arrow--active");
  });
  //   выбор селекта
  $selectItems.on("click", function () {
    var parent = $(this).closest(".select");

    parent.find(".select__btn").removeClass("active");
    $(this).addClass("active");

    var currentSelect = $(this).children().children().clone(true, true);
    var currentValue = $(this).find(".select__text").data("value");
    parent.find("select option").prop("selected", false);
    parent.find(`select option[value=${currentValue}]`).prop("selected", true);

    parent.find(".select__current .select__content").html(currentSelect);
    parent.find(".select__list").slideUp(200);
  });
});
