import React, { useState } from 'react';
import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { CommonStyles } from '../utils/CommonStyles';
import { moderateScale } from '../utils/Scaling';

const CustomDropdown = props => {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState('');
	const {
		data,
		input,
		label,
		required,
		placeholder,
		style,
		fieldName,
		fieldValue,
		defaultValue,
		value,
		selectTextOnFocus = true,
	} = props;
	const onToggle = () => {
		setOpen(!open);
	};
	const getName = () => {
		if (defaultValue) {
			return data?.find(v => v.id === defaultValue).title;
		}
		if (title) {
			return title;
		}
		return placeholder;
	};
	const onChangeAnswer = item => {
		// input.onChange({ [input.name]: item.id });
		input.onChange(item.id);
		setTitle(item.title);
		setOpen(false);
	};
	const {
		meta: { error, invalid, valid, touched, active },
	} = props;
	const showError = touched && invalid;
	return (
		<View style={[CommonStyles.formGroup, styles.wrapper, { width: '100%' }]}>
			<Text style={CommonStyles.formLabel}>
				{label} {required && <Text style={CommonStyles.markRequired}>*</Text>}
			</Text>
			<TouchableOpacity
				style={CommonStyles.formGroupInput}
				activeOpacity={1}
				onPress={onToggle}>
				<View
					style={[
						CommonStyles.formDropdown,
						{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							position: 'relative',
							flex: 1,
						},
					]}>
					<Text
						style={{
							color: title ? 'black' : style?.textColor,
							fontSize: moderateScale(10),
							paddingRight: style?.paddingRight,
						}}>
						{getName()}
					</Text>
					<View style={{ position: 'absolute', right: 10 }}>
						<Image source={require('../../assets/dropdown_arrow.png')} />
					</View>
				</View>
			</TouchableOpacity>
			{open && selectTextOnFocus && (
				<View style={styles.dropDownList}>
					{data?.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								onPress={() => onChangeAnswer(item)}>
								<View key={index}>
									<Text>{item?.title}</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</View>
			)}
			{showError && <Text style={CommonStyles.errorText}>{error}</Text>}
		</View>
	);
};
const styles = StyleSheet.create({
	wrapper: {
		// overflow: 'hidden',
	},
	dropDownList: {
		position: 'absolute',
		top: '100%',
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		left: 0,
		zIndex: 9999,
		backgroundColor: '#fff',
		width: '100%',
	},
});
export default CustomDropdown;
