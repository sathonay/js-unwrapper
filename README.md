# js-unwrapper

js-unwrapper is a client-side unwrapper to add content from an other file in your page (it unwrap content after the page was load).

How to use js-unwrapper
------------
```html
<head class="js-unwrap-inner" unwrap="head.html"></head>
<body>
    <p>...Code...</p>
    <div class="js-unwrap-outer" unwrap="stuff.html"></div>
    <p>...Code...</p>
    <script src="unwrapper.js"></script>
</body>

or 

// Use link every where dudes
<head>
    <link class="js-unwrap-outer" unwrap="head.html"><link>
</head>
<body>
    <p>...Code...</p>
    <link class="js-unwrap-outer" unwrap="stuff.html"></link>
    <p>...Code...</p>
    <script src="unwrapper.js"></script>
</body>
```
