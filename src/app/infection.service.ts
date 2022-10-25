import { Injectable } from '@angular/core';
import { IInfectionData } from './iinfection-data';
import { RandomGeneratorHelper } from './random-generator-helper';

@Injectable({
  providedIn: 'root'
})
export class InfectionService {

  constructor() { }

  getInfectionData(days: number): IInfectionData[] {
    return this.generateData(days);
  }

  private generateData(days: number): IInfectionData[] {
    const result: IInfectionData[] = [];

    for (let index = 0; index < days; index++) {
      result.push({
        SamplingNumber: RandomGeneratorHelper.GetRandomInteger(10000),
        InpatientNumber: RandomGeneratorHelper.GetRandomInteger(10000),
        Date: RandomGeneratorHelper.GetPastDate(index)
      });
    }

    return result;
  }
}
