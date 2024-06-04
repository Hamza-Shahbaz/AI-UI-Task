import { Link, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsTwoToneIcon from '@mui/icons-material/GroupsTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function Topbar() {
  const { logout } = useUser();
  const navigate = useNavigate();

  return (
    <>
      <div id="topbar">
        <h1>AI / UI Frontend Task</h1>
        <nav>
          <ul>
            <li>
              <Link to="/"><AssignmentIcon/> Tasks</Link>
            </li>
            <li>
              <Link to="/meetings"><GroupsTwoToneIcon/> Meetings</Link>
            </li>
            <li>
              <Link to="/user-profile"><AccountCircleIcon/> User Profile</Link>
            </li>
            <li>
              <Link to="/evaluation"><ReceiptLongIcon/> Usability Evaluation</Link>
            </li>
            <li>
                <button onClick={() => { 
                  logout();
                  navigate('/login');
                 }}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
