import React from "react";
import { Navigate } from "react-router-dom";

function Home() {
    const [gotoform, setGoToform] = React.useState(false);
    const [readform, setReadForm] = React.useState(false);

    const handleCreateClick = () => {
        setGoToform(true);
    };

    const handleReadClick = () => {
        setReadForm(true);
    };

    
    if (gotoform) {
        return <Navigate to="/form" />;
    }
    if (readform) {
        return <Navigate to="/read" />;
    }

    return (
        <div>
            <div className="">
                <button 
                    onClick={() => {
                        handleCreateClick();
                    }}
                >
                    Create
                </button>
                
                <button 
                    onClick={() => {
                        handleReadClick();
                    }}
                >
                    Read
                </button>
                

               

                

            </div>
        </div>
    );
}

export default Home;