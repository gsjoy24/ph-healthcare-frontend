'use client';
import TSchedule from '@/types/schedule';
import { timeFormatterToText } from '@/utils/TimeFormatterToText';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

type TProps = {
	schedules: TSchedule[];
	setSelectedScheduleIds: React.Dispatch<React.SetStateAction<string[]>>;
	selectedScheduleIds: string[];
};

const MultiScheduleSelector = ({ selectedScheduleIds, schedules, setSelectedScheduleIds }: TProps) => {
	const handleChange = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value }
		} = event;
		setSelectedScheduleIds(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};
	return (
		<FormControl sx={{ m: 1, width: '100%' }}>
			<InputLabel id='demo-multiple-chip-label'>Select slots</InputLabel>
			<Select
				labelId='demo-multiple-chip-label'
				id='demo-multiple-chip'
				sx={{ width: '100%' }}
				multiple
				value={selectedScheduleIds}
				onChange={handleChange}
				input={<OutlinedInput id='select-multiple-chip' label='Select slots' />}
				renderValue={(selected) => {
					const selectedSchedules = schedules.filter((schedule) => selected.includes(schedule.id));
					return (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{selectedSchedules.map((schedule) => (
								<Chip
									key={schedule.id}
									label={`${timeFormatterToText(schedule.startDateTime)} - ${timeFormatterToText(
										schedule.endDateTime
									)}`}
								/>
							))}
						</Box>
					);
				}}
				MenuProps={MenuProps}
			>
				{schedules?.map((schedule: TSchedule) => (
					<MenuItem key={schedule.id} value={schedule.id}>
						{`${timeFormatterToText(schedule.startDateTime)} - ${timeFormatterToText(schedule.endDateTime)}`}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default MultiScheduleSelector;
