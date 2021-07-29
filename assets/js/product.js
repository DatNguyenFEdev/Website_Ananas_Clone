// ===================click favourite-product=====================
var btnHeart = document.querySelectorAll('.btn-favourite img');
var urlClicked = './assets/images-product/list-product/heart-active.png';
var urlClick = './assets/images-product/list-product/heart.png';
btnHeart.forEach(element => {
var result = 'false';

    element.onclick= function() {
        if(result ==='false') {
            element.src = urlClicked;
            result = 'true';
        }
        else {
            element.src = urlClick;
            result = "false"; 
        }
    }
});

var hamburgerMenu = document.querySelector('.btn-bar-menu');
var menuMobile = document.querySelector('.menu-mobile');

var toggle = 'false'; 
hamburgerMenu.onclick = function() {
        if(toggle ==='false') {
            menuMobile.style.display = "block";
            toggle = 'true';
        }
        else {
            menuMobile.style.display = "none";
            toggle = "false"; 
        }
    }

// $('.btn-favourite img').click(function() {
//     $(this).css('src', './assets/images-product/list-product/heart.png');
// })
// ===============================change img when hover img-product================================
// var listProduct = document.querySelectorAll('.product');
// var listImg = document.querySelectorAll('.product img');
// console.log(listImg);
// var imgCurrent = "./assets/images-product/list-product/urbas-borderless-lowtop/anh2.jpg";
// var imgHover = "./assets/images-product/list-product/urbas-borderless-lowtop/anh1.jpeg";
// listProduct.forEach(product => {
//     product.addEventListener('mouseover', function() {
//         listImg.forEach(img=> {
//             img.target.src = imgHover;
//         })
//     })
// })
// listProduct.forEach(product => {
//     product.addEventListener('mouseout', function() {
//         listImg.forEach(img=> {
//             img.src = imgCurrent;
//         })
//     })
// })

// ================================click menu side-bar===================
// var nav = document.querySelectorAll('.nav');
// var titleNav = document.querySelectorAll('.nav >h4');
// var inforNav = document.querySelectorAll('.nav >ul');
// titleNav.forEach(function(title,index) {
//     // title.index.onclick= function() {
//     //     console.log('ghyugf');
//     // }
//     console.log(title);
// }
// )
// ===================================nav-product========================================

$(document).ready(function(){

    $('.nav >h4').click(function() {
        $(this).next('.nav >ul').slideToggle();
    });

});

// ============================nav-detail-product----------------------------------
$(document).ready(function(){
    $('.list-nav h4').click(function() {
        $(this).next('.item >div').slideToggle();
        // $('.list-nav h4::before').css('background-image','url(' + images-product/arrows/icon_up_orange.png + ')' );
    });

});
// =============change view image=========================
var viewImage = document.querySelector('.view-img >div img');
var listImage = document.querySelectorAll('.view-img >ul >li img');

function changeImage(img) {
    var src = img.src;
    viewImage.src = src;
}


// ==============================================change when hover img===============================
