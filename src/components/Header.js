import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>
                <FontAwesomeIcon icon={faStickyNote} /> ReverieRecall
            </h1>
			<button class="login-button">Login</button>

            <button 
                onClick={() =>
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }
                className='save'
				
            >
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;
