import React from 'react';
import './Contact.scss';
import {Column} from "../../components/flexbox/Column";
import {StyledHeader} from "../../components/text/StyledHeader";
import {t} from "../../strings/i18n";

function App() {

    return (
        <Column>
            <StyledHeader type={"large"}>Contacts</StyledHeader>
        </Column>
    );
}

export default App;
