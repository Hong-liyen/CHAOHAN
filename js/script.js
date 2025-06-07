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

// 手機板側邊選單
const bar_menu = document.querySelector('.bar_menu');
const aside_menu = document.querySelector('.aside_menu');

function menu_icon() {
    aside_menu.classList.toggle('open')
    if(aside_menu.classList.contains('open')) {
        aside_menu.style.display = 'block'
    } else {
        aside_menu.style.display = 'none'
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

// 搜尋選單
const search_box = document.querySelector('.search_box');

function searchBox() {
    search_box.classList.toggle('open')
    if(search_box.classList.contains('open')) {
        search_box.style.display = 'block'
    } else {
        search_box.style.display = 'none'
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
