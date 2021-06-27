
import { useState } from 'react';

import Alert from 'react-bootstrap/Alert'

import './style.css';

function AlertDismissible() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
        <Alert 
            variant="danger" 
            onClose={() => setShow(false)} 
            className = "alertArea"
            dismissible
        >
          <p>
            Change this and that and try again. Duis mollis, est non commodo
          </p>
        </Alert>
      );
    }
  }
  
export default AlertDismissible