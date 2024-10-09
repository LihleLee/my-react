import React, { useEffect, useState } from 'react'; 
import { useUser } from './userContext';

const UserProfile = () => {
    const { user, setUser } = useUser();
    const [currentUserIndex, setCurrentUserIndex] = useState(0);

    const users = [
        { name: 'Aphiwe Meslane', age: 16, School: 'Jeppe Boys High', location: 'New York, NY', Pos: 'Lock Forward.' },
        { name: 'Ayongezwa Ndamase', age: 19, School: 'Rondebosch High', location: 'Los Angeles, CA', Pos: 'Full Back.' },
        { name: 'Noxolo Luswazi', age: 18, School: 'Grey College', location: 'Chicago, IL', Pos: 'Center.' },
        { name: 'Shubs Behardien', age: 17, School: 'Paul Roos', location: 'Miami, FL', Pos: 'Wing.' },
        { name: 'Shubs Behardien', age: 18, School: 'Paarl Gim', location: 'Miami, FL', Pos: 'Flank.' }
    ];

    useEffect(() => {
        // Set the initial user data
        setUser(users[currentUserIndex]);
    }, [setUser, currentUserIndex]);

    const nextUser = () => {
        setCurrentUserIndex((prevIndex) => (prevIndex + 1) % users.length);
    };

    return (
        <div>
            <h1>User Profile</h1>
            {user ? (
                <div>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>School:</strong> {user.School}</p>
                    <p><strong>Location:</strong> {user.location}</p>
                    <p><strong>Pos:</strong> {user.pos}</p>
                    <button onClick={nextUser}>Next Player</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserProfile;




