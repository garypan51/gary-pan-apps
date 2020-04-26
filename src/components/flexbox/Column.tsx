import React from "react";
import Grid, {GridProps} from "@material-ui/core/Grid";
import "./ContainerStyles.scss"

interface IProps extends GridProps{
    color?: string
}

export const Column = (props: IProps) => {
    return (
        <Grid
            className={"column-background"}
            direction={"column"}
            {...props} />
    )
}
