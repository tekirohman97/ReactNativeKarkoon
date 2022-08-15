import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/Screen/Sign_Up/Splash';
import SignUp from './src/Screen/Sign_Up/Sign_Up';
import PhoneNumber from './src/Screen/Sign_Up/Verif';
import UserName from './src/Screen/Sign_Up/Username';
import HomePage from './src/Screen/Home/Index';
import SearchPage from './src/Screen/Home/Search';
import DetailProduct from './src/Screen/Home/Product_detail';
import OrderSummaryPage from './src/Screen/Home/Order_Summary';
import PaymentConfirmPage from './src/Screen/Home/Payment_Confirm';
import WaitingForPaymentPage from './src/Screen/Home/Wainting_For_Payment';
import KeranjangPage from './src/Screen/Keranjang/Index';
import PesananPage from './src/Screen/Pesanan/Index';
import ProfilePage from './src/Screen/Profile/Index';
import PerincianPesananPage from './src/Screen/Pesanan/Perincian_Pesanan';
import SuntingProfile from './src/Screen/Profile/Sunting_Profile';
import EditNamaPage from './src/Screen/Profile/EditNama';
import EditTanggalLagirPage from './src/Screen/Profile/EditTglLahir';

function App() {
  return (
    <NavigationContainer>
      <KeranjangPage />
    </NavigationContainer>
  );
}

export default App;
