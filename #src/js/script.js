var $burger = $(".menu__burger-wrapper");
var $menu = $(".menu__lists-wrapper");
var $selectBtn = $(".select__current");
var $selectItems = $(".select__btn");
var $tabsButton = $(".tabs__button");
var $faqItem = $(".faq__item");
// tabs
function getTabs() {
  $tabsButton.on("click", function () {
    var parentBlock = $(this).closest(".tabs");
    var buttons = parentBlock.find(".tabs__button");
    var tabsItems = parentBlock.find(".tabs__item");
    var activeTabItem = parentBlock.find(".tabs__item.active");
    var activeIndex = $(this).data("idx") - 1;
    activeTabItem.hide(200);
    tabsItems.eq(activeIndex).addClass("active");
    tabsItems.eq(activeIndex).show(200);
    buttons.removeClass("active");
    $(this).addClass("active");
  });
}

function getSelect() {
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
}

function getSpoiler() {
  $faqItem.on("click", function () {
    $(this).find("button").toggleClass("active");
    $(this).find(".faq__descr").slideToggle(200);
  });
}

$(document).ready(function () {
  // scroll
  jQuery(".scrollbar-outer").scrollbar();

  // menu burger
  $burger.on("click", function () {
    $(this).find(".menu__burger").toggleClass("active");
    $menu.slideToggle(200);
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest(".menu").length) {
      $menu.slideUp(200);
    }
  });

  // select
  getSelect();

  // tabs
  getTabs();

  // FAQ
  getSpoiler();
  
 });
