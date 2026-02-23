import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../envirpments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApibackandService {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private http: HttpClient) {}

  getDataSlider(): Observable<any> {
    return this.http.get(enviroment.apiUrl + '/api/fora-ws-sliders?populate=*');
  }

  getSVGIcon(): Observable<any> {
    return this.http.get(enviroment.apiUrl + '/api/fora-ws-svg-logos?populate=*');
  }

  sendContactForm(payload: any): Observable<any> {
    return this.http.post(enviroment.apiUrl + '/api/fora-ws-contacts', payload);
  }

  getPrivatyPolicy(): Observable<any> {
    return this.http.get(
      enviroment.apiUrl + '/api/fora-ws-privacy-policies' + `?filters[isActive][$eq]=true`,
    );
  }

  getHeroComponentData(namePage:any): Observable<any> {
    return this.http.get(enviroment.apiUrl + `/api/fora-ws-hero-section-modes?filters[page_name][$eq]=`+namePage+`&populate=*`);
  }

  getGraphicElements():Observable<any>{
    return this.http.get(enviroment.apiUrl  +
      '/api/fora-ws-graphic-pages?populate=*');
  }

  informationBackendMail(orderId: number) {
    return this.http.post(enviroment.backendMailerURL, { orderId });
  }
}
