import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { IInfectionData } from './iinfection-data';
import { RandomGeneratorHelper } from './random-generator-helper';

@Directive({
  selector: '[appInfection]'
})
export class InfectionDirective {
  private _infectionData!: IInfectionData;
  private _newInfectionPatient!: number;

  @Input('appInfection') set infectionData(infectionData: IInfectionData) {
    this._infectionData = infectionData;
    this._newInfectionPatient
      = RandomGeneratorHelper.GetRandomNewInfectedPatients(infectionData.SamplingNumber);
      
    this.calcTextColor();
  }
  @Input() secret!: boolean;
  @Output() secretChange = new EventEmitter<boolean>();

  constructor(private element: ElementRef<HTMLElement>) { }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    this.secret = this.isSecretKey(e);
    this.calcTextColor();
    this.secretChange.emit(this.secret);
  }

  private calcTextColor() {
    let textColor = 'white';
    let backgroundColor = 'blue';

    if (!this.secret) {
      textColor = this.calcTextColorForPositiveTest();
      backgroundColor = 'white';
    }

    this.changeColors(textColor, backgroundColor);
  }

  private changeColors(textColor: string, backgroundColor: string) {
    this.element.nativeElement.style.color = textColor;
    this.element.nativeElement.style.backgroundColor = backgroundColor;
  }

  private isSecretKey(e: KeyboardEvent): boolean {
    return e.altKey && e.key == 'T';
  }

  private calcPositiveTestPercent(): number {
    return 100 * this._newInfectionPatient / this._infectionData.SamplingNumber;
  }

  private calcTextColorForPositiveTest(): string {
    return this.calcPositiveTestPercent() > 2.5 ? 'red' : 'green';
  }
}
