import React, { useState } from 'react';
import { View } from 'react-native';
import CustomRadio from './CustomRadio';

const RenderRadio = props => {
	const { choices, style } = props;
	const [choiceDefault, setChoiceDefault] = useState(choices[0]?.Value);
	const handleChoice = value => {
		setChoiceDefault(value);
	};
	return (
		<View style={style}>
			{choices?.map((choice, index) => (
				<CustomRadio
					key={index}
					{...props}
					status={choiceDefault === choice.Value}
					choice={choice}
					handleChoice={handleChoice}
				/>
			))}
		</View>
	);
};
export default RenderRadio;
