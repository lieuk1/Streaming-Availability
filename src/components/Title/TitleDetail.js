import React from 'react';
import StreamingAvailability from '../Streaming/StreamingAvailability';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TitleDetail = ({ show, onHide, title, subSources, buySources }) => {
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
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="header">{title.title} ({title.year})</div>
                {title.tmdb_type === 'tv' && <div className="meta">TV Series</div>}
                {title.tmdb_type === 'movie' && <div className="meta">Movie</div>}
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
        </Modal>
    );
};

export default TitleDetail;
