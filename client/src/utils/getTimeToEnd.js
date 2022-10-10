export default function getTimeToEnd(endTime) {
  const millisecondsToEnd = endTime - Date.now();
  if (millisecondsToEnd <= 0) return '00:00';

  const sec = 1000;
  const min = sec * 60;
  const hour = min * 60;

  const minutes = Math.floor((millisecondsToEnd % hour) / min);
  const seconds = Math.floor((millisecondsToEnd % min) / sec);

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
