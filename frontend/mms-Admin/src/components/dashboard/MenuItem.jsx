import React from "react";
import PropTypes from "prop-types";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { usePalette } from "../../theme/theme";

const ItemButton = styled(ListItemButton)(({ theme, selected }) => ({
  backgroundColor: selected ? "#FFFFFF" : "transparent",
  borderRight: `8px solid ${selected ? theme.palette.text : "transparent"}`,
}));
function MenuItem(props) {
  const { active, name, path, icon } = props;
  // const palette = usePalette();

  const navigate = useNavigate();

  return (
    <ItemButton
      selected={active}
      onClick={() => navigate(path)}
      sx={{
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>

      <ListItemText
        primaryTypographyProps={{
          color: active ? "#333333" : "#808080",
          fontWeight: "bold",
        }}
      >
        {name}
      </ListItemText>
    </ItemButton>
  );
}

MenuItem.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.node,
};

export default MenuItem;
