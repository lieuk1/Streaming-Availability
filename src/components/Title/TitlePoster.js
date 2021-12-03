import React from 'react';
import axios from 'axios';

class TitlePoster extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posterURL: "" };
    }

    componentDidMount() {
        const imdb_id = this.props.imdb_id;
        // console.log(imdb_id);

        const response = axios.get(`http://www.omdbapi.com/?i=${imdb_id}&apikey=78eff645`)
        // .then((response) => response.json())
        // .then((user) => {
        //     return user.Poster;
        // });

        const printIt = async () => {
            const a = await response;
            // console.log(a.data.Poster);
            this.setState({ posterURL: a.data.Poster });
            this.props.setPosterUrl(this.state.posterURL);
        }
        
        printIt();
        // this.props.onTestPost(this.state.posterURL);
    }

    // figure out if there is a this.props.title value
    render() {
        return (
            <img alt={this.props.title} src={this.state.posterURL} style={{ height: '300px', width: '100%', objectFit: 'cover', borderRadius: '3px' }} />
        );
    }
}

export default TitlePoster;
