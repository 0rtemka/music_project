import ProfileCard, { UserInfo } from "../../components/ProfileCard/ProfileCard";

const userInfo: UserInfo = {name: 'username', registrationDate: new Date(Date.now()), reviewsCount: 2, profileImg: '/user.png'}

export default function ProfilePage() {
    return (
        <ProfileCard userInfo={userInfo} />
    )
}