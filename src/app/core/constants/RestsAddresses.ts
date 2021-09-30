import { PaymentGetwayComponent } from './../../reservation/payment-getway/payment-getway.component';
export class RestAddresses {
    static readonly baseUrl = 'http://185.8.173.201/';
    // static readonly baseUrl = 'localhost:80/';
    // Home
    static readonly GET_BEST_ACCOMMODATIONS = RestAddresses.baseUrl + "Home/GetBestAccommodations";
    static readonly GET_BEST_EXPRIENCE = RestAddresses.baseUrl + "Home/GetBestExperiences";
    static readonly GET_Video = RestAddresses.baseUrl + "Home/GetVideo";


    // Login
    static readonly LOGIN = RestAddresses.baseUrl + "Account/Login";

    // Recover Password

    static readonly RECOVERY_TOKEN = RestAddresses.baseUrl + "Account/PhoneRecoveryToken";
    static readonly CONFIRM_RECOVERY_PASSWORD = RestAddresses.baseUrl + "Account/ConfirmRecoveryPassword";

    // Sign up

    static readonly SIGN_UP = RestAddresses.baseUrl + "Account/SignUp";
    static readonly CONFIRM_PHONE_NUMBER = RestAddresses.baseUrl + "Account/ConfirmPhoneNumber";
    static readonly REGISTER = RestAddresses.baseUrl + "Account/Register";


    // Acount Profile

    static readonly PROFILE = RestAddresses.baseUrl + "Account/Profile";
    // filters
    static readonly GETFILTERS = RestAddresses.baseUrl + "Accommodation/GetFilters/getFilters";
    // search location
    static readonly GET_LOCATION = RestAddresses.baseUrl + "Home/GetLocations";
    static readonly SEARCH = RestAddresses.baseUrl + "Accommodation/Search";

    // Accommodation 

    static readonly GET_ACCOMMODATION = RestAddresses.baseUrl + "Accommodation/Get/";
    static readonly GET_ACCOMMODATION_CALENDER = RestAddresses.baseUrl + "Accommodation/Calendar/";
    static readonly GET_ACCOMMODATION_REVIEW = RestAddresses.baseUrl + "Accommodation/Reviews/";
    static readonly GET_ACCOMMODATION_INVOICE = RestAddresses.baseUrl + "Accommodation/Invoice/";
    static readonly ADD_ORDER = RestAddresses.baseUrl + "Accommodation/AddOrder/";

    static readonly ADD_ORDER_ACCOMMODATION = RestAddresses.baseUrl + "Guests/Accommodations/";

    // Reservation 

    static readonly RESERVATION = RestAddresses.baseUrl + "Reservation/GetReservation";

    // Payment
    static readonly PAYMENT = RestAddresses.baseUrl + "Payment/Payrequest"

}