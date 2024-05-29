import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {

  hoverEvent( id: string, isEntering: boolean ) {
    let component = document.getElementById(id);
    component!.style.display = isEntering ? "block" : "none";
  }
  
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

  changeLang(lang: string) {
    if (lang == "ES") {
      this.enableLang("ES");
      this.disableLang("VAL");
      this.disableLang("EN");
    }
    if (lang == "VAL") {
      this.enableLang("VAL");
      this.disableLang("ES");
      this.disableLang("EN");
    }
    if (lang == "EN") {
      this.enableLang("EN");
      this.disableLang("VAL");
      this.disableLang("ES");
    }
  }

  enableLang(lang: string) {
    let div_lang = Array.prototype.slice.call(document.getElementsByClassName(lang));
    div_lang.forEach(element => {
      element.style.display = "block";
    });
    let over_lang = Array.prototype.slice.call(document.getElementsByClassName("overlay-"+lang));
    over_lang.forEach(element => {
      element.style.display = "flex";
    });
  }

  disableLang(lang: string) {
    let div_lang = Array.prototype.slice.call(document.getElementsByClassName(lang));
    div_lang.forEach(element => {
      element.style.display = "none";
    });
    let over_lang = Array.prototype.slice.call(document.getElementsByClassName("overlay-"+lang));
    over_lang.forEach(element => {
      element.style.display = "none";
    });
  }
}
