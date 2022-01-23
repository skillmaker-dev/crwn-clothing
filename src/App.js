import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Routes,Navigate} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {


  unsubscribeFromAuth = null;
  componentDidMount()
  {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth)
      {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }
        );
        })
      }
      
        setCurrentUser(userAuth);
      
      
      
    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  render()
  {
    return (
      
      <div>
        <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/checkout" element={<CheckoutPage/>} />

        <Route exact path="/shop/*" element={<ShopPage/>} />
          
        
        <Route exact path="/signin" element={ this.props.currentUser ? <Navigate replace to="/" /> : <SignInAndSignUp/>} />
      </Routes>
      </div>
      
    );

  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
