import React, { Component } from 'react';
import Row from '../row';
import ErrorBountry from '../error-bountry';
import { StarshipDetails, StarshipList } from '../sw-components';

export default class PlanetPage extends Component {
    state = {
        selectedItem: 9,
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const itemList = (
            <StarshipList onItemSelected={this.onItemSelected} />
        );
        const itemDetails = (
            <StarshipDetails itemId={this.state.selectedItem} />
        )

        return (
            <ErrorBountry>
                <Row leftElement={itemList} rigthElement={itemDetails} />
            </ErrorBountry>
        )
    }
}

