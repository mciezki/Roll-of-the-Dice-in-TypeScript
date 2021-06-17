"use strict";
class RollOfTheBones {
    constructor() {
        var _a;
        this.btns = document.querySelectorAll('button');
        this.resultHolder = document.querySelectorAll('.result');
        this.sum = document.querySelector('.sum');
        this.last = document.querySelector('.last');
        this.clicker = document.querySelector('.click');
        this.refresh = document.querySelector('.refresh');
        this.lastThrow = [];
        this.clicks = 0;
        this.sumUp = 0;
        this.refreshRolls = () => {
            this.resultHolder.forEach(result => {
                result.textContent = '';
            });
            this.clicker.textContent = '0';
            this.sum.textContent = '-';
            this.last.textContent = '-';
            this.clicks = 0;
            this.sumUp = 0;
            this.lastThrow.splice(0);
        };
        this.normalWeightOfResult = () => {
            this.resultHolder.forEach(result => {
                result.style.fontWeight = 'normal';
                result.style.color = 'white';
            });
        };
        this.interfaceCalculations = (result) => {
            this.clicker.textContent = String(++this.clicks);
            this.sum.textContent = String(this.sumUp += result);
            this.lastThrow.push(result);
            if (this.lastThrow[this.lastThrow.length - 2] === undefined)
                this.last.textContent = '-';
            else
                this.last.textContent = String(this.lastThrow[this.lastThrow.length - 2]);
        };
        this.letsRoll = (e, id) => {
            const rollNumber = Number(e.target.id);
            const result = Math.floor((Math.random() * rollNumber) + 1);
            this.normalWeightOfResult();
            this.resultHolder[id].textContent = String(result);
            this.resultHolder[id].style.fontWeight = 'bold';
            this.resultHolder[id].style.color = 'yellow';
            this.interfaceCalculations(result);
        };
        this.clicker.textContent = String(this.clicks);
        (_a = this.refresh) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.refreshRolls);
        this.btns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => this.letsRoll(e, index));
        });
    }
}
;
const start = new RollOfTheBones();
