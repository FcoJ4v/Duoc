import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InformacionPage } from 'src/app/modals/informacion/informacion.page';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu-uno',
  templateUrl: './menu-uno.page.html',
  styleUrls: ['./menu-uno.page.scss'],
})
export class MenuUnoPage implements OnInit {

  parametronumeroUno:number | undefined;

  constructor(private activatedRoute:ActivatedRoute,
              private helper:HelperService
    ) { }

  ngOnInit() {
    this.parametronumeroUno = this.activatedRoute.snapshot.params['num'];
    console.log("parametro: ", this.parametronumeroUno);
    
  }

  modal(){
    var info =[];
    info.push(
      {
        modelo:"v16",
        patente:"wc-8054",
        anio:"2005",
        color:"negro",
        marca:"Nissan"
      }
      );

      const parametros = {dataModal:info};
    this.helper.showModal(InformacionPage,parametros,true);
  }

}
