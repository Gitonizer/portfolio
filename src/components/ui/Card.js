import classes from "./Card.module.css";
import { useCollapse } from "react-collapsed";
import { useContext, useState, useEffect, useRef } from "react";
import SideBarContext from "../../store/sidebar-context";

function Card(props) {
  const [isExpanded, setExpanded] = useState(true); // change it to true later maybe or have a default one
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const sidebarCtx = useContext(SideBarContext);

  useEffect(() => {
    var activateRegion = sidebarCtx.currentRegion == props.region;
    if (!props.propRef) {
      return;
    }
    if (activateRegion) {
      props.propRef.current.scrollIntoView();
    }
  }, [sidebarCtx.currentRegion, isExpanded]);

  return (
    <div
      className={isExpanded ? classes.cardContainer2 : classes.cardContainer}
    >
      <div className={classes.card}>
        <div {...getCollapseProps()}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Card;
