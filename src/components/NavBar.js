import { Link } from "react-router-dom";
import { useState } from "react"

import logo from '../images/logo-hort.png';

const SearchResults = () => {
	const [searchTerms, setSearchTerms] = useState("")

	const handleSearchInput = (evt) => {
        setSearchTerms(evt.target.value)
    }

	return(
        <div id="navbar">
			<div id="nav-logo-container">
				<Link to="/">
					<img src={logo} alt="wepick logo" />
				</Link>
			</div>
			<div id="nav-search">
				<form className="search-form">
					<input
						id="search-input"
						type="text"
						className="searchTerm"
						placeholder=" Search by title..."
						value={searchTerms}
						onChange={handleSearchInput}
						/>&nbsp;&nbsp;
					<button id="search-button" type="submit">Search</button>
				</form>
            </div>
            <div id="nav-buttons">
                {/* <Link to="/">WePick</Link> */}
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/account">My Account</Link>
            </div>
        </div>
    )
};

export default SearchResults;
