

function IMAGE1() {
    var m1=document.getElementById("im1'")
var m2 = document.getElementById("im2'")
var m3 = document.getElementById("im3'")
var m4 = document.getElementById("im4'")
    m1.style.display ='block'
     m2.style.display ='none'
      m3.style.display ='none'
       m4.style.display ='none'
}
function IMAGE2() {
    var m1=document.getElementById("im1'")
var m2 = document.getElementById("im2'")
var m3 = document.getElementById("im3'")
var m4 = document.getElementById("im4'")
    m1.style.display ='none'
     m2.style.display ='block'
      m3.style.display ='none'
       m4.style.display ='none'
}
function IMAGE3() {
    var m1=document.getElementById("im1'")
var m2 = document.getElementById("im2'")
var m3 = document.getElementById("im3'")
var m4 = document.getElementById("im4'")
    m1.style.display ='none'
     m2.style.display ='none'
      m3.style.display ='block'
       m4.style.display ='none'
}
function IMAGE4() {
    var m1=document.getElementById("im1'")
var m2 = document.getElementById("im2'")
var m3 = document.getElementById("im3'")
var m4 = document.getElementById("im4'")
    m1.style.display ='none'
     m2.style.display ='none'
      m3.style.display ='none'
       m4.style.display ='block'
}
 var m11 = document.getElementById('im1')
 m11.addEventListener('click',IMAGE1)
 var m22 = document.getElementById('im2')
 m22.addEventListener('click',IMAGE2)
 var m33 = document.getElementById('im3')
  m33.addEventListener('click',IMAGE3)
var m44 = document.getElementById('im4')
m44.addEventListener('click',IMAGE4)


var but1 = Document.getElementById('but1')
var but2 = Document.getElementById('but2')

function addition() {
    let i = 0
    var cont = document.getElementById('cont')
    i++
    cont.textContent = i
}
but2.addEventListener('click',addition)
