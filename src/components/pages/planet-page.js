import React, { Component } from 'react';
import Row from '../row';
import ErrorBountry from '../error-bountry';
import { PlanetDetails, PlanetList } from '../sw-components';

export default class PlanetPage extends Component {
    state = {
        selectedItem: 2,
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const itemList = (
            <PlanetList onItemSelected={this.onItemSelected} />
        );
        const itemDetails = (
            <PlanetDetails itemId={this.state.selectedItem} />
        )

        return (
            <ErrorBountry>
                <Row leftElement={itemList} rigthElement={itemDetails} />
            </ErrorBountry>
        )
    }
}

