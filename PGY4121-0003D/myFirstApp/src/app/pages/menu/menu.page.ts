import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard , AnimationController, MenuController} from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit, OnDestroy {

  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;
  private animation!: Animation;

  menuArray:Menu[]=[];
  loading:boolean = true;

  constructor(
    private router:Router,
    private animationCtrl: AnimationController,
    private helper:HelperService,
    private menuCtrl:MenuController,
    private auth:AngularFireAuth
    ) { }


    async dispositivo(){
      const device = await   Device.getInfo();
      console.log("Información",device);
      await this.helper.showToast("Su dispositivo es: " + device.model);
    }

    perfil(){
      this.router.navigateByUrl('perfil'); 
    }


    cerrarMenu(){
      this.menuCtrl.close();
    }

    toggle(){
      this.menuCtrl.toggle();
    }



    simularCargaMenu = () => {
      this.loading = false;
    }





    cargarMenu(){
      var par = 456;
      this.menuArray.push(
        { 
          id:1,
          titulo:"Menú uno",
          url:"/" + par + "/menu-uno",
          icono:"desktop-outline",
        },
        { 
          id:2,
          titulo:"Menú dos",
          url:"/menu-dos",
          icono:"partly-sunny-outline",
          disabled:true
        },
      );
    }
    

   



    ngAfterViewInit() {
      this.animation = this.animationCtrl
        .create()
        .addElement(document.querySelectorAll(".cardTwo"))
        .duration(1500)
        .iterations(Infinity)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.2');
    }


    
    play(){
      this.animation.play();
    }

    pause(){
      this.animation.pause();
    }

    stop(){
      this.animation.stop();
    }



  ngOnDestroy(): void {
    console.log("Destruyendo la vista");
  }

  ngOnInit() {
    this.cargarMenu();
    console.table(this.menuArray);
    console.error("Soy un error!!!!")    
    console.log("inicio del componente");
    setTimeout(this.simularCargaMenu,3000);
    this.dispositivo();
  }

  ionViewWillEnter(){
    console.log("Entrando a la vista");
  }

  ionViewDidEnter(){
    console.log("Vista cargada");
  }

  ionViewWillLeave(){
    console.log("Abandonando la vista");
  }

  ionViewDidLeave(){
    console.log("Abandonó la vista");
    this.menuCtrl.close();
  }




  async logOut(){
    //
    var confirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar");
    if (confirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login");
    }
  }


  menuUno(){
    var parametroN1 = 123456;
    this.router.navigateByUrl(parametroN1 + "/menu-uno");
  }

  menuDos(){
    var nom = "pgy4121";
    this.router.navigateByUrl("menu-dos");
  }

}
