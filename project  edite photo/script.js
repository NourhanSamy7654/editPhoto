let saturate=document.getElementById("saturate");
let contrast=document.getElementById("contrast");
let brightness=document.getElementById("brightness");
let sepia=document.getElementById("sepia");
let grayscale=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let hueRotate=document.getElementById("hue-rotate");
let upload=document.getElementById("upload");
let dowload=document.getElementById("download");
let img=document.getElementById("img");

let rest=document.querySelector('span');
let imgBox=document.querySelector('.img-box');
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');


function reseValue(){
    img.style.filter='none';
    saturate.value='100'
    contrast.value='100';
    brightness.value='100';
    sepia.value='0';
    grayscale.value='0';
    blur.value='0';
}

window.onload=function(){
    dowload.style.display='none';
    rest.style.display='none';
    imgBox.style.display='none';
}

upload.onchange=function(){
    reseValue();
    dowload.style.display='block';
    rest.style.display='block';
    imgBox.style.display='block';
    let file=new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        img.src=file.result;
    }
    img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display='none'; 
    }
}
// saturate.addEventListener("input",function(){//لو عاملت بشكل ده هيلغي تاثير الباقي
//     img.style.filter=`saturate(${saturate.value}%)`;
// })
let filters=document.querySelectorAll("ul li input");
filters.forEach( filter =>{
    filter.addEventListener(`input`,function(){
        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
       grayscale(${grayscale.value})
       blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)`
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        
    })
})
dowload.onclick=function(){
    dowload.href=canvas.toDataURL();
}



