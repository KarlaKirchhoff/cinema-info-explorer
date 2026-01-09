// src/components/Text.tsx
import { Text as RNText, TextProps } from 'react-native';
import { typography } from '../theme/typography';

type Variant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption';

interface Props extends TextProps {
  variant?: Variant;
}

export function Text_Component({ variant = 'body', style, ...props }: Props) {
  return (
    <RNText
      {...props}
      style={[typography[variant], style]}
    />
  );
}
