import { Component } from '@angular/core';

interface Rank{
  value:string,
  viewValue:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-examples';
  name: string;
  ranks: Rank[] = [{value:'first',viewValue:'First'},
  {value:'second',viewValue:'Second'},
  {value:'third',viewValue:'Third'},
  {value:'fourth',viewValue:'Fourth'},
  {value:'other',viewValue:'Other'}];
  selected: string = 'other';
  public submit(name){
    console.log('Clicked '+name+' button');
  }
}
