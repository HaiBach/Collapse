/**
 * COLLAPSE JQUERY
 * Một plugin collapse nhỏ viết bằng jQuery
 * Thêm class `collapse__toggle` vào button toggle và class `collapse__header` vào collapse header
 * Phần collapse content sẽ là là element kế tiếp của class `collapse__header`, cho nên không cần thiết thêm class vào collapse content.
 *
 * @author Haibach / Nguyen Van Thy
 * @version 1.0
 */
$(function() {
  var $btnToggle = $('.collapse__toggle')
  var classHeader = '.collapse__header'
  var classActive = 'collapse--active'
  var duration = 250

  // Function toggle active class
  var toggleActive = function($header, $target, $toggle) {
    // Case: active
    if ($header.hasClass(classActive)) {
      $toggle.removeClass(classActive)
      $target
        .stop(true)
        .slideUp(duration, function() {
          $header.removeClass(classActive)
        })
    }
    // Case: no active
    else {
      $toggle.addClass(classActive)
      $header.addClass(classActive)
      $target
        .stop(true)
        .slideDown(duration)
    }
  }

  /** SETUP EACH BUTTON TOGGLE **/
  $btnToggle.each(function() {
    var $btn = $(this)
    var $header = $btn.closest(classHeader)
    var $contentNext = $header.next()

    // Add class on the initialization
    if ($header.hasClass(classActive)) $btn.addClass(classActive)
    
    // Check active class at first
    // toggleActive($header, $contentNext)
    // Event click on button
    $btn.on('click', function(e) {
      e.preventDefault()
      toggleActive($header, $contentNext, $btn)
    })
  })
});
