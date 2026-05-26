"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
  Separator,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      toast.success("Register successful");
      redirect("/login");
    }

    if (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

const handleGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
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
              Join SportNest
            </p>

            <h1 className="mt-2 text-3xl font-bold text-slate-900">
              Create Account
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sign up to book sports facilities, manage your reservations, and
              list your own venues.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg md:p-8">
              <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
                <TextField isRequired name="name" type="text">
                  <Label className="mb-1 block text-sm font-semibold text-slate-800">
                    Name
                  </Label>
                  <Input
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                  <FieldError className="text-sm text-red-500" />
                </TextField>

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

                <TextField isRequired name="image" type="url">
                  <Label className="mb-1 block text-sm font-semibold text-slate-800">
                    Photo URL
                  </Label>
                  <Input
                    placeholder="Enter photo URL"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                  <FieldError className="text-sm text-red-500" />
                </TextField>

                <TextField
                  isRequired
                  minLength={8}
                  name="password"
                  type="password"
                  validate={(value) => {
                    if (value.length < 6) {
                      return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                      return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                      return "Password must contain at least one number";
                    }
                    return null;
                  }}
                >
                  <Label className="mb-1 block text-sm font-semibold text-slate-800">
                    Password
                  </Label>
                  <Input
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none focus:border-green-600"
                  />
                  <Description className="text-xs text-slate-500">
                    Must be at least 8 characters with 1 uppercase and 1 number
                  </Description>
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
                    {loading ? "Registering..." : "Register"}
                  </Button>
                </motion.div>

                <p className="text-center text-sm text-slate-600">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-green-600 hover:text-green-700"
                  >
                    Login
                  </Link>
                </p>
              </Form>
              <div className="flex justify-center items-center gap-4">
                <Separator>
                <div className="whitespace-nowrap">
                    Or Register With 
                </div>
                </Separator>
              </div>
              <div>
                <Button onClick={handleGoogle} variant="outline" className="w-full rounded-none"><FcGoogle/> Sign in with Google</Button>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterPage;