addEventListener('mousemove', function(el){
    console.log(el.clientX, el.clientY);
    document.body.style.setProperty("--x", el.clientX+'px');
    document.body.style.setProperty("--y", el.clientY+'px');

})