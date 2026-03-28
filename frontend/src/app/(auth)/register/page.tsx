"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { auth_service, useAppData } from "@/context/AppContext";
import { redirect } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { ArrowRight, Lock, Mail, Eye, EyeOff, Briefcase } from "lucide-react";
import Loading from "@/components/loading";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { isAuth, setUser, loading, setIsAuth } = useAppData();
  if (loading) return <Loading />;
  if (isAuth) return redirect("/");
const submitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();

  // 🔴 Validation
  if (!role) {
    toast.error("Please select a role");
    return;
  }

  if (role === "jobseeker" && !resume) {
    toast.error("Resume is required");
    return;
  }

  setBtnLoading(true);

  const formData = new FormData();
  formData.append("role", role);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("phoneNumber", phoneNumber);

  if (role === "jobseeker") {
    formData.append("bio", bio);
    if (resume) {
      formData.append("file", resume);
    }
  }

  try {
    const { data } = await axios.post(
      `${auth_service}/api/auth/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    toast.success(data.message);

    Cookies.set("token", data.token, {
      expires: 15,
      secure: true,
      path: "/",
    });

    setUser(data.registeredUser);
    setIsAuth(true);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      toast.error(error.response?.data?.message || "Registration failed");
    } else {
      toast.error("Something went wrong");
    }
  } finally {
    setBtnLoading(false);
  }
};
  // const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setBtnLoading(true);
  //   const formData = new FormData();
  //   formData.append("role", role);
  //   formData.append("name", name);
  //   formData.append("email", email);
  //   formData.append("password", password);
  //   formData.append("phoneNumber", phoneNumber);

  //   if (role === "jobseeker") {
  //     formData.append("bio", bio);
  //     if (resume) {
  //       formData.append("file", resume);
  //     }
  //   }
  //   try {
  //     const { data } = await axios.post(
  //       `${auth_service}/api/auth/register`,
  //       formData,
  //     );

  //     toast.success(data.message);

  //     Cookies.set("token", data.token, {
  //       expires: 15,
  //       secure: true,
  //       path: "/",
  //     });

  //     setUser(data.registeredUser);
  //     setIsAuth(true);
  //   } catch (error: unknown) {
  //     if (axios.isAxiosError(error)) {
  //       toast.error(error.response?.data?.message || "Registration failed");
  //     } else if (error instanceof Error) {
  //       toast.error(error.message);
  //     } else {
  //       toast.error("Something went wrong");
  //     }
  //   } finally {
  //     setBtnLoading(false);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Join JobSync</h1>
          <p className="text-sm opacity-70">
            Create your account to start your journey
          </p>
        </div>

        {/* Card */}
        <div className="border border-gray-400 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
          <form onSubmit={submitHandler} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                I want to
              </label>

              <div className="relative">
                <Briefcase className="icon-style" size={18} />
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 border-2 border-gray-300 rounded-md bg-transparent"
                  required
                >
                  <option value="">Select your role</option>
                  <option value="jobseeker">Find a Job</option>
                  <option value="recruiter">Hire Talent</option>
                </select>
              </div>
            </div>
            {/* Email */}
            {role && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>

                  <div className="relative">
                    <Mail className="icon-style" />

                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />

                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 h-11 w-full border rounded-md"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </Label>

                  <div className="relative">
                    <Lock className="icon-style" />

                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 1234567890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>

                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="pl-10 pr-10 h-11 w-full border rounded-md"
                    />

                    {/* 👁️ Toggle */}
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                {role === "jobseeker" && (
                  <div className="space-y-5 pt-4 border-t border-gray-400">
                    {/* <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-medium">
                        Resume (PDF)
                      </Label>

                      <div className="relative">
                        <Lock className="icon-style" />

                        <Input
                          id="resume"
                          type="file"
                          accept="application/pdf"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResume(e.target.files[0]);
                            }
                          }}
                          className="h-11 cursor-pointer"
                        />
                      </div>
                    </div> */}
                    <div className="space-y-2">
                      <Label htmlFor="resume" className="text-sm font-medium">
                        Resume (PDF)
                      </Label>

                      <div className="relative">
                        <input
                          id="resume"
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setResume(e.target.files[0]);
                            }
                          }}
                        />

                        <label
                          htmlFor="resume"
                          className="flex items-center justify-between w-full h-11 px-4 border rounded-md cursor-pointer hover:bg-gray-100"
                        >
                          <span className="text-sm text-gray-500">
                            {resume ? resume.name : "Upload your resume"}
                          </span>

                          <span className="text-sm text-blue-500 font-medium">
                            Browse
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </Label>

                      <div className="relative">
                        <Lock className="icon-style" />

                        <Input
                          id="bio"
                          type="text"
                          placeholder="Tell us about yourself..."
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                          required
                          className="pl-10 h-11"
                        />
                      </div>
                    </div>
                  </div>
                )}
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={btnLoading}
                  className="w-full h-11 flex items-center justify-center gap-2 bg-black text-white rounded-md"
                >
                  {btnLoading ? "Please wait..." : "Register"}
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-400">
            <p className="text-center text-sm">
              Already have an account{" "}
              <Link href="/login" className="text-blue-500 font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
