// 手機板選單
const nav_bar = document.querySelector('.nav_bar_left');
const header_menu = document.querySelector('.header_menu');
const bar = document.querySelector('.bar');
const delete_menu = document.querySelector('.delete');


function barMenu() {
    header_menu.classList.toggle('open')
    if(header_menu.classList.contains('open')) {
        bar.style.display = 'none'
        delete_menu.style.display = 'block'
    } else {
        delete_menu.style.display = 'none'
        bar.style.display = 'block'
    }
}

// 手機板登入下拉選單
const dropdown_menu = document.querySelector('.dropdown_menu');
const dropdown_arrow = document.querySelector('.dropdown_arrow');


function login() {
    dropdown_menu.classList.toggle('open')
    if(!dropdown_menu.classList.contains('open')) {
        dropdown_arrow.style.transform = 'rotate(180deg)'
    } else {
        dropdown_arrow.style.transform = 'rotate(0deg)'
    }
}

// QA常見問題下拉選單
const answer_text = document.getElementsByClassName('answer');

for(i=0; i<answer_text.length; i++) {
    answer_text[i].addEventListener('click', function(){
        this.classList.toggle('auto')
    })
}

// 客服聊天室
const chatbox = document.querySelector('.chatbox');

function chatbox_open() {
    chatbox.classList.add('open')
    chatbox.classList.remove('close')
}

function chatbox_close() {
    chatbox.classList.add('close')
    chatbox.classList.remove('open')
}
