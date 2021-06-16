import Toolbar from 'components/Layout/Toolbar';
import { Forms } from 'components/Shared/Form/Forms';
import React, { Fragment, memo } from 'react';
import orderService from 'services/order';
import Swal from 'sweetalert2';

const OrderIndexPage = memo(() => {
  return (
    <Fragment>
      <Toolbar title='Pedidos' />
      <Forms
        onSubmit={async model => {
          try {
            const token = localStorage.getItem('authToken');
            const res = await orderService.save(token, model);
            if (res.status === 201) {
              Swal.fire({
                title: 'Sucesso!',
                text: 'Seu pedido foi realizado com sucesso',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
            }
          } catch (e) {
            Swal.fire({
              title: 'Ocorreu um erro!',
              text: 'Tente novamente mais tarde',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        }}
      />
    </Fragment>
  );
});

export default OrderIndexPage;
