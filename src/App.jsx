import { useState } from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Search from './components/Search';
import Favourites from './components/Favourites';
import './App.css';

function App() {
    // State for favourites
    // --------------------------------------------
    const [favourites, setFavourites] = useState([]);

    // Function to add an item to favourites
    // --------------------------------------------
    const handleAddToFavourites = (item) => {
        // Check if the item already exists
        if (favourites.some((fav) => fav.id === item.id)) {
            alert('This item is already in your favourites!');
            return;
        }

        // add the new item to the  favourites list
        setFavourites((prevFavourites) => [...prevFavourites, item]);
    };

    // Function to remove an item from 'favourites array.
    // --------------------------------------------
    const handleRemoveFromFavourites = (trackId) => {
        const updatedFavourites = favourites.filter((item) => item.trackId !== trackId);
        setFavourites(updatedFavourites);
    };

    return (
        <div className="App">
            {/* nav bar*/}
            <nav className="nav-bar">
                <h1>iTunes Search</h1>
                <div className="nav-links">
                    <Link to="/">Search</Link>
                    <Link to="/favourites">Favourites</Link>
                </div>
            </nav>

            <div className="main-content-wrapper">
                <Routes>
                    <Route path="/" element={<Search onAddToFavourites={handleAddToFavourites} />} />
                    <Route
                        path="/favourites"
                        element={
                            <Favourites favourites={favourites} onRemoveFromFavourites={handleRemoveFromFavourites} />
                        }
                    />
                    {/* Redirect all unknown paths back to Search */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
