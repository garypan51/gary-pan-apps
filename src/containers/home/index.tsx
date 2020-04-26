import React from 'react';
import './Home.scss';
import {Column} from "../../components/flexbox/Column";
import {StyledHeader} from "../../components/text/StyledHeader";
import {t} from "../../strings/i18n";

function App() {

    return (
        <Column>
            <StyledHeader type={"large"}>{t("app.name")}</StyledHeader>
            <p>World</p>
        </Column>
    );
}

export default App;
