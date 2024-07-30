
import type { Story }  from '../../../../public/data.tsx'

interface Props {
  data: Story[]
}

export default function StoryDetails({params}:{params:{storyID: string}}){
return (
  <>
  <h3>DETAILS</h3>
  <div>{params.storyID}</div>
  </>
)
}


