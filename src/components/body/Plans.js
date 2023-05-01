import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import { bg, itemColor } from '../navigation/NavBar'
import { Link } from 'react-router-dom'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  head: {
    fontWeight: 'bold',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    fontFamily: 'fantasy',

    fontSize: '1.5rem',
    borderRadius: '0 0 1.2rem 1.2rem',
  },
  text: {
    display: 'inline',
    fontSize: '1.7rem',
    backgroundColor: 'black',
    color: '#fff',
    border: `1px solid ${theme.palette.secondary.main}  `,
    borderRadius: '1.2rem',
    marginTop: theme.spacing(1),
  },
}))

const data = [
  {
    info: 'starter',
    withdrawal: 'initial withdrawal',
    initial: 'initial deposite',
    fund: '$100.00',
    initWithdraw: '$2500.00',
    bonus: '$20.00',
  },
  {
    info: 'basic',
    withdrawal: 'initial withdrawal',
    initial: 'initial deposite',
    fund: '$200.00',
    initWithdraw: '$4999.00',
    bonus: '$50.00',
  },
  {
    info: 'amature',
    withdrawal: 'initial withdrawal',
    initial: 'initial deposite',
    fund: '$300.00',
    initWithdraw: '$6500.00',
    bonus: '$70.00',
  },
  {
    info: 'starter',
    withdrawal: 'initial withdrawal',
    initial: 'initial deposite',
    fund: '$400.00',
    initWithdraw: '$8999.00',
    bonus: '$900.00',
  },
]

function Plans() {
  const classes = useStyles()
  return (
    <Container fluid className=" pb-5 pt-5">
      <Card.Title
        as="h3"
        className="text-bold text-light text-center text-uppercase pt-4 "
      >
        Our Investment Plans
      </Card.Title>

      <Row>
        {data.map((each) => (
          <Col
            sm="10"
            md="6"
            lg="3"
            className="text-center mt-5 plans"
            id={each.info}
          >
            <Card style={{ backgroundColor: itemColor }}>
              <Card.Header className={classes.head}>{each.info}</Card.Header>

              <Card.Text className={classes.text}>{each.fund}</Card.Text>

              <Card.Text className={classes.text}>{each.initial}</Card.Text>
              <Card.Text
                className={classes.text}
                style={{ fontSize: '1.2rem' }}
              >
                {each.fund}
              </Card.Text>
              <Card.Text className={classes.text}>{each.withdrawal}</Card.Text>
              <Card.Text
                className={classes.text}
                style={{ fontSize: '1.2rem' }}
              >
                {each.initWithdraw}
              </Card.Text>
              <Card.Text
                className={classes.text}
                style={{ fontSize: '1.5rem' }}
              >
                {each.bonus} Bonus Fund
              </Card.Text>
              <Link to="/signup" className="pb-3">
                <Button variant="contained" size="large" color="secondary">
                  Get Started
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Plans
