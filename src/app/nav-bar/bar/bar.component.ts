import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  
  openNavMenu() {
    let myLinks = document.getElementById("myLinks");
    let news = document.getElementById("news");
    if (myLinks!.style.display === "block") {
      myLinks!.style.display = "none";
    } else {
      myLinks!.style.display = "block";
      news!.style.display = "none";
    }
  }

  activateNewsDisplay() {
    let news = document.getElementById("news");
    if (news?.style.display === "block") {
      news.style.display = "none";
    } else {
      news!.style.display = "block";
    }
  }

  openNav() {
    document.getElementById("mobile-menu")!.style.width = "100%";
  }

  closeNav() {
    document.getElementById("mobile-menu")!.style.width = "0%";
  }
}
