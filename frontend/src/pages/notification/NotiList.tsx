import React from 'react';
import Card from './Card'; // Import the new NotificationCard component

export default function NotiList({ contents }) {
  return (
    <div className="w-full bg-white text-black">
      {contents && contents.length > 0 ? (
        contents.map((noti) => (
          <Card
            key={noti.id} // Ensure the notification has a unique ID for key prop
            initials={noti.initials} // Initials to display in the card
            name={noti.name} // Name of the researcher
            trustScore={noti.trustScore} // Trust score for the researcher
            requestTime={noti.requestTime} // Time of the request
            requestDetails={noti.requestDetails} // Details of the request
            purpose={noti.purpose} // Purpose of the request
            onApprove={() => console.log(`Approved: ${noti.id}`)} // Action for approve
            onReject={() => console.log(`Rejected: ${noti.id}`)} // Action for reject
          />
        ))
      ) : (
        <p>Loading...</p> // Message when there are no notifications or data is still loading
      )}
    </div>
  );
}
