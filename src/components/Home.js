import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
    const [gotoform, setGoToform] = React.useState(false);

    const handleClick = () => {
        // Perform some action
        // Update state to trigger navigation
        setGoToform(true);
    };

    // Redirect to '/form' if goToForm state is true
    if (gotoform) {
        return <Navigate to="/form" />;
    }

    return (
        <div>
            <div className="">
                <button 
                    onClick={() => {
                        handleClick();
                    }}
                >
                    Create
                </button>
                <button 
                onClick={() => {
                    handleClick();
                }}>
                    Read
                </button>
            </div>
        </div>
    );
}

export default Home;
