import Image from "next/image";
import AuthForm from "./components/AuthForm";


export default function Home() {
    return (
      <div className="flex min-h-full sm:px-6 py-12 lg:px-8 flex-col bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image className="mx-auto  w-auto" alt="Logo" height="48" width="48" src="/images/logo.png" />
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign In to your account
            </h1>
        </div>
        {/* AuthForm */}
        <AuthForm/>
      </div>
    );
  }
  