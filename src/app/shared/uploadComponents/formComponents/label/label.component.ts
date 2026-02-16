import { Component, forwardRef, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './label.component.html',
  styleUrl: './label.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelComponent),
      multi: true,
    },
  ],
})
export class LabelComponent implements ControlValueAccessor {
  @Input() textElement?: string;
  @Input() placeholder?: string;
  @Input() type?: string;
  @Input() dataColectionName?: string;
  @Input() elementForm?: string;
  @Input() optionsForm?: any;
  @Input() requiredElement?: boolean;

  value = '' || false;
  disable = false;

  private onChange = (_: any) => {};
  private onTouched = () => {};

  // ⬇️ Angular przekazuje wartość Z FORMULARZA
  writeValue(value: any): void {
    this.value = value;
  }

  // ⬇️ Angular mówi: „jak zmieni się wartość, wołaj to”
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // ⬇️ Angular mówi: „jak pole dotknięte”
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // ⬇️ disable / enable
  setDisabledState(isDisabled: boolean): void {
    this.disable = isDisabled;
  }

  // ⬇️ użytkownik pisze → FORMULARZ dostaje wartość
  handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (this.elementForm === 'checkbox') {
      this.value = target.checked;
      this.onChange(this.value);
    } else {
      const value: any = (
        event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      ).value;

      this.value = value;
      this.onChange(value);
    }
  }

  handleBlur(): void {
    this.onTouched();
  }

  protected readonly Validators = Validators;
}
