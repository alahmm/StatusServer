import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, viewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, ticketText: string) {
    this.form?.nativeElement.reset();
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.form?.nativeElement);
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.form?.nativeElement);
  }
}
