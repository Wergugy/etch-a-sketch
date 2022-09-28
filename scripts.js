function getArea() {
    const area = document.querySelector('#size').value;
    return area;
};

function build() {
    if ((getArea()) > 100) {
        warn.textContent = 'Pick a number less than 100!!!';
        document.querySelector('body').insertBefore(warn, gridBox);
    }
    else {
        gridBox.style.cssText += `grid-template-columns: repeat(${getArea()}, 1fr);
            grid-template-rows: repeat(${getArea()}, 1fr);`;
        warn.textContent = '';
        for (i = 0; i < (getArea() ** 2); i++) {
            const pix = document.createElement('div');
            pix.classList.toggle('pix');
            pix.addEventListener('mouseover', draw, { once: true });
            gridBox.appendChild(pix);
        };
    }
}

function draw(pix) {
    pix.target.classList.toggle('drawn');
};

function reset() {
    document.querySelectorAll('.pix').forEach((pix) => {
        pix.parentNode.removeChild(pix);
    });
    const input = document.querySelector('#size');
    input.focus();
    input.value = null;
}

const gen = document.querySelector('.gen');
gen.addEventListener('click', build, { capture: true });

const gridBox = document.querySelector('#grid-container');

document.querySelector('.res').addEventListener('click', reset);
const warn = document.createElement('span');