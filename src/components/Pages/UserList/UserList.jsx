import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
//import {DeleteOutline} from '@mui/icons-material';
import './UserList.css';

export default function UserList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Username', headerName: 'user', width: 200},
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'Status',
      headerName: 'status',
      width: 120,
    },

    {
      field: 'Transaction',
      headerName: 'Transaction',
      width: 160,
    },

     {
      field: 'Action',
      headerName: 'Action',
      width: 160,
    },
 
  ];
  
  const rows = [
    { id: 1, Username: 'clemency alex', Avatar:"https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg",
      email:"clemency@alex.com",
      Status:"Active",
      Transaction:"Tsh 34000",
      
    },

    { id: 2, Username: 'clemency alex', Avatar:"https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg",
      email:"clemency@alex.com",
      Status:"Active",
      Transaction:"Tsh 34000"
    },

    { id: 3, Username: 'clemency alex', Avatar:"https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg",
      email:"clemency@alex.com",
      Status:"Active",
      Transaction:"Tsh 34000"
    },

    { id: 4, Username: 'clemency alex', Avatar:"https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg",
      email:"clemency@alex.com",
      Status:"Active",
      Transaction:"Tsh 34000"
    },

    { id: 5, Username: 'clemency alex', Avatar:"https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg",
      email:"clemency@alex.com",
      Status:"Active",
      Transaction:"Tsh 34000"
    },

  ];

  return (
    <div className='UserList'>
       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
