import React, { FC } from 'react'
import './style.scss'

const WhishesLines = () => {
	return (
		<div className="whishes-lines">
			<Line direction={DirectionEnum.right} />
			<Line direction={DirectionEnum.left} />
			<Line direction={DirectionEnum.left} />
			<Line direction={DirectionEnum.right} />
			<Line direction={DirectionEnum.left} />
			<Line direction={DirectionEnum.right} />
		</div>
	)
}



type LineType = {
	id: number
	text: string
}


const lines = [
	{
		id: 1,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 2,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 3,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 4,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 5,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 6,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 7,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 8,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 9,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},
	{
		id: 10,
		text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. '
	},

] as Array<LineType>


enum DirectionEnum {
	left = "left",
	right = ""
}
type LinePropsType = {
	direction: DirectionEnum
}
const Line: FC<LinePropsType> = ({ direction }) => {
	return (


		<div className="line">
			{lines.map(line => <p className="line-text" key={line.id}>{line.text}</p>)}
		</div>
	)
}

export default WhishesLines