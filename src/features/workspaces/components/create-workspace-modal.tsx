"use client";

import {useCreateWorkspaceModal} from "@/features/workspaces/store/use-create-workspace-modal";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import useCreateWorkspace from "@/features/workspaces/api/use-create-workspace";
import {useRouter} from "next/navigation";

interface CreateWorkspaceModalProps {
}

const CreateWorkspaceModal = ({}: CreateWorkspaceModalProps) => {
    const [open, setOpen] = useCreateWorkspaceModal();
    const router = useRouter();
    const {mutate} = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        try {
            const data = await mutate({
                name: 'Workspace 1'
            }, {
                onSuccess(data) {
                    router.push(`/workspaces/${data}`);
                    // ? redirect to that workspace id
                },
                onError(error) {

                },
                onSetted() {

                }
            });
        } catch (error) {

        } finally {

        }


    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Add a workspace
                    </DialogTitle>
                </DialogHeader>

                <form className={'space-y-4'}>
                    <Input
                        value=""
                        disabled={false}
                        required
                        autoFocus
                        minLength={3}
                        placeholder={'Workspace name ...'}
                    />

                    <div className={'flex justify-end'}>
                        <Button disabled={false}>Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateWorkspaceModal;
