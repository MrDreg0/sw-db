import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';

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
                <div className="container">
                    <Header onServiceChange={this.onServiceChange} />
                    <RandomPlanet />
                    <PeoplePage />
                    <PlanetPage />
                    <StarshipPage />
                </div>
            </SwapiServiceProvider>
        )
    };
};