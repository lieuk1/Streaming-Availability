import React from 'react';
import StreamingItem from './StreamingItem';

const StreamingAvailability = ({ subSources, buySources, rentSources }) => {
    if (subSources.length === 0 & buySources.length === 0 & rentSources.length === 0) {
        return <div>No Streaming Sources Available</div>;
    }

    const subSourcesList = subSources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} />;
    });

    // console.log(subSourcesList);

    const buySourcesList = buySources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} />;
    });

    // console.log(buySourcesList);
    
    const rentSourcesList = rentSources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} />;
    });
    
    // console.log(rentSourcesList);

    return (
        <div>
            {subSourcesList}
            <br />
            {buySourcesList}
            <br />
            {rentSourcesList}
        </div>
    );
}

export default StreamingAvailability;