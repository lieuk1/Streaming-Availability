import React from 'react';
import StreamingItem from './StreamingItem';

const StreamingAvailability = ({ subSources, buySources }) => {
    if (subSources.length === 0 & buySources.length === 0) {
        return <div>No Streaming Sources Available</div>;
    }

    const subSourcesList = subSources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} sourceType="sub" />;
    });

    // console.log(subSourcesList);

    const buySourcesList = buySources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} sourceType="buy" />;
    });

    // console.log(buySourcesList);

    return (
        <div>
            {subSourcesList}
            <br />
            {buySourcesList}
        </div>
    );
}

export default StreamingAvailability;