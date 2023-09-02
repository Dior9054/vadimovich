

let open = document.querySelector('.data')
let close = document.querySelector('.data--regist--close')
let clock = document.querySelectorAll('.title--front--paragraphs--flex--btn--act.act')
let dR = document.querySelectorAll('.data--regist--title')
let git = document.querySelectorAll('.data--regist--title--text h1')
let next = document.querySelectorAll('.data--regist--title--inputs>button')
let last = document.querySelector('.data--regist--title:last-child')
let a = document.querySelector('.cupon')

clock.forEach((item) => {
    item.addEventListener("click", function () {
        open.classList.add('block')
        open.classList.remove('none')
        document.body.style.overflow = "hidden"
        a.classList.add('none')
    })
    close.addEventListener("click", function () {
        open.classList.remove('block')
        document.body.style.overflow = "auto"
        dR.forEach(item => {
            item.classList.remove('activ')
        })
        dR[0].classList.add('activ')
        a.classList.remove('none')
    })
})

git.forEach(item => {
    item.addEventListener('click', function (el) {
        for (let elem of dR) {
            if (elem.children[1].textContent == el.target.textContent) {
                elem.classList.add('activ')
            } else {
                elem.classList.remove('activ')
            }
        }
    })
})

next.forEach(item => {
    item.addEventListener('click', function (el) {
        let a = el.target.parentElement
        let b = a.parentElement
        b.classList.remove('activ')
        if (b.nextElementSibling != null) {
            b.nextElementSibling.classList.add('activ')
        } else {
            b.classList.add('activ')
        }
        last.addEventListener('click', function () {
            open.classList.add('none')
            dR.forEach(item => {
                if (item.classList.contains('activ')) {
                    item.classList.remove('activ')
                    dR[0].classList.add('activ')
                }
            })
        })
    })
})





