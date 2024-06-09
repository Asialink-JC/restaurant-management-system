import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,

  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

const MenuItem = ({ item, setCurrentItem, deleteMenuItem }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <InfoIcon sx={{ verticalAlign: "middle", marginRight: "4px" }} />{" "}
          Category: {item.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <InfoIcon sx={{ verticalAlign: "middle", marginRight: "4px" }} />{" "}
          Options: {item.options}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <InfoIcon sx={{ verticalAlign: "middle", marginRight: "4px" }} />{" "}
          Price: ${item.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <InfoIcon sx={{ verticalAlign: "middle", marginRight: "4px" }} />{" "}
          Cost: ${item.cost}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <InfoIcon sx={{ verticalAlign: "middle", marginRight: "4px" }} />{" "}
          Stock: {item.stock}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Edit Item">
          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<EditIcon />}
            onClick={() => setCurrentItem(item)}
          >
            Edit
          </Button>
        </Tooltip>
        <Tooltip title="Delete Item">
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => deleteMenuItem(item.id)}
          >
            Delete
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default MenuItem;
