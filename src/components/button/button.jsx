import { Button } from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Add, PlusOne } from "@mui/icons-material";

export const SaveButton = ({text, onClick}) => {
  return <Button variant="contained" color="success" startIcon={<SaveIcon />} onClick={onClick}>{text}</Button>;
}

export const CancelButton = ({text, onClick}) => {
  return <Button variant="contained" color="error" startIcon={<ExitToAppIcon />} onClick={onClick}>{text}</Button>;
}

export const AgregarButton = ({text, onClick, className}) => {
  return <Button variant="contained" color="primary" startIcon={<Add />} onClick={onClick} className={className}>{text}</Button>;
}
