const formatTime = (time: string): string => {
	const d = new Date(time);
	const hours = d.getHours();
	const minutes = d.getMinutes();
	return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export default formatTime;
