import React, { Fragment, useState } from "react";

const Dropdown = (props) => {
  const [currentMenu, setCurrentMenu] = useState();
  const [value, setValue] = useState("");
  const [menu, setMenu] = useState(false);
  function handleChangeSchemeOption(event) {
    if (
      event.target.value == "" ||
      (props.selected && props.selected.length < 0)
    ) {
      setCurrentMenu(props.option);
    } else {
      const schemeFilteredData = props.option.filter((item)=>{
       return item.name.toLowerCase().includes(event.target.value.toLowerCase())
      })
      setCurrentMenu(schemeFilteredData);
    }
  }

  return (
    <>
      {props.isSearchable ? (
          <input type="search" className="dropdownContainer"
            onClick={() => {
              props.setShowMenu(props.label);
              setCurrentMenu(props.option);
              setMenu(!menu)
            }}
            onChange={event => {
              props.setShowMenu(props.label);
              setCurrentMenu(props.option);
              handleChangeSchemeOption(event);
              setValue(event.target.value)
              props.label == "scheme" && props.setGoClicked(false)
            }}
            placeholder="Search"
            value={(props.label == "scheme" && props.goClicked)?'':value}
          />
      )
      :(<div
            className="dropdownContainer"
            onClick={() => {props &&
              props.setShowMenu(props.label);
              setCurrentMenu(props.option);
              setMenu(!menu)
            }}
            >
            {(props.selected)?props.selected.name:'Select'}
            </div>
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
