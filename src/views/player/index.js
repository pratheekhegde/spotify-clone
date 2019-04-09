import React from 'react';
import { Route } from "react-router-dom";
import { Switch, Redirect, withRouter } from "react-router";

import Sidebar from '../../components/sidebar';
import Browse from '../browse';
import { PlayerViewWrapper, MainWrapper } from './style'

const grad = {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    left: 0,
    top: 0,
    position: 'fixed',
    opacity: 1,
}

const g1 = {
    backgroundImage: 'linear-gradient(to right bottom, rgb(18, 18, 18), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
    ...grad
}
const g2 = {
    backgroundImage: 'linear-gradient(to right bottom, rgb(55, 67, 98), rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)',
    ...grad
}

const Player = (props) => {
    return (
        <div style={g1}>
            <div style={g2}>
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
            </div>
        </div>
    )
}

export default withRouter(Player);