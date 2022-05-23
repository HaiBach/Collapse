# Collapse

Là một plugin nhỏ về collapse viết bằng ngôn ngữ jQuery.


## SETUP / THIẾT LẬP

Thêm class vào 2 đối tượng, class `collapse__toggle` vào button toggle và class `collapse__header` vào collapse header để thiết lập plugin.
Phần collapse content sẽ được thiết lập kế tiếp của class `collapse__header`, cho nên không cần thêm class vào cũng được.

``` html
<div class="collapse">
  <div class="collapse__header">
    <a class="collapse__toggle" href="#">Button Toggle</a>
  </div>
  <div class="collapse__content">
    ...
  </div>
</div>
```

Mặc định khi collapse chưa active thì sẽ ẩn content.
Để thiết lập active lúc mặc định, cần thêm class `collapse--ative` vào class `collapse__header`

``` html
 <div class="collapse">
  <div class="collapse__header collapse--active">
    <a class="collapse__toggle" href="#">Button Toggle</a>
  </div>
  <div class="collapse__content">...</div>
</div>
```
