import React from 'react';
import StreamingAvailability from '../Streaming/StreamingAvailability';

const TitleDetail = ({ title, subSources, buySources, rentSources }) => {
    if (!title) {
        return <div></div>
    }

    return (
        <div className="ui segment" style={{ width: '100%', marginBottom: '14px', height: '300px' }}>
            <div className="content">
                <div className="ui items">
                    <div className="item">
                        {/* <div className="image">
                            <img className="ui large image" alt="Poster Image" src="https://semantic-ui.com/images/wireframe/image.png" />
                            <img className="ui large image" alt="Poster Image" src="https:cdn.watchmode.com/provider_logos/netflix_100px.png" />
                        </div> */}
                        <div className="content">
                            <div className="header">{title.title} ({title.year})</div>
                            {title.tmdb_type === 'tv' && <div className="meta">TV Series</div>}
                            {title.tmdb_type === 'movie' && <div className="meta">Movie</div>}
                            <div className="description">{title.plot_overview}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <StreamingAvailability subSources={subSources} buySources={buySources} rentSources={rentSources} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleDetail;
