import React, { useEffect, useState, useRef } from 'react'
import RightMain from './rightMain.jsx'
import { categoryOption, timePeriodOption, defaultSchemes } from '../../constants/portfolioCorrelation.js'
import axios from 'axios'
import '../../media/css/portfolioCorrelation.css'


export default function Index() {

  const [schemeOption, setSchemeOption] = useState()
  const [category, setCategory] = useState(categoryOption[0])
  const [timePeriod, setTimePeriod] = useState(timePeriodOption[1])
  const [scheme, setScheme] = useState([])
  const [count, setCount] = useState(defaultSchemes.length + 1)
  const [schemeArr, setSchemeArray] = useState(defaultSchemes)
  const [showMatrix, setShowMatrix] = useState(false)
  const [navData, setNavData] = useState()
  const [showMenu, setShowMenu] = useState('')
  const [error, setError] = useState({})
  const [goClicked, setGoClicked] = useState(true)

  const clearData = (field, data) => {
    switch (field) {
      case 'clearOne':
        setCount(10)
        const index = schemeArr.findIndex((item) => item.schid === data.schid)
        schemeArr.splice(index, 1)
        for (let i = 0; i < schemeArr.length; i++) {
          schemeArr[i].legend = "SC" + (i + 1)
          setCount(count - 1)
          setShowMatrix(false)
        }
        if(schemeArr.length == 0)
        setCount(1)
        break
      case 'clearAll':
        setCount(1)
        schemeArr.splice(0,)
        setShowMatrix(false)
        break
      default:
    }
  }
  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setError({});
      }, 5000);
      return () => clearTimeout(timeoutId);
  }, [error]);
  const drillDownData = (obj) => {
    if (obj == '') {
      setInterval(setError({'noScheme':'Please select scheme!'}),1000)
    }
    else if (schemeArr.some(obj => obj.schid == scheme.schid)) {
      setError({'schemeAlready':'Scheme already exist'})
      return
    }
    else {
      setError({})
      axios.get("api/portfolioCorrelation/getLaunchDate", {
        params: {
          schid: obj.schid
        }
      })
        .then((response) => {
          if (response.data.status == -1) {
            const newObj = { ...obj, launchDate: '' }
            let updatedSchemeArray = Array.from(schemeArr)
            updatedSchemeArray.push(newObj)
            setSchemeArray(updatedSchemeArray)
          }
          else {
            if (response.data.result == "Scheme ID doesn't exist") {
              setError({'noSchemeId':'Invalid Scheme!'})
            }
            else {
              const newObj = { ...obj, launchDate: response.data && response.data.result, legend: `SC${count}` }
              let updatedSchemeArray = Array.from(schemeArr)
              updatedSchemeArray.push(newObj)
              setSchemeArray(updatedSchemeArray)
              setCount(count + 1)
              setShowMatrix(false)
            }
          }
        })
        .catch(error => {
          setShowMatrix(false)
        })
    }
  }
  const matrixData = () => {
    if (!timePeriod) {
      setError({'timePeriod':'Please select time period!'})
    }
    else if (schemeArr && schemeArr.length  < 2) {
      setError({'twoSchemes':'Please select atleast two schemes'})
    }
    else if (schemeArr.length > 15) {
      setError({'fifteenSchemes':'Only 15 schemes can be selected!!'})
    }
    else{
    setError({})
    let data = schemeArr.map(obj => obj.schid)
    axios.get("api/portfolioCorrelation/createCorrelationMatrix", {
      params: {
        schid: { 'arr': data },
        timePeriod: timePeriod && timePeriod.value
      }
    })
      .then(response => {
        if (response.data.status == -1) {
          setError(response.data.result)

        }
        else {
          setShowMatrix(true)
          let responseData = response.data.result
          setNavData(responseData)
        }
      })
      .catch(error => {
        setShowMatrix(false)
      })
    }
  }

  useEffect(() => {
    let data = schemeArr.map(obj => obj.schid)
    axios.get("api/portfolioCorrelation/createCorrelationMatrix", {
      params: {
        schid: { 'arr': data },
        timePeriod: timePeriod && timePeriod.value
      }
    })
      .then(response => {
        if (response.data.status == -1) {
          setError(response.data.result)

        }
        else {
          setShowMatrix(true)
          setNavData(response.data.result)
        }
      })
      .catch(error => {
        setShowMatrix(false)
      })
  },[])
  useEffect(() => {
    if (category) {
      axios.get("api/portfolioCorrelation/getSchemes", {
        params: {
          category: category && category.value
        }
      })
        .then(response => {
          response.data && response.data.status == 0 &&
            setSchemeOption(response.data.result)

        })
        .catch(error => {
          setShowMatrix(false)
        })
    }
  }, [category])

  return (
  <>
    <title>Portfolio Correlation</title>
    <div id = "portfolioCorrelation">
      <RightMain
        category={category}
        setSchemeOption={setSchemeOption}
        setCategory={setCategory}
        categoryOption={categoryOption}
        timePeriodOption={timePeriodOption}
        schemeOption={schemeOption}
        timePeriod={timePeriod}
        setTimePeriod={setTimePeriod}
        scheme={scheme}
        setScheme={setScheme}
        schemeArr={schemeArr}
        showMatrix={showMatrix}
        setShowMatrix={setShowMatrix}
        matrixData={matrixData}
        navData={navData}
        drillDownData={drillDownData}
        count={count}
        setCount={setCount}
        clearData={clearData}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        error={error}
        goClicked={goClicked}
        setGoClicked={setGoClicked}
      />
    </div>
    </>
  )
}