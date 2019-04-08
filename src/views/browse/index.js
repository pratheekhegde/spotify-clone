import React, { Component } from 'react';

import { NavBar, NavItemList, NavItem, NavLink } from './style';

const Browse = props =>
    <NavBar>
        <NavItemList>
            <NavItem>
                <NavLink to="/browse/featured">
                    Featured
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/browse/podcasts">
                    Podcasts
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/browse/charts">
                    Charts
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/browse/genre">
                    Genre & Moods
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/browse/new">
                    New Releases
                </NavLink>
            </NavItem>
        </NavItemList>
    </NavBar>

export default Browse;
