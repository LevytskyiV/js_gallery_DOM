"use strict";
document.getElementById("thumbs").addEventListener("click", function(x) {
    x.preventDefault();
    const target = x.target;
    if (target.tagName === "IMG") document.getElementById("largeImg").src = target.parentElement.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
