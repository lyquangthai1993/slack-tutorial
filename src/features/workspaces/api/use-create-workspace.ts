import {useMutation} from "convex/react";
import {api} from "../../../../convex/_generated/api";
import {useCallback} from "react";
import {Id} from "../../../../convex/_generated/dataModel";

type RequestType = { name: string };

type ResponseType = Id<"workspaces">;

type Options = {
    onSuccess?: (data: ResponseType) => void;
    onError?: (error: Error) => void;
    onSetted?: () => void;
    throwError?: boolean
}

const useCreateWorkspace = () => {
    const mutation = useMutation(api.workspaces.create);

    const mutate = useCallback(async (values: RequestType, options?: Options) => {
        try {
            const response = await mutation(values);
            options?.onSuccess?.(response);

            return response
        } catch (error){
            options?.onError?.(error as Error);
            throw error;
        } finally {
            options?.onSetted?.();
        }

    }, [mutation]);

    return {
        mutate,
    };
};

export default useCreateWorkspace;
