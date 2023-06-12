import React, { Component } from 'react'
import './App.css'
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      monstors : [],
      searchField: ''
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

    const filteredNames = this.state.monstors.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <>
        <div className='App '>
          <input type='search'
          className='search-box'
          placeholder='Search Names'
          onChange={(e)=>{console.log(e.target.value)

            const searchField = e.target.value.toLocaleLowerCase()
            
            this.setState(()=>{
              return {searchField}
            })
          }} />
          {filteredNames.map((monster)=>{
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
