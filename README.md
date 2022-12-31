# Track_Zone_F1
Requirements Breakdown
• We will have a local clock and a list of clocks
• We will create the initial clock from user timezone
• Clock object will look like
    ◦ id
    ◦ title
    ◦ timezone
        ▪ type (UTC, GMT, PST, EST)
        ▪ offset (Only for UTC and GMT)
    ◦ events
• Event object will look like
    ◦ id
    ◦ text
    ◦ clockId
    ◦ timezone
    ◦ startTime
    ◦ endTime
• We will use a clock object for local clock
• Use an array of clocks for other clocks
• We will use event id to create events inside clock
Clock Features
• properties
• update clock
• delete clock
• calculate difference
• update events
Event Features
• properties
• create event
• delete event
• update event
• filter event by clock
• get event by id
• get events by ids
Create wireframe of UI
আমরা ui এর একটা ওয়্যারফ্রেম বানাবো। তার জন্য আমরা wireframe.cc তে গিয়ে সহজেই সেটা বানাতে পারি।
Component Tree
App Component
Reusable components
UI Components
Clock Display Component
Clock Form Component
Clock Actions Component
Create Event Form Component
Hooks
Data Flow
 project data flow chart
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361105359/qYcHsXUfO.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361105359/qYcHsXUfO.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361210554/Enxr__Lh3.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361210554/Enxr__Lh3.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361295889/xZp23vZgg.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361295889/xZp23vZgg.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361350686/NJGDn-2CR.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361350686/NJGDn-2CR.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361406489/EmwuVPdmE.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361406489/EmwuVPdmE.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361479586/i1H4iQ9XJ.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361479586/i1H4iQ9XJ.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361528283/656X1EuAB.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361528283/656X1EuAB.jpg?auto=compress,format&format=webp)
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361563559/jV4KNrNwN.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361563559/jV4KNrNwN.jpg?auto=compress,format&format=webp)


project data and prop pass diagram
![https://cdn.hashnode.com/res/hashnode/image/upload/v1666361597873/57EMROBND.jpg?auto=compress,format&format=webp](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361597873/57EMROBND.jpg?auto=compress,format&format=webp)
