import TrollyPage from '../pages/Trolly/trollyPage';
import ForgotpassPage from '../pages/auth/forgotpassPage';
import SigininPage from '../pages/auth/sigininPage';
import SignupPage from '../pages/auth/signupPage';
import SplashPage from '../pages/auth/splashPage';
import AuthorDetail from '../pages/author/authorDetail';
import AuthorPage from '../pages/author/authorPage';
import CategoryDetail from '../pages/categories/categoryDetail';
import CategoryPage from '../pages/categories/categoryPage';
import BookDetail from '../pages/details/bookDetail';
import FavoritePage from '../pages/favorite/favoritePage';
import PaymentDetail from '../pages/histories/paymentDetail';
import PaymentHistories from '../pages/histories/paymentHistories';
import HomePage from '../pages/home/homePage';
import BookList from '../pages/lists/bookList';
import NotificationDetail from '../pages/notification/notificationDetail';
import NotificationPage from '../pages/notification/notificationPage';
import PaymentPage from '../pages/payment/paymentPage';
import ProfilePage from '../pages/profile/profilePage';
import StackTab from './stackbar';
import TabBar from './tabbar';

export const stackAuthData = [
  {
    name: 'Splash',
    component: SplashPage,
  },
  {
    name: 'Signup',
    component: SignupPage,
  },
  {
    name: 'Signin',
    component: SigininPage,
  },
  {
    name: 'ForgotPass',
    component: ForgotpassPage,
  },
  {
    name: 'Notification',
    component: NotificationPage,
  },
];
export const stackData = [
  {
    name: 'Splash',
    component: SplashPage,
  },
  {
    name: 'Signup',
    component: SignupPage,
  },
  {
    name: 'Signin',
    component: SigininPage,
  },
  {
    name: 'ForgotPass',
    component: ForgotpassPage,
  },
  {
    name: 'Notification',
    component: NotificationPage,
  },
  {
    name: 'BookList',
    component: BookList,
  },
  {
    name: 'BookDetail',
    component: BookDetail,
  },
  {
    name: 'Payment',
    component: PaymentPage,
  },
  {
    name: 'PaymentHistories',
    component: PaymentHistories,
  },
  {
    name: 'Author',
    component: AuthorPage,
  },
  {
    name: 'Category',
    component: CategoryPage,
  },
  {
    name: 'AuthorDetail',
    component: AuthorDetail,
  },
  {
    name: 'CategoryDetail',
    component: CategoryDetail,
  },
  {
    name: 'PaymentDetail',
    component: PaymentDetail,
  },
  {
    name: 'NotificationDetail',
    component: NotificationDetail,
  },

  {
    name: 'TabBar',
    component: TabBar,
  },
];
export const tabData = [
  {
    name: 'Home',
    component: HomePage,
  },
  {
    name: 'Favorite',
    component: FavoritePage,
  },
  {
    name: 'Trolly',
    component: TrollyPage,
  },
  {
    name: 'Profile',
    component: ProfilePage,
  },
];
export const sideData = [
  {
    name: 'StackTab',
    component: StackTab,
  },
];
