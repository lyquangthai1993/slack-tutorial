"use client";

import UserButton from "@/features/auth/components/user-button";
import {useGetWorkspaces} from "@/features/workspaces/api/use-get-workspaces";
import {useEffect, useMemo} from "react";
import {useCreateWorkspaceModal} from "@/features/workspaces/store/use-create-workspace-modal";

export default function Home() {
    const [open, setOpen] = useCreateWorkspaceModal();
    const {data, isLoading} = useGetWorkspaces();

    const workspaceId = useMemo(() => data?.[0]?._id, [data]);

    useEffect(() => {
        if (isLoading) return;

        if (workspaceId) {
            console.log('Redirect to workspace');
        } else if(!open) {
            console.log('Open creation modal');
            setOpen(true)
        }

    }, [isLoading, workspaceId, setOpen, open]);

    return (
        <>
            <UserButton/>
        </>
    );
}
