import {ComputerScience, Electrical, Mechanical, BioTech} from './departments'
import {useState} from 'react'
import {Button} from '@material-ui/core'

 const s1 = {
    border: '1px solid red',
    width: '800px',
    boxShadow: '2px 3px 5px black',
    color: 'green',
    margin: 'auto',
    textAlign: 'center',
    textShadow: '1px 1px 2px light green, 1px 2px 1px yellow'
  }

  const s2 = {
    margin: 20
  }

const Skill3 = () => {
  const [dept, setDept] = useState(BioTech)

  const changeView = (dep) => {
    setDept (dep);
  }

  return (
    <div style = {s1}>

    <div>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(ComputerScience)}> CSE </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(Electrical)}> ECE </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(Mechanical)}> ME </Button>
    <Button style = {s2} variant="outlined" color="secondary" onClick = {() => changeView(BioTech)}> BT </Button>
    </div>

      <p> WELCOME TO SKILL MATERIAL UI</p>
      <img src = {dept[0].imageUrl} alt = "Bio Tech" width = '760' />
      <p> {dept[0].displayName} </p>
      <p> {dept[0].description} </p>
    </div>
    )
}

export default Skill3