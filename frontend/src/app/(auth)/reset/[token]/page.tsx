"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth_service, useAppData } from "@/context/AppContext";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ResetPage = () => {
  const { token } = useParams(); // ✅ get token from URL
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const { isAuth } = useAppData();

  if (isAuth) router.push("/");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // ✅ validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setBtnLoading(true);

    try {
      const { data } = await axios.post(
        `${auth_service}/api/auth/reset/${token}`,
        { password }
      );

      toast.success(data.message || "Password reset successful");
      setPassword("");
      router.push("/login"); // redirect after success
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="mt-20 md:mt-5 z-0">
      <div className="md:w-1/3 w-full border border-gray-400 rounded-lg p-8 flex flex-col relative shadow-md m-auto">
        
        <h2 className="mb-1">
          <span className="text-3xl">Reset Password</span>
        </h2>

        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-between mt-3"
        >
          <div className="grid w-full max-w-sm items-center gap-3 ml-1">
            
            {/* Password */}
            <div className="space-y-1">
              <Label>New Password</Label>
              <Input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

          </div>

          <Button
            type="submit"
            disabled={btnLoading}
            className="flex justify-center items-center gap-2 mt-4"
          >
            {btnLoading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>

      </div>
    </div>
  );
};

export default ResetPage;