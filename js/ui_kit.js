//slider

const img = document.querySelectorAll('.slider_content');
const dots = document.querySelectorAll('.sl_sw_cmn');
// Создадим массив всех изображений
// Создаем текущий индекс
let currentIndex = 0;

// Функция смены индекса у dots
function changeIndex(ind) {
    //Получаем индекс 
    currentIndex = ind;
    // Произвести процесс смены слайдов
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    // дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (currentIndex >= img.length) {
        // Получаем первый элемент путем обнуления
        currentIndex = 0;
    } else if (currentIndex < 0) {
        // Получаем последний элемент
        currentIndex = img.length - 1;
    }
    slide(currentIndex);
}

function slide(index) {
    img.forEach(img_c => {
        img_c.className = "slider_content slide_hide";
    });
    img[index].className = "slider_content slide_active";
    updateDots(index);
}
// Активный статус 
function updateDots(index) {
    for (let dot of dots) {
        dot.className = 'slide_switcher';
    }
    dots[index].className = 'slide_switcher_active';
}
//Саму функцию нужно повесить на кнопки при событии клика
const btnLeft = document.querySelector('.ar_left');
const btnRight = document.querySelector('.ar_right');

btnLeft.addEventListener('click', () => {
    nextIndex(-1)
});
btnRight.addEventListener('click', () => {
    nextIndex(1)
});
for (let dot of dots) {
    dot.addEventListener('click', function (event) {
        // перебираем все dot и узнаем на какую именно кликнули
        for (let i = 0; i < dots.length + 1; i++) {
            if (dot == dots[i]) {
                changeIndex(i);
            }
        }
    });
}

// tabs
document.querySelectorAll(".sc2_center").forEach(tab => {
    tab.querySelectorAll(".tabs_btn").forEach(tab_btn => {
        const hide_anim = [
            { opacity: "1" },
            { opacity: "0" },
        ];
        const show_anim = [
            { opacity: "0" },
            { opacity: "1" },
        ];
        const anim_t = 200;
        tab_btn.onclick = function e() {
            tab.querySelectorAll(".tabs_btn").forEach(tab_btn2 => {
                tab_btn2.className = "category tabs_btn";
            });
            tab_btn.className = "ct_active tabs_btn";
            tab.querySelectorAll(".sec_tab_content").forEach(tab_p => {

                tab_p.animate(hide_anim, anim_t);
                setTimeout(function e() {
                    tab_p.className = "sec_tab_content tab_hide";
                }, 200);
            });
            setTimeout(function e() {
                tab.querySelectorAll(".sec_tab_content")[Number(tab_btn.getAttribute("data-slide")) - 1].animate(show_anim, anim_t);
                tab.querySelectorAll(".sec_tab_content")[Number(tab_btn.getAttribute("data-slide")) - 1].className = "sec_tab_content";
            }, 200);

        }
    });
});

// category

document.querySelectorAll(".sc3_left").forEach(tab => {
    tab.querySelectorAll(".tabs_btn").forEach(tab_btn => {
        tab_btn.onclick = function e() {
            tab.querySelectorAll(".tabs_btn").forEach(tab_btn2 => {
                tab_btn2.className = "category tabs_btn";
            });
            tab_btn.className = "ct_active tabs_btn";
            tab.querySelectorAll(".ctg_block").forEach(tab_p => {
                if (tab_p.getAttribute("data-to-ct") == tab_btn.getAttribute("data-ct") || tab_btn.getAttribute("data-ct") == 1) {
                    tab_p.className = "ctg_block";
                    const hide_anim = [
                        { opacity: "1" },
                        { opacity: "0" },
                    ];
                    const show_anim = [
                        { opacity: "0" },
                        { opacity: "1" },
                    ];
                    const anim_t = 200;
                    tab_p.animate(show_anim, anim_t);
                } else {
                    tab_p.className = "ctg_block tab_hide";
                    const hide_anim = [
                        { opacity: "1" },
                        { opacity: "0" },
                    ];
                    const show_anim = [
                        { opacity: "0" },
                        { opacity: "1" },
                    ];
                    const anim_t = 200;
                    tab_p.animate(hide_anim, anim_t);
                }
            });

        }
    });
});

//modal

document.querySelectorAll(".btlb").forEach(btn => {
    btn.onclick = function e() {
        let modal = document.querySelector(".modal_w");
        if (modal.classList.contains("modal_closed")) {
            modal.className = "modal modal_w";
        } else {
            modal.className = "modal_closed modal_w";
        }
    }
});

document.querySelector(".btlb2").onclick = function e() {
    document.querySelector(".modal_w").className = "modal_closed modal_w";
}

document.querySelectorAll(".ac_block").forEach(accordion => {
    accordion.onclick = function e() {
        let ac_ad = accordion.querySelector(".ac_add");
        ac_ad.classList.toggle('ac_hide')
    }

});

document.querySelector(".header_icon3").onclick = function e() {
    document.querySelector(".links_box").classList.toggle("links_box_show");
}