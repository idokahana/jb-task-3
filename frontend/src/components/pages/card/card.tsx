import Meeting from "../../../models/meeting/meeting";
import "./Card.css";

interface CardProps {
  meeting: Meeting;
}
export default function Card(props: CardProps): JSX.Element {
  const {
    endingDateAndTime,
    startingDateAndTime,
    meetingDescription,
    meetingRoom,
  } = props.meeting;

  const startTime = new Date(startingDateAndTime);
  const endTime = new Date(endingDateAndTime);
  const duration = endTime.getTime() - startTime.getTime();
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="Card">
      <h3>{meetingDescription}</h3>
      <p>{meetingDescription}</p>
      <p>Starting at: {new Date(startingDateAndTime).toLocaleDateString()}</p>
      <p>Ends at: {new Date(endingDateAndTime).toLocaleDateString()}</p>
      <p>
        Duration: {hours} hours {minutes} minutes
      </p>
      <h3>At Meeting Room {meetingRoom}</h3>
    </div>
  );
}
