"use client";

import {useState} from "react";
import {SignInFlow} from "@/features/auth/types";
import SignUpCard from "@/features/auth/components/sign-up-card";
import SignInCard from "@/features/auth/components/sign-in-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>('signIn');

    return (
        <div className={'h-full flex items-center justify-center bg-[#472C4C]'}>
            <div className={'md:h-auto md:w-[420px]'}>
                {state === 'signIn' ?
                    <SignInCard setState={setState}/>
                    :
                    <SignUpCard setState={setState}/>}
            </div>
        </div>
    );
};
