import React, { Fragment, useState } from "react";

const Dropdown = (props) => {
  const [currentMenu, setCurrentMenu] = useState();
  const [value, setValue] = useState("");
  const [menu, setMenu] = useState(false);
  function handleChangeSchemeOption(event) {
    const arr = [];
    if (
      event.target.value == "" ||
      (props.selected && props.selected.length < 0)
    ) {
      setCurrentMenu(props.option);
    } else {
      for (let i = 0; i < props.option.length; i++) {
        if (
          props.option[i].name
            .toLowerCase()
            .startsWith(event.target.value.toLowerCase())
        ) {
          arr.push(props.option[i]);
        }
      }
      setCurrentMenu(arr);
    }
  }

  return (
    <>
      {props.isSearchable && (
        <>
          <input
            type="search"
            className="dropdownContainer"
            onClick={() => {
              props.setShowMenu(props.label);
              setCurrentMenu(props.option);
              setMenu(true);
              setMenu(!menu)
            }}
            
            onChange={(event) => {
              props.setShowMenu(props.label);
              setCurrentMenu(props.option);
              handleChangeSchemeOption(event);
              setValue(event.target.value)
              setMenu(true);
              props.label == "scheme" && props.setGoClicked(false)
            }}
            placeholder="Search"
            value={(props.label == "scheme" && props.goClicked)?'':value}
          ></input>
        </>
      )}
      {menu && props.showMenu == props.label && (
        <div className="dropdownMenu">
          {currentMenu &&
            currentMenu.map((id) => (
              <div
                onClick={(e) => {
                  setValue(id.name);
                  props.setSelected(id);
                  props.setShowMenu("");
                  props.label == "scheme" && props.setGoClicked(false);
                }}
                key={id.value}
                className={`dropdownItem ${
                  !props.selected
                    ? false
                    : props.selected.value === id.value && "selected"
                }`}
              >
                {id.name}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
