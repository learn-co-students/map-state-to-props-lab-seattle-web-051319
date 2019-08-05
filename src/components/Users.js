import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            return <li key={user.key}>{user.username}</li>
          })}
          <h1>{this.props.userCount} Users</h1>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  let newUsers = []
  let userCount = 0
  for (let i = 0; i < state.users.length; i++) {
    let newUser = {...state.users[i], key: i}
    newUsers = [...newUsers, newUser]
    ++userCount
  }
  return { users: newUsers, userCount: userCount} 
}

export default connect(mapStateToProps)(Users);
