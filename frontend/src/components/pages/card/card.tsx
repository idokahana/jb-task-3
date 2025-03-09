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

  return (
    <div className="Card">
      <h3>{meetingDescription}</h3>
      <p>{meetingDescription}</p>
      <p>Starting at: {new Date(startingDateAndTime).toLocaleDateString()}</p>
      <p>Ends at: {new Date(endingDateAndTime).toLocaleDateString()}</p>
      <h3>At Meeting Room {meetingRoom}</h3>
    </div>
  );
}
