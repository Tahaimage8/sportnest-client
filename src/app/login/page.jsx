"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    try {
      const { data, error } = await authClient.signIn.email({
        email: user.email,
        password: user.password,
      });

      if (data) {
        toast.success("Login successful");
        router.push("/");
      }

      if (error) {
        toast.error(error.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
              Welcome Back
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Login to SportNest
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Access your account to book facilities, manage bookings, and
              continue your sports journey.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
              <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                    ) {
                      return "Please enter a valid email address";
                    }
                    return null;
                  }}
                >
                  <Label className="mb-1 block text-sm font-semibold text-slate-800">
                    Email
                  </Label>

                  <Input
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />

                  <FieldError className="text-sm text-red-500" />
                </TextField>

                <TextField isRequired name="password" type="password">
                  <Label className="mb-1 block text-sm font-semibold text-slate-800">
                    Password
                  </Label>

                  <Input
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />

                  <FieldError className="text-sm text-red-500" />
                </TextField>

                <motion.div
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className="h-12 w-full rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-400"
                  >
                    <Check />
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </motion.div>

                <p className="text-center text-sm text-slate-600">
                  Do not have an account?{" "}
                  <Link
                    href="/register"
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    Register
                  </Link>
                </p>
              </Form>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginPage;