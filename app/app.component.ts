import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <!-- Your UI components go here -->
    <Image src="~/images/apple.jpg"></Image>
  `,
  styles: [`
  @keyframes spin {
      from { transform: rotate(0); } to { transform: rotate(360);}
    }
    Image {
      animation-name: spin; animation-duration : 15s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `
  ]
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor () {
    console.log('Hello World');
    console.dir({
      type: "Apple",
      color: "Red"
    })
  }
}
