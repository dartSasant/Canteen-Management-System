import React from 'react'

export default function SignupCard() {
    return (
        <div>
            <fieldset class="fieldset bg-base-200 border border-base-300 rounded-box w-80 p-6 bg-white">
                <legend class="fieldset-legend text-xl font-bold pt-10">
                    Sign up
                </legend>

                <label for="name" class="label font-medium">
                    ID
                </label>
                <input
                    id="name"
                    type="text"
                    class="input w-full"
                    placeholder="Enter your ID ."
                />

                <label for="email" class="label font-medium mt-2">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    class="input w-full"
                    placeholder="Enter your email.."
                />

                <label for="password" class="label font-medium mt-2">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    class="input w-full"
                    placeholder="••••••••"
                />

                <button class="btn btn-primary mt-4">
                    Sign In
                </button>

                <p class="label justify-center mt-2">
                    copyright
                </p>
            </fieldset>
        </div>
    )
}
