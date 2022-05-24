const btn_menu = document.querySelector('.menu-mobile-icon');
const btn_menu_x = document.querySelector('.menu-exit-mobile-icon');
const nav = document.querySelector('.nav-container');
const li_item = document.querySelectorAll('.li-item');

btn_menu.addEventListener('click', ()=>{
    nav.classList.add('show-nav');
    nav.classList.remove('hide-nav');
    btn_menu.style.display = "none";
    btn_menu_x.style.display = "block";
})

btn_menu_x.addEventListener('click', ()=>{
    nav.classList.remove('show-nav');
    nav.classList.add('hide-nav');
    btn_menu.style.display = "block";
    btn_menu_x.style.display = "none";
});

li_item.forEach(item => {
    item.addEventListener('click', ()=>{
        nav.classList.add('hide-nav');
        btn_menu.style.display = "block";
        btn_menu_x.style.display = "none";
    })
})



// const modifyClass = (boolean) => {
//     if (boolean) {
//         nav.classList.remove('show-nav');
//         nav.classList.add('hide-nav');
//     }else{
//         nav.classList.add('show-nav');
//         nav.classList.remove('hide-nav');
//     }
// }



btn_menu.addEventListener