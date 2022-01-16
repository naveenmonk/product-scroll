const imgLarge = document.getElementById('large-img');
const productImages = document.querySelectorAll('.img-small');

productImages.forEach(img => {
    img.addEventListener('click',(e)=>{
        console.log(e);
        let src = e.target.getAttribute('src');
        imgLarge.src = src;
    })
})