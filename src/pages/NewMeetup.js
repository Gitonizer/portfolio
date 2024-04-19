import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-af67e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        navigate('/', { replace: true });
    });
  }

  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
