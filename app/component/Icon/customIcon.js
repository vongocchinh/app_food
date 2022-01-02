import {Icon} from 'react-native-vector-icons/Ionicons';
import {styleColorIcon} from './../../constant/styleColor';
export const IconIonIcon = () => {
  return (
    <Icon
      style={{marginLeft: 5}}
      name="star"
      color={styleColorIcon.icon}
      size={16}
    />
  );
};
