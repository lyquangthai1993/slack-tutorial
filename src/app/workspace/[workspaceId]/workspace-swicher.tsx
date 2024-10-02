import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useWorkspaceId} from "@/hooks/use-workspace-id";

interface WorkspaceSwicherProps {
}

const WorkspaceSwicher = ({}: WorkspaceSwicherProps) => {
    const workspaceId = useWorkspaceId();

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className={'outline-none relative'}>
                <Button>

                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align={'center'} side={'right'} className={'w-60'}>
                <DropdownMenuItem  className={'h-10 cursor-pointer'}>

                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default WorkspaceSwicher;
