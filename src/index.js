import './index.scss';
// const parent1 = document.querySelector('#counter1')
// let refsCount={
//
//     buttonMinus: parent1.querySelector('.minus'),
//     buttonPlus: parent1.querySelector('.plus'),
//     counterItem: 0,
//     divCount : parent1.querySelector('.countNumber')
// }
//
// refsCount.divCount.textContent=refsCount.counterItem;
// refsCount.buttonPlus.addEventListener('click',increments);
// refsCount.buttonMinus.addEventListener('click',decrements);
// function increments(){
//     refsCount.counterItem++
//     refsCount.divCount.textContent=refsCount.counterItem;
// };
// function decrements(){
//   if(refsCount.counterItem>0){
//       refsCount.counterItem--
//   }
//     refsCount.divCount.textContent=refsCount.counterItem;
// };
class Counter {
    constructor({selector,counterItem=0 }) {
        const parent = document.querySelector(selector);
        this.counterItem = counterItem;
        this.refsCount = {

            buttonMinus: parent.querySelector('.minus'),
            buttonPlus: parent.querySelector('.plus'),
            divCount: parent.querySelector('.countNumber')
        }
        this.updateCounter();
        this.addListeners();
    }
    updateCounter(){
        this.refsCount.divCount.textContent = this.counterItem;
    }

    addListeners() {

        this.refsCount.buttonPlus.addEventListener('click', this.increments.bind(this));
        this.refsCount.buttonMinus.addEventListener('click', this.decrements.bind(this))
    }

    increments() {
        this.counterItem++
        this.updateCounter();
    };

    decrements() {
        if (this.counterItem > 0) {
            this.counterItem--
        }
        this.updateCounter();
    };
};
new Counter({selector:'#counter1'});
new Counter({selector:'#counter2'});