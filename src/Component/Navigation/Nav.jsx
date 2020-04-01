import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';

import NavData from '../../Data/NavData'
import NavDataProject from '../../Data/NavDataProject'


class NavItem extends Component {
    render() {
        const {url, navItem} = this.props
        if(navItem === "PROJECT") {
            return(
                <li className = "nav__item">
                    <Link className = "nav__link" to = {url} >{navItem}</Link>
                    <ul className ="nav__item-project">
                        {
                            NavDataProject.map((items, idx) => 
                                <NavItemProject 
                                    key ={idx}
                                    labelproject = {items.label}
                                    urlproject = {items.url}
                                /> 
                            )
                        }
                    </ul>
                </li>
            ) 
        } else {
            return (
                <li className = "nav__item">
                    <Link className = "nav__link" to = {url} >{navItem}</Link>
                </li>
            )
        }
        
    }
}

class NavItemProject extends Component {
    render() {
        const {labelproject,urlproject} = this.props
        return (
            <li className ="nav__item nav__projectlist-item">
                <Link className ="nav__link nav__link--dropdown" to = {urlproject}>{labelproject}</Link>
            </li>


        )
    }
}

export default class Nav extends Component {
    render() {
        return (
            <div className = "header">
                
                <ul className = "nav nav--center">
                    {
                        NavData.map((item, idx) => {
                            return (
                                <NavItem
                                    key = {idx}
                                    navItem = {item.navItem}
                                    url = {item.url}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}