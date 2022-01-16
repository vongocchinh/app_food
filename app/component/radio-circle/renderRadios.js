import React, {useState} from 'react';
import {View} from 'react-native';
import CustomRadio from './CustomRadio';

const RenderRadio = props => {
  const {
    choices,
    style,
    input: {name, onChange},
  } = props;
  //   const [choiceDefault, setChoiceDefault] = useState(choices[0]?.Value);
  const [choiceDefault, setChoiceDefault] = useState(null);
  const handleChoice = value => {
    setChoiceDefault(value);
    onChange(value);
  };
  return (
    <View style={{flexDirection: 'row'}}>
      {choices?.map((choice, index) => (
        <CustomRadio
          key={index}
          {...props}
          checked={choiceDefault === choice.Value}
          choice={choice}
          handleChoice={handleChoice}
        />
      ))}
    </View>
  );
};
export default RenderRadio;
