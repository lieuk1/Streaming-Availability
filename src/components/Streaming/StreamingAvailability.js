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
            <h6>Subscription</h6>
            <div class="sub-sources-list">{subSourcesList}</div>
            <h6>Purchase/Rent</h6>
            <div class="buy-sources-list">{buySourcesList}</div>
        </React.Fragment>
    );
}

export default StreamingAvailability;