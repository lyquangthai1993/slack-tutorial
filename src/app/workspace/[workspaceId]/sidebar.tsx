"use client";

import UserButton from "@/features/auth/components/user-button";
import WorkspaceSwicher from "@/app/workspace/[workspaceId]/workspace-swicher";

interface SidebarProps {
}

const Sidebar = ({}: SidebarProps) => {
    return (
        <aside className={'w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-4'}>
            <WorkspaceSwicher/>

            <div className={'flex flex-col items-center justify-center gap-y-1 mt-auto'}>
                <UserButton/>
            </div>
        </aside>
    );
};

export default Sidebar;
