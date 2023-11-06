import React, {useEffect, useState} from 'react';
import {IconButton} from "@material-ui/core";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    toTop: {
        width:"30px",
        height:"30px",
        boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        zIndex: 2,
        position: 'fixed',
        bottom: '2vh',
        backgroundColor: '#ffffff',
        color: '#000084',
        transition: '0.5s',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.5s',
            color: '#ffffff',
            backgroundColor: '#000084'
        },
        [theme.breakpoints.up('xs')]: {
            right: '3%',
            backgroundColor: 'rgb(255,255,255)',
        },
        [theme.breakpoints.up('lg')]: {
            right: '2%',
        },
    }
}));
const Scroll = ({showBelow}) => {
    const classes = useStyles();
    const [show, setShow] = useState(!showBelow);

    const handleScroll = () => {
        if (window.scrollY > 250) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if (showBelow) {
            document.addEventListener("scroll", handleScroll);

            return () => {
                document.removeEventListener("scroll", handleScroll);
            }
        }
    })

    function handleClick() {
        window[`scrollTo`]({top: 0, behavior: `smooth`})
    }

    return (
        <div>
            { show &&
            <IconButton onClick={handleClick} className={classes.toTop} aria-label="to top" component="span">
                {/*<ExpandLessIcon />*/}
                <i className="fa fa-hand-o-up" aria-hidden="true"/>
            </IconButton>
            }
        </div>
    );
}

export default Scroll;
