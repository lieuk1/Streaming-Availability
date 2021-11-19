import React from 'react';
import TitlePoster from './TitlePoster';

const TitleItem = ({ title, onTitleSelect }) => {
    return (
        <div className="card" style={{ width: '200px' }}>
            <div onClick={() => onTitleSelect(title)} className="image" style={{width: '200px'}}>
                <TitlePoster imdb_id={title.imdb_id} />
            </div>
        </div>
    );
};

export default TitleItem;

// onTestPost={(url) => console.log(url)} 
// style={{ width: '200px' }}