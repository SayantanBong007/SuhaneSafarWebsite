import React from "react";
import TrekCards from "./trek-left-cards";
import TrekHighlights from "./trek-right-highlights";

const TrekSecond = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen w-11/12 mx-auto">
            <div className="w-full md:w-3/5 ">
                <TrekCards />
            </div>
            <div className="w-full md:w-2/5 ">
                <TrekHighlights />
            </div>
        </div>

    );
};

export default TrekSecond;
