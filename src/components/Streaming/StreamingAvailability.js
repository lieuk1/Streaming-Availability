import React from 'react';
import StreamingItem from './StreamingItem';

const StreamingAvailability = ({ subSources, buySources }) => {
    if (subSources.length === 0 & buySources.length === 0) {
        return <div>No Streaming Sources Available</div>;
    }

    const subSourcesList = subSources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} />;
    });

    const buySourcesList = buySources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} />;
    });

    return (
        <React.Fragment>
            { subSourcesList.length !== 0 && (
                <React.Fragment>
                <h5>Subscription</h5>
                <div className="sub-sources-list">{subSourcesList}</div>
                </React.Fragment>
            ) }
            { buySourcesList.length !== 0 && (
                <React.Fragment>
                <h5>Purchase/Rent</h5>
                <div className="buy-sources-list">{buySourcesList}</div>
                </React.Fragment>
            ) }
        </React.Fragment>
    );
}

export default StreamingAvailability;