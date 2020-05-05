import React from "react"
import {AppBar} from "../../components/material/AppBar";
import {Tabs} from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import {t} from "../../strings/i18n";
import {Colors} from "../../resources/Colors";

interface IProps {
    selectedTabIndex: number
    onTabSelected?: any
}

export const GPAAppBar = (props: IProps) => {
    return (
        <AppBar>
            <Tabs
                className={"tabs"}
                value={props.selectedTabIndex}
                onChange={props.onTabSelected}
                TabIndicatorProps={{
                    style: {
                        backgroundColor: Colors.dark.textColor
                    }
                }}>
                <Tab className={"tab"} label={t("home.title")}/>
                <Tab className={"tab"} label={t("projects.title")}/>
                <Tab className={"tab"} label={t("contact.title")}/>
            </Tabs>
        </AppBar>
    )
}
