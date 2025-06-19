// file: ui/Appbar.tsx
import { Button } from "../component/Button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <div className="flex justify-between border-b px-4 bg-blue-200">
     <div className="text-2xl font-bold text-blue-800 tracking-wide inline-flex items-center">
        Pay<span className="text-white">TM</span>
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
