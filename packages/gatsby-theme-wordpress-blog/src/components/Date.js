import moment from "moment/moment"

const Date = ({ post }) => {
	const { date } = post
	return moment(date).format(`MMMM D, YYYY`)
}

export default Date
