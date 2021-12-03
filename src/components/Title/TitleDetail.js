import React from 'react';
import StreamingAvailability from '../Streaming/StreamingAvailability';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TitleDetail = ({ show, onHide, title, titlePoster, subSources, buySources }) => {
    if (!title) {
        return <div></div>
    }

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div style={{ display: 'flex' }}>
                <div>
                    <img alt={title.title} src={titlePoster} 
                    style={{ height: '100%', width: '230px', objectFit: 'cover', borderRadius: '0px' }} />
                </div>
                <div>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1 className="header">{title.title} ({title.year ? title.year : 'No Release Date'})</h1>
                            {title.tmdb_type === 'tv' && <div className="meta">TV Series</div>}
                            {title.tmdb_type === 'movie' && <div className="meta">Movie</div>}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="description">{title.plot_overview}</div>
                        <div className="item">
                            <div className="content">
                                <StreamingAvailability subSources={subSources} buySources={buySources} />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onHide}>Close</Button>
                    </Modal.Footer>
                </div>
            </div>
        </Modal>
    );
};

export default TitleDetail;
