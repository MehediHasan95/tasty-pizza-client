import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuth from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
import { no_image } from "../../utilities/image-constant";
import { useState } from "react";
import { errorToast } from "../../utilities/toastBar";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useTitle from "../../hooks/useTitle";

const Profile = () => {
  useTitle("Profile");
  const { user, logOut } = useAuth();
  const [profile, refetch, isLoading] = useProfile();
  const [instance] = useAxiosSecure();
  const { _id, displayName, email, role, photoURL, address } =
    !isLoading && profile;
  const [toggle, setToggle] = useState(false);
  const [username, setUserName] = useState(displayName);
  const [dp, setDp] = useState(photoURL);
  const [editaddress, setEditAddress] = useState(address);
  useTitle(displayName);

  const handleProfileUpdate = () => {
    if (dp && username && editaddress) {
      instance
        .patch(`/update-profile/${_id}?uid=${user?.uid}`, {
          displayName: username,
          email,
          photoURL: dp,
          address: editaddress,
          role,
        })
        .then((res) => {
          if (res.data.modifiedCount) {
            refetch();
            setToggle(false);
          }
        });
    } else {
      errorToast("Empty filed can not be submitted");
    }
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.code));
  };

  return (
    <div>
      <div className="grid gap-3 lg:gap-5 lg:grid-cols-2">
        <div className="col-span-1 p-3 grid place-items-center">
          {toggle ? (
            <div className="w-3/4 mx-auto">
              <p>Photo url:</p>
              <input
                type="text"
                onChange={(e) => setDp(e.target.value)}
                defaultValue={photoURL}
                className="w-full p-2 border outline-none"
                placeholder="Photo URL"
              />
            </div>
          ) : (
            <div className="w-52 h-52 mx-auto rounded-full border-4 overflow-hidden">
              <img
                src={photoURL ? photoURL : no_image}
                alt="dp"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="col-span-1 p-3 grid content-between">
          <div className="mb-3 lg:mb-5">
            <div className="mb-3">
              <p>Name:</p>
              {toggle ? (
                <input
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                  defaultValue={displayName}
                  className="w-full p-2 border outline-none"
                  placeholder="Full name"
                />
              ) : (
                <p className="text-xl lg:text-3xl">{displayName}</p>
              )}
            </div>
            <div className="mb-3">
              <p>Email:</p>
              {toggle ? (
                <input
                  type="text"
                  defaultValue={email}
                  readOnly
                  className="w-full p-2 border outline-none"
                />
              ) : (
                <p className="text-xl lg:text-3xl">{email}</p>
              )}
            </div>
            <div className="mb-3">
              <p>Address:</p>
              {toggle ? (
                <input
                  type="text"
                  onChange={(e) => setEditAddress(e.target.value)}
                  defaultValue={address}
                  className="w-full p-2 border outline-none"
                  placeholder="Address"
                />
              ) : (
                <p className="text-xl lg:text-3xl">
                  {address ? address : "Unavailable"}
                </p>
              )}
            </div>
            <div className="mb-3">
              <p>Role:</p>
              {toggle ? (
                <input
                  type="text"
                  defaultValue={role}
                  readOnly
                  className="w-full p-2 border outline-none"
                />
              ) : (
                <p className="text-xl lg:text-3xl uppercase">{role}</p>
              )}
            </div>
          </div>
          <div className="space-x-3">
            {toggle ? (
              <button
                onClick={handleProfileUpdate}
                className="w-2/5 py-2 bg-green-500 text-white"
              >
                Update now <FontAwesomeIcon icon={faCheck} />
              </button>
            ) : (
              <button
                onClick={() => setToggle(true)}
                className="w-2/5 py-2 bg-orange text-white"
              >
                Edit <FontAwesomeIcon icon={faEdit} />
              </button>
            )}

            {toggle ? (
              <button
                onClick={() => setToggle(false)}
                className="w-2/5 py-2 bg-platinum text-white"
              >
                Cancle <FontAwesomeIcon icon={faXmark} />
              </button>
            ) : (
              <button
                onClick={handleLogOut}
                className="w-2/5 py-2 bg-platinum text-white"
              >
                Logout <FontAwesomeIcon icon={faSignOut} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
