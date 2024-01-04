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
    constructor({selector,counterDefault=0 , counterName}) {
        const parent = document.querySelector(selector);
        this.counterActual = counterDefault;
        this.counterName =counterName;
        this.refsCount = {

            buttonMinus: parent.querySelector('.minus'),
            buttonPlus: parent.querySelector('.plus'),
            divCount: parent.querySelector('.countNumber'),
            spanCounterItem: parent.querySelector('.counterItem')
        }
        this.updateCounter();
        this.addListeners();
    }
    updateCounter(){
        this.refsCount.divCount.textContent = this.counterActual;
        this.refsCount.spanCounterItem.textContent = this.counterName;
    }

    addListeners() {

        this.refsCount.buttonPlus.addEventListener('click', this.increments.bind(this));
        this.refsCount.buttonMinus.addEventListener('click', this.decrements.bind(this))
    }

    increments() {
        this.counterActual++
        this.updateCounter();
    };

    decrements() {
        if (this.counterActual > 0) {
            this.counterActual--
        }
        this.updateCounter();
    };
};
new Counter({selector:'#counter1',counterName:'спальни'});
new Counter({selector:'#counter2',counterName:'кровати'});
new Counter({selector:'#counter3',counterName:'ванные комнаты'});