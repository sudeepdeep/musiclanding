// Convert country name to flag emoji
export function getFlagFromAddress(address = "") {
  const value = address.toLowerCase();

  if (value.includes("argentina"))
    return "https://cdn.countryflags.com/thumbs/argentina/flag-400.png";

  if (value.includes("chile") || value.includes("santiago"))
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/512px-Flag_of_Chile.svg.png";

  if (value.includes("colombia"))
    return "https://img.freepik.com/free-vector/illustration-columbia-flag_53876-27125.jpg";

  if (value.includes("brazil") || value.includes("sp"))
    return "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/512px-Flag_of_Brazil.svg.png";

  if (value.includes("mexico"))
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/512px-Flag_of_Mexico.svg.png";

  return "https://static.vecteezy.com/system/resources/thumbnails/020/662/332/small/earth-icon-logo-illustration-vector.jpg";
}

// Days left until show
export function getCountdown(dateString) {
  const today = new Date();
  const showDate = new Date(dateString);
  const diff = Math.ceil((showDate - today) / (1000 * 60 * 60 * 24));

  if (diff < 0) return "Past";
  if (diff === 0) return "Today";
  if (diff === 1) return "Tomorrow";
  return `${diff} days left`;
}
