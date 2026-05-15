import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <LoginCard />
      <SignupCard />
    </div>
  );
};

export default App;