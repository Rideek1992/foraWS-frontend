import {Routes} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {AboutUsComponent} from './features/about-us/about-us.component';
import {GraphicsComponent} from './features/graphics/graphics.component';
import {
  MarkingWarehouseComponent
} from './features/marking-warehouse/marking-warehouse.component';
import {DroneServicesComponent} from './features/drone-services/drone-services.component';
import {
  PrintCompaniesComponent
} from './features/print-companies/print-companies.component';
import {PortfolioComponent} from './features/portfolio/portfolio.component';
import {
  RecommendationsComponent
} from './features/recommendations/recommendations.component';
import {ContactComponent} from './features/contact/contact.component';
import {PrivacyPolicyComponent} from './features/privacy-policy/privacy-policy.component';
import {DataAnalysisComponent} from './features/data-analysis/data-analysis.component';
import {
  WebsiteCreationComponent
} from './features/website-creation/website-creation.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      seo: {
        title: 'FORA Warehouse System | Oznakowanie magazynów i projekty dla logistyki',
        description: 'Kompleksowe oznakowanie magazynów, projekty graficzne, identyfikacja lokalizacji, tablice, etykiety i rozwiązania wizualne dla logistyki oraz przemysłu.',
        canonical: 'https://fora-ws.pl',
        keywords: 'oznaczenie magazynu, oznakowanie magazynów, etykiety magazynowe, znakowanie regałów, identyfikacja lokalizacji, projekty graficzne dla firm, logistyka magazynowa',
        robots: 'index, follow',
      }
    }
  },
  {
    path: 'contact', component: ContactComponent,
    data: {
      seo: {
        title: 'Kontakt | FORA Warehouse System',
        description: 'Skontaktuj się z FORA Warehouse System w sprawie oznakowania magazynów, projektów graficznych, etykiet, tablic informacyjnych i wdrożeń dla logistyki.',
        canonical: 'https://fora-ws.pl/contact',
        keywords: 'kontakt oznakowanie magazynu, kontakt projekty graficzne, FORA Warehouse System kontakt, zapytanie o ofertę oznakowania',
        robots: 'index,follow'
      }
    }
  },
  {path: 'about-us', component: AboutUsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'recommendations', component: RecommendationsComponent},
  {
    path: 'graphics', component: GraphicsComponent,
    data: {
      seo: {
        title: 'Projekty graficzne | FORA Warehouse System',
        description: 'Tworzymy profesjonalne projekty graficzne dla firm: tablice, oznaczenia, grafiki użytkowe, materiały reklamowe, identyfikację wizualną i rozwiązania dla magazynów oraz przemysłu.',
        canonical: 'https://fora-ws.pl/graphics',
        keywords: 'projekty graficzne dla firm, grafika użytkowa, projekty tablic informacyjnych, identyfikacja wizualna firmy, grafiki reklamowe, projekty dla magazynów',
        robots: 'index,follow'
      }
    }
  },
  {
    path: 'marking-warehouse', component: MarkingWarehouseComponent, data: {
      seo: {
        title: 'Znakowanie magazynów | FORA Warehouse System',
        description: 'Projektujemy i wdrażamy profesjonalne znakowanie magazynów: oznaczenia regałów, miejsc paletowych, stref, ciągów komunikacyjnych oraz systemy identyfikacji lokalizacji.',
        canonical: 'https://fora-ws.pl/marking-warehouse',
        keywords: 'znakowanie magazynów, oznakowanie regałów, oznaczenia miejsc paletowych, identyfikacja lokalizacji magazynowych, oznaczenia magazynowe, etykiety magazynowe',
        robots: 'index,follow'
      }
    }
  },
  {path: 'drone-services', component: DroneServicesComponent, data: { seo: {
        title: 'Usługi dronowe dla hal, magazynów i obiektów przemysłowych | Fora' +
          ' Warehouse System',
        description: 'Realizujemy usługi dronowe dla hal, magazynów i obiektów' +
          ' przemysłowych. Dokumentacja foto i wideo z powietrza, wizualna ocena obiektów oraz rozwój oferty o kolejne inspekcje specjalistyczne.',
        keywords: 'usługi dronowe, inspekcje dronowe, dron magazyn, dron hala,' +
          ' dokumentacja dronowa, zdjęcia z drona, wideo z drona, inspekcja dachu dronem, inspekcja elewacji dronem, dron obiekty przemysłowe',
        canonical: 'https://fora-ws.pl/drone-services',
        robots: 'index,follow'

      }}},
  {path: 'print-companes', component: PrintCompaniesComponent,
  data :{
    seo: {
      title: 'Poligrafia dla firm | Wizytówki, ulotki, etykiety i materiały drukowane | FORA',
      description: 'Projektujemy i realizujemy materiały drukowane dla firm: wizytówki, ulotki, broszury, etykiety, naklejki, tabliczki i poligrafię użytkową. Estetyczne i praktyczne rozwiązania dla biznesu.',
      keywords: 'poligrafia dla firm, materiały drukowane dla firm, wizytówki firmowe,' +
        ' ulotki reklamowe, broszury firmowe, etykiety samoprzylepne, naklejki dla firm, tabliczki informacyjne, druk reklamowy, poligrafia biznesowa, materiały marketingowe B2B, projekt i druk materiałów firmowych',
      canonical: 'https://fora-ws.pl/print-companes',
      robots: 'index,follow'
    }
  }
  },

  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'data-analytics', component: DataAnalysisComponent, data: { seo: {
        title: 'Analiza danych dla firm | Dashboardy, KPI, raporty i automatyzacja | FORA',
        description: 'Wspieramy firmy w analizie danych, tworzeniu dashboardów, raportów KPI i automatyzacji pracy z danymi. Pomagamy porządkować informacje, lepiej rozumieć procesy i podejmować trafniejsze decyzje biznesowe.',
        keywords: 'analiza danych dla firm, analiza danych, dashboardy biznesowe, dashboardy KPI,' +
          ' raporty dla firm, raportowanie danych, automatyzacja raportowania, analiza procesów, analiza biznesowa, analiza danych logistycznych, analiza danych magazynowych, KPI dla firm, Power BI, Excel analiza danych, SQL analiza danych, Python analiza danych',
        canonical: 'https://fora-ws.pl/data-analytics',
        robots: 'index,follow'
      }}},
  {path: 'web-service', component: WebsiteCreationComponent},
  {path: '**', redirectTo: ''},
];
