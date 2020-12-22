import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';
import Main from './pages/main';
import PolicyEn from './pages/policyEn';
import PolicyRu from './pages/policyRu';
import LanguagePicker from './components/LanguagePicker';
import PolicyLinks from './components/PolicyLinks';


const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/en/policy" component={PolicyEn}/>
                <Route path="/ru/policy" component={PolicyRu}/>
                <Route path="*" component={() => <Redirect to="/"/>}/>
           </Switch>
        </div>
    )
}
export default App;
