import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabase'; // Import your Supabase client instance

function EventPage() {
    const { eventId } = useParams(); // Retrieve the event ID from the URL using useParams
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        // Function to fetch event data from Supabase
        const fetchEventData = async () => {
            try {
                // Fetch event data from Supabase using the event ID
                const { data, error } = await supabase
                    .from('group-pay-init')
                    .select('*')
                    .eq('id', eventId); // Filter by the event ID

                if (error) {
                    throw error;
                }

                // Update state with fetched data
                if (data && data.length > 0) {
                    setEventData(data[0]);
                } else {
                    setEventData(null); // No data found for the event ID
                }
            } catch (error) {
                console.error('Error fetching event data:', error.message);
            }
        };

        // Call the function to fetch event data
        fetchEventData();
    }, [eventId]);

    // Check if the event data is null or loading
    if (eventData === null) {
        return <p>Loading...</p>;
    }

    // Render the event data on the page
    return (
        <div>
            <h1>Event Details</h1>
            <p>Members: {eventData.phoneNumber}</p>
            {/* Display more event data as needed */}
            <p>More event data can be displayed here...</p>
        </div>
    );
}

export default EventPage;
