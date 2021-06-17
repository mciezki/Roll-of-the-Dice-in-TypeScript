class RollOfTheBones {
    private readonly btns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');
    private readonly resultHolder: NodeListOf<HTMLDivElement> = document.querySelectorAll('.result');
    private readonly sum: HTMLParagraphElement | null = document.querySelector('.sum');
    private readonly last: HTMLSpanElement | null = document.querySelector('.last');
    private readonly clicker: HTMLSpanElement | null = document.querySelector('.click');
    private readonly refresh: HTMLParagraphElement | null = document.querySelector('.refresh');
    private readonly lastThrow: number[] = [];
    private clicks: number = 0;
    private sumUp: number = 0;

    constructor() {
        this.clicker!.textContent = String(this.clicks);

        this.refresh?.addEventListener('click', this.refreshRolls);

        this.btns.forEach((btn, index) => {
            btn.addEventListener('click', (e) => this.letsRoll(e, index));
        })
    }

    private refreshRolls = (): void => {
        this.resultHolder.forEach(result => {
            result.textContent = '';
        });
        this.clicker!.textContent = '0';
        this.sum!.textContent = '-';
        this.last!.textContent = '-';
        this.clicks = 0;
        this.sumUp = 0;
        this.lastThrow.splice(0);
    }

    private normalWeightOfResult = (): void => {
        this.resultHolder.forEach(result => {
            result.style.fontWeight = 'normal';
            result.style.color = 'white';
        })
    };

    private interfaceCalculations = (result: number): void => {
        this.clicker!.textContent = String(++this.clicks);
        this.sum!.textContent = String(this.sumUp += result);
        this.lastThrow.push(result);

        if (this.lastThrow[this.lastThrow.length - 2] === undefined) this.last!.textContent = '-';
        else this.last!.textContent = String(this.lastThrow[this.lastThrow.length - 2]);
    }

    private letsRoll = (e: Event, id: number): void => {
        const rollNumber: number = Number((e.target as Element).id);
        const result: number = Math.floor((Math.random() * rollNumber) + 1);

        this.normalWeightOfResult();
        this.resultHolder[id].textContent = String(result);
        this.resultHolder[id].style.fontWeight = 'bold';
        this.resultHolder[id].style.color = 'yellow';
        this.interfaceCalculations(result);
    }
};

const start = new RollOfTheBones();
