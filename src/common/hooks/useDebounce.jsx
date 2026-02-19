import { useState, useEffect } from "react";

const useDebounce = (value, delay = 300, minLength = 3) => {
	const [debouncedValue, setDebouncedValue] = useState("");

	useEffect(() => {
		const handler = setTimeout(() => {
			if (value.length >= minLength) {
				setDebouncedValue(value);
			} else {
				setDebouncedValue("");
			}
		}, delay);

		return () => clearTimeout(handler);
	}, [value, delay, minLength]);

	return debouncedValue;
};

export default useDebounce;
