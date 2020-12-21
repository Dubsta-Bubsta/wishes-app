import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';
import Main from './pages/main';
import Policy from './pages/policy';
import LanguagePicker from './components/LanguagePicker';


const App = () => {
    return (
        <div className="app">
            <LanguagePicker />
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/policy" component={Policy}/>
                <Route path="*" component={() => <Redirect to="/"/>}/>
           </Switch>
        </div>
    )
}
export default App;
