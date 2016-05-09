# jqueryScrollFlip
flip your div when scrolling

#How to use:

//add z-layer-container class to the wrapper div
//add z-layer-obj to allow flipping the div 

```html
<div class="z-layer-container">
  <div class="z-layer-obj">
    <label class="login-example">
      <h3>Another stuff</h3>
      <input type="text" />
    </label>
  </div>
  <div class="z-layer-obj">
    <label class="login-example">
      <h3>Type your email</h3>
      <input type="text" />
    </label>
  </div>
  <div class="z-layer-obj">
    <label class="login-example">
      <h3>:)</h3>
      <input type="text" />
    </label>
  </div>
</div>
#html
```

//call the initZLayer()

```html
$(document).ready(function() {
	initZLayer();
});
```


DEMO

https://jsfiddle.net/atg5m6ym/4237/
