import React from 'react';
import TitleItem from './TitleItem';

const TitleList = ({ titles, onTitleSelect }) => {
    const renderedList = titles.map((title) => {
        return <TitleItem key={title.id} onTitleSelect={onTitleSelect} title={title} />;
    });

    return <div className="ui cards" style={{ justifyContent: '' }}>{renderedList}</div>;
};

export default TitleList;

// space-between