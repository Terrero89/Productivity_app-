import type { Story } from '../../types/story.tsx'

interface Props {
    data: Story[]
}

export default function TasksDetailsPage({ params }: { params: { taskID: string } }) {
    return (
        <>
            <h3>DETAILS</h3>
            <div>{params.taskID}</div>
       

        </>
    )
}


