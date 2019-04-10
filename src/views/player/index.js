import React from 'react';
import { Route } from "react-router-dom";
import { Switch, Redirect, withRouter } from "react-router";

import Sidebar from '../../components/sidebar';
import Browse from '../browse';
import { PlayerViewWrapper, MainWrapper, Gradient } from './style'

const Player = (props) => {
    return (
        <Gradient id="g">
            <PlayerViewWrapper>
                <Sidebar />
                <MainWrapper>
                    <Switch>
                        <Route path={`${props.match.path}browse/:category`} component={Browse} />

                        {/* redirect from / & /browse to /browse/featured */}
                        <Redirect from="/" exact to="/browse/featured" />
                        <Redirect from={`${props.match.path}browse`} exact to="/browse/featured" />
                    </Switch>
                </MainWrapper>
            </PlayerViewWrapper>
        </Gradient>
    )
}

export default withRouter(Player);