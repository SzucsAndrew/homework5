import { Pipe, PipeTransform } from '@angular/core';
import { IInfectionData } from './iinfection-data';
import { RandomGeneratorHelper } from './random-generator-helper';

@Pipe({
  name: 'displayData'
})
export class DisplayDataPipe implements PipeTransform {

  transform(infectionData: IInfectionData, iWantTheThruth: boolean): string {
    let samplingNumber = infectionData.SamplingNumber;
    let inpatient = infectionData.InpatientNumber;
    let newInfectedPatient = null;

    if (!iWantTheThruth) {
      samplingNumber *= 2;
      inpatient = Math.floor(inpatient / 3);
      newInfectedPatient = RandomGeneratorHelper.GetRandomNewInfectedPatients(samplingNumber);
    }

    return `A mintavételek száma ${samplingNumber} 
    , az új fertözöttek száma ${newInfectedPatient ?? 'ismeretlen'}
    és a korházban lévő betegek száma pedig ${inpatient}${iWantTheThruth ? '.' : ', ahol mindannyian oltatlan idős krónikus beteg.'}`;
  }
}
