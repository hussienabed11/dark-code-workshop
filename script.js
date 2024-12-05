document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
  offset: 200,           // المسافة التي يتحرك فيها العنصر
  delay: 100,            // تأخير بداية الأنميشن
  duration: 1000,        // مدة الأنميشن
  easing: 'ease-out-quint', // نوع الإنتقال لجعل الأنميشن أكثر سلاسة
  once: false,           // إعادة الأنميشن مرة أخرى عند التمرير
  mirror: true,          // تفعيل الأنميشن عند السكرول في كلا الاتجاهين
  anchorPlacement: 'top-bottom', // تحديد مكان ظهور الأنميشن
});

  });
window.addEventListener('scroll', () => {
AOS.refresh(); // إعادة تفعيل الأنميشن بعد كل سكرول
});


// change products
var MainImg=document.getElementById("mainImg");
var smallimg =document.getElementsByClassName("small-img");

smallimg[0].onclick =function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick =function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick =function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick =function(){
    MainImg.src = smallimg[3].src;
}




// open&close in mobile and tap
const bar= document.getElementById("bar");
const close= document.getElementById("close");
const nav= document.getElementById("navbar");

if (bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
}
if (close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
}

