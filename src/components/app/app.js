import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        return (
            <SwapiServiceProvider value={this.state.swapiService}>
                <Router>
                    <div className="container">
                        <Header onServiceChange={this.onServiceChange} />
                        <RandomPlanet />

                        <Route path="/"
                            render={() => <h2>Welcome to StarDB</h2>}
                            exact />
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path="/planets" component={PlanetPage} />
                        <Route path="/starships" exact component={StarshipPage} />
                        <Route path="/starships/:id"
                            render={({ match }) => {
                                const { id } = match.params;
                                return <StarshipDetails itemId={id} />
                            }} />
                    </div>
                </Router>
            </SwapiServiceProvider>
        )
    };
};