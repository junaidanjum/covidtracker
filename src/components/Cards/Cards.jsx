import React from 'react';

import { Grid, Card, CardContent, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classnames'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    const Counter = ({ detail }) => {
        return (
            <CountUp
                start={0}
                end={detail.value}
                duration={1.5}
                separator="," />
        )
    }
    if (!confirmed) {
        return 'Loading...'
    }
    else {
        return (
            <div className={styles.container}>
                <Grid container justify="center">
                    <Grid item xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom> Infected </Typography>
                                <Typography variant="h5" component="h2"> <Counter detail={confirmed} /></Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2" component="p"> Number of active cases of COVID-19</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                                <Typography variant="h5" component="h2"> <Counter detail={recovered} /></Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2" component="p"> Number of recoveries from COVID-19</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <Card>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom> Deaths </Typography>
                                <Typography variant="h5" component="h2"> <Counter detail={deaths} /> </Typography>
                                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2" component="p"> Number of deaths caused by COVID-19</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    };
};

export default Cards;