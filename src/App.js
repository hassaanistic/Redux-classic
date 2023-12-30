import './App.css';
import { Provider } from 'react-redux';
import storeOwn from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import JellyContainer from './components/JellyContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (

    <Provider store={storeOwn} >

      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <JellyContainer />
        <NewCakeContainer />
        <hr></hr>
        <ItemContainer cake />
        <ItemContainer />
        <hr></hr>


        <UserContainer />
      </div>

    </Provider>

  );
}

export default App;
