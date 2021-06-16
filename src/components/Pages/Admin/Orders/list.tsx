import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Toolbar from 'components/Layout/Toolbar';
import TableWrapper from 'components/Shared/TableWrapper';
import React, { Fragment, memo, useEffect, useState } from 'react';
import orderService from 'services/order';

const OrderListPage = memo(() => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    const token = localStorage.getItem('authToken');
    const list = await orderService.list(token);
    setList(list.data);
  };

  return (
    <Fragment>
      <Toolbar title='Pedidos' />
      <Card>
        <TableWrapper minWidth={500}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell>Quantidade</TableCell>
                <TableCell>Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map(order => (
                <TableRow key={order.id}>
                  <TableCell>{order.description}</TableCell>
                  <TableCell>{order.quantity}</TableCell>
                  <TableCell>R$ {order.value}</TableCell>{' '}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Card>
    </Fragment>
  );
});

export default OrderListPage;
