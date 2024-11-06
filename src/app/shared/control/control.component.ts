import {
  AfterContentInit, afterNextRender, afterRender,
  Component, contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';


@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,//to activate the use of css design for inputs and textarea
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onclick() {
  // console.log('clicked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement  | HTMLTextAreaElement>>('input');
  onClick() {
    console.log('clicked');
    console.log(this.el);
    console.log(this.control);
  }

  constructor() {
    //the both will be considered for the entire application
    afterRender(() => {
      console.log('afterRender');//that will be called whenever something changed in the website
    });
    afterNextRender(() => {
      console.log('afterNextRender');//will only be triggered for the next change
    });
  }

  ngAfterContentInit() {
    //will be considered just for the content of this component
  }
}
