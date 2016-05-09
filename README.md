# jqueryScrollFlip
flip your div when scrolling

#How to use:

```h3
First add the hmzlayer.js to your project
```
```h3
add z-layer-container class to the wrapper div
```
```h3
add z-layer-obj to allow flipping the div 
```
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
