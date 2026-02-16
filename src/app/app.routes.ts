import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { GraphicsComponent } from './features/graphics/graphics.component';
import { MarkingWarehouseComponent } from './features/marking-warehouse/marking-warehouse.component';
import { DroneServicesComponent } from './features/drone-services/drone-services.component';
import { PrintCompaniesComponent } from './features/print-companies/print-companies.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { RecommendationsComponent } from './features/recommendations/recommendations.component';
import { ContactComponent } from './features/contact/contact.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'graphics', component: GraphicsComponent },
  { path: 'marking-warehouse', component: MarkingWarehouseComponent },
  { path: 'drone-services', component: DroneServicesComponent },
  { path: 'print-companes', component: PrintCompaniesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' },
];
