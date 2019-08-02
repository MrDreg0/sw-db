import React, { Component } from 'react';
import Row from '../row';
import ErrorBountry from '../error-bountry';
import { PersonDetails, PersonList } from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: 1,
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem })
    }

    render() {
        const itemList = (
            <PersonList onItemSelected={this.onItemSelected} />
        );
        const itemDetails = (
            <PersonDetails itemId={this.state.selectedItem} />
        )

        return (
            <ErrorBountry>
                <Row leftElement={itemList} rigthElement={itemDetails} />
            </ErrorBountry>
        )
    }
}

