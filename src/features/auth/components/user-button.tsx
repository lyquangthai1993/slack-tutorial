import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useCurrentUser} from "@/features/auth/api/use-current-user";
import {Loader, LogOut} from "lucide-react";
import {useAuthActions} from "@convex-dev/auth/react";
import {Button} from "@/components/ui/button";

interface UserButtonProps {
}

const UserButton = ({}: UserButtonProps) => {
    const {data, isLoading} = useCurrentUser();
    const {signOut} = useAuthActions();

    if (isLoading) {
        return <Loader className={'size-4 animate-spin text-muted-foreground'}></Loader>;
    }

    if (!data) {
        return null;
    }

    const {image, name} = data;

    const avatarFallback = name!.charAt(0).toUpperCase();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className={'outline-none relative'}>
                <Avatar className={'size-10 hover:opacity-75 transition'}>
                    <AvatarImage alt={name} src={image}/>

                    <AvatarFallback>
                        {avatarFallback}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align={'center'} side={'right'} className={'w-60'}>
                <DropdownMenuItem onClick={signOut} className={'h-10 cursor-pointer'}>
                    <LogOut className={'size-4 mr-2'}/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserButton;
