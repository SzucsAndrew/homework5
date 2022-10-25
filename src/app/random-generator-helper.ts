export class RandomGeneratorHelper {
    static GetRandomInteger(max: number): number {
        return Math.floor(1 + Math.random() * max);
    }

    static GetPastDate(backDays: number): Date {
        const date = new Date();
        date.setDate(date.getDate() - backDays);

        return date;
    }

    static GetRandomNewInfectedPatients(samplingNumber: number): number {
        let maxNumber = samplingNumber * 5 / 100;
        if (maxNumber > 500) {
            maxNumber = 500;
        }
        
        return this.GetRandomInteger(maxNumber);
    }
}
