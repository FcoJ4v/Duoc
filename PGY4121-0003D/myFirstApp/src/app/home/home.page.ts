import { Component, OnInit } from '@angular/core';
/* import { ActivatedRoute } from '@angular/router'; */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  capturandoNombre:string = "";
  constructor() {}

  ngOnInit(): void {
/*     this.capturandoNombre = this.activatedRoute.snapshot.params['nombre'];
    console.log("Parametro home",this.capturandoNombre);   */  
  }

}
