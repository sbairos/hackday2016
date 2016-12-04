This is my hackathon page. Woop woop!
Final Thoughts:
---
Well, this past 9 hours didn't go overly well. My first time trying React.js and my first time trying to start a web project from scratch. At least I learned a lot. It's been so long since I last did javascript and I forgot all the frustrations of making a slight change to a js file and then having the entire site not load. Definitely one of my pet peeves of javascript.

Additionally, I ran into a ton of React discrepancies that I was not prepared for. Probably the most infuriating one was trying to figure out why my textboxes weren't working. It turns out, you NEED an onChange listener or the page won't render (as far as I can tell?). Seems so strange.

Another really tough bug was when I tried to add the add article text boxes and it just wouldn't work. Again, the page wouldn't render. The issue here was that I was trying to return two DOM objects in one return, since I figured they could both be nested in the mount. I was wrong. Looking back now, it sounds dumb but I was so lost at the time.

All in all, it was fun, I could've done a lot better if I'd known more about React. I think if I spent a few more hours with React, I'd start to really like it though!

Setup
---
```
npm install
```

Compile
---
```
npm compile
```
Usage
---
```
npm start
```
