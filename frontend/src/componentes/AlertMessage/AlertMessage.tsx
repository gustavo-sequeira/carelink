
import { Alert } from 'react-bootstrap';

type AlertVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

interface AlertMessageProps {
  variant?: AlertVariant;
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
}

const AlertMessage: React.FC<AlertMessageProps> = ({
  variant = 'info',
  message,
  dismissible = true,
  onClose,
}) => {
  if (!message) return null;
  return (

    <Alert
      variant={variant}
      dismissible={dismissible}
      onClose={onClose}
      role="alert"
      className="mt-3"
    >
      {message}
    </Alert>
  );
};

export default AlertMessage;
