import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "meetup series 1",
    image:
      "https://images.unsplash.com/photo-1635547618077-27ac51227b0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1133&q=80",
    address: "some address, some city, some country, some pin",
    description: "this is a first meetup",
  },

  {
    id: "m2",
    title: "meetup series 2",
    image:
      "https://images.unsplash.com/photo-1635547618077-27ac51227b0d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1133&q=80",
    address: "some address, some city, some country, some pin",
    description: "this is a second meetup",
  },
];

function homepage() {
  return <MeetupList meetups={DUMMY_MEETUP} />;
}

export default homepage;
