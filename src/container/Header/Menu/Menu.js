import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 30,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

const Menu = () => {
    const classes = useStyles()

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Тут буде лого
                        </Typography>
                        <Button color="inherit">
                            <ShoppingCartIcon />
                        </Button>
                        <Button color="inherit">Категорії</Button>
                        <Button color="inherit">Про нас</Button>
                        <Button color="inherit">Контакти</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Menu
