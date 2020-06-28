import moment from "moment/moment"

const Date = ({ date }) => {
	return moment(date).format(`MMMM D, YYYY`)
}

export default Date
