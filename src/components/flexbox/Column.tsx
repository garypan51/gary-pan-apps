import React from "react";
import Grid, {GridProps} from "@material-ui/core/Grid";

interface IProps extends GridProps{
    color?: string
}

export const Column = (props: IProps) => {
    return (
        <Grid
            direction={"column"}
            {...props} />
    )
}
