import './index.scss';
const parent1 = document.querySelector('#counter1')
let refsCount={

    buttonMinus: parent1.querySelector('.minus'),
    buttonPlus: parent1.querySelector('.plus'),
    counterItem: 0,
    divCount : parent1.querySelector('.countNumber')
}

refsCount.divCount.textContent=refsCount.counterItem;
refsCount.buttonPlus.addEventListener('click',increments);
refsCount.buttonMinus.addEventListener('click',decrements);
function increments(){
    refsCount.counterItem++
    refsCount.divCount.textContent=refsCount.counterItem;
};
function decrements(){
  if(refsCount.counterItem>0){
      refsCount.counterItem--
  }
    refsCount.divCount.textContent=refsCount.counterItem;
};
