import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aplication';


  description = 'hello from dec';

  phonenumber = +212242525;

  imgSrc = '../assets/images/1.jpg';

  eslam = true;
  osama;
  refay;

  font = '';
  fontname = '';

 change(){
   this.eslam = !this.eslam

 }

 formadd(forminput){
   console.log(forminput);
   this.osama = forminput;
 }




 chf1(){
   this.font = "font1";
   this.fontname = "Lobster"
 }
 chf2(){
   this.font = "font2"
   this.fontname = "Wallpoet";
  }
  chf3(){
    this.font = "font3"
    this.fontname = "Shadows";
  }
  chf4(){
    this.font = "font4"
    this.fontname = "ZCOOL";
 }



}
