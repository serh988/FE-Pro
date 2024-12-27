import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById, resetUser } from "../store/Slices/userSlice";

function UserDetailPage() {
  const { id } = useParams();
  console.log("User ID from params:", id);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    console.log("User ID from params:", id);
    dispatch(fetchUserById(id));
    return () => {
      dispatch(resetUser());
    };
  }, [dispatch, id]);
  

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!user) {
    console.log("Current user object:", user);
    return <h1>No user data found</h1>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company?.name}</p> {/* Добавить ? для безопасности */}
    </div>
  );
}

export default UserDetailPage;
