interface PageProps {
    params: {
        workspaceId: string
    };
}

const WorkspaceIdPage = ({
                             params
                         }: PageProps) => {
    return (
        <>{params.workspaceId}</>
    );
};

export default WorkspaceIdPage;
