import React, { useState } from 'react';
import TitlePoster from './TitlePoster';

const TitleItem = ({ title, onTitleSelect }) => {
    const [posterUrl, setPosterUrl] = useState('');

    return (
        <div className="card" style={{ width: '200px' }}>
            <div onClick={() => onTitleSelect(title, posterUrl)} className="image" style={{width: '200px'}}>
                <TitlePoster imdb_id={title.imdb_id} setPosterUrl={setPosterUrl} />
            </div>
        </div>
    );
};

export default TitleItem;

// onTestPost={(url) => console.log(url)} 
// style={{ width: '200px' }}