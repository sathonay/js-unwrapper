# js-unwrapper

js-unwrapper is a client-side unwrapper to add content from an other file in your page (it unwrap content after the page was load).

How to use js-unwrapper
------------
```html
// Server side
<head>
    <link class="js-unwrap-outer" unwrap="head.html">
    /*code in link*/
    </link>
</head>
<body>
    <p>...Code...</p>
    <link class="js-unwrap-outer" unwrap="stuff.html"></link>
    <p>...Code...</p>
    <script src="unwrapper.js"></script>
</body>

//When the browser do the job
<head>
    /*code in head.html*/
    /*code in link*/
</head>
<body>
    <p>...Code...</p>
    /*code in stuff.html*/
    <p>...Code...</p>
    <script src="unwrapper.js"></script>
</body>

```
