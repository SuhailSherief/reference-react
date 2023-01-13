import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList({meetups}) {
  return <ul className={classes.list}>
    {meetups.map(meetup => <MeetupItem number={meetup.id} id={meetup.id} title={meetup.title} desc={meetup.description} image={meetup.image} address={meetup.address} />)}
  </ul>
}

export default MeetupList