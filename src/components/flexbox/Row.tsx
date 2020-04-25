import React from "react";
import Grid, {GridProps} from "@material-ui/core/Grid";

export const Row = (props: GridProps) => {
    return (
        <Grid
            direction={"row"}
            {...props} />
    )
}
