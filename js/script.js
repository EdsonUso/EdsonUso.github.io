const envelope = document.getElementById('envelope');
const front = document.getElementById('front');
const card = document.getElementById('card');

let isOpen = false;

envelope.addEventListener('click', ()=>{
    isOpen = !isOpen;
    if(isOpen){ 

        envelope.classList.add('open') 
        front.classList.add('open')
        card.classList.add('open')

    }else{
        envelope.classList.remove('open');
        front.classList.remove('open');
        card.classList.remove('open')
    }
}
)