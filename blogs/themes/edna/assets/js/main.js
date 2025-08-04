console.log('mraow');

let lastpath, contentsize;
const blogpath = "posts";
const homepath = "blogs";
let clicked

document.addEventListener('click', function(e) {
  e = e || window.event;
  clicked = e.target || e.srcElement
  if (event.viewTransition) {
    sessionStorage.setItem('lastpath', window.location.pathname)
    path = window.location.pathname
    if (path.includes(homepath)) {
      content = document.getElementById(`outer${clicked.id}`)
      sessionStorage.setItem('contentsize', content.scrollHeight)
    }
    if (path.includes(blogpath)) {
      content = document.getElementById("content")
      sessionStorage.setItem('contentsize', content.scrollHeight)
    }
  }
  var url = event.target.href;
  window.open(url, '_self');
  event.preventDefault();
}, false);

window.addEventListener('load', (event) => {
  lastpath = sessionStorage.getItem('lastpath')
  if (lastpath == null) {
    lastpath = ""
  }
  console.log(lastpath)
  path = window.location.pathname
  if (path.includes(blogpath) && lastpath.includes(homepath)) {
    // Just entered a blog post
    contentsize = sessionStorage.getItem('contentsize')
    console.log(contentsize)
    content = document.getElementById("content")
    console.log(content)
    originalsize = content.scrollHeight
    content.style.transform = `scaleY(${contentsize / originalsize})`
    console.log(content)
    setTimeout(function() {
      content.style.transition = "all 0.5s"
      content.style["transition-timing-function"] = "cubic-bezier(0.47, 0.13, 0.31, 1.0)"
        setTimeout(function() {
          content.style.transform = "scaleY(1)"
        }, 0);
    }, 0);
    //content.style["max-height"] = "1000px"
  }
});

