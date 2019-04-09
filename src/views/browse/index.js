import React from 'react';
import { Route } from 'react-router-dom';

import { NavBar, NavItemList, NavItem, NavLink } from './style';

const Browse = props =>
    <NavBar>
        <NavItemList>
            <Route path="/browse/featured">
                {({ match }) => (
                    <NavItem isActive={ match && match.url === '/browse/featured'}>
                        <NavLink to="/browse/featured">
                            Featured
                        </NavLink>
                    </NavItem>
                )}
             </Route>
             <Route path="/browse/podcasts">
                {({ match }) => (
                    <NavItem isActive={ match && match.url === '/browse/podcasts'}>
                        <NavLink to="/browse/podcasts">
                            Podcasts
                        </NavLink>
                    </NavItem>
                )}
            </Route>
            <Route path="/browse/charts">
                {({ match }) => (
                    <NavItem isActive={ match && match.url === '/browse/charts'}>
                        <NavLink to="/browse/charts">
                            Charts
                        </NavLink>
                    </NavItem>
                )}
            </Route>
            <Route path="/browse/genre">
                {({ match }) => (
                    <NavItem isActive={ match && match.url === '/browse/genre'}>
                        <NavLink to="/browse/genre">
                            Genre & Moods
                        </NavLink>
                    </NavItem>
                )}
            </Route>
            <Route path="/browse/new">
                {({ match }) => (
                    <NavItem isActive={ match && match.url === '/browse/new'}>
                        <NavLink to="/browse/new">
                            New Releases
                        </NavLink>
                    </NavItem>
                )}
            </Route>
        </NavItemList>
    </NavBar>

export default Browse;
