import React from 'react';
import './Projects.scss';
import {Column} from "../../components/flexbox/Column";
import {StyledHeader} from "../../components/text/StyledHeader";
import {t} from "../../strings/i18n";

function App() {

    return (
        <Column>
            <StyledHeader type={"large"}>Projects</StyledHeader>
        </Column>
    );
}

export default App;
