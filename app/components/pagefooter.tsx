import React from 'react';
import { Link } from 'react-router-dom';

const PageFooter = () => {
    return(
        <div className = "footer_section">
            <div className = "spacer"></div>

            <div className = "main_section">
                <Link to = '/contactme'>Contact Me</Link>
            </div>

            <div className = "spacer"></div>
        </div>
    )
};

export default PageFooter;