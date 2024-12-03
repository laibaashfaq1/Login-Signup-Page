'use client'; //client-side components

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
Card, 
CardContent, 
CardDescription, 
CardHeader, 
CardTitle} from "./ui/card";



const SignupForm=()=>{
    const[email,SetEmail]=useState("")
    const[password,SetPassword]=useState("")
    const[confirmPassword,SetConfirmPassword]=useState("")

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        console.log("Signup successfully with the:",{email,password,confirmPassword})
    }

    return(
        <Card className="w[350px]">
        <CardHeader>
            <CardTitle className="text-center mb-2 font-bold">Signup</CardTitle>
            <CardDescription>Enter the following detail to create a new account</CardDescription>
        </CardHeader>

        <CardContent>
            <form 
            onSubmit={handleSubmit}
            className="space-y-4"
            >
                {/* Email */}
                <div className="space-y-2">
                    <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=>SetEmail(e.target.value)}
                    required
                    />
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>SetPassword(e.target.value)}
                    required
                    />
                </div>

               {/* Confirm Password */}
                <div className="space-y-2">
                    <Input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e)=>SetConfirmPassword(e.target.value)}
                    required
                    />
                </div>

              {/* Button */}
                <Button 
                type="submit"
                className="w-full bg-purple-950 text-yellow-100"
                onClick={()=> alert('Signup Successfully!')}
                >Signup</Button>
            </form>
        </CardContent>
        </Card>

    )
}

export default SignupForm;