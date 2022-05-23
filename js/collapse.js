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
  var toggleActive = function($check, $target) {
    // Case: active
    if ($check.hasClass(classActive)) {
      $target
        .stop(true)
        .slideUp(duration, function() {
          $check.removeClass(classActive)
        })
    }
    // Case: no active
    else {
      $check.addClass(classActive)
      $target
        .stop(true)
        .slideDown(duration)
    }
  }

  /** SETUP EACH BUTTON TOGGLE **/
  $btnToggle.each(function() {
    var $btn = $(this)
    var $itemForm = $btn.closest(classHeader)
    var $contentNext = $itemForm.next()
    
    // Check active class at first
    // toggleActive($itemForm, $contentNext)
    // Event click on button
    $btn.on('click', function(e) {
      e.preventDefault()
      toggleActive($itemForm, $contentNext)
    })
  })
});
