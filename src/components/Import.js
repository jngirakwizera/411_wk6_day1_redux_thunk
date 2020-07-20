import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    IconButton,
    MenuItem,
    Menu
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'



const Import = (props) => {
    // fill out this component


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [clickedIndex, setClickedIndex] = React.useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

    const handleMore = (e, index) => {
        setClickedIndex(index);
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        props.deleteMake(clickedIndex);
    };

    return (
        <Container maxWidth="lg" className="car-container">
            <Button onClick={props.fetchMakes} >Import</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <div className="flex-container">
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>MAKE</TableCell>
                        <TableCell>ACTIONS</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => (
                        <TableRow key={make["MakeId"]}>
                            <TableCell>{make["MakeId"]}</TableCell>
                            <TableCell>{make["MakeName"]}</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={(e)=>handleMore(e,idx)}
                                >
                                    <MoreVert/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >

                    <MenuItem onClick={()=>handleClose()}>
                       Delete
                    </MenuItem>

            </Menu>
        </Container>
    )
}

export default Import