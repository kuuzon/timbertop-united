import useAuth from '../../hooks/useAuth';
import TuCard from '../../components/common/TuCard';
import TuButton from '../../components/common/TuButton';
import TuLoader from "../../components/common/TuLoader";

const Dashboard = () => {
  // HOOK: CONTEXT FOR AUTH
  const { user, logout, userLoading } = useAuth();

  if (userLoading) {
    return <TuLoader />;
  }

  return (
    <TuCard title="Profile" authform>
      <div className="text-center mb-4">
        <h4>Welcome {user.username}!</h4>
      </div>
      <p><strong>Email: </strong>{user.email}</p>
      { user.isAdmin && <p><strong>Secret: </strong> Hello Admin - nice to see you here</p>}

      {/* Log Out & Forces a Redirect */}
      { user &&
        <div className="mt-5">
          <TuButton onClick={() => { logout() }}>
            Log Out
          </TuButton>
        </div>
      }
    </TuCard>
  )
}

export default Dashboard