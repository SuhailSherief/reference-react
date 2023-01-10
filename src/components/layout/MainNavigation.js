import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
        <div>React Meetup</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>Favorite Meetups</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation