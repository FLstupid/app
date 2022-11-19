import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import {
  NgbModule,
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pages
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CustomerReviewTemplateComponent } from './pages/customer-review-template/customer-review-template.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { LoginComponent } from './pages/login/login.component';
import { FilterPipe } from './pages/middle-div/filter.pipe';
import { MiddleDivComponent } from './pages/middle-div/middle-div.component';
import { MovieShowSelectComponent } from './pages/movie-show-select/movie-show-select.component';
import { MovieSingleComponent } from './pages/movie-single/movie-single.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ReviewListComponent } from './pages/review-list/review-list.component';
import { SeatSelectionComponent } from './pages/seat-selection/seat-selection.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AdminPageAdminPage } from './pages/admin-page/admin-page.admin-page';

// Services
//* Auth
// import { LoginService } from './services/auth/login.service';
// import { SignUpService } from './services/auth/sign-up.service';
// import { ForgotPasswordService } from './services/auth/forgot-password.service';

//* Movie

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleDivComponent,
    PageNotFoundComponent,
    SeatSelectionComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    OrderHistoryComponent,
    CustomerReviewTemplateComponent,
    MovieShowSelectComponent,
    MovieSingleComponent,
    FilterPipe,
    ResetPasswordComponent,
    UserProfileComponent,
    ReviewListComponent,
    AdminPageAdminPage,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
  providers: [],
  // providers: [SignUpService, ForgotPasswordService, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
