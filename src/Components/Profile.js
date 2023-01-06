import React from 'react'
import Loading from './Loading';
import { withAuthenticationRequired, loginWithRedirect} from "@auth0/auth0-react";

const Profile = () => {
  return (
    <>
    <div>Profile</div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere. Quaerat, natus cum necessitatibus aliquam facilis porro pariatur sapiente laborum perferendis quidem vel commodi voluptas expedita, quod cupiditate ullam quo voluptatum maiores atque officia alias reiciendis quisquam earum! Tenetur placeat fugit voluptas!</p>
    </>
  )
}


export default Profile


// export default withAuthenticationRequired(Profile, {
//     onRedirecting: () => <Loading />,
//     returnTo: "http://localhost:3000/collection"
//   });