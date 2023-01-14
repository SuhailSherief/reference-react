import classes from './Card.module.css'

function Card({children}) {
  return (
    <div className={classes.card}>{children}</div>
  )
}

export default Card