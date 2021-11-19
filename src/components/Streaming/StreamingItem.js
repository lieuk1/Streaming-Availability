import React from 'react';
import Sources from './sources.json';

const StreamingItem = ({ source }) => {
    const sourceID = source.source_id;

    // Default icon for source
    let sourceIcon = <img alt="Source" src="" style={{ width: '50px' }} />;

    // Find icon for source in json file using id
    Sources.map((jsonSource) => {
        if (jsonSource.id === sourceID) {
            sourceIcon = <img alt="Source" src={jsonSource.logo_100px} style={{ border: '1px solid lightgrey', width: '50px' }} />;
        }
    });

    return (
        <div style={{ display: 'inline-block' }}>
            <a href={source.web_url} target="_blank" rel="noopener noreferrer">
                {sourceIcon}
            </a>
        </div>
    );
}

export default StreamingItem;