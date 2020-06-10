import React, {useEffect} from 'react'
import {Column} from "../../components/flexbox/Column"
import {Header} from "../../components/text/Header"
import {t} from "../../strings/i18n"
import {Paragraph} from "../../components/text/Paragraph";
import {useDispatch} from "react-redux";
import {setAppBarTitle} from "../../redux/actions/AppActions";

export const AboutMe = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAppBarTitle(t("about.title")))
    }, [])

    return (
        <Column padding={"0 16px"}>
            <Header>{t("about.title")}</Header>
            <Paragraph margin={"0 16px"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</Paragraph>
        </Column>
    );
}
