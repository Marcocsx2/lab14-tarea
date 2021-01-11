import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dinero = 1500.0;
  object: object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  decimal = 12345.4567835456;

  percent = 1.5647;

  texto = 'TexTo De PrUeBa';

  collection = ['a', 'b', 'c', 'd', 'e', 'f'];

  today: number = Date.now();

  key: { [key: number]: string } = { 2: 'foo', 1: 'bar' };
  map = new Map([[2, 'foo'], [1, 'bar']]);
}
