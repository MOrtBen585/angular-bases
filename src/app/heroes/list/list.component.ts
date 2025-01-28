import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Superman', 'Hulk', 'IronMan'];
  public deletedHero?: string = '';

  removeLastHero(): void {
    const delHero = this.heroes.pop();
    this.deletedHero = delHero;
  
  }

}
