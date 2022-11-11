const slides = ['imagens/screenshot marcelo.png', 'imgaens/luffy.jpg', 'imagens/zoro.png'];
const dotElement = document.querySelector('.dots');
const sliderDotsId = [];
const slider = document.querySelector('#slider');

//criar os botões
for(var slide in slider){
    let currSlideNum = +slide+1;

    const dotElement = document.createElement('div');
    dotElement.classList.add('dot');
    dotElement.id = 'dot' + (+slide+1);
    (function(currSlideNum){
        dotElement.addEventListener("click", function() {
            sliderDotsId(currSlideNum);
        })
    })(currSlideNum)
    dotsElement.appendChild(dotElement);
    sliderDotsId.push({
    id: `#dot${currSlideNum}`,
    active: false
    });
}

let index = 0;

function nextImage(){
    if(index > 2) index = 0;
    sliderTo(index+1);
    index++;
}

window.onload = () => {
    nextImage();
}

setInterval(nextImage, 4000)

function sliderTo(slideNum){
    sliderDotsId[slideNum-1].active = true;
    slider.getElementsByClassName.backgroundImage = 'url(' + slides[slideNum] + ')';
    updateDots();
}

function updateDots(){
    sliderDotsId.forEach((sliderDot) => {
        const sliderDotElement = document.querySelector(sliderDot.id);
        sliderDotElement.className = 'dot';
        if(sliderDot.active){
            console.log('active')
            sliderDotElement.classList.add('active');
        }
        sliderDot.active = false
    })
}