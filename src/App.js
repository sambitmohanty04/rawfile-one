import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      monstors : []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> {
      this.setState(()=>{
        return{monstors:users}
      },
      ()=>{
        console.log(this.state)
      })
    })
  }

  render() {
    return (
      <>
        <div className='App '>
          <input type='search'
          className='search-box'
          placeholder='Search Names'
          onChange={(e)=>{console.log(e.target.value)

            const searchName = e.target.value.toLocaleLowerCase()
            const filteredNames = this.state.monstors.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchName)
            })
            this.setState(()=>{
              return {monstors: filteredNames}
            })
          }} />
          {this.state.monstors.map((monster)=>{
            return <p>{monster.name}</p>
          })}
          {/* <button onClick={() =>
            this.setState(() => {
              return {
                name: 'siddhi'
              }
            })
          }>Change Name</button> */}
        </div>
      </>
    )
  }
}
