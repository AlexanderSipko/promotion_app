import { makeAutoObservable } from 'mobx'

class ProbabilityCalculator {
    totalEvents = 0; // Общее количество событий
    favorableEvents = 0; // Количество благоприятных событий
    result = 0
    isWrite = false
    history = []

    constructor() {
        makeAutoObservable(this);
    }

    addTotalEvents(totalEvents) {
        this.totalEvents = totalEvents
        this.calculateProbability()
    }

    addFavorableEvents(favorableEvents) {
        this.favorableEvents = favorableEvents
        this.calculateProbability()
    }

    calculateProbability() {
        this.result = this.totalEvents > 0 ? this.favorableEvents / this.totalEvents : 0;
        this.isWrite = this.result > 0
    }

    reset() {
        this.totalEvents = 0; // Сброс общего количества событий
        this.favorableEvents = 0; // Сброс количества благоприятных событий
        this.result = 0
        this.history = []
    }

    save() {
        if (this.isWrite) {
            this.history.push({
                'totalEvents': this.totalEvents,
                'favorableEvents': this.favorableEvents,
                'result': this.result
            })
            this.isWrite = false
        }
    }
}

const probabilityCalculator = new ProbabilityCalculator();
export default probabilityCalculator;