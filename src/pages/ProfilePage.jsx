import { useSelector } from 'react-redux';
import MyProfile from '../components/MyProfile';

export default function ProfilePage() {
  const authUser = useSelector((states) => states.authUser);

  return <MyProfile {...authUser} />;
}
