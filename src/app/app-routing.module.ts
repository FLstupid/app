import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageAdminPage } from './pages/admin-page/admin-page.admin-page';
import { CustomerReviewTemplateComponent } from './pages/customer-review-template/customer-review-template.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { LoginComponent } from './pages/login/login.component';
import { MiddleDivComponent } from './pages/middle-div/middle-div.component';
import { MovieShowSelectComponent } from './pages/movie-show-select/movie-show-select.component';
import { MovieSingleComponent } from './pages/movie-single/movie-single.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: 'movie-single/:movieId',
    component: MovieSingleComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'seatselection',
    component: SeatSelectionComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'shows',
    component: MovieShowSelectComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'dashboard',
    component: MiddleDivComponent,
    data: { title: 'Dashboard' },
  },
  {
    path: 'payment',
    component: PaymentComponent,
    data: { title: 'Payment Form' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login ' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { title: 'Sign up' },
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    data: { title: 'Forgot password' },
  },
  {
    path: 'resetpassword/:token',
    component: ResetPasswordComponent,
    data: { title: 'Reset password' },
  },
  {
    path: 'customerreview',
    component: CustomerReviewTemplateComponent,
    data: { title: 'Forgot password' },
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'orderhistory',
    component: OrderHistoryComponent,
    data: { title: 'Order History ' },
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    data: { title: 'User Profile' },
  },
  {
    path: 'user-review-list',
    component: ReviewListComponent,
    data: { title: 'User Review List' },
  },
  {
    path: 'admin-page',
    component: AdminPageAdminPage,
    data: { title: 'Admin menu' },
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
