import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-nabar',
  imports: [RouterModule],
  templateUrl: './nabar.component.html',
  styles: [`
    nav{
        display: flex;
        justify-content: space-around;
        background-color: #212121;
        color: white;
        padding: 10px;
    }
    nav a{
        color: white;
        text-decoration: none;
    }
    nav a.active{
        color: blue;
    }
  `],
})
export class NabarComponent {


}
