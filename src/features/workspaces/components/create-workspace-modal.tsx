"use client";

import {useCreateWorkspaceModal} from "@/features/workspaces/store/use-create-workspace-modal";
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import useCreateWorkspace from "@/features/workspaces/api/use-create-workspace";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {toast} from "sonner";

interface CreateWorkspaceModalProps {
}

const CreateWorkspaceModal = ({}: CreateWorkspaceModalProps) => {
    const [open, setOpen] = useCreateWorkspaceModal();
    const [name, setName] = useState('');

    const router = useRouter();
    const {mutate, isPending} = useCreateWorkspace();

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await mutate({
                name
            }, {
                onSuccess(data) {
                    console.log("data = ", data);
                    setName('');
                    handleClose();
                    toast.success('Workspace\'s created');
                    // ? redirect to that workspace id
                    router.push(`/workspace/${data}`);
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

                <form className={'space-y-4'} onSubmit={handleSubmit}>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        disabled={isPending}
                        required
                        autoFocus
                        minLength={3}
                        placeholder={'Workspace name ...'}
                    />

                    <div className={'flex justify-end'}>
                        <Button disabled={isPending}>Create</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateWorkspaceModal;
