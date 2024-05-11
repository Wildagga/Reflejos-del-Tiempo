import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  myLinks = document.getElementById("myLinks");
  news = document.getElementById("myLinks");
  myFunction() {
    if (!this.myLinks)
      this.myLinks = document.getElementById("myLinks");
    if (!this.news)
      this.news = document.getElementById("news");
    if (this.myLinks!.style.display === "block") {
      this.myLinks!.style.display = "none";
    } else {
      this.myLinks!.style.display = "block";
      this.news!.style.display = "none";
    }
  }

  activateNewsDisplay() {
    if (!this.news) {
      this.news = document.getElementById("news");
    }
    if (this.news?.style.display === "block") {
      this.news.style.display = "none";
    } else {
      this.news!.style.display = "block";
    }
  }
}
