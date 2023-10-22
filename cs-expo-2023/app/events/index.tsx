import React from "react";
const Events: React.FC = () => {
    return (
      <div>
       <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ul style={{ display: 'flex', gap: '10px', listStyleType: 'none' }}>
          <li><a href="/events">Events</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/partners">Partners</a></li>
        </ul>
      </nav>
            <hr />
            <br />
          <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyleType: 'none' }}>
        <li><a href="/events/committees">Committees</a></li>
        <li><a href="/events/cs-expo">CS Expo</a></li>
        <li><a href="/events/dev-day">Dev Day</a></li>
      </ul>
      </div>
    );
  };
  export default Events;