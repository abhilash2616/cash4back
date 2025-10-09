"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { apiFetch } from "@/lib/api";
import { toast } from "react-toastify";
import Image from "next/image";

interface LoginFormProps {
  onClose?: () => void;
}

export default function LoginForm({ onClose }: LoginFormProps) {
  const [loading, setLoading] = useState(false);
  const { setUser, setSessionKey } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!form.email || !form.password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    try {
      const data = await apiFetch<unknown>("/login/v1", {
        method: "POST",
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      // 🔹 Normalize API response
      const apiData = data as Record<string, unknown>;
      const rawUser =
        apiData.user ||
        (apiData.data as Record<string, unknown>)?.user ||
        apiData.user_data ||
        apiData.profile ||
        (apiData.data as Record<string, unknown>)?.profile ||
        apiData.data ||
        apiData;

      const normalizedUser = rawUser
        ? {
            id: String(
              (rawUser as Record<string, unknown>).id ||
                (rawUser as Record<string, unknown>).user_id ||
                (rawUser as Record<string, unknown>).userid ||
                ""
            ),
            name: String(
              (rawUser as Record<string, unknown>).name ||
                (rawUser as Record<string, unknown>).fullname ||
                (rawUser as Record<string, unknown>).username ||
                ""
            ),
            email: String((rawUser as Record<string, unknown>).email || ""),
            phone: String(
              (rawUser as Record<string, unknown>).phone ||
                (rawUser as Record<string, unknown>).phonenumber ||
                ""
            ),
          }
        : null;

      const sessionKey =
        apiData.session_key ||
        (apiData.data as Record<string, unknown>)?.session_key ||
        apiData.sessionKey ||
        apiData.token ||
        (apiData.data as Record<string, unknown>)?.token ||
        null;

      if (!normalizedUser) {
        setError("Invalid login response.");
        toast.error("Login failed: Invalid server response.");
        setLoading(false);
        return;
      }

      // 🔹 Save user + session in context + localStorage
      setUser(normalizedUser);
      if (sessionKey) setSessionKey(String(sessionKey));

      try {
        localStorage.setItem("user", JSON.stringify(normalizedUser));
        if (sessionKey) localStorage.setItem("session_key", String(sessionKey));
      } catch (err) {
        console.warn("Failed to save user in localStorage:", err);
      }

      toast.success("Login successful!");
      onClose?.();
    } catch (err: unknown) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-1/2">
        <Image
          src="/assets/img/login-img.png"
          width={491}
          height={780}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-[30px] text-[#057A37] mb-1 font-[Grafiels]">
          Login Now!
        </h2>
        <hr className="w-32 h-0.5 mb-4 bg-[#057A37]" />

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <Input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <p className="text-[10px] text-gray-500">
            By continuing, you agree to Beyuvana’s Terms of Use and Privacy
            Policy.
          </p>

          <Button
            type="submit"
            disabled={loading}
            className={`w-full text-white bg-green-700 hover:bg-green-800 rounded-[5px] py-2 font-light ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}
