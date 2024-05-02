import classes from "./Card.module.css";
import { useCollapse } from "react-collapsed";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { useContext, useState, useEffect, useRef } from "react";
import SideBarContext from "../../store/sidebar-context";

function Card(props) {
  const [isExpanded, setExpanded] = useState(false); // change it to true later maybe or have a default one
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const sidebarCtx = useContext(SideBarContext);

  function handleOnClick() {
    setExpanded(!isExpanded);
  }

  useEffect(() => {
    var activateRegion = sidebarCtx.currentRegion == props.region;
    setExpanded(activateRegion);
    if (!props.propRef) {
      console.log(props.propRef + " is null");
      return;
    }
    if (activateRegion) {
      props.propRef.current.scrollIntoView();
    }
  }, [sidebarCtx.currentRegion]);

  return (
    <div
      className={isExpanded ? classes.cardContainer2 : classes.cardContainer}
    >
      <div className={classes.card}>
        <div className={classes.textTopLeft}>
          {isExpanded || sidebarCtx.currentRegion == props.currentRegion ? (
            <span>
              <MinusCircleIcon
                style={{ width: "20px", margin: "auto" }}
                {...getToggleProps({ onClick: handleOnClick })}
              />{" "}
              #region{" "}
            </span>
          ) : (
            <PlusCircleIcon
              style={{ width: "20px", margin: "auto" }}
              {...getToggleProps({ onClick: handleOnClick })}
            />
          )}
          {" " + props.textTop}
        </div>
        <div {...getCollapseProps()}>
          {props.children}
          <div className={classes.textBotLeft}>{props.textBot}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
