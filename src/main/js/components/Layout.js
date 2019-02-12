import React from "react"
import { addUser } from "../actions/userActions"
import AddCount from "./AddCount"
import UserAccount from "./UserAccount"

export default class Layout extends React.Component {

  render() {
    
    return (
      <div class="text-center">
        <AddCount />
        <UserAccount />
      </div>
    )
  }
}
