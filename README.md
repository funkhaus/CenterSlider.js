# CenterSlider.js
A barebones jQuery plugin for making slideshows that center. Specifically slideshow that have next and previous previews on either side, like this:

![slideshow-image](https://cloud.githubusercontent.com/assets/6475336/10522133/655e19aa-7328-11e5-9277-4e51e6d0e96b.png)

## How Do I Use It?
Include jQuery 1.7+ and centerSlider.js on your site and run it on a slideshow container with `centerSlider()`.

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

##### Markup Requirements:

It is important to know that in order for the plugin to work properly it will need the right html markup in place: 

1. There will be one __containing__ element that the `centerSlider()` gets called on, `#slideshow` in the example above. 

1. Within the container will be all the main __slide__ elements that will be used to space the slideshow out, `.slide` in the example. 

1. Within each slide element will be a main __object__ element, which you will need to make sure is centered horizontally within the its slide. In the example above `.object` is the object element.

check out [this simple demo](http://labs.funkhausdesign.com/examples/centerSlider-js/) for a more complete picture. Then look at the [example.html](/example.html) source.


## centerSlider()

The `centerSlider()` function gets called on the containing element, which will determine the overall with of the slideshow. The function has one parameter, an object containing valid options. Here are the defaults:

```js
$('#slideshow').centerSlider({
        clickNavigation:    true,
        arrowKeys:          true,
        before:             null,
        after:              null,
        speed:              800,
        slide:              '.slide',
        object:             '.object',
        peekWidth:          50,
        easing:             'swing'
    });
```

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

Default: `50`

A integer value representing the amount of pixels that each object should be "peeking in" from the sides.

##### easing

Default: `'swing'`

The type of easing to use for the slideshow. Any valid [velocity.js easing option](http://julian.com/research/velocity/#easing) will work here.

## Events

You can also fire events on the main container after the slideshow has been set up to trigger functionality. An event is fired like this:

```js
var $slideshow = $('#container').centerSlider();

// trigger event
$slideshow.trigger('cs-next');
```

##### cs-prev

Triggers the slideshow to move to the previous slide. If the slideshow is currently on the first slide then this event will do nothing.

##### cs-next

Triggers the slideshow to move to the next slide. If the slideshow is currently on the last slide then this event will do nothing.

##### cs-goto

Triggers the slideshow to move to a specified slide by index. The `cs-goto` function takes one argument, the 0 based `index` of the intended slide destination. So for example if you wanted to bring your slideshow to the second slide, you would do this:

```js
$('#slideshow').trigger('cs-goto', 1);
```
