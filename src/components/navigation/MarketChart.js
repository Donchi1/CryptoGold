import React from 'react'

import { Grid, Container, Card, Avatar, makeStyles } from '@material-ui/core'
import { itemColor } from './NavBar'
import * as Icons from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  avater: {
    padding: '3.5rem',
    backgroundColor: theme.palette.secondary.main,
  },
  textColor: {
    color: '#fff',
    marginTop: theme.spacing(1),

    borderRadius: '1.8rem',

    padding: theme.spacing(2),
  },
  card: {
    borderRadius: '1.5rem',
    backgroundColor: itemColor,
    marginTop: theme.spacing(1),
  },
  container: {
    marginTop: theme.spacing(2),
  },
}))

function MarketChart() {
  const classes = useStyles()
  return (
    <Container component="main" className={classes.container}>
      <Grid container justify="space-around" alignItems="center" xs={12} lg={3}>
        <Card variant="outlined" className={classes.card}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Avatar className={classes.avater}>
              <Icons.WallpaperSharp fontSize="large" />
            </Avatar>

            <h2 className={classes.textColor}>Online Users Data</h2>
            <h4 className={classes.textColor}>500k</h4>
          </Grid>
        </Card>

        <Card variant="outlined" className={classes.card}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Avatar className={classes.avater}>
              <Icons.WallpaperSharp fontSize="large" />
            </Avatar>

            <h2 className={classes.textColor}>Daily Transactions</h2>
            <h4 className={classes.textColor}>50,000k</h4>
          </Grid>
        </Card>

        <Card variant="outlined" className={classes.card}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Avatar className={classes.avater}>
              <Icons.WallpaperSharp fontSize="large" />
            </Avatar>

            <h2 className={classes.textColor}>Monthly Payments</h2>
            <h4 className={classes.textColor}>$500,000</h4>
          </Grid>
        </Card>
        <Card variant="outlined" className={classes.card}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
          >
            <Avatar className={classes.avater}>
              <Icons.WallpaperSharp fontSize="large" />
            </Avatar>

            <h2 className={classes.textColor}>world value and rate</h2>
            <h4 className={classes.textColor}>80.99%</h4>
          </Grid>
        </Card>
      </Grid>
    </Container>
  )
}

export default MarketChart
