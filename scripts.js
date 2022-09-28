const gridBox = document.querySelector('#grid-container');

function getArea() {
    const area = document.querySelector('#size').value;
    return area;
};

const gen = document.querySelector('.gen');
gen.addEventListener('click', build);


function build() {
    gridBox.style.cssText += `grid-template-columns: repeat(${getArea()}, 1fr);
    grid-template-rows: repeat(${getArea()}, 1fr);`;
    for (i = 0; i < (getArea() ** 2); i++) {
        const pix = document.createElement('div');
        pix.classList.toggle('pix');
        pix.addEventListener('mouseover', draw, {once: true});
        gridBox.appendChild(pix);
    };
}





function draw(pix) {
        pix.target.classList.toggle('drawn');
        pix.target.stopPropagation();
};

