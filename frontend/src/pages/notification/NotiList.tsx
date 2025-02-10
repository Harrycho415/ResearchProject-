import React from 'react';
import Card from './Card'; // Import the NotificationCard component

export default function NotiList({ contents }) {
  return (
    <div className="flex flex-col w-full text-black gap-y-4">
      {contents && contents.length > 0 ? (
        contents.map((noti) => (
          <Card
            key={noti.id} // Ensure the notification has a unique ID for key prop
            initials={noti.initials || 'N/A'} // Fallback to 'N/A' if initials is missing
            name={noti.name} // Name of the researcher
            role={noti.role} // Role of the researcher (e.g., "Verified Researcher")
            trustScore={noti.trustScore} // Trust score for the researcher
            datasetName={noti.datasetName} // Name of the dataset requested
            purpose={noti.purpose} // Purpose of the request
            requestTime={noti.requestTime} // Time of the request
            detailsLink={noti.detailsLink} // Link to view request details
          />
        ))
      ) : (
        <p>Loading...</p> // Message when there are no notifications or data is still loading
      )}
    </div>
  );
}
