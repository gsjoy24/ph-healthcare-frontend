// create a function that will convert the date to a readable time format, i want hour, minute and am/pm
export const timeFormatterToText = (date: string) => {
	const d = new Date(date);
	const hours = d.getHours();
	const minutes = d.getMinutes();
	const ampm = hours >= 12 ? 'pm' : 'am';
	const hour = hours % 12;
	const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
	return `${hour}:${minutesStr} ${ampm}`;
};
