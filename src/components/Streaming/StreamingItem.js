import React from 'react';
import SubSources from './sub-sources.json';
import BuySources from './buy-sources.json';
// import RentSources from './rent-sources.json';

const StreamingItem = ({ source, sourceType }) => {
    const sourceID = source.source_id;

    // Default icon for source
    let sourceIcon = <img alt="Source" src="" style={{ width: '50px' }} />;

    // Choose which json source list to search in
    let jsonSources = [];
    if (sourceType === "sub") {
        jsonSources = SubSources;
    } else if (sourceType === "buy") {
        jsonSources = BuySources;
    } else {
        // jsonSources = RentSources;
    }

    // Find icon for source in json file using id
    jsonSources.map((jsonSource) => {
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