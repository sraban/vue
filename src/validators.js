
const regex = /^[#\\w@_-]{8,20}$/
export function isPasswordStrong(value) {
	if (typeof value === 'undefined' || value === null || value === '') {
		return true;
	}
	return regex.test(value)
}

export function numeric(value) {
  if (typeof value === 'undefined' || value === null || value === '') {
    return true
  }
  return /^[0-9]*$/.test(value)
}

export function isNameJoe(value) {
  if (!value) return true;
  return value === "Joe";
}

export function notGmail(value = "") {
  return !value.includes("gmail");
}

export function isEmailAvailable(value) {
  if (value === "") return true;

  /*return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value.length > 10);
    }, 500);
  });*/
}