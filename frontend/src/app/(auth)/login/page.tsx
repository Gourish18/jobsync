// "use client"
// import React from 'react'
// import { useState } from 'react'
// import  Cookies from 'js-cookie'
// import { auth_service, useAppData } from '@/context/AppContext'
// import { redirect } from 'next/navigation'
// import axios from 'axios'
// import toast from 'react-hot-toast'
// import Link from 'next/link'
// import { ArrowRight, Lock, Mail } from 'lucide-react'
// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);

//   const { isAuth, setUser, loading, setIsAuth } = useAppData();

//   if (isAuth) return redirect("/");
//   const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   try {
//     setBtnLoading(true);

//     const { data } = await axios.post(
//       `${auth_service}/api/auth/login`,
//       {
//         email,
//         password,
//       }
//     );

//     toast.success(data.message);

//     Cookies.set("token", data.token, {
//       expires: 15,
//       secure: true,
//       path: "/",
//     });

//     setUser(data.user);
//     setIsAuth(true);

//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       toast.error(
//         error.response?.data?.message || "Login failed"
//       );
//     } else if (error instanceof Error) {
//       toast.error(error.message);
//     } else {
//       toast.error("Something went wrong");
//     }
//   } finally {
//     setBtnLoading(false);
//   }
// };

//   return (
//        <div className="min-h-screen flex items-center justify-center px-4 py-12">
//   <div className="w-full max-w-md">

//     {/* Heading */}
//     <div className="text-center mb-8">
//       <h1 className="text-4xl font-bold mb-2">
//         Welcome back to JobSync
//       </h1>
//       <p className="text-sm opacity-70">
//         Sign in to continue your journey
//       </p>
//     </div>

//     {/* Card */}
//     <div className="border border-gray-400 rounded-2xl p-8 shadow-lg backdrop-blur-sm">

//       <form onSubmit={submitHandler} className="space-y-5">

//         {/* Email */}
//         <div className="space-y-2">
//           <label htmlFor="email" className="text-sm font-medium">
//             Email Address
//           </label>

//           <div className="relative">
//             <Mail className="icon-style" />

//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="pl-10 h-11 w-full border rounded-md"
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="space-y-2">
//           <label htmlFor="password" className="text-sm font-medium">
//             Password
//           </label>

//           <div className="relative">
//             <Lock className="icon-style" />

//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="pl-10 h-11 w-full border rounded-md"
//             />
//           </div>
//         </div>

//         {/* Forgot Password */}
//         <div className="flex justify-end">
//           <Link
//             href="/forgot"
//             className="text-sm text-blue-500 hover:underline"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={btnLoading}
//           className="w-full h-11 flex items-center justify-center gap-2 bg-black text-white rounded-md"
//         >
//           {btnLoading ? "Signing in..." : "Sign In"}
//           <ArrowRight size={18} />
//         </button>

//       </form>

//       {/* Footer */}
//       <div className="mt-6 pt-6 border-t border-gray-400">
//         <p className="text-center text-sm">
//           Don&apos;t have an account?{" "}
//           <Link
//             href="/register"
//             className="text-blue-500 font-medium"
//           >
//             Register
//           </Link>
//         </p>
//       </div>

//     </div>
//   </div>
// </div>
//   )
// }

// export default LoginPage

"use client"
import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { auth_service, useAppData } from '@/context/AppContext'
import { redirect } from 'next/navigation'
import axios from 'axios'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { ArrowRight, Lock, Mail, Eye, EyeOff } from 'lucide-react'
import Loading from '@/components/loading'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  const { isAuth, setUser, loading, setIsAuth } = useAppData();
if(loading)return <Loading/>
  if (isAuth) return redirect("/");

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setBtnLoading(true);

      const { data } = await axios.post(
        `${auth_service}/api/auth/login`,
        {
          email,
          password,
        }
      );

      toast.success(data.message);

      Cookies.set("token", data.token, {
        expires: 15,
        secure: true,
        path: "/",
      });

      setUser(data.userObject);
      setIsAuth(true);

    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message || "Login failed"
        );
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setBtnLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back to JobSync
          </h1>
          <p className="text-sm opacity-70">
            Sign in to continue your journey
          </p>
        </div>

        {/* Card */}
        <div className="border border-gray-400 rounded-2xl p-8 shadow-lg backdrop-blur-sm">

          <form onSubmit={submitHandler} className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />

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

            {/* Password */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />

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
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="/forgot"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={btnLoading}
              className="w-full h-11 flex items-center justify-center gap-2 bg-black text-white rounded-md"
            >
              {btnLoading ? "Signing in..." : "Sign In"}
              <ArrowRight size={18} />
            </button>

          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-gray-400">
            <p className="text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-blue-500 font-medium"
              >
                Register
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginPage;