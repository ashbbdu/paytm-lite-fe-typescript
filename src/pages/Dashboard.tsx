import React, { useEffect, useState } from "react";
import { bankBalance } from "../services/operations/bankAPI";
import UserDetails from "../components/UserDetails";
import SearchComponent from "../components/SearchComponent";
import UserCard from "../components/UserCard";
import { users } from "../services/operations/userAPI";
import { useAppDispatch, useAppSelector } from "../store/hooks";


const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { user  } = useAppSelector(state => state.auth)
  const token = localStorage.getItem("token");
  const [searchText, setSearchText] = useState("");


 
  const allUsers =  () => {

 dispatch(users(searchText , token))
    
  };
  useEffect(() => {
    allUsers();
  }, [searchText]);

  const getUserBalance = async () : Promise<void> => {
    dispatch(bankBalance(token))

  }
  useEffect(() => {
     getUserBalance();
  } ,[])

  return (
    <div className="px-2">
      <UserDetails  />
      <SearchComponent
        searchText={searchText}
        setSearchText={setSearchText}
        allUsers={allUsers}
      />
  
      {user?.length > 0 ?  user?.map((user , index) => {
        return (
          <UserCard
            getUserBalance={getUserBalance}
            key={user._id}
            userId={user._id}
            userName={`${user.firstName} ${user.lastName}`}
            icon={user.userName}
            image={user.profilePic}
          />
        );
      }) : <div className="text-center mt-20 text-xl">No Users found</div> }
    </div>
  );
};

export default Dashboard;