import React from 'react';
import Row from '../row';
import ErrorBountry from '../error-bountry';
import { PersonDetails, PersonList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <ErrorBountry>
            <Row
                leftElement={<PersonList onItemSelected={(id) => history.push(id)} />}
                rigthElement={<PersonDetails itemId={id} />} />
        </ErrorBountry>
    )

}

export default withRouter(PeoplePage);

