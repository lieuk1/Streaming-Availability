import React from 'react';
import StreamingItem from './StreamingItem';

const StreamingAvailability = ({ sources }) => {
    if (sources.length === 0) {
        return <div>No Streaming Sources Available</div>;
    }

    const renderedList = sources.map((source) => {
        return <StreamingItem key={source.source_id} source={source} />;
    });

    return <div>{renderedList}</div>;
}

export default StreamingAvailability;