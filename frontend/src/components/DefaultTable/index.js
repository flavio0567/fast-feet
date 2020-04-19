// import React from 'react';
// import PropTypes from 'prop-types';

// import { Datatable } from '@o2xp/react-datatable';

// // import { Container } from './styles';

// export default function DefaultTable({ data: deliveries }) {
//   // console.tron.log(deliveries);
//   const array = [id, recipient, deliveryman, cidade, estado];

//   const rows = deliveries.forEach(giveValue);

//   function giveValue(item, i, array) {
//     array.id[i] = this.delivery.id;
//     array.recipient[i] = this.delivery.recipient.name;
//     array.deliveryman[i] = this.delivery.deliveryman.name;
//     array.cidade[i] = this.delivery.recipient.user.cidade;
//     array.estado[i] = this.delivery.recipient.user.estado;
//   }

//   const options = {
//     keyColumn: 'id',
//     data: {
//       columns: [
//         {
//           id: 'id',
//           label: 'ID',
//           colSize: '10px',
//         },
//         {
//           id: 'recipient',
//           label: 'Destinatário',
//           colSize: '50px',
//         },
//         {
//           id: 'deliveryman',
//           label: 'Entregador',
//           colSize: '50px',
//         },
//         {
//           id: 'cidade',
//           label: 'Cidade',
//           colSize: '30px',
//         },
//         {
//           id: 'estado',
//           label: 'Estado',
//           colSize: '30px',
//         },
//         {
//           id: 'status',
//           label: 'Status',
//           colSize: '30px',
//         },
//       ],
//       rows,
//     },
//   };

//   import React, { Component } from 'react';
//   import {BootstrapTable,
//          TableHeaderColumn} from 'react-bootstrap-table';
//   import '../css/Table.css';
//   import '../../node_modules/react-bootstrap-table/css/
//           react-bootstrap-table.css'


//   export default BluePrintTable() {
//       return (
//         <div>
//           <BootstrapTable data={this.props.data}>
//             <TableHeaderColumn isKey dataField='id'>
//               ID
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='recipient'>
//               Destinatário
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='deliveryman'>
//               Entregador
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='cidade'>
//               Cidade
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='estado'>
//               Estado
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='status'>
//               Status
//             </TableHeaderColumn>
//             <TableHeaderColumn dataField='actions'>
//               Ações
//             </TableHeaderColumn>
//           </BootstrapTable>
//         </div>
//       );
//   }
