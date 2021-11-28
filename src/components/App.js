import React from 'react';
import watchmode from '../api/watchmode';
import NavigationBar from './Navigation/NavigationBar';
import SearchBar from './Search/SearchBar';
import TitleList from './Title/TitleList';
import TitleDetail from './Title/TitleDetail';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Custom CSS (overrides bootstrap)
import './App.css';

import Container from 'react-bootstrap/Container';

class App extends React.Component {
    state = { 
        titles: [
            { id: 3173640, imdb_id: 'tt12940504', title: "My Name", tmdb_type: "tv", year: 2021, end_year: 0, plot_overview: "Following her father's murder, a revenge-driven woman puts her trust in a powerful crime boss — and enters the police force under his direction." },
            { id: 1591456, imdb_id: 'tt11107074', title: "My Hero Academia: Heroes Rising", tmdb_type: "movie", year: 2019, end_year: 0, plot_overview: "Plot overview" },
            // { id: 1591456, imdb_id: 'tt11107074', title: "My Hero Academia: Heroes Rising", tmdb_type: "movie", year: 2019, end_year: 0, plot_overview: "Plot overview" },
            // { id: 1591456, imdb_id: 'tt11107074', title: "My Hero Academia: Heroes Rising", tmdb_type: "movie", year: 2019, end_year: 0, plot_overview: "Plot overview" },
            // { id: 1591456, imdb_id: 'tt11107074', title: "My Hero Academia: Heroes Rising", tmdb_type: "movie", year: 2019, end_year: 0, plot_overview: "Plot overview" },
        ], 
        selectedTitle: null, 
        subSources: [],
        buySources: []    
    };

    // Parse term - remove unecessary whitespace
    parseTerm = term => {
        let validatedTerm = term.trim();

        return validatedTerm;
    }

    // async and await keyword waits for data to be processed
    // and assigned to state before being displayed in render method
    onSearchSubmit = async term => {
        const validatedTerm = this.parseTerm(term);

        const allPromises = Promise.all([
            watchmode.get('/search/', { params: { search_value: validatedTerm, search_field: 'name', types: 'tv' } }),
            watchmode.get('/search/', { params: { search_value: validatedTerm, search_field: 'name', types: 'movie' } })
        ]);

        try {
            const values = await allPromises; // [valueOfPromise1, valueOfPromise2, ...]
            let data = [];
            
            for (let value of values) {
                const real = value.data.title_results[0];
                
                if (real) {
                    const response = await watchmode.get(`/title/${real.id}/details/`);
                    console.log("WATCHMODE REQUESTS REMAINING: " + response.headers["x-ratelimit-requests-remaining"]);
                    data = data.concat(response.data);
                }
            }

            this.setState({ 
                titles: data,
                selectedTitle: null
            });
        } catch (error) {
            console.log(error);  // rejectReason of any first rejected promise
        }
    }
    
    filterStream = sources => {
        // Filter sources with US region and no SD quality
        const sub = sources.filter(source => source.region === 'US' & source.format !== 'SD' & source.type === 'sub');
        const buy = sources.filter(source => source.region === 'US' & source.format !== 'SD' & source.type === 'buy');
        this.setState({ 
            subSources: sub,
            buySources: buy
        });
    }

    onTitleSelect = async title => {
        const response = await watchmode.get(`/title/${title.id}/sources/`);
        console.log("WATCHMODE REQUESTS REMAINING: " + response.headers["x-ratelimit-requests-remaining"]);
        // Filter response to contain only specific sources
        this.filterStream(response.data);
        this.setState({ 
            selectedTitle: title
        });
    }
    
    render() {
        return (
            <Container fluid>
                <Container className="navbar-container" fluid>
                    <NavigationBar onSubmit={this.onSearchSubmit} />
                </Container>
                <Container className="num-results-container">
                    <div className="num-results">{this.state.titles.length} Result(s)</div>
                </Container>
                <Container className="results-container">
                    <div style={{ float: 'left', width: '40%' }} >
                        <TitleList 
                            onTitleSelect={this.onTitleSelect} 
                            titles={this.state.titles}
                        />
                    </div>
                    <div style={{ float: 'left', width: '60%' }}>
                        <TitleDetail 
                            title={this.state.selectedTitle} 
                            subSources={this.state.subSources} 
                            buySources={this.state.buySources}
                        />
                    </div>
                </Container>
            </Container>

        );
    }
}

export default App;
