import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetup</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorite Meetup</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation