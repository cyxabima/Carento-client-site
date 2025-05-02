import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



export function LoginForm({
  className,
  ...props
}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isVendor, SetIsVendor] = useState(false)
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()


  const validate = () => {
    let tempErrors = {};
    if (!email.trim()) tempErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is invalid"
    if (!password.trim()) tempErrors.password = "Password is Required"

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0;
  }

  const loginSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return


    const url = `/foo/api/v1/${isVendor ? "vendors" : "customers"}/login`

    console.log(isVendor)
    console.log(email)
    console.log(password.trim())

    const loginForm = new FormData()
    loginForm.append("username", email)
    loginForm.append("password", password)


    try {
      const response = await fetch(url, {
        method: "POST",
        body: loginForm
      });

      const res = await response.json()
      if (!response.ok) {
        alert(res.detail)
        return
      }

      console.log(res)

    } catch (error) {
      console.error(error)
    }

    if (isVendor) navigate("/vendor-dashboard")

  }

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">

        <div className="grid gap-3 grid-cols-2">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Vendor</span>
            <Switch
              id="vendor"
              checked={isVendor}
              onCheckedChange={(checked) => SetIsVendor(checked)}
            />
          </div>
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required />

          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link to="/forget-password" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required />

          {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}

        </div>
        <Button type="submit" className="w-full" onClick={(e) => (loginSubmit(e))}>
          Login
        </Button>

      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>

    </form>
  );
}
