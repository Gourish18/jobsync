"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth_service, useAppData } from '@/context/AppContext';
import axios from 'axios';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ForgotPage = () => {
  const [email, setemail] = useState("");
const [btnLoading, setbtnLoading] = useState(false);
const { isAuth } = useAppData();

if (isAuth) return redirect("/");

const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setbtnLoading(true);

  try {
    const { data } = await axios.post(
      `${auth_service}/api/auth/forgot`,
      { email }
    );

    toast.success(data.message || "Reset link sent");
    setemail(""); 
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
  } finally {
    setbtnLoading(false);
  }
};
  return (
   <div className="mt-20 md:mt-5 z-0">
  <div className="md:w-1/3 w-full border border-gray-400 rounded-lg p-8 flex flex-col relative shadow-md m-auto">
    
    <h2 className="mb-1">
      <span className="text-3xl">Forgot Password</span>
    </h2>

    <form
      onSubmit={submitHandler}
      className="flex flex-col justify-between mt-3"
    >
      <div className="grid w-full max-w-sm items-center gap-1.5 ml-1">
        
        <Label>Email</Label>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
        />

      </div>

      <Button
        type="submit"
        disabled={btnLoading}
        className="flex justify-center items-center gap-2 mt-4"
      >
        {btnLoading ? "Sending..." : "Send Reset Link"}
      </Button>
    </form>

  </div>
</div>
  )
}

export default ForgotPage