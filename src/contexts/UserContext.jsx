/* eslint-disable react/prop-types */

import { createContext, useRef, useState, useEffect } from "react";
import { UserService } from "../services/user";
import { MyToast } from "../components/MyToast";

export const UserContext = createContext({
  name: "Guest",
  loggedIn: false,
  tasks: [],
  meetings: [],
});

const initialMeetings = [
  {
    meeting_title: "Demo meeting 1",
    meeting_description:
      "This meeting demonstrates the way meetings are displayed in the table",
    time: "23:59",
    reminder: "23:59",
    id: "1",
  },
  {
    meeting_title: "Demo meeting 2",
    meeting_description:
      "This meeting demonstrates the way meetings are displayed in the table",
    time: "23:59",
    reminder: "23:59",
    id: "2",
  },
  {
    meeting_title: "Demo meeting 3",
    meeting_description:
      "This meeting demonstrates the way meetings are displayed in the table",
    time: "23:59",
    reminder: "23:59",
    id: "3",
  },
];

const initialTasks = [
  {
    task_title: "Demo task 1",
    task_description:
      "This task demonstrates the way tasks are displayed in the table",
    time: "23:59",
    status: "Pending",
    id: "1",
  },
  {
    task_title: "Demo task 2",
    task_description:
      "This task demonstrates the way tasks are displayed in the table",
    time: "23:59",
    status: "Pending",
    id: "2",
  },
  {
    task_title: "Demo task 3",
    task_description:
      "This task demonstrates the way tasks are displayed in the table",
    time: "23:59",
    status: "Pending",
    id: "3",
  },
];

export const UserProvier = ({ children }) => {
  const userService = useRef(new UserService());
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("Guest");
  const [tasks, setTasks] = useState(initialTasks);
  const [meetings, setMeetings] = useState(initialMeetings);
  const [taskTimers, setTaskTimers] = useState([]);
  const [meetingTimers, setMeetingTimers] = useState([]);

  const logout = () => {
    userService.current.logout();
    setLoggedIn(false);
    setName("");
    setTasks([]);
    setMeetings([]);
    clearAllTimers();
  };

  const login = (username, password) => {
    // userService.login(username, password);
    setLoggedIn(true);
    setName(username);
  };

  const clearTaskTimers = (task) => {
    let indexForTimer
    taskTimers.forEach((timer, index) => {
      if (timer.id === task.id) {
        indexForTimer = index
        clearTimeout(timer.timer);
        setTaskTimers(taskTimers.filter((timer) => timer.id !== task.id))
      }
    });
  };

  const clearMeetingTimers = (meeting) => {
    meetingTimers.forEach((timer) => {
      if (timer.id === meeting.id) {
        clearTimeout(timer.timer);
        setMeetingTimers(meetingTimers.filter((timer) => timer.id !== meeting.id))
      }
    });
  };

  const clearAllTimers = () => {
    taskTimers.forEach((timer) => clearTimeout(timer));
    meetingTimers.forEach((timer) => clearTimeout(timer));
  };

  const scheduleTaskTimer = (task) => {
    const now = new Date();
    const taskTime = new Date();
    const [hours, minutes] = task.time.split(":");
    taskTime.setHours(hours, minutes);
    const delay = taskTime - now;

    const timer = setTimeout(() => {
      // Function to be executed when the timer triggers
      console.log(`Task ${task.task_title} is due!`);
      MyToast(`Task ${task.task_title} is due!`);
      removeTasks(task);
    }, delay);

    setTaskTimers((oldTimers) => oldTimers.concat({ timer, id: task.id }));
  };

  const scheduleMeetingTimer = (meeting) => {
    const now = new Date();
    const meetingTime = new Date();
    const [hours, minutes] = meeting.time.split(":");
    meetingTime.setHours(hours, minutes);
    const delay = meetingTime - now;

    const timer = setTimeout(() => {
      // Function to be executed when the timer triggers
      console.log(`Meeting ${meeting.meeting_title} is due!`);
      MyToast(`Meeting ${meeting.meeting_title} is due!`);
      removeMeetings(meeting);
    }, delay);

    setMeetingTimers((oldTimers) =>
      oldTimers.concat({ timer, id: meeting.id })
    );
  };

  const addTasks = (newTask) => {
    const now = new Date();
    const inputTime = new Date();
    const [hours, minutes] = newTask.time.split(":");
    inputTime.setHours(hours, minutes);

    if (inputTime < now) {
      console.error("Error task time cannot be in past");
      MyToast("The task cannot be in the past", "error");
      return;
    }

    setTasks((oldTasks) => {
      const updatedTasks = oldTasks.concat(newTask);
      scheduleTaskTimer(newTask);
      return updatedTasks;
    });
  };

  const removeTasks = (removeTask) => {
    setTasks((oldTasks) => {
      const updatedTasks = oldTasks.filter((item) => item.id !== removeTask.id);
      clearTaskTimers(removeTask);
      return updatedTasks;
    });
  };

  const addMeetings = (newMeeting) => {
    const now = new Date();
    const inputTime = new Date();
    const [hours, minutes] = newMeeting.time.split(":");
    inputTime.setHours(hours, minutes);

    if (inputTime < now) {
      console.error("Error task time cannot be in past");
      MyToast("The task cannot be in the past", "error");
      return;
    }
    setMeetings((oldMeetings) => {
      const updatedMeetings = oldMeetings.concat(newMeeting);
      scheduleMeetingTimer(newMeeting);
      return updatedMeetings;
    });
  };

  const removeMeetings = (removeMeeting) => {
    setMeetings((oldMeetings) => {
      const updatedMeetings = oldMeetings.filter(
        (item) => item.id !== removeMeeting.id
      );
      clearMeetingTimers(removeMeeting);
      return updatedMeetings;
    });
  };

  return (
    <UserContext.Provider
      value={{
        name,
        loggedIn,
        logout,
        login,
        tasks,
        meetings,
        addMeetings,
        addTasks,
        removeMeetings,
        removeTasks,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
