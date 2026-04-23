

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {

        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);

        } else {
            pageTurn.classList.add('turn');

            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    }
});


// contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
let totalPages = pages.length;
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {

            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100)
    });
}


// back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            let pageTurnIndex = totalPages - 1 - index;
            pages[pageTurnIndex].classList.remove('turn');

            setTimeout(() => {
                pages[pageTurnIndex].style.zIndex = 10 + index;
            }, 500)
        }, (index + 1) * 200 + 100)
    })
}


// opening animation
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');


// open animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);


pages.forEach((_, index) => {
    setTimeout(() => {
        let pageTurnIndex = totalPages - 1 - index;
        pages[pageTurnIndex].classList.remove('turn');

        setTimeout(() => {
            pages[pageTurnIndex].style.zIndex = 10 + index;
        }, 500)
    }, (index + 1) * 200 + 2100)
})

const botones = document.querySelectorAll(".services-content .btn");
const cerrarBtns = document.querySelectorAll(".close");

botones.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        const overlay = this.parentElement.querySelector(".overlay");
        overlay.classList.add("active");
    });
});

cerrarBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        this.parentElement.classList.remove("active");
    });
});

// Language Toggle Logic
const langBtn = document.getElementById('lang-btn');
if (langBtn) {
    let currentLang = 'en';
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN';
        
        // Update regular text content
        document.querySelectorAll('[data-' + currentLang + ']').forEach(el => {
            el.innerHTML = el.getAttribute('data-' + currentLang);
        });

        // Update input placeholders
        document.querySelectorAll('[data-placeholder-' + currentLang + ']').forEach(el => {
            el.setAttribute('placeholder', el.getAttribute('data-placeholder-' + currentLang));
        });

        // Update input values (like submit buttons)
        document.querySelectorAll('[data-value-' + currentLang + ']').forEach(el => {
            el.setAttribute('value', el.getAttribute('data-value-' + currentLang));
        });
    });
}