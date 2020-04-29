import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wishes from './Wishes';
import Header from './Header/Header';
import Location from './Location';
import CamList from './Page_Cams/CamList';



function Router() {
    return (
        <div>
            <Header />
            <Switch>
                <div className="routeLink">
                    <Route exact path='/' component={Wishes} />
                    <Route path='/location' component={Location} />
                    <Route path='/camlist' component={CamList} />
                 </div>
            </Switch>

        </div>
    )
}

export default Router
