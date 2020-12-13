import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {LoginScreen} from "../components/login/LoginScreen"
import { ProductScreen } from "../components/products/ProductScreen";
import {Grid, makeStyles} from "@material-ui/core";

import Header from "../components/ui/Header/Header";
import  Home  from "../components/ui/Home/Home";


const useStyles = makeStyles(theme => ({
	margin: {
		overflow: "hidden",
        minHeight: "100%",
	},
}));

export default function AppRoutes() {
    const classes = useStyles();

    return(
        <Router>
            <div>
                <Grid container className={classes.margin}>
                    <Grid item xs={12}>
                        <Header />
                    </Grid> 
                    <Grid item xs={12}>
                        <Switch>
                            <Route exact path="/login" component={LoginScreen} />
                            <Route exact path='/product/:productId' component={ProductScreen}/>
                            <Route path="/" component={Home} /> 
                        </Switch>
                    </Grid>
                </Grid>
            </div>
        </Router>
    )
}
