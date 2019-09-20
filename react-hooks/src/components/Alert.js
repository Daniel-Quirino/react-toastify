import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CTX} from '../Store';
import alert from './alert.css'


export default function Alert() {

  const [appState, dispatch] = React.useContext(CTX);

  if (appState.error) {

    {toast.error('Ocorreu um erro inesperado', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });}

    return (
      <div>
        <ToastContainer 
          position="top-right"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange={false}
          draggable
          bodyClassName="teste"
          toastClassName="toast"
        />
      </div>
    );
  } else {
    return <></>
  }
    
}
