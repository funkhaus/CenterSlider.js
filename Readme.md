# CenterSlider.js
A barebones jQuery plugin for making slideshows that center the active slide. Like this:

## How Do I Use It?
Include jQuery 1.7+ and CenterSlider.js on your site and run it on a slideshow container with `centerSlider()`.

```html

<div id="slideshow">
    <div class="slide">
        <div class="object">
            <h2>Slide 1</h2>
        </div>
    </div>
    <div class="slide">
        <div class="object">
            <h2>Slide 2</h2>
        </div>
    </div>
</div>

<script src="path/to/jquery.min.js"></script>
<script src="path/to/centerSlider.min.js"></script>
<script>
    $(document).ready(function(){

        var $slideshow = $('#slideshow').centerSlider({
            speed: 800
        });

    });
</script>
```

This will wrap the `.slide` divs in `div.centerslide-wrapper`, size the `.slides` accordingly and set up some listeners to move the slides back and forth in a slideshow.

check out [example.html](/example.html) for a more complete picture.


## centerSlider()

The `centerSlider()` function gets called on the containing element, which will determine the overall with of the slideshow. The function has one parameter, an object containing valid options:

##### clickNavigation

Default: `true`

Sets the previous and next objects to be clickable, navigating the slideshow. 

##### arrowKeys

Default: `true`

Sets listeners on the left and right keyboard arrow keys to navigate the slideshow.

##### before

Default: `null`

A callback function that is fired before the transition of any navigation event. It receives two parameters, the `incoming slide` as a jQuery object and the `outgoing slide`, also as a jQuery object.

##### after

Default: `null`

A callback function that is fired after the transition of any navigation event. It receives two parameters, the `incoming slide` as a jQuery object and the `outgoing slide`, also as a jQuery object.

##### speed

Default: `800`

An integer value that determines the transition speed when moving from one slide to another. Measured in ms.

##### slide

Default: `.slide`

A css selector of the main slide element within the slideshow. The width of this element will be calculated automatically by the plugin. Download this repo and look at [example.html](/example.html) in your browser for more info.

##### object

Default: `.object`

A css selector of the object element _within_ the each main slide element. This object can be anything, a `div`, `img`, etc. The width of this object can be dynamic (i.e 60%) but each object in the slideshow must have matching widths or else the plugin will not work as expected.

The object is the element that will peek in from the sides of the slideshow.

##### peekWidth

Default: 50

A integer value representing the amount of pixels that each object should be "peeking in" from the sides.

##### easing

Default: 'swing'

The type of easing to use for the slideshow. Any valid [velocity.js easing option](http://julian.com/research/velocity/#easing) will work here.