import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import List from "./List.js"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[
        {
            "id": 5,
            "user_id": 4,
            "text": "Walla walla walla",
            "complete": false,
            "created_at": "2016-08-17T19:56:40.739Z",
            "updated_at": "2016-08-23T02:47:24.358Z"
        },
        {
            "id": 6,
            "user_id": 4,
            "text": "Finish Assignment",
            "complete": false,
            "created_at": "2016-08-17T20:06:34.874Z",
            "updated_at": "2016-08-17T20:06:34.874Z"
        },
        {
            "id": 7,
            "user_id": 4,
            "text": "Hello Everyone!",
            "complete": true,
            "created_at": "2016-08-17T20:29:10.919Z",
            "updated_at": "2016-08-17T20:29:10.919Z"
        },
        {
            "id": 8,
            "user_id": 4,
            "text": "This thing works!",
            "complete": false,
            "created_at": "2016-08-17T20:29:23.775Z",
            "updated_at": "2016-08-17T20:29:23.775Z"
        },
        {
            "id": 15,
            "user_id": 4,
            "text": "Finish Homework",
            "complete": false,
            "created_at": "2016-08-17T20:33:10.962Z",
            "updated_at": "2016-08-17T20:33:10.962Z"
        },
        {
            "id": 17,
            "user_id": 4,
            "text": "lalala",
            "complete": false,
            "created_at": "2016-08-17T20:41:46.741Z",
            "updated_at": "2016-08-17T20:41:46.741Z"
        },
        {
            "id": 18,
            "user_id": 4,
            "text": "gotta get groceries",
            "complete": false,
            "created_at": "2016-08-17T20:42:24.088Z",
            "updated_at": "2016-08-17T20:42:24.088Z"
        },
        {
            "id": 20,
            "user_id": 4,
            "text": "eat breakfast",
            "complete": false,
            "created_at": "2016-08-17T20:42:59.666Z",
            "updated_at": "2016-08-17T20:42:59.666Z"
        },
        {
            "id": 21,
            "user_id": 4,
            "text": "get gas",
            "complete": false,
            "created_at": "2016-08-17T20:43:03.317Z",
            "updated_at": "2016-08-17T20:43:03.317Z"
        },
        {
            "id": 22,
            "user_id": 4,
            "text": "grab bookbag",
            "complete": false,
            "created_at": "2016-08-17T20:43:08.644Z",
            "updated_at": "2016-08-17T20:43:08.644Z"
        },
        {
            "id": 23,
            "user_id": 4,
            "text": "drive to school",
            "complete": false,
            "created_at": "2016-08-17T20:43:14.642Z",
            "updated_at": "2016-08-17T20:43:14.642Z"
        },
        {
            "id": 28,
            "user_id": 4,
            "text": "sndkn",
            "complete": false,
            "created_at": "2016-08-17T20:45:46.761Z",
            "updated_at": "2016-08-17T20:45:46.761Z"
        },
        {
            "id": 29,
            "user_id": 4,
            "text": "fdsann",
            "complete": false,
            "created_at": "2016-08-17T20:45:48.488Z",
            "updated_at": "2016-08-17T20:45:48.488Z"
        },
        {
            "id": 30,
            "user_id": 4,
            "text": "fdnakn",
            "complete": false,
            "created_at": "2016-08-17T20:45:49.811Z",
            "updated_at": "2016-08-17T20:45:49.811Z"
        },
        {
            "id": 31,
            "user_id": 4,
            "text": "dankdna",
            "complete": false,
            "created_at": "2016-08-17T20:45:55.102Z",
            "updated_at": "2016-08-17T20:45:55.102Z"
        },
        {
            "id": 32,
            "user_id": 4,
            "text": "ilhfnda",
            "complete": false,
            "created_at": "2016-08-17T20:46:00.538Z",
            "updated_at": "2016-08-17T20:46:00.538Z"
        },
        {
            "id": 34,
            "user_id": 4,
            "text": "morning",
            "complete": false,
            "created_at": "2016-08-17T20:56:47.946Z",
            "updated_at": "2016-08-17T20:56:47.946Z"
        },
        {
            "id": 38,
            "user_id": 4,
            "text": "gfda",
            "complete": false,
            "created_at": "2016-08-17T21:05:21.437Z",
            "updated_at": "2016-08-17T21:05:21.437Z"
        },
        {
            "id": 40,
            "user_id": 4,
            "text": "tta",
            "complete": false,
            "created_at": "2016-08-17T21:08:12.141Z",
            "updated_at": "2016-08-17T21:08:12.141Z"
        },
        {
            "id": 41,
            "user_id": 4,
            "text": "dbjabfea",
            "complete": false,
            "created_at": "2016-08-17T21:08:13.448Z",
            "updated_at": "2016-08-17T21:08:13.448Z"
        },
        {
            "id": 42,
            "user_id": 4,
            "text": "a kfena",
            "complete": false,
            "created_at": "2016-08-17T21:08:14.597Z",
            "updated_at": "2016-08-17T21:08:14.597Z"
        },
        {
            "id": 43,
            "user_id": 4,
            "text": "morning",
            "complete": false,
            "created_at": "2016-08-17T21:08:16.074Z",
            "updated_at": "2016-08-17T21:08:16.074Z"
        },
        {
            "id": 44,
            "user_id": 4,
            "text": "fdaifa",
            "complete": false,
            "created_at": "2016-08-17T21:08:23.523Z",
            "updated_at": "2016-08-17T21:08:23.523Z"
        },
        {
            "id": 45,
            "user_id": 4,
            "text": "love",
            "complete": false,
            "created_at": "2016-08-17T21:08:25.542Z",
            "updated_at": "2016-08-17T21:08:25.542Z"
        },
        {
            "id": 46,
            "user_id": 4,
            "text": "ldsajldjsf",
            "complete": false,
            "created_at": "2016-08-17T21:09:51.360Z",
            "updated_at": "2016-08-17T21:09:51.360Z"
        },
        {
            "id": 47,
            "user_id": 4,
            "text": "jfjy",
            "complete": false,
            "created_at": "2016-08-17T21:10:16.675Z",
            "updated_at": "2016-08-17T21:10:16.675Z"
        },
        {
            "id": 48,
            "user_id": 4,
            "text": "zxXZ",
            "complete": false,
            "created_at": "2016-08-17T21:10:42.186Z",
            "updated_at": "2016-08-17T21:10:42.186Z"
        },
        {
            "id": 51,
            "user_id": 4,
            "text": "hwllo",
            "complete": false,
            "created_at": "2016-08-17T21:14:45.102Z",
            "updated_at": "2016-08-17T21:14:45.102Z"
        },
        {
            "id": 52,
            "user_id": 4,
            "text": "sdfjdskfl",
            "complete": false,
            "created_at": "2016-08-17T21:16:44.378Z",
            "updated_at": "2016-08-17T21:16:44.378Z"
        },
        {
            "id": 53,
            "user_id": 4,
            "text": "fsdjsldk",
            "complete": false,
            "created_at": "2016-08-17T21:17:07.083Z",
            "updated_at": "2016-08-17T21:17:07.083Z"
        },
        {
            "id": 80,
            "user_id": 4,
            "text": "jenell",
            "complete": false,
            "created_at": "2016-08-17T22:53:34.982Z",
            "updated_at": "2016-08-17T22:53:34.982Z"
        },
        {
            "id": 81,
            "user_id": 4,
            "text": "pizarro",
            "complete": false,
            "created_at": "2016-08-17T22:53:36.778Z",
            "updated_at": "2016-08-17T22:53:36.778Z"
        },
        {
            "id": 85,
            "user_id": 4,
            "text": "blah",
            "complete": false,
            "created_at": "2016-08-17T22:54:27.116Z",
            "updated_at": "2016-08-17T22:54:27.116Z"
        },
        {
            "id": 94,
            "user_id": 4,
            "text": "hey",
            "complete": false,
            "created_at": "2016-08-17T23:32:54.971Z",
            "updated_at": "2016-08-17T23:32:54.971Z"
        },
        {
            "id": 95,
            "user_id": 4,
            "text": "stuff",
            "complete": false,
            "created_at": "2016-08-17T23:32:56.320Z",
            "updated_at": "2016-08-17T23:32:56.320Z"
        },
        {
            "id": 96,
            "user_id": 4,
            "text": "things",
            "complete": false,
            "created_at": "2016-08-17T23:32:57.153Z",
            "updated_at": "2016-08-17T23:32:57.153Z"
        },
        {
            "id": 97,
            "user_id": 4,
            "text": "hey",
            "complete": false,
            "created_at": "2016-08-17T23:33:06.911Z",
            "updated_at": "2016-08-17T23:33:06.911Z"
        },
        {
            "id": 98,
            "user_id": 4,
            "text": "stuff",
            "complete": false,
            "created_at": "2016-08-17T23:33:08.384Z",
            "updated_at": "2016-08-17T23:33:08.384Z"
        },
        {
            "id": 99,
            "user_id": 4,
            "text": "things",
            "complete": false,
            "created_at": "2016-08-17T23:33:09.411Z",
            "updated_at": "2016-08-17T23:33:09.411Z"
        },
        {
            "id": 102,
            "user_id": 4,
            "text": "nellarro",
            "complete": false,
            "created_at": "2016-08-17T23:35:16.856Z",
            "updated_at": "2016-08-17T23:35:16.856Z"
        },
        {
            "id": 103,
            "user_id": 4,
            "text": "nellarro",
            "complete": false,
            "created_at": "2016-08-17T23:35:29.283Z",
            "updated_at": "2016-08-17T23:35:29.283Z"
        },
        {
            "id": 108,
            "user_id": 4,
            "text": "blah",
            "complete": false,
            "created_at": "2016-08-18T00:00:51.662Z",
            "updated_at": "2016-08-18T00:00:51.662Z"
        },
        {
            "id": 149,
            "user_id": 4,
            "text": "Test",
            "complete": false,
            "created_at": "2016-08-18T01:25:12.210Z",
            "updated_at": "2016-08-18T01:25:12.210Z"
        },
        {
            "id": 256,
            "user_id": 4,
            "text": "nsdnd",
            "complete": false,
            "created_at": "2016-08-18T04:13:20.023Z",
            "updated_at": "2016-08-18T04:13:20.023Z"
        },
        {
            "id": 263,
            "user_id": 4,
            "text": "matt",
            "complete": false,
            "created_at": "2016-08-18T13:32:16.145Z",
            "updated_at": "2016-08-18T13:32:16.145Z"
        },
        {
            "id": 264,
            "user_id": 4,
            "text": "schwartz",
            "complete": false,
            "created_at": "2016-08-18T13:32:18.509Z",
            "updated_at": "2016-08-18T13:32:18.509Z"
        },
        {
            "id": 265,
            "user_id": 4,
            "text": "is",
            "complete": false,
            "created_at": "2016-08-18T13:32:19.983Z",
            "updated_at": "2016-08-18T13:32:19.983Z"
        },
        {
            "id": 266,
            "user_id": 4,
            "text": "my",
            "complete": false,
            "created_at": "2016-08-18T13:32:20.843Z",
            "updated_at": "2016-08-18T13:32:20.843Z"
        },
        {
            "id": 267,
            "user_id": 4,
            "text": "name",
            "complete": false,
            "created_at": "2016-08-18T13:32:22.389Z",
            "updated_at": "2016-08-18T13:32:22.389Z"
        },
        {
            "id": 270,
            "user_id": 4,
            "text": "test",
            "complete": false,
            "created_at": "2016-08-18T13:35:08.599Z",
            "updated_at": "2016-08-18T13:35:08.599Z"
        },
        {
            "id": 271,
            "user_id": 4,
            "text": "test",
            "complete": false,
            "created_at": "2016-08-18T13:35:13.890Z",
            "updated_at": "2016-08-18T13:35:13.890Z"
        },
        {
            "id": 273,
            "user_id": 4,
            "text": "matt",
            "complete": false,
            "created_at": "2016-08-18T13:56:16.377Z",
            "updated_at": "2016-08-18T13:56:16.377Z"
        },
        {
            "id": 274,
            "user_id": 4,
            "text": "schwartz",
            "complete": false,
            "created_at": "2016-08-18T13:56:19.602Z",
            "updated_at": "2016-08-18T13:56:19.602Z"
        },
        {
            "id": 299,
            "user_id": 4,
            "text": "Test ",
            "complete": false,
            "created_at": "2016-08-18T14:08:01.018Z",
            "updated_at": "2016-08-18T14:08:01.018Z"
        },
        {
            "id": 300,
            "user_id": 4,
            "text": "test1",
            "complete": false,
            "created_at": "2016-08-18T14:08:04.934Z",
            "updated_at": "2016-08-18T14:08:04.934Z"
        },
        {
            "id": 301,
            "user_id": 4,
            "text": "test2",
            "complete": false,
            "created_at": "2016-08-18T14:08:07.363Z",
            "updated_at": "2016-08-18T14:08:07.363Z"
        },
        {
            "id": 303,
            "user_id": 4,
            "text": "whatever",
            "complete": false,
            "created_at": "2016-08-18T14:08:09.511Z",
            "updated_at": "2016-08-18T14:08:09.511Z"
        },
        {
            "id": 403,
            "user_id": 4,
            "text": "wat",
            "complete": false,
            "created_at": "2016-08-19T03:52:32.730Z",
            "updated_at": "2016-08-19T03:52:32.730Z"
        }
    ]
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <p> My header</p>
          <button>+ </button>
        </header>
        <List items={this.state.items}/>
        <footer>my footer</footer>
      </div>
    )
  }
}

export default App
