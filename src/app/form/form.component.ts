import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  ngOnInit() {
    console.log('render');
  }

  title = 'It is title in my variable';

  changeTitle() {
    this.title = 'HAHAHAHAHHA';
  }

  changeInput() {
    console.log(this.title);
  }
}
