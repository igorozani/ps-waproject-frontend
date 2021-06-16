/* eslint-disable react/jsx-no-bind */
import { Button, Card, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Form, Formik } from 'formik';
import * as React from 'react';

interface IValues {
  description: string;
  quantity: number;
  value: number;
}

interface IProps {
  onSubmit: (values: IValues) => void;
}

const useStyles = makeStyles({
  padding: {
    padding: 16
  },
  margin: {
    marginTop: '1rem',
    marginBottom: '1rem',
    marginRight: '1rem'
  }
});

export const Forms: React.FC<IProps> = ({ onSubmit }, props: IProps) => {
  const classes = useStyles(props);

  return (
    <Formik
      initialValues={{ description: '', quantity: 1, value: 1 }}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <Card className={classes.padding}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  name='description'
                  value={values.description}
                  onChange={handleChange}
                  label='Descrição'
                  fullWidth
                  autoComplete='description'
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name='quantity'
                  value={values.quantity}
                  onChange={handleChange}
                  type='number'
                  required
                  fullWidth
                  label='Quantidade'
                  autoComplete='quantity'
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  name='value'
                  value={values.value}
                  onChange={handleChange}
                  type='number'
                  required
                  label='Valor'
                  autoComplete='value'
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button className={classes.margin} variant='contained' color='primary' type='submit'>
              Realizar Pedido
            </Button>
          </Card>
        </Form>
      )}
    </Formik>
  );
};
