import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

type DebounceOptions = {
	searchQuery: string;
	delay?: number;
};

export const useDebounce = ({ searchQuery, delay = 500 }: DebounceOptions) => {
	const [debouncedValue, setDebouncedValue] = useState(searchQuery);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(searchQuery);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [searchQuery, delay]);

	return debouncedValue;
};
