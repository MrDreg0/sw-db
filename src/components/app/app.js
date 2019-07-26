import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
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
    state = {
        swapiService: new SwapiService(),
        selectedItem: null
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
                <div className="container">
                    <Header onServiceChange={this.onServiceChange} />
                    <RandomPlanet />
                    <PeoplePage />
                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={5} />
                    <StarshipDetails itemId={9} />

                    <PersonList />
                    <PlanetList />
                    <StarshipList />
                </div>
            </SwapiServiceProvider>
        )
    };
};