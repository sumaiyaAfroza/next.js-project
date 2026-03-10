
'use client'

import React, { useState } from 'react'
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { signIn } from "next-auth/react";
import Lottie from "lottie-react";
import loginAnim from "@/public/animations/Login.json";

export default function SocialLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleGoogle = async providerName => {
        const result = await signIn(providerName, { callbackUrl: '/' })
        console.log(result)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const result = await signIn("credentials", {
            email,
            password,
            callbackUrl: "/"
        })
        console.log(result)
        setLoading(false)
    }

    return (
        <div className="flex min-h-screen">

            {/* ======= LEFT — Lottie + Branding ======= */}
            <div
                className="hidden md:flex flex-col items-center justify-center w-1/2 relative overflow-hidden"
                style={{ background: "linear-gradient(145deg, #ff6b35 0%, #f7931e 60%, #ffcd3c 100%)" }}
            >
                <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-white/10" />
                <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-white/5" />

                <div className="relative z-10 text-center px-12">
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-5xl">🍽️</span>
                        <span className="text-4xl font-extrabold text-white" style={{ fontFamily: "'Georgia', serif" }}>
                            FoodieHub
                        </span>
                    </div>
                    <p className="text-white/75 text-sm mb-4">Delicious meals, delivered to your door</p>

                    <Lottie
                        animationData={loginAnim}
                        loop={true}
                        autoplay={true}
                        style={{ width: 320, height: 320 }}
                    />

                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {["🥗 Healthy", "⚡ Fast", "😋 Tasty", "🚚 Free Delivery"].map(tag => (
                            <span key={tag} className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ======= RIGHT — Login Form ======= */}
            <div className="flex flex-col items-center justify-center w-full md:w-1/2 bg-[#fffaf5] px-8 py-12">

                {/* Mobile logo */}
                <div className="flex md:hidden items-center gap-2 mb-8">
                    <span className="text-3xl">🍽️</span>
                    <span className="text-2xl font-extrabold text-orange-500" style={{ fontFamily: "'Georgia', serif" }}>
                        FoodieHub
                    </span>
                </div>

                <div className="w-full max-w-[400px]">

                    <h1 className="text-3xl font-extrabold text-gray-900 mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                        Welcome back! 👋
                    </h1>
                    <p className="text-gray-500 text-sm mb-8">Sign in to explore your favorite meals</p>

                    {/* ---- Email & Password Form ---- */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm
                                focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                                transition-all duration-200 placeholder:text-gray-300"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-semibold text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm
                                    focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100
                                    transition-all duration-200 placeholder:text-gray-300"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPass)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                                >
                                    {showPass ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot password */}
                        <div className="flex justify-end -mt-2">
                            <a href="/forgot-password" className="text-xs text-orange-500 hover:underline font-medium">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3.5 rounded-xl font-bold text-white text-sm
                            transition-all duration-300 shadow-md hover:shadow-lg hover:brightness-110 active:scale-95"
                            style={{ background: "linear-gradient(90deg, #ff6b35, #f7931e)" }}
                        >
                            {loading ? "Signing in..." : "Sign In 🍴"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-5">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-xs text-gray-400 font-medium">or continue with</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    {/* Google Button */}
                    <button
                        onClick={() => handleGoogle('google')}
                        className="w-full flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl font-semibold text-gray-700 text-sm
                        bg-white border border-gray-200 shadow-sm
                        hover:shadow-md hover:border-orange-300 hover:text-orange-600
                        transition-all duration-300 group"
                    >
                        <FaGoogle className="text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                        Continue with Google
                    </button>

                    {/* Register link */}
                    <p className="text-sm text-gray-500 mt-6 text-center">
                        Don&apos;t have an account?{" "}
                        <a href="/register" className="text-orange-500 font-semibold hover:underline">
                            Create one
                        </a>
                    </p>

                    {/* Terms */}
                    <p className="text-xs text-gray-400 mt-4 text-center leading-relaxed">
                        By signing in, you agree to our{" "}
                        <span className="text-orange-500 hover:underline cursor-pointer font-medium">Terms</span>
                        {" "}and{" "}
                        <span className="text-orange-500 hover:underline cursor-pointer font-medium">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}
