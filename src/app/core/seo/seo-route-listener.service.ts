import { Injectable } from '@angular/core';
import { ActivatedRoute , NavigationEnd, Router } from '@angular/router';
import {filter} from 'rxjs/operators';
import { SeoService } from './seo.service';
import {SeoData} from './seo.model';




@Injectable({
  providedIn: 'root'
})
class SeoRouteListenerService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private seoService: SeoService,
  ) { }



  init(): void {
    this. router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
       this.updateSeoFromRoute()
      })
}
  private updateSeoFromRoute(){
    let route = this.activatedRoute.root

    while (route.firstChild){
      route = route.firstChild
    }

    const seo = route.snapshot.data['seo'] as SeoData | undefined;
    this.seoService.update(seo)
  }
}



export default SeoRouteListenerService
