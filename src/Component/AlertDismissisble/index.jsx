
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
          Sale - From now till Jul 21, over 1,000 products up to 60% off!
          </p>
        </Alert>
      );
    }
  }
  
export default AlertDismissible