let btn  = document.querySelector('.btn');
let inp  = document.querySelector('.inp');
let boxs = document.querySelectorAll('.box');
let drag = null;

// -1- onclick element 
// -2- check if input have no thing or not
// -3- add input value on box
// -4- drag start and drag end
// -5- drag over and drag leave
// -6- drag dro















btn.onclick = function(){

    if(inp.value != ''){

        boxs[0].innerHTML +=`

        <p class="item" draggable="true" >${inp.value}</p>

        `
        inp.value = '';
    }
    dragFunction();
}

function dragFunction() {
    let items = document.querySelectorAll('.item');

    items.forEach( item =>{

    item.addEventListener('dragstart' , ()=>{
        drag = item ;

    item.addEventListener('dragend' , ()=>{
        drag = null ;
    })
})

boxs.forEach(box=>{
        box.addEventListener('dragover' , (e)=>{

            e.preventDefault();

            box.style.background = '#090'

            box.style.color = '#fff'
        })

        box.addEventListener('dragleave' , ()=>{

            box.style.background = '#fff'

            box.style.color = '#000'
        })

        box.addEventListener('drop' , ()=>{

            box.append(drag);

            box.style.background = '#fff'
            
            box.style.color = '#000'
        })
    })
 })
}




























































// let btn = document.querySelector(".btn");
// let inp = document.querySelector(".inp");
// let shownBox = document.querySelectorAll(".box");
// let drag = null ;



// btn.onclick = function(){
//     if(inp.value != ''){
//         shownBox[0].innerHTML += `
//         <p class="item" draggable="true">${inp.value}</p>
//         `
//         inp.value = "" ;
//     }
//     dragItem();
// }
 
// function dragItem(){
//     let items = document.querySelectorAll('.item');

//     items.forEach(item => {

//         item.addEventListener('dragstart', ()=>{
//             drag = item ;
//             item.style.opacity = '0.5';
//         })

//         item.addEventListener('dragend', ()=>{
//             drag = null;
//             item.style.opacity = '1';
//         })

//         shownBox.forEach(box=>{
//             box.addEventListener('dragover' , function(e){
//                 e.preventDefault();
//             this.style.background = "#090";
//             this.style.color = "#fff";
//             })

//             box.addEventListener('dragleave' , function(){

//                 this.style.background = "#fff";
//                 this.style.color = "#000";
//             })


//             box.addEventListener('drop' , function(){
//                 this.append(drag);
//                 this.style.background = "#fff";
//                 this.style.color = "#000";
//             })

//         })


//     })
// }







































