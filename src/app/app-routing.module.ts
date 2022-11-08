import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReviewTemplateComponent } from './pages/customer-review-template/customer-review-template.component';
import { MiddleDivComponent } from './pages/middle-div/middle-div.component';
import { MovieShowSelectComponent } from './pages/movie-show-select/movie-show-select.component';
import { MovieSingleComponent } from './pages/movie-single/movie-single.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';

const routes: Routes = [
  {
    path: 'movie-single/:movieId',
    component: MovieSingleComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'seatselection',
    component: SeatSelectionComponent,
    data: { title: 'Dashboard' }
  },
  {

    path: 'shows',
    component: MovieShowSelectComponent,
    data: { title: 'Dashboard' }
  },
  { 

    path: 'dashboard',
    component: MiddleDivComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: { title: 'Payment Form' }
  },
  {
    path: 'customerreview',
    component: CustomerReviewTemplateComponent,
    data: { title: 'Forgot password' }
  },
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'orderhistory',
    component: OrderHistoryComponent,
    data: { title: 'Order History ' }
  } ,
  {
    path: 'user-review-list',
    component: ReviewListComponent,
    data: { title: 'User Review List' }
  } ,
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
