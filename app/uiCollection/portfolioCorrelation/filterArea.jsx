import React, { useEffect } from 'react'
import DropDown from './dropDown.jsx'

function FilterArea(props) {
    return (
        <div className='contentArea'>
            <div className='selectionArea'>
                <label className='labels'>Category:</label>
                <DropDown
                    label='category'
                    placeHolder='Select'
                    option={props.categoryOption}
                    selected={props.category}
                    setSelected={props.setCategory}
                    clearData={props.clearData}
                    setShowMenu={props.setShowMenu}
                    showMenu={props.showMenu}
                    setSchemeOption={props.setSchemeOption}
                    goClicked={props.goClicked}
                    setGoClicked={props.setGoClicked}

                />
            </div>
            <div className='selectionArea'>
                <label className='labels'>Scheme:</label>
                <DropDown
                    label='scheme'
                    placeHolder='Search'
                    isSearchable
                    option={props.schemeOption}
                    selected={props.scheme}
                    clearData={props.clearData}
                    setSelected={props.setScheme}
                    setShowMenu={props.setShowMenu}
                    showMenu={props.showMenu}
                    setSchemeOption={props.setSchemeOption}
                    goClicked={props.goClicked}
                    setGoClicked={props.setGoClicked}
                />
                {props.error && props.error['noScheme'] && <div className='errorMsg'>{props.error['noScheme']}</div>}
                {props.error && props.error['schemeAlready'] && <div className='errorMsg'>{props.error['schemeAlready']}</div>}
            </div>
            <div className='selectionArea' >
                <input type='button' onClick={() => { props.drillDownData(props.scheme); props.setGoClicked(true)}} className='goButton' value='GO' />
            </div>
            <div className='schemeList'>
                {props.schemeArr.length > 0 &&
                    <div className='displayList'>
                        <div className='listTitle'>
                            <label>
                                Schemes:
                            </label>
                        </div>
                        <div className='listBox'>
                            {props.schemeArr.map(obj => (
                                <div className='lists'>
                                    <span className='date'>Launch Date: {obj.launchDate}</span>
                                    <li className='list' >
                                        {obj.name} &nbsp;&nbsp;&nbsp;{obj.legend}
                                        <span className='deleteBtn' onClick={() => props.clearData('clearOne', obj)}>X</span>
                                    </li>
                                </div>
                            ))}
                            <button className='clearButton' ><span className='clearText'>Clear All</span><span className='deleteBtn' onClick={() => props.clearData('clearAll', props.schemeArr)}>X</span></button>
                        </div>
                    </div>}
            </div>
            <div className='timePeriodBox'>
                <label className='labels'>Period:</label>
                <DropDown
                    label='timePeriod'
                    placeHolder='Search'
                    option={props.timePeriodOption}
                    selected={props.timePeriod}
                    clearData={props.clearData}
                    setSelected={props.setTimePeriod}
                    setShowMenu={props.setShowMenu}
                    showMenu={props.showMenu}
                    goClicked={props.goClicked}
                    setGoClicked={props.setGoClicked}
                />
                {props.error && props.error['timePeriod'] && <div className='errorMsg'>{props.error['timePeriod']}</div>}
            </div>
            {props.error && props.error['twoSchemes']? <div className='errorMsg schemeError'>{props.error['twoSchemes']}</div> : props.error && props.error['fifteenSchemes']? <div className='errorMsg schemeError'>{props.error['fifteenSchemes']}</div> : ''}
            <button className='applyButton' onClick={() => props.matrixData(props.timePeriod && props.timePeriod.value)}>Apply</button>
        </div>
    )
}

export default FilterArea