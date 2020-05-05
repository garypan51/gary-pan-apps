import React from 'react'
import MaterialPaper, {PaperProps} from '@material-ui/core/Paper'

interface IProps extends PaperProps {
}

export const Paper = (props: IProps) => {

    return (
        <MaterialPaper
            id={"material-paper"}
            variant={"elevation"}
            {...props}>
        </MaterialPaper>
    )
}

Paper.defaultProps = {
    elevation: 0
}
