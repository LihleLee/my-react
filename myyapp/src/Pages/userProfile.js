import React, { useState } from 'react';  
import { useUser } from './userContext';

const UserProfile = () => {
    const { user, setUser } = useUser();
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const users = [
        { name: 'Aphiwe Meslane', age: 16, School: 'Jeppe Boys High', location: 'Golden Lions', Pos: 'Lock Forward' },
        { name: 'Ayongezwa Ndamase', age: 19, School: 'Rondebosch High', location: 'Western Province', Pos: 'Full Back' },
        { name: 'Noxolo Luswazi', age: 18, School: 'Grey College', location: 'Free State Cheetahs', Pos: 'Center' },
        { name: 'Shubs Behardien', age: 17, School: 'Paul Roos', location: 'Western Province', Pos: 'Wing' },
        { name: 'Lihle Mbuqu', age: 18, School: 'Paarl Gim', location: 'Western Province', Pos: 'Flank' }
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleUserSelect = (index) => {
        const selectedUser = users[index];
        setUser(selectedUser);
        setLoading(true);

        // Simulate loading data
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    const handleSearchSubmit = () => {
        const index = users.findIndex(user => user.name.toLowerCase() === searchTerm.toLowerCase());
        if (index !== -1) {
            handleUserSelect(index);
        } else {
            setUser(null); // Clear user if not found
        }
        // Clear the search input after submission
        setSearchTerm('');
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="Profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="pro-head" style={{ marginBottom: '30px' }}>
                <h1>User Profile</h1>
                <div style={{ marginTop: '10px', display: 'inline-block' }}>
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ fontSize: '14px', padding: '5px', width: '200px' }} // Adjust size here
                    />
                    <button onClick={handleSearchSubmit} style={{ fontSize: '14px', padding: '5px 10px' }}>Enter</button>
                </div>
                {searchTerm && filteredUsers.length > 0 && (
                    <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
                        {filteredUsers.map((user, index) => (
                            <li key={index} onClick={() => handleUserSelect(users.indexOf(user))} style={{ cursor: 'pointer' }}>
                                {user.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {loading ? (
                <p>Loading user details...</p>
            ) : (
                user && (
                    <div className="Pinfo">
                        <p><strong>Name:</strong> {user.name}</p>
                        <p><strong>Age:</strong> {user.age}</p>
                        <p><strong>School:</strong> {user.School}</p>
                        <p><strong>Location:</strong> {user.location}</p>
                        <p><strong>Pos:</strong> {user.Pos}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default UserProfile;

