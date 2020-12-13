import React, { useEffect, useState } from 'react';
import Image from "../../../img/landscapeimg.jpg"
import { Box, Typography, makeStyles, Paper, Grid, Hidden } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {useFetch} from '../../../hooks/useFetch';

import WatchesSection from './WatchesSection';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      backgroundColor: theme.palette.text.secondary,
      borderRadius: 0,
    },
    paperContainer: {
      borderRadius: "0px",
      backgroundSize: "cover",
      backgroundImage: `url(${Image})`,
      backgroundPosition: "bottom",
      minHeight: "95vh",    
      position: "relative",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        minHeight: "60vh",
        backgroundPosition: "center",
      },
    },
    paperTitle: {
      bottom: "2rem",
      borderRadius: 0,
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      height: "5rem",
      justifyItems: "center",
      padding: "0.8rem",
      position: "absolute",
      right: "0.3rem",
      width: "30rem",
      [theme.breakpoints.down('sm')]: {
        alignItems: "center",
        bottom: "2rem",
        borderRadius: 0,
        justifyContent: "center",
        margin: 0,
        padding: "1rem 0 1rem 0",
        position: "relative",
        right: 0,
        width: "100%",
      },
    },
    arrowCustome: {
      marginLeft: "0.5rem",
      fontSize: "1.5rem"
    }
    
  }));
  
export default function Home() {
  const classes = useStyles();

  const [state, setstate] = useState({
    data: [],
    loading: true
  })

  const {datas, loadings} = useFetch('https://ecommerce-restapi.herokuapp.com/api/products');

  setstate({data: datas, loading: loadings})
    
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} className={classes.paperContainer}>
            <Hidden smDown>
              <Paper className={classes.paperTitle}>
                <Typography variant="h1">Welcome to Laccy</Typography>
                <Box display="flex" justifyContent="spaceBetween" alignItems="center">
                  <Typography variant="subtitle2">See full catalog</Typography>
                  <ArrowForwardIcon className={classes.arrowCustome}/>
                </Box>
              </Paper>
            </Hidden>
          </Grid>

          <Hidden mdUp>
            <Grid item xs={12} > 
              <Paper className={classes.paperTitle}>
                  <Typography variant="h1">Welcome to Laccy</Typography>
                  <Box display="flex" justifyContent="spaceBetween" alignItems="center">
                    <Typography variant="subtitle2">See full catalog</Typography>
                    <ArrowForwardIcon  className={classes.arrowCustome}/>
                  </Box>
                </Paper>
            </Grid>
          </Hidden>
        </Grid>
       
        
          <Grid container spacing={3}>
          { state.loading ? "Loading" : ""}
          <Grid item xs={6}>
            { state.data.map(p => (
                  <WatchesSection key={p._id} watch={p} />
              ))
            }
            </Grid>
          
            <Grid item xs={12}>
              <Box className={classes.paper}  display={{xs: "none", md: "block"}}>Se ve en pantalla grande</Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.paper}  display={{xs: "block", md: "none", lg: "none"}}>Se ve en pantalla chica</Box>
            </Grid>
            
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          <Grid/>
        </Grid>
      </div>
    );
  }
