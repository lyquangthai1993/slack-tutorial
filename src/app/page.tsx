"use client";

import {useAuthActions} from "@convex-dev/auth/react";
import {Button} from "@/components/ui/button";

export default function Home() {
    const {signOut} = useAuthActions();

    return (
        <>
            Logged in!
            <Button onClick={() => signOut()}>Signout</Button>
        </>
    );
}
