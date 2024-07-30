
import type { Story } from '../../../../public/data.tsx'

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


