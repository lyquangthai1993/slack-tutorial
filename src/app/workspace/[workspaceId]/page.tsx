"use client";

import {useWorkspaceId} from "@/hooks/use-workspace-id";
import {useGetWorkspace} from "@/features/workspaces/api/use-get-workspace";

interface PageProps {

}

const WorkspaceIdPage = ({}: PageProps) => {
    const workspaceId = useWorkspaceId();
    const {data} = useGetWorkspace({id: workspaceId});

    return (
        <>{JSON.stringify(data)}</>
    );
};

export default WorkspaceIdPage;
