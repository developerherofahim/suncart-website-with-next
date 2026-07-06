'use client'
import { authClient } from "@/lib/auth-client";
import { poppins } from "@/lib/font";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const RegisterPage = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {

    const { data: res, error } = await authClient.signUp.email({
      name: data.fullName, // required
      email: data.email, // required
      password: data.password, // required
      autoSignIn: false,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully!");
    await authClient.signOut();
    router.replace("/login")

    console.log("Form Data:", data);
    console.log("Response:", res);
    console.log("Error:", error);
  }

  return (
    <section className={`${poppins.className} flex flex-col md:flex-row gap-12`}>
      <div className="relative w-full md:w-1/2 min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1581521802112-29e992fe3e55?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Login Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#F97316]/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-8 left-8 z-10 max-w-lg text-white px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold leading-tight lg:text-5xl">
            Summer Essentials <br />
            Delivered To You ⛱️
          </h1>

          <p className="text-lg leading-relaxed text-white/80">
            Log in to explore exclusive deals on sunglasses,
            skincare, beach gear, and more.
          </p>
        </div>
      </div>
      <div className="py-12 w-full px-6">
        <h2 className="text-3xl font-bold mb-3 text-foreground">Create Account 🌊</h2>
        <p className="text-muted-foreground mb-8">Join SunCart and shop summer essentials</p>
        <button className="w-full flex items-center justify-center gap-3 py-3 border border-border rounded-xl hover:bg-muted transition-colors mb-6 font-medium relative"><svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"></path><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"></path><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"></path><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"></path></svg>Continue with Google</button>
        <div className="relative flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-foreground"></div>
          <span className="text-sm text-muted-foreground font-medium">or</span>
          <div className="flex-1 h-px bg-foreground"></div>
        </div>
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Full Name</label>
            <input {...register("fullName", { required: true })} type="text" className="input w-full rounded-xl" placeholder="Your Name Here" />

            <label className="label">Email</label>
            <input {...register("email", { required: true })} type="email" className="input w-full rounded-xl" placeholder="Your Email Here" />

            <label className="label">Password</label>
            <input {...register("password", { required: true })} type="password" className="input w-full rounded-xl" placeholder="Your Password Here" />

            <button className="btn bg-[#F97316] btn-neutral mt-4 shadow-none border-none rounded-xl">Register</button>
          </fieldset>
        </form>
      </div>

    </section>
  );
};

export default RegisterPage;