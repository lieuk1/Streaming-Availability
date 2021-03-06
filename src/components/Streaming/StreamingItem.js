import React from 'react';
import SubSources from './sub-sources.json';
import BuySources from './buy-sources.json';

const StreamingItem = ({ source }) => {
    const sourceID = source.source_id;

    // Default icon for source
    let sourceIcon = <img alt="Source" src="" style={{ width: '50px' }} />;

    // Find icon for source in json file using id
    [...SubSources, ...BuySources].map((jsonSource) => {
        if (jsonSource.id === sourceID) {
            sourceIcon = <img alt="Source" src={jsonSource.logo_100px} style={{ border: '1px solid lightgrey', width: '50px' }} />;
        }
    });

    return (
        <div className="source-item">
            <a href={source.web_url} target="_blank" rel="noopener noreferrer">
                {sourceIcon}
            </a>
        </div>
    );
}

export default StreamingItem;