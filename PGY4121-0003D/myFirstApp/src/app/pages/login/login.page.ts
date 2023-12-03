import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(
              private router:Router,
              private helperService:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth
              ) { }

  ngOnInit() {
    console.log("Resultado suma ---> ", this.helperService.sumar(50,100));
    
  }


  async login(){
    //pgy4121003d@duoc.cl
    //123456
    const loader = await this.helperService.showLoading("Cargando");
    if (this.email == "") {
      this.helperService.showAlert("Debe ingresar un email.","Error");
      loader.dismiss();
      return;
    }
    if (this.contrasena == "") {
      this.helperService.showAlert("Debe ingresar una contraseña.","Error");
      loader.dismiss();
      return;
    }

    try {
      this.storage.userCorreo = this.email;
      const req = await this.auth.signInWithEmailAndPassword(this.email,this.contrasena);
      console.log("TOKEN",await req.user?.getIdToken());
      loader.dismiss();
      await this.router.navigateByUrl('menu');
    } catch (error) {
      
    }



    
  }

}
