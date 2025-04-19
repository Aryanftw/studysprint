'use client'
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import axios from "axios";

export default function SyncUser(){
  const {isSignedIn} = useUser()
  useEffect(() => {
    if(isSignedIn){
      axios.get('/api/profile')
      .then(res => console.log("User synced!", res.data))
      .catch(err => console.error("Sync error:", err.response?.data || err));
        }
  },[isSignedIn])
  return null;

}