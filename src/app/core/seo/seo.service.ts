import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {Meta, Title} from '@angular/platform-browser';
import {SeoData} from './seo.model';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private defaultSeo: SeoData = {
    title: 'Fora Web Services',
    description: 'Fora Web Services',
    robots: 'index, follow',
  }

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
    ) { }

  update(seo?:SeoData) : void {

    const finalSeo = {...this.defaultSeo, ...seo};

    this.title.setTitle(finalSeo.title);

    this.meta.updateTag({name: 'description', content: finalSeo.description});

    this.meta.updateTag({name: 'robots', content: finalSeo.robots ?? 'index, follow'})

    if (finalSeo.image) {
      this.meta.updateTag({name: 'image', content: finalSeo.image});
    }

    if(finalSeo.canonical) {
      this.setCanonical(finalSeo.canonical);
    }
  }

  private setCanonical(url: string) {
    let link: HTMLLinkElement | null =
      this.document.querySelector('link[rel="canonical"]');

    if(!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
    }

}
