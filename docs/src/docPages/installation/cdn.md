# CDN

For testing purposes or demos, use our [Skypack](https://www.skypack.dev/) CDN builds. Here are the few lines of code you need to get started:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div class="element"></div>
    <script type="module">
      import { Editor } from "https://cdn.skypack.dev/@tiptap-es5/core?min";
      import StarterKit from "https://cdn.skypack.dev/@tiptap-es5/starter-kit?min";
      const editor = new Editor({
        element: document.querySelector(".element"),
        extensions: [StarterKit],
        content: "<p>Hello World!</p>"
      });
    </script>
  </body>
</html>
```

You should now see tiptap in your browser. Time to give yourself a pat on the back! :)
