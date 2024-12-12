//кейсы страница blog
let blogs = document.querySelectorAll('.blog-img');

blogs.forEach(function (blog) {
    blog.addEventListener('mousemove', function (e) {
        let rect = blog.getBoundingClientRect();
        
        let mouseX = e.clientX - rect.left;
        let mouseY = e.clientY - rect.top;
        
        let tiltX = -(mouseX / rect.width - 0.5) * 20;
        let tiltY = (mouseY / rect.height - 0.5) * 20;
        blog.style.transform = 'perspective(6000px) rotateX(' + tiltY + 'deg) rotateY(' + tiltX + 'deg)';
    });

    blog.addEventListener('mouseleave', function () {
        blog.style.transition = 'all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s';
        blog.style.transform = 'perspective(6000px) rotateX(0deg) rotateY(0deg)';
    });
});