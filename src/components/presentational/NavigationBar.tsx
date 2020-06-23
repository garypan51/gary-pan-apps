import React, {useContext} from "react"
import {Row} from "../flexbox/Row";
import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {useOnMobile} from "../../hooks/UseOnMobile";
import {GPAPages} from "../../routes";
import {ThemeContext} from "styled-components";
import {Column} from "../flexbox/Column";
import {Paragraph} from "../text/Paragraph";
import {useNavigate} from "react-router";

interface NavigationLinkProps {
    title: string
    path: string
    margin?: string
}

const NavigationLink = (props: NavigationLinkProps) => {
    const navigate = useNavigate()
    const theme = useContext(ThemeContext)

    const onNavigationLinkClick = () => {
        navigate(props.path)
    }

    return (
        <Column onClick={onNavigationLinkClick}>
            <Paragraph
                onHoverColor={theme.accentColor}
                fontSize={"15px"}
                cursor={"pointer"}
                margin={"12px 48px 0 0"}>
                {props.title}
            </Paragraph>
        </Column>
    )
}

interface IProps {
}

// const StyledIconButton = styled(IconButton)`
//     &.iconButton {
//      :hover {
//           background-color: ${props => props.theme.rippleColor};
//         }
//     }
// `

export const NavigationBar = (props: IProps) => {
    const darkModeEnabled = useSelector((state: StoreState) => state.app.darkModeEnabled)
    const onMobile = useOnMobile()
    const pages = onMobile ? [GPAPages[1], GPAPages[2], GPAPages[3]] : [GPAPages[1], GPAPages[2], GPAPages[3]]
    const links = pages.map((page, index) =>
        <NavigationLink key={index} title={page.name} path={page.path} margin={"0"}/>
    )

    return (
        <Row
            width={"100vw"}
            justifyContent={"flex-end"}
            padding={"10px 2px 0 0"}>
            {links}
        </Row>
    )
}
