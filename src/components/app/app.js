import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        selectedItem: null
    }

    render() {
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="container">
                    <Header />
                    <RandomPlanet />
                    <PeoplePage />
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    {/* <PersonList />
                    <PlanetList />
                    <StarshipList /> */}
                </div>
            </SwapiServiceProvider>
        )
    };
};