const admiral = document.querySelector('#admiral');
const sochi = document.querySelector('#sochi');
const patriotic = document.querySelector('#patriotic');
const prev = document.querySelector('.arrow-left');
const next = document.querySelector('.arrow-right');

const city = document.querySelector("#city");
const area =document.querySelector('#area');
const time=document.querySelector('#time')

const navBarItems = document.querySelectorAll(".gallery-list-item");
const imgNode = document.querySelector(".img-block");
const dotsNode = document.querySelectorAll(".dots-img");


const images = [
    {
        title: "ROSTOV-ON-DON, ADMIRAL",
        city: "Rostov-on-Don LCD admiral",
        time: "3.5 months",
        area: "81 m2",
        img: "/img/gallery/admiral-img.png"
    },
    {
        title: "SOCHI, THIEVES",
        city: "Sochi Thieves",
        time: "4 months",
        area: "105 m2",
        img: "/img/gallery/sochi.png"
    },
    {
        title: "ROSTOV-ON-DON, PATRIOTIC",
        city: "Rostov-on-Don Patriotic",
        time: "3 months",
        area: "93 m2",
        img: "/img/gallery/patriotic.png"
    }
]

    let currentIndex = 0;
function nextItem() {
    if (currentIndex == 2) {
        currentIndex = 0;
        changeContent();
    } else {
        currentIndex++;
        changeContent();
    }
}
function prevItem() {
    if (currentIndex == 0) {
        currentIndex = 2;
        changeContent(currentIndex);
    } else {
        currentIndex--;
        changeContent(currentIndex);
    }
}

function changeContent() {
    switchDots(currentIndex)
    imgNode.style.backgroundImage = `url(${images[currentIndex].img})`
    city.textContent = images[currentIndex].city;
    area.textContent = images[currentIndex].area;
    time.textContent = images[currentIndex].time;
}
function switchDots(index) {
    dotsNode.forEach((dot, j) => {
        if (j != index) {
            dot.className = "dots-img";
        } else {
            dot.className = "dots-img active";
        }
    });
    navBarItems.forEach((item, i) => {
        if (i != index) {
            item.className = "gallery-list-item";
        } else {
            item.className = "gallery-list-item active";
        }
    })
}
function switchOnActive(elemId) {
    navBarItems.forEach((item,i) => {
        if (!item.id.includes(elemId)) {
            item.className = "gallery-list-item";
        } else {
            currentIndex = i;
            item.className = "gallery-list-item active";
            changeContent();
        }
    });
}

sochi.addEventListener('click', switchOnActive.bind(sochi, sochi.id));
admiral.addEventListener('click', switchOnActive.bind(admiral, admiral.id));
patriotic.addEventListener('click', switchOnActive.bind(patriotic, patriotic.id));
next.addEventListener('click', nextItem);
prev.addEventListener('click', prevItem);
dotsNode.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        changeContent();
    });
})
