import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTailwind } from 'tailwind-rn/dist';
export interface ButtonCommonProps
  extends Omit<TouchableOpacityProps, 'style'> {
  title: string | React.ReactElement;
  icon?: React.FC<SvgProps>;
  backgroundColor?: string;
  style?: ViewStyle;
}
const ButtonCommon = ({
  title = '',
  icon: Icon,
  backgroundColor = '#5669FF',
  style,
  ...props
}: ButtonCommonProps) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity
      {...props}
      style={[
        tw(
          `w-full min-w-200 justify-center items-center bg-${backgroundColor} py-18 rounded-15`,
        ),
        style,
        styles.shadow,
      ]}>
      {typeof title === 'string' ? (
        <Text style={tw('text-16 font-normal text-#FFFFFF')}>{title}</Text>
      ) : (
        title
      )}
      {Icon && (
        <View style={tw('absolute top-14 bottom-14 right-14')}>
          <Icon />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(ButtonCommon);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
