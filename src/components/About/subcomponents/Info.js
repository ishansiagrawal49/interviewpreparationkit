import React from "react";

export const Info = () => {
  return (
    <div className="px-4 py-4 overflow-y-auto">
      <h2>
        <span style={{ color: "rgb(0, 71, 178)" }}> Interview Kit </span>
      </h2>
      <p>
        <span style={{ color: "rgb(0, 0, 10)" }}>
          Welcome to our website interview kit. It is developed with the aim to
          helps students with their interview preparation. The main target
          audience for the portal is MNIT students, however it is not limited to
          that, and anyone with a knack of programming can freely use this
          portal for ones benefit.
        </span>
        <br />
        <br />
        <h4 style={{ color: "rgb(0, 71, 178)" }}> Key features of Portal : </h4>
        <ul style={{ color: "rgb(0, 10, 0)" }}>
          <li>
            <b> Home </b> : This open discussion forum. Everyone can post or
            comment their views. If someone doesn't want to reveal their name
            and then they can do it anonymously also.
          </li>
          <li>
            <b> Leaderboard </b> : A real time leaderboard for fetching rankings
            of mnit students on different competitive programming websites.
          </li>
          <li>
            <b> Interview </b> : All the sources one need to prepare for their
            interview
          </li>
          <li>
            <b> About </b> : Everything you need to know about the portal is
            present here
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Info;
