import React from "react";

const Evaluation = () => {
  return (
    <section className="Evaluation">
      <h1>Usability Evaluation</h1>
      <br></br>
      <h2>Overview</h2>
      <p>
        This evaluation aims to identify potential pain points and areas for
        improvement in the AI-powered personal assistant web application. The
        evaluation will cover key aspects such as AI integration, intuitive UI
        design, responsiveness, accessibility, and overall user experience.
      </p>
      <br></br>
      <h2>1. AI Integration:</h2>
      <h3>Strengths</h3>
      <ol className="alphabetic-list">
        <li>
          <b>Task Management AI Chat:</b> The chat feature on the Tasks page
          provides a potential for natural language processing capabilities,
          making it easier for users to manage their tasks through
          conversational AI.
        </li>
        <li>
          <b>Meeting Scheduler AI Chat:</b> Similar to the task management chat,
          the AI chat on the Meetings page could assist users in scheduling and
          managing their meetings.
        </li>
        <li>
          <b>Personalized Recommendations:</b> The personal profile page
          leverages user information to provide personalized recommendations,
          showcasing predictive analytics and personalization. It also has an
          add notes section that allows the user to provide feedback on the
          recommendations and allow for performance improvement. Note, the
          recommendations are only visible once the user profile is modified.
        </li>
      </ol>
      <h3>Pain Points</h3>
      <ol className="alphabetic-list">
        <li>
          <b>AI Chat Functionality:</b> Currently, the AI chat is a demo and
          does not function. It is only a text field but will have to be made a
          chat modal.
        </li>
        <li>
          <b>AI Responsiveness:</b> Ensure that the AI responds promptly and
          accurately to user inputs to avoid frustration and enhance user
          experience.
        </li>
        <li>
          <b>Voice AI component:</b> The current design does not includes a
          voice input section for users to talk with AI.
        </li>
      </ol>
      <br></br>
      <h2>2. Intuitive UI Design:</h2>
      <h3>Strengths</h3>
      <ol className="alphabetic-list">
        <li>
          <b>Clear Navigation: </b>The application features a straightforward
          navigation system with distinct pages for tasks, meetings, and
          personal profiles, making it easy for users to find what they need.
        </li>
        <li>
          <b>User-Friendly Layout: </b>Each page has a clean and organized
          layout, with tables and input fields neatly arranged.
        </li>
      </ol>
      <h3>Pain Points</h3>
      <ol className="alphabetic-list">
        <li>
          <b>Visual Appeal:</b> While functional, the visual design could be
          enhanced with more engaging graphics, icons, and color schemes to
          improve the overall aesthetic appeal.
        </li>
        <li>
          <b>Input Field Personalization:</b> The user profile section does not
          captures the true points users would want to add, one key feature that
          is missing is for users to add random info. This would require a
          dynamic form type, while keeping it more usable than notes section.
        </li>
        <li>
          <b>Intuitive component structure:</b> Tables are used app-wide to show
          schedules or recommendations. Calendar component better suits the
          need. Each component should be revised for intuitive structure.
        </li>
      </ol>
      <br></br>
      <h2>3. Responsiveness and Accessibility</h2>
      <h3>Strengths</h3>
      <ol className="alphabetic-list">
        <li>
          <b>Device Compatibility: </b>The application is designed to be
          responsive, catering to various devices such as desktops, tablets, and
          smartphones.
        </li>
      </ol>
      <h3>Pain Points</h3>
      <ol className="alphabetic-list">
        <li>
          <b>Accessibility Features: </b> Basic accessibility features like
          keyboard navigation and screen reader compatibility should be checked
          and ensured.
        </li>
        <li>
          <b>Accessibility Standards:</b> Ensure compliance with accessibility
          standards (such as WCAG) by incorporating features like alt text for
          images, proper labeling of form fields, and contrast ratios that
          support users with visual impairments.
        </li>
      </ol>
      <h2>4. Prototyping and Interaction</h2>
      <h3>Strengths</h3>
      <ol className="alphabetic-list">
        <li>
          <b>High-Fidelity Prototype:</b> The prototype demonstrates key user
          flows such as adding tasks, scheduling meetings, and viewing
          personalized recommendations. 
        </li>
        <li>
          <b>Interactive Elements:</b> Buttons and input fields are functional,
          allowing users to interact with the core features of the application.
        </li>
        <li>
          <b>Protected Routings:</b> Evaluation route is open for all viewers
          where as tasks, meetings and profile are only accessible to logged in
          users
        </li>
      </ol>
      <h3>Pain Points</h3>
      <ol className="alphabetic-list">
        <li>
          <b>Prototype Completeness:</b> The prototype should include working AI
          interactions to fully demonstrate the capabilities of the personal
          assistant.
        </li>
        <li>
          <b>User Needs Analysis:</b> Current design is not based on a proper
          user need analysis which could lead to the application being unusable
          for real world cases.
        </li>
      </ol>
      <br />
      <h1>Recommendations for Improvement</h1>
      <ol className="alphabetic-list">
        <li>
          <b>Implement Functional AI Chat:</b> Develop the AI chat functionality
          for making tasks through chat which should allow users to send voice
          inputs.
        </li>
        <li>
          <b>Enhance Visual Design:</b> Improve the visual aesthetics with
          engaging graphics, icons, and a cohesive color scheme to make the
          interface more appealing.
        </li>
        <li>
          <b>Accessibility and testing:</b> Validate accessibility compliance to
          cater to all users. Also ensure all keyboard inputs are working
          correctly.
        </li>
        <li>
          <b>Gather User Feedback:</b> Implement a feedback mechanism and
          conduct user testing sessions to gather insights and refine the design
          iteratively.
        </li>
      </ol>
      <br />
      <h1>Happy Flow for AI-Powered Personal Assistant Web Application</h1>

      <h2>1. Tasks</h2>
      <h3>Objective</h3>
      <p>
        Allow users to create tasks, ensure they don't create tasks in the past,
        and notify them when a task's time has arrived. Remove deleted tasks.
      </p>

      <h3>Steps</h3>
      <ol className="alphabetic-list">
        <li>
          <strong>Access Tasks Page:</strong>
          <ul>
            <li>User navigates to the "Tasks" page. The URL path is “/”.</li>
          </ul>
        </li>
        <li>
          <strong>Create a New Task:</strong>
          <ul>
            <li>User clicks on the "Add Task" button.</li>
            <li>
              A modal form appears with input fields for task name, description
              and time.
            </li>
          </ul>
        </li>
        <li>
          <strong>Input Task Details:</strong>
          <ul>
            <li>User fills in the task name, description and time.</li>
            <li>
              The system automatically checks if the selected time is in the
              future. If the user tries to set a past time:
              <ul>
                <li>An error message appears</li>
                <li>The user adjusts the date/time to a valid future time.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Submit Task:</strong>
          <ul>
            <li>User clicks on the "Save" or "Add Task" button.</li>
            <li>
              The task is added to the tasks table, displaying task name,
              description and time.
            </li>
            <li>Save button is disabled until all fields are filled.</li>
          </ul>
        </li>
        <li>
          <strong>Task Notification:</strong>
          <ul>
            <li>When the task time arrives, a toast notification appears.</li>
          </ul>
        </li>
        <li>
          <strong>Delete Tasks:</strong>
          <ul>
            <li>User can delete tasks from the table.</li>
          </ul>
        </li>
      </ol>
      <p>
        <strong>Outcome:</strong> The user successfully creates a task, is
        prevented from creating tasks in the past, receives a timely
        notification when the task is due and deletes unnecessary tasks.
      </p>

      <h2>2. Meetings</h2>
      <h3>Objective</h3>
      <p>
        Allow users to schedule meetings, ensure they don't schedule meetings in
        the past, and notify them when a meeting's time has arrived.
      </p>

      <h3>Steps</h3>
      <ol className="alphabetic-list">
        <li>
          <strong>Access Meetings Page:</strong>
          <ul>
            <li>
              User navigates to the "Meetings" page. URL path is “/meeting”.
            </li>
          </ul>
        </li>
        <li>
          <strong>Schedule a New Meeting:</strong>
          <ul>
            <li>User clicks on the "Add Meeting" button.</li>
            <li>
              A modal form appears with input fields for meeting title,
              description, reminder and time.
            </li>
          </ul>
        </li>
        <li>
          <strong>Input Meeting Details:</strong>
          <ul>
            <li>
              User fills in the meeting title, description, reminder, and time.
            </li>
            <li>
              The system automatically checks if the selected time is in the
              future. If the user tries to set a past time:
              <ul>
                <li>An error message appears</li>
                <li>The user adjusts the date/time to a valid future time.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Submit Meeting:</strong>
          <ul>
            <li>User clicks on the "Save" or "Add Meeting" button.</li>
            <li>
              The meeting is added to the meetings table, displaying meeting
              title, description, reminder, and time.
            </li>
            <li>Save button is disabled until all fields are filled.</li>
          </ul>
        </li>
        <li>
          <strong>Meeting Notification:</strong>
          <ul>
            <li>
              When the meeting time arrives, a toast notification appears.
            </li>
          </ul>
        </li>
        <li>
          <strong>Delete Meetings:</strong>
          <ul>
            <li>User can delete meetings from the table.</li>
          </ul>
        </li>
      </ol>
      <p>
        <strong>Outcome:</strong> The user successfully schedules a meeting, is
        prevented from scheduling meetings in the past, receives a timely
        notification when the meeting is starting and deletes unnecessary
        meetings.
      </p>

      <h2>3. Personal Profile and Recommendations</h2>
      <h3>Objective</h3>
      <p>
        Allow users to add personal information, generate task recommendations
        based on the profile, and add recommended tasks to the tasks table.
      </p>

      <h3>Steps</h3>
      <ol className="alphabetic-list">
        <li>
          <strong>Access Personal Profile Page:</strong>
          <ul>
            <li>User navigates to the "Profile" page.</li>
          </ul>
        </li>
        <li>
          <strong>Add Personal Information:</strong>
          <ul>
            <li>User fills in personal information fields.</li>
            <li>User clicks on the "Save" button to update their profile.</li>
          </ul>
        </li>
        <li>
          <strong>Generate Recommendations:</strong>
          <ul>
            <li>
              Based on the updated profile, the system generates personalized
              task recommendations.
            </li>
            <li>
              Recommendations appear as a list or cards below the profile
              information.
            </li>
          </ul>
        </li>
        <li>
          <strong>Review Recommendations:</strong>
          <ul>
            <li>
              User reviews the recommended tasks, which include task name,
              description, time.
            </li>
          </ul>
        </li>
        <li>
          <strong>Add Recommended Task to Tasks Table:</strong>
          <ul>
            <li>
              User selects a recommended task and clicks on the "Add Task"
              button.
            </li>
            <li>
              The recommended task is added to the tasks table on the "Tasks"
              page.
            </li>
          </ul>
        </li>
        <li>
          <strong>Task Notification:</strong>
          <ul>
            <li>
              When the recommended task time arrives, a toast notification
              appears.
            </li>
          </ul>
        </li>
      </ol>
      <p>
        <strong>Outcome:</strong> The user successfully updates their personal
        profile, receives personalized task recommendations, and can add these
        recommended tasks to their tasks table with notifications for due times.
      </p>
    </section>
  );
};

export default Evaluation;
